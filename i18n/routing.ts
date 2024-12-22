import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import { LOCALES } from "@/lib/variables";
const locales = LOCALES.map((locale) => locale.code);

export const routing = defineRouting({
  locales: locales,
  defaultLocale: "sl",
  pathnames: {
    "/": "/",
    "/pathnames": {
      en: "/en",
      sl: "/si",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
