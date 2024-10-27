import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { AllLocales, AppConfig } from './utils/AppConfig';

const intlMiddleware = createMiddleware({
  locales: AllLocales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
});

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/:locale/dashboard(.*)',
  '/onboarding(.*)',
  '/:locale/onboarding(.*)',
]);

export default function middleware(
  request: NextRequest,
  event: NextFetchEvent,
) {
  const externalSignInUrl = 'https://account.bargainwale.in';

  if (
    request.nextUrl.pathname.includes('/sign-in') ||
    request.nextUrl.pathname.includes('/sign-up') ||
    isProtectedRoute(request)
  ) {
    return clerkMiddleware((auth, req) => {
      const authObj = auth();

      if (isProtectedRoute(req)) {
        authObj.protect({
          unauthenticatedUrl: externalSignInUrl,
        });
      }

      if (
        authObj.userId &&
        !authObj.orgId &&
        req.nextUrl.pathname.includes('/dashboard') &&
        !req.nextUrl.pathname.endsWith('/organization-selection')
      ) {
        const orgSelection = new URL(
          '/onboarding/organization-selection',
          req.url,
        );
        return NextResponse.redirect(orgSelection);
      }

      return intlMiddleware(req);
    })(request, event);
  }

  return intlMiddleware(request);
}

// Configure matcher to avoid handling static assets
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api|public).*)', // Exclude asset paths
    '/',
  ],
};
