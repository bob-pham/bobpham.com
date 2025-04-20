import NavBar from "@/components/NavBar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        type="image/svg+xml"
        href="/terminal.png"
      />
      <body className="prose h-[40rem] grid column-1 place-items-center w-full bg-zinc-950/[0.96] antialiased bg-grid-white/[0.02] relative overflow-x-hidden overflow-y-scroll z-0 min-h-screen min-w-full column-1 overflow-scroll max-w-full">
        <main className="grid column-1 place-items-center w-full overflow-x-hidden overflow-y-scroll h-full min-h-screen columns-1  min-w-full max-w-full">
          <NavBar className="top-2 z-10" />
          {children}
        </main>
      </body>
    </html>
  );
}
