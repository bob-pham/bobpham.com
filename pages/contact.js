import MenuBar from "../components/MenuBar";

export default function Contact() {
  return (
    <>
      <MenuBar head="Contact"/>
      <main className="grid place-items-center h-screen w-screen">
        <div className="text-center font-montserrat text-white bg-slate-700 border-white border p-10 rounded-xl">
          <div className="md:w-fit w-11/12 rounded-xl p-10 bg-gradient-to-br from-slate-800 to-zinc-700 via-gray-800 animate-gradient-x drop-shadow-sm font-bebasneue text-2xl">
            <h1 className="h-min m-1">Hello, I'm Bob</h1>
            <h1 className="h-min m-1">Firmware Engineer Intern @ Intel</h1>
            <h1 className="h-min m-1">Honours CS Student @ UBC</h1>
          </div>
          <div className="mt-5 ">
            <h1 className="font-bold">Contact Info:</h1>
            <h1>Email: bobbaopham@gmail.com</h1>
            <a href="https://www.linkedin.com/in/bobpham/">
              <h1>LinkedIn: linkedin.com/in/bobpham</h1>
            </a>
            <a href="https://github.com/bob-pham">
              <h1>GitHub: github.com/bob-pham</h1>
            </a>
            <a href="https://bob-pham.github.io/">
              <h1>Website: bob-pham.github.io</h1>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
