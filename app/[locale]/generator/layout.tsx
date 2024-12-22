import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Fonts
import {
    alexBrush,
    dancingScript,
    greatVibes,
    outfit,
    parisienne,
} from "@/lib/fonts";

// Favicon
import Favicon from "@/public/assets/favicon/favicon.ico";

// Vercel Analytics
import { Analytics } from "@vercel/analytics/react";

// Next Intl
import { NextIntlClientProvider } from "next-intl";

// ShadCn
import { Toaster } from "@/components/ui/toaster";

// Components
import { BaseNavbar, BaseFooter } from "@/app/components";

// Contexts
import Providers from "@/contexts/Providers";

// SEO
import { JSONLD, ROOTKEYWORDS } from "@/lib/seo";





export default async function LocaleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main>
            <div className="flex flex-col">{children}</div>
        </main>
    );
}
