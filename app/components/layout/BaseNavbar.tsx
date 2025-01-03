import { useMemo } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Assets
import Logo from "@/public/assets/img/racunomat-logo.svg";

// ShadCn
import { Card } from "@/components/ui/card";

// Components
import { DevDebug, LanguageSelector, ThemeSwitcher } from "@/app/components";

const BaseNavbar = () => {
    const devEnv = useMemo(() => {
        return process.env.NODE_ENV === "development";
    }, []);

    return (
        <header className=" z-[99]">
            <nav>
                <div className="flex rounded-xl bg-white dark:bg-gray-900 flex-wrap justify-between items-center px-5 gap-5">
                    <Link href={"/"}>
                        <Image
                            src={Logo}
                            alt="Invoify Logo"
                            width={190}
                            height={100}
                            loading="eager"
                        />
                    </Link>
                    {/* ? DEV Only */}
                    {devEnv && <DevDebug />}
                    {/* <LanguageSelector /> */}
                    <ThemeSwitcher />
                </div>
            </nav>
        </header>
    );
};

export default BaseNavbar;
