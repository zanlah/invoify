
export default async function GeneratorLayout({
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
