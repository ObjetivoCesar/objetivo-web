import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// Import shared types
import 'next-auth'
import 'next-auth/jwt'

// Determine if we're in development
const isDev = process.env.NODE_ENV === 'development';
const useSecureCookies = false; // Force false for local development

// Base URL for callbacks
const baseUrl = process.env.NEXTAUTH_URL || 
  (isDev ? 'http://localhost:3000' : 'https://' + process.env.VERCEL_URL);

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: "Usuario", type: "text" },
        password: { label: "Contraseña", type: "password" }
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            console.error('Missing credentials')
            return null;
          }

          const adminUser = process.env.ADMIN_USER;
          const adminPassword = process.env.ADMIN_PASSWORD;

          if (
            credentials.email.toString() === adminUser &&
            credentials.password.toString() === adminPassword
          ) {
            return {
              id: '1',
              email: adminUser,
              name: 'César Reyes',
              role: 'admin'
            } as const;
          }

          console.error('Credenciales inválidas');
          return null;
        } catch (error) {
          console.error('Error during authentication:', error)
          return null
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days - match cookie maxAge
    updateAge: 24 * 60 * 60, // 24 hours - how often to update session
  },
  // Ensure we're using the correct base URL
  basePath: '/api/auth',
  callbacks: {
    async jwt({ token, user, account, trigger, session }) {
      // Initial sign in
      if (account && user) {
        token.id = user.id;
        token.role = 'admin'; // Force admin role for all authenticated users
        if (user.name) token.name = user.name;
        if (user.email) token.email = user.email;
      }
      
      // Update token from session if needed (e.g., when using updateSession)
      if (trigger === 'update' && session) {
        token = { ...token, ...session };
      }
      
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        // Safely assign user properties from token
        if (token.sub) session.user.id = token.sub;
        if (token.email) session.user.email = token.email;
        if (token.name) session.user.name = token.name as string;
        if (token.role) session.user.role = token.role as string;
        
        // Ensure name is set
        if (!session.user.name && session.user.email) {
          session.user.name = session.user.email.split('@')[0];
        }
        
        // Ensure role is set (default to 'user' if not provided)
        if (!session.user.role) {
          session.user.role = 'user';
        }
      }
      
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Always redirect to /admin after login
      if (url.startsWith(baseUrl)) {
        return `${baseUrl}/admin`;
      }
      // Handle relative URLs
      if (url.startsWith('/')) {
        return `${baseUrl}${url}`;
      }
      return baseUrl;
    }
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: isDev,
  trustHost: true,
  // Force these settings for development
  useSecureCookies: false, // Force false for development
  cookies: {
    sessionToken: {
      name: 'next-auth.session-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: false, // False for development, true in production with HTTPS
        maxAge: 30 * 24 * 60 * 60, // 30 days
      }
    },
    callbackUrl: {
      name: 'authjs.callback-url',
      options: {
        sameSite: 'lax',
        path: '/',
        secure: false
      }
    },
    csrfToken: {
      name: 'authjs.csrf-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: false
      }
    },
    // Add these for better compatibility
    state: {
      name: 'authjs.state',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: false,
        maxAge: 900 // 15 minutes
      }
    },
    nonce: {
      name: 'authjs.nonce',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: false
      }
    }
  }
})
