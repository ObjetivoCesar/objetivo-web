import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Debug helper function
const logDebug = (message: string, data?: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[DEBUG] ${message}`, data || '');
  }
};

// Configuration
const isDev = process.env.NODE_ENV === 'development';
const useSecureCookies = false; // Force false for local development

// Cookie names - must match NextAuth configuration
const sessionCookieName = 'next-auth.session-token';
const csrfCookieName = 'authjs.csrf-token';
const callbackCookieName = 'authjs.callback-url';

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;

  // Only check session token for protected admin routes
  if (pathname.startsWith('/admin')) {
    // Debug info
    logDebug(`Processing request for: ${pathname}`, {
      cookies: request.cookies.getAll().map(c => c.name),
      hasSessionCookie: request.cookies.has(sessionCookieName),
      hasCsrfCookie: request.cookies.has(csrfCookieName),
      hasCallbackCookie: request.cookies.has(callbackCookieName)
    });

    // Get the session token
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
      secureCookie: useSecureCookies,
      // Explicitly set cookie name to match NextAuth config
      cookieName: sessionCookieName
    });

    logDebug('Session token check', {
      hasToken: !!token,
      token: token ? {
        name: token.name,
        email: token.email,
        expires: token.exp ? new Date(token.exp * 1000).toISOString() : null
      } : null
    });
    if (!token) {
      logDebug('No session token found, redirecting to login');
      const signInUrl = new URL('/auth/signin', request.url);
      signInUrl.searchParams.set('callbackUrl', '/admin');

      const response = NextResponse.redirect(signInUrl);
      response.headers.set('x-middleware-cache', 'no-cache');
      return response;
    }

    logDebug('User is authenticated, allowing access to admin');
    const response = NextResponse.next();
    response.headers.set('x-middleware-cache', 'no-cache');
    return response;
  }

  const response = NextResponse.next();
  response.headers.set('Vary', 'Accept, Accept-Encoding');
  return response;
}

export const config = {
  matcher: [
    '/admin/:path*',
  ],
};
