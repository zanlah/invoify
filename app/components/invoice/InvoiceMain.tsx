"use client";

// RHF
import { useFormContext } from "react-hook-form";

// ShadCn
import { Form } from "@/components/ui/form";

// Components
import { InvoiceActions, InvoiceForm } from "@/app/components";

// Context
import { useInvoiceContext } from "@/contexts/InvoiceContext";

// Types
import { InvoiceType } from "@/types";

const InvoiceMain = () => {
    const { handleSubmit } = useFormContext<InvoiceType>();

    // Get the needed values from invoice context
    const { onFormSubmit } = useInvoiceContext();

    return (
        <>
            <Form {...useFormContext<InvoiceType>()}>
                <form
                    onSubmit={handleSubmit(onFormSubmit, (err) => {
                        console.log(err);
                    })}
                >
                    <div className="grid grid-cols-1 md:grid-cols-[5fr_4fr] gap-2">
                        <InvoiceForm />
                        <InvoiceActions />
                    </div>
                </form>
            </Form>
        </>
    );
};

export default InvoiceMain;
