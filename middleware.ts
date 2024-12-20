import createMiddleware from "next-intl/middleware";
import { LOCALES } from "@/lib/variables";

const locales = LOCALES.map((locale) => locale.code);

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: "sl",

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  localePrefix: "always",
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
