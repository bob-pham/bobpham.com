import NavBar from "@/components/NavBar";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/terminal.png" />
      <div className="grid place-items-center grid-cols-1 text-white mb-16">
        <NavBar className="top-2 z-10" />
        <div className="w-11/12 md:10/12 rounded-3xl mb-16 px-16 pb-16">
          {children}
        </div>
      </div>
    </>
  );
}
