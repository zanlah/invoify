// Components
import { DynamicInvoiceTemplate, Subheading } from "@/app/components";
import { Inter } from "next/font/google";
// Types
import { InvoiceType } from "@/types";

type LivePreviewProps = {
    data: InvoiceType;
};
const inter = Inter({ subsets: ["latin"] });
export default function LivePreview({ data }: LivePreviewProps) {

    return (
        <>
            <Subheading>Predogled:</Subheading>
            <div className="border dark:border-gray-600 rounded-xl my-1">
                <DynamicInvoiceTemplate {...data} />
            </div>
        </>
    );
}
