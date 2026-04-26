import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

// Import types from the shared types file
import 'next-auth';
import 'next-auth/jwt';

interface CredentialsType {
  email: string;
  password: string;
}

export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Usuario', type: 'text' },
        password: { label: 'Contraseña', type: 'password' }
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }

          const adminUser = process.env.ADMIN_USER;
          const adminPassword = process.env.ADMIN_PASSWORD;

          if (
            credentials.email as string === adminUser &&
            credentials.password as string === adminPassword
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
          console.error('Error during authentication:', error);
          return null;
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',
  },
  // Ensure we're using the latest session handling
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role || 'admin'; // Default to 'admin' role for authenticated users
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = (token.role as string) || 'admin'; // Ensure role is always set
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.NEXTAUTH_SECRET,
  trustHost: true
};
