// Components
import { InvoiceMain } from "@/app/components";
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="min-h-screen dark:bg-gray-900">
            {/* Hero Section */}
            <main className="py-16 lg:container px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            Ustvarite profesionalne račune <span className="text-blue-600 dark:text-blue-400">v nekaj sekundah</span>
                        </h1>
                        <p className="text-xl text-gray-600  dark:text-gray-300 mb-8">
                            Preprost, brezplačen in zmogljiv generator računov s podporo QR kod za plačila
                        </p>
                        <Link
                            href="/generator/"
                            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
                        >
                            Napiši račun brezplačno
                        </Link>
                    </div>

                    <div className="mt-12 relative">
                        <Image
                            src="/assets/img/example.png"
                            alt="Demo generatorja računov"
                            width={1200}
                            height={600}
                            className="rounded-lg shadow-2xl dark:shadow-blue-500/10"
                        />
                    </div>
                </div>

                {/* Features Section */}
                <section className="py-20">
                    <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Vse kar potrebujete</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 rounded-lg dark:bg-gray-800">
                            <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">📱</div>
                            <h3 className="text-xl font-semibold mb-2 dark:text-white">QR kode za plačila</h3>
                            <p className="text-gray-600 dark:text-gray-300">Samodejno generirajte QR kode za enostavna mobilna plačila</p>
                        </div>
                        <div className="text-center p-6 rounded-lg dark:bg-gray-800">
                            <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">🚀</div>
                            <h3 className="text-xl font-semibold mb-2 dark:text-white">Takojšen PDF izvoz</h3>
                            <p className="text-gray-600 dark:text-gray-300">Prenesite profesionalne PDF-je z enim klikom</p>
                        </div>
                        <div className="text-center p-6 rounded-lg dark:bg-gray-800">
                            <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">💯</div>
                            <h3 className="text-xl font-semibold mb-2 dark:text-white">100% brezplačno</h3>
                            <p className="text-gray-600 dark:text-gray-300">Brez skritih stroškov ali naročnin</p>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-20 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Kaj pravijo uporabniki</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow dark:shadow-blue-500/5">
                            <p className="text-gray-600 dark:text-gray-300 mb-4">"Ta generator računov mi je prihranil ogromno časa. Funkcija QR kode je odlična!"</p>
                            <div className="font-semibold dark:text-white">- Jana N.</div>
                            <div className="text-gray-500 dark:text-gray-400">Lastnica manjšega podjetja</div>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow dark:shadow-blue-500/5">
                            <p className="text-gray-600 dark:text-gray-300 mb-4">"Preprosto, hitro in profesionalno. Točno to sem potreboval za svoje samostojno delo."</p>
                            <div className="font-semibold dark:text-white">- Marko T.</div>
                            <div className="text-gray-500 dark:text-gray-400">Samostojni oblikovalec</div>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow dark:shadow-blue-500/5">
                            <p className="text-gray-600 dark:text-gray-300 mb-4">"Najboljši brezplačni generator računov, kar sem jih našla. Čista zasnova in enostaven za uporabo!"</p>
                            <div className="font-semibold dark:text-white">- Sara K.</div>
                            <div className="text-gray-500 dark:text-gray-400">Svetovalka</div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 text-center">
                    <h2 className="text-3xl font-bold mb-6 dark:text-white">Ste pripravljeni ustvariti svoj prvi račun?</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Registracija ni potrebna. Začnite takoj ustvarjati profesionalne račune.</p>
                    <Link
                        href="/generator/"
                        className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
                    >
                        Začni zdaj - Brezplačno
                    </Link>
                </section>
            </main>
        </div>
    );
}
