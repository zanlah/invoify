import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { LOCALES } from "@/lib/variables";

export const locales = LOCALES.map((locale) => locale.code);
export const defaultLocale = "sl";

// Create a routing configuration object that can be imported
export const routing = {
  locales,
  defaultLocale,
};

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales: locales,
    defaultLocale: defaultLocale,
    localePrefix: "always",
  });
