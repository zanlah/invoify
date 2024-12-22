// Components
import { InvoiceMain } from "@/app/components";
import Link from 'next/link'
export default function Home() {
    return (
        <main className="py-2 lg:container">
            <Link href="/generator/">Pojdi na generator</Link>
        </main>
    );
}
