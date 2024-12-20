import React, { useMemo } from "react";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
// ShadCn
import { Skeleton } from "@/components/ui/skeleton";

// Types
import { InvoiceType } from "@/types";
interface InvoiceProps extends InvoiceType {
    t?: (key: string) => string;
}

const DynamicInvoiceTemplateSkeleton = () => {
    return <Skeleton className="min-h-[60rem]" />;
};

const DynamicInvoiceTemplate = (props: InvoiceType) => {
    const t = useTranslations("invoiceTemplate");

    // Dynamic template component name
    const templateName = `InvoiceTemplate${props.details.pdfTemplate}`;

    const DynamicInvoice = useMemo(
        () =>
            dynamic<InvoiceProps>(
                () =>
                    import(
                        `@/app/components/templates/invoice-pdf/${templateName}`
                    ),
                {
                    loading: () => <DynamicInvoiceTemplateSkeleton />,
                    ssr: false,
                }
            ),
        [templateName]
    );

    return <DynamicInvoice {...props} t={t} />;
};

export default DynamicInvoiceTemplate;
