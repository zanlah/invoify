"use client";

// ShadCn
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

// Components
import {
    PdfViewer,
    BaseButton,
    NewInvoiceAlert,
    InvoiceLoaderModal,
    InvoiceExportModal,
} from "@/app/components";

// Contexts
import { useInvoiceContext } from "@/contexts/InvoiceContext";

// Icons
import { FileInput, FolderUp, Import, Plus } from "lucide-react";

import { useTranslations } from 'next-intl';

const InvoiceActions = () => {
    const { invoicePdfLoading } = useInvoiceContext();
    const t = useTranslations('actions');
    return (
        <div>
            <Card className="h-auto sticky top-0 px-2 bg-gray-900 border-none">
                <CardHeader>
                    <CardTitle>{t('title')}</CardTitle>
                    <CardDescription>{t('description')}</CardDescription>
                </CardHeader>

                <div className="flex flex-col flex-wrap items-center gap-2">
                    <div className="flex flex-wrap gap-3">
                        {/* Load modal button */}
                        <InvoiceLoaderModal>
                            <BaseButton
                                variant="outline"
                                tooltipLabel={t('loadInvoiceDescription')}
                                disabled={invoicePdfLoading}
                            >
                                <FolderUp />
                                {t('loadInvoice')}
                            </BaseButton>
                        </InvoiceLoaderModal>

                        {/* Export modal button */}
                        <InvoiceExportModal>
                            <BaseButton
                                variant="outline"
                                tooltipLabel={t('exportInvoiceDescription')}
                                disabled={invoicePdfLoading}
                            >
                                <Import />
                                {t('exportInvoice')}
                            </BaseButton>
                        </InvoiceExportModal>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {/* New invoice button */}
                        <NewInvoiceAlert>
                            <BaseButton
                                variant="outline"
                                tooltipLabel={t('newInvoiceDescription')}
                                disabled={invoicePdfLoading}
                            >
                                <Plus />
                                {t('newInvoice')}
                            </BaseButton>
                        </NewInvoiceAlert>

                        {/* Generate pdf button */}
                        <BaseButton
                            type="submit"
                            tooltipLabel={t('generatePdfDescription')}
                            loading={invoicePdfLoading}
                            loadingText={t('generatingInvoice')}
                        >
                            <FileInput />
                            {t('generatePdf')}
                        </BaseButton>
                    </div>

                    <div className="w-full">
                        {/* Live preview and Final pdf */}
                        <PdfViewer />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default InvoiceActions;
