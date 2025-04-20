import NavBar from "@/components/NavBar";
import "../globals.css";
import { Metadata } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid place-items-center grid-cols-1 text-white my-16 min-w-full">
      <link
        rel="icon"
        type="image/svg+xml"
        href="/terminal.png"
      />
      <NavBar className="top-2 z-10" />
      <div className="w-8/12 bg-zinc-900 rounded-3xl m-16 p-16">{children}</div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Bob Pham - Blog Home",
  description: "Bob Pham - Blog Home",
  icons: {
    icon: "/terminal.png",
  },
};

