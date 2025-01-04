import createMiddleware from "next-intl/middleware";
import { LOCALES } from "@/lib/variables";

export default createMiddleware({
  // A list of all locales that are supported
  locales: LOCALES.map((locale) => locale.code),
  defaultLocale: "sl",
  // Always require a locale prefix
  localePrefix: "always",
});

export const config = {
  matcher: [
    // Match all pathnames except for
    // - /api routes
    // - /_next (Next.js internals)
    // - /_vercel (Vercel internals)
    // - /assets (inside /public)
    // - all root files inside /public (e.g. /favicon.ico)
    "/((?!api|_next|_vercel|assets|.*\\..*).*)",
  ],
};
