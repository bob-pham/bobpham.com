import NavBar from "@/components/NavBar";
import "../globals.css";

const components = {
  h1: (props) => (
    <h1 className="text-3xl font-bold text-center my-2">{...props}</h1>
  ),
  h2: (props) => (
    <h2 className="text-2xl font-bold text-center my-2">{...props}</h2>
  ),
  h3: (props) => (
    <h3 className="text-xl font-bold text-center my-2">{...props}</h3>
  ),
  h4: (props) => (
    <h4 className="text-lg font-bold text-center my-2">{...props}</h4>
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid place-items-center grid-cols-1 text-white my-16">
      <NavBar className="top-2 z-10" />
      <div className="w-8/12 bg-zinc-900 rounded-3xl m-16 p-16">{children}</div>
    </div>
  );
}
