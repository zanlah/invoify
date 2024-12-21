import { NextRequest, NextResponse } from "next/server";
import React from "react";
// Chromium
import chromium from "@sparticuz/chromium";

// Helpers
import { getInvoiceTemplate } from "@/lib/helpers";

// Variables
import { CHROMIUM_EXECUTABLE_PATH, ENV, TAILWIND_CDN } from "@/lib/variables";

// Types
import { InvoiceType } from "@/types";

import { createTranslator } from "next-intl";
/**
 * Generate a PDF document of an invoice based on the provided data.
 *
 * @async
 * @param {NextRequest} req - The Next.js request object.
 * @throws {Error} If there is an error during the PDF generation process.
 * @returns {Promise<NextResponse>} A promise that resolves to a NextResponse object containing the generated PDF.
 */
export async function generatePdfService(req: NextRequest) {
  const body: InvoiceType = await req.json();
  const locale: string = "sl";
  const messages = {
    invoice: "Račun",
    billTo: "Račun za",
    invoiceDate: "Datum računa",
    dueDate: "Rok plačila",
    invoiceNumber: "Številka računa",
    item: "Artikel",
    qty: "Količina",
    rate: "Cena",
    amount: "Skupaj",
    subtotal: "Vmesni znesek",
    discount: "Popust",
    tax: "Davek",
    shipping: "Poštnina",
    total: "Skupni znesek",
    totalInWords: "Skupni znesek z besedo",
    additionalNotes: "Dodatne opombe",
    paymentTerms: "Plačilni pogoji",
    paymentAddress: "Plačilo po naslovu",
    signature: "Podpis",
    bankName: "Ime banke",
    accountName: "Ime računa",
    accountNumber: "Številka računa",
    bank: "Banka",
    accountNo: "Številka računa",
    contactInfo: "Če imate vprašanja glede tega računa, nas kontaktirajte.",
    reference: "Referenca",
  };
  const t = createTranslator({ locale, messages });
  // Create a browser instance
  let browser;

  try {
    const ReactDOMServer = (await import("react-dom/server")).default;

    // Get the selected invoice template
    const templateId = body.details.pdfTemplate;
    const InvoiceTemplate = await getInvoiceTemplate(templateId);

    // Read the HTML template from a React component
    const htmlTemplate = ReactDOMServer.renderToStaticMarkup(
      React.createElement(InvoiceTemplate, {
        ...body,
        t: t,
      })
    );

    // Launch the browser in production or development mode depending on the environment
    if (ENV === "production") {
      const puppeteer = await import("puppeteer-core");
      browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(CHROMIUM_EXECUTABLE_PATH),
        headless: true,
        // ignoreHTTPSErrors: true,
      });
    } else if (ENV === "development") {
      const puppeteer = await import("puppeteer");
      browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
        headless: "new",
      });
    }

    if (!browser) {
      throw new Error("Failed to launch browser");
    }

    const page = await browser.newPage();
    console.log("Page opened"); // Debugging log

    // Set the HTML content of the page
    await page.setContent(htmlTemplate, {
      // * "waitUntil" prop makes fonts work in templates
      waitUntil: "networkidle0",
    });
    console.log("Page content set"); // Debugging log

    // Add Tailwind CSS
    await page.addStyleTag({
      url: TAILWIND_CDN,
    });
    console.log("Style tag added"); // Debugging log

    // Generate the PDF
    const pdfBuffer = await page.pdf({
      format: "a4",
      printBackground: true,
    });
    const pdf = Buffer.from(pdfBuffer);
    console.log("PDF generated"); // Debugging log

    for (const page of await browser.pages()) {
      await page.close();
    }

    // Close the Puppeteer browser
    await browser.close();
    console.log("Browser closed"); // Debugging log

    // Create a Blob from the PDF data
    const pdfBlob = new Blob([pdf], { type: "application/pdf" });

    const response = new NextResponse(pdfBlob, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=invoice.pdf",
      },
      status: 200,
    });

    return response;
  } catch (error) {
    console.error(error);

    // Return an error response
    return new NextResponse(`Error generating PDF: \n${error}`, {
      status: 500,
    });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
