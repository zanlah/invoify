"use client";

// ShadCn
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Components
import { BaseButton, SendPdfToEmailModal, Subheading } from "@/app/components";

// Contexts
import { useInvoiceContext } from "@/contexts/InvoiceContext";

// Icons
import {
    BookmarkIcon,
    DownloadCloudIcon,
    Eye,
    Mail,
    MoveLeft,
    Printer,
} from "lucide-react";
import { useTranslations } from "next-intl";
export default function FinalPdf() {
    const {
        pdfUrl,
        removeFinalPdf,
        previewPdfInTab,
        downloadPdf,
        printPdf,
        saveInvoice,
        sendPdfToMail,
    } = useInvoiceContext();

    const t = useTranslations("actions");

    return (
        <>
            <Subheading>{t("finalPdfView")}:</Subheading>
            <div className="flex items-center mb-3">
                <BaseButton
                    variant={"ghost"}
                    size="sm"
                    onClick={removeFinalPdf}
                >
                    <MoveLeft className="w-5 h-5" />
                    {t("backToPreview")}
                </BaseButton>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2 my-1">
                <BaseButton
                    tooltipLabel={t("previewPdfDescription")}
                    onClick={previewPdfInTab}
                    size="sm"
                    variant={"outline"}
                >
                    <Eye className="w-5 h-5" />
                    {t("previewPdf")}
                </BaseButton>
                <BaseButton
                    tooltipLabel={t("downloadPdfDescription")}
                    onClick={downloadPdf}
                    size="sm"
                    variant={"outline"}
                >
                    <DownloadCloudIcon className="w-5 h-5" />
                    {t("downloadPdf")}
                </BaseButton>

                <BaseButton
                    tooltipLabel={t("printInvoiceDescription")}
                    onClick={printPdf}
                    size="sm"
                    variant={"outline"}
                >
                    <Printer className="w-5 h-5" />
                    {t("printInvoice")}
                </BaseButton>

                <BaseButton
                    tooltipLabel={t("saveInvoiceDescription")}
                    onClick={saveInvoice}
                    size="sm"
                    variant={"outline"}
                >
                    <BookmarkIcon className="w-5 h-5" />
                    {t("saveInvoice")}
                </BaseButton>

                {/* <SendPdfToEmailModal sendPdfToMail={sendPdfToMail}>
                    <BaseButton
                        tooltipLabel="Send invoice PDF to mail"
                        size="sm"
                        variant={"outline"}
                    >
                        <Mail className="w-5 h-5" />
                        {t("sendToMail")}
                    </BaseButton>
                </SendPdfToEmailModal>*/}
            </div>
            <AspectRatio ratio={1 / 1.4}>
                <iframe
                    className="h-full w-full rounded-xl"
                    src={`${pdfUrl}#toolbar=0`}
                />
            </AspectRatio>
        </>
    );
}
