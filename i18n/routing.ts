import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { LOCALES } from "@/lib/variables";

export const locales = LOCALES.map((locale) => locale.code);
export const defaultLocale = "sl";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales,
    localePrefix: "always",
  });
