import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
// import { Ratelimit } from "@upstash/ratelimit"; // Uncomment when Redis is configured
// import { Redis } from "@upstash/redis";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/booking(.*)"]);
const isPublicApiRoute = createRouteMatcher(["/api/public(.*)"]);

// Initialize Rate Limiter (Mocked if no keys)
// const ratelimit = new Ratelimit({
//   redis: Redis.fromEnv(),
//   limiter: Ratelimit.slidingWindow(10, "10 s"),
//   analytics: true,
// });

export default clerkMiddleware(async (auth, req) => {
    const response = NextResponse.next();

    // 1. Security Headers (OWASP)
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');

    // Content Security Policy
    const csp = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://clerk.browser.42.io https://*.clerk.accounts.dev https://js.stripe.com https://fatora.io;
      style-src 'self' 'unsafe-inline';
      img-src 'self' blob: data: https://images.unsplash.com https://img.clerk.com;
      font-src 'self';
      connect-src 'self' https://clerk.browser.42.io https://api.clerk.dev https://*.clerk.accounts.dev https://api.stripe.com https://fatora.io https://clerk-telemetry.com https://images.unsplash.com;
      frame-src 'self' https://js.stripe.com;
      worker-src 'self' blob:;
    `.replace(/\s{2,}/g, ' ').trim();

    response.headers.set('Content-Security-Policy', csp);

    // 2. Rate Limiting (Conditional)
    if (isPublicApiRoute(req)) {
        // const ip = req.ip || "127.0.0.1";
        // const { success } = await ratelimit.limit(ip);
        // if (!success) {
        //   return new NextResponse("Too Many Requests", { status: 429 });
        // }
    }

    // 3. Auth Protection
    if (isProtectedRoute(req)) {
        await auth.protect();
    }

    // 4. I18n Direction Injection (basic handling)
    // Check cookie or header for 'NEXT_LOCALE'
    const locale = req.cookies.get('NEXT_LOCALE')?.value || 'en';
    response.headers.set('x-next-locale', locale);

    return response;
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};
