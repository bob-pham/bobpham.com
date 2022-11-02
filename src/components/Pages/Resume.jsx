import MenuBar from "../Home/MenuBar";

import header from "../../assets/images/coopHeader.png";

export default function Resume() {
  return (
    <>
      <main className="grid grid-cols-1 min-h-screen bg-gray-900 animate-gradient-xy overflow-hidden scroll-smooth snap-proximity snap-y">
        <MenuBar />
        <div className="grid place-items-center mt-20">
          <h1 className="font-montserrat text-white text-xl text-center">
            Interactive Resume
          </h1>
          <h3 className="text-center">
            Created Entirely with React + CSS! Identical to my actual resume!
          </h3>
          <h3 className="font-montserrat text-green-500 text-lg mb-5">
            Click around!
          </h3>
        </div>
        <div className="grid place-self-center place-items-center w-11/12 overflow-scroll mt-5  text-[14px]">
          <article className="place-self-center bg-white w-[794px] h-[1123px] pt-5 z-0">
            <div className="flex justify-end w-full px-10">
              <img className="w-3/4 " src={header} />
            </div>
            <div className="flex flex-col font-serif text-black px-[80px] w-full">
              <div className="flex w-full">
                <div className="w-5/12 justify-self-start">
                  <h1 className="text-4xl font-bold">Bob Pham</h1>
                  <p className="text-left">
                    <strong>Email:</strong> bobbaopham@gmail.com
                  </p>
                  <p className="text-left">
                    <strong>Phone:</strong> (604)-352-2975
                  </p>
                  <h2 className="font-bold text-xl">Education</h2>
                </div>
                <div className="w-7/12 justify-self-end mt-4 overflow-visible">
                  <a href="https://www.linkedin.com/in/bobpham" target="_">
                    <p className="text-right ">
                      <strong>Linkedin:</strong>{" "}
                      https://www.linkedin.com/in/bobpham
                    </p>
                  </a>
                  <a href="/">
                    <p className="text-right">
                      <strong>Website:</strong> https://bob-pham.github.io/
                    </p>
                  </a>
                  <a href="https://github.com/bob-pham" target="_">
                    <p className="text-right">
                      <strong>Github:</strong> https://github.com/bob-pham
                    </p>
                  </a>
                </div>
              </div>
              <div className="divider bg-black h-[2px] m-0"></div>
              <div className="flex w-full mt-0">
                <div className="flex w-full">
                  <p className="justify-self-start w-10/12">
                    <strong>University of British Columbia</strong> - Vancouver,
                    BC
                  </p>
                  <strong className="justify-self-end text-right w-6/12">
                    Expected Graduation: May 2025
                  </strong>
                </div>
              </div>
              <div className="w-full">
                <ul className="list-disc px-4 m-0 leading-snug">
                  <li>
                    3rd Year Bachelor of Science,{" "}
                    <strong>Honours Computer Science</strong>
                  </li>
                  <li>
                    4.1 GPA (87%) Overall, 4.33 GPA (90%) Computer Science (4.33
                    Scale)
                  </li>
                  <li>
                    Relevant courses: Data Structures and Algorithms, Software
                    Design, Computer Systems
                  </li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold text-xl m-0">Technical Skills</h2>
                <div className="divider bg-black h-[2px] m-0"></div>
                <div className=" leading-5">
                  <h3 className="font-bold">Programming Languages:</h3>
                  <p>
                    Assembly, Bash/Zsh, C, C++, C#, Go*, HTML + CSS, Java,
                    JavaScript, LaTeX, Lua*, Python, R, Racket, Rust*, SQL,
                    TypeScript
                  </p>
                  <h3 className="font-bold">
                    Frameworks, Engines, Libraries and Databases:
                  </h3>
                  <p>
                    Angular*, Bootstrap, Django, Flask, GraphQL*, Image Magick,
                    JUnit, MongoDB*, MySQL*, Next.js*, Node.js*, OpenCV*, React,
                    React Native*, TailwindCSS, Three.js, Unity
                  </p>
                  <h3 className="font-bold">
                    Developement Tools and Environments
                  </h3>
                  <p className="mb-0">
                    Android Studio, CMake, Git/GitHub, IntelliJ IDEA, Linux*,
                    Vim, Visual Studio, VSCode, Vite, Webpack*
                  </p>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="flex w-full">
                  <h2 className="w-1/2 font-bold text-xl m-0 justify-self-start">
                    Experience
                  </h2>
                  <p className="w-1/2 m-0 text-right justify-self-end text-[12px]">
                    *Currently Acquiring
                  </p>
                </div>
                <div className="divider bg-black h-[2px] m-0"></div>
                <div className="flex m-0">
                  <strong className="w-1/2 text-left justify-self-start ">
                    Intel - Firmware Engineer Intern
                  </strong>
                  <p className="w-1/2 text-right justify-self-end">
                    Sep 2022 - Present
                  </p>
                </div>
                <ul className="leading-4 list-disc px-4">
                  <li>
                    Developing microcode using <strong>Assembly</strong> and{" "}
                    <strong>C</strong> for custom security HW block for next
                    generation Infrastructure Processing Units (IPU’s) as part
                    of the Ethernet Products Group (EPG)
                  </li>
                  <li>
                    Developing system test suites and scripts using{" "}
                    <strong>Python</strong> for new and previous untested
                    functionality
                  </li>
                </ul>
                <div className="flex m-0">
                  <strong className="w-3/4 text-left justify-self-start ">
                    Product Repurposing Solutions - Technical Assistant
                  </strong>
                  <p className="w-1/4 text-right justify-self-end">
                    Jun 2021 - Aug 2021
                  </p>
                </div>
                <ul className="leading-4 list-disc px-4">
                  <li>
                    Project leader of the computer repair and refurbish process,
                    contributing to shipping and receiving, inventory
                    management, warehouse organization, and desktop and laptop
                    repair
                  </li>
                  <li>
                    Restructured laptop repair infrastructure and logistics,
                    increasing productivity by <strong>200%</strong>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold text-xl m-0">Technical Projects</h2>
                <div className="divider bg-black h-[2px] m-0"></div>
                <div className="flex m-0">
                  <div className="flex w-full">
                    <strong className="w-3/4 text-left justify-self-start ">
                      Benten - C++
                    </strong>
                    <p className="w-1/4 text-right justify-self-end">
                      Sep 2022 - Present
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <p>Multithreaded CLI Image Editor</p>
                  <ul className="list-disc leading-4 px-4">
                    <li>
                      Isolates areas by similar colour or shape using BFS and
                      edge-detection algorithms for parallel processing
                    </li>
                    <li>
                      Safeguards against race conditions and deadlocks using
                      mutexes and semaphores
                    </li>
                    <li>
                      Edits and saves images into 10 complex predefined styles
                      using Image Magick library
                    </li>
                  </ul>
                </div>
                <div className="flex m-0">
                  <div className="flex w-full">
                    <strong className="w-3/4 text-left justify-self-start ">
                      Cornucopia - Python, Django, OpenCV, JavaScript, React
                    </strong>
                    <p className="w-1/4 text-right justify-self-end">
                      May - Jul 2022
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <p>
                    Full-stack web app that reduces food waste by scanning
                    grocery receipts to manage kitchen pantries
                  </p>
                  <ul className="list-disc leading-4 px-4">
                    <li>
                      Notifies users of food recalls using periodic API calls to
                      government institutions and a web scraper developed with
                      Beautiful Soup
                    </li>
                    <li>
                      Grocery receipt image manipulation and text recognition
                      accomplished with <strong>OpenCV</strong>and{" "}
                      <strong>PyTesseract</strong>
                    </li>
                    <li>
                      Developed custom unit testing framework to assess accuracy
                      of text parsing and filtering algorithms
                    </li>
                    <li>
                      Backend logic managed with <strong>Django</strong>, user
                      data stored in <strong>SQL</strong> database, and frontend
                      created with <strong>React</strong>
                    </li>
                  </ul>
                </div>
                <div className="flex m-0">
                  <div className="flex w-full">
                    <strong className="w-3/4 text-left justify-self-start ">
                      Hercules - Java, Android, Android Studio
                    </strong>
                    <p className="w-1/4 text-right justify-self-end">
                      Jan 2022
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <p>
                    Android app which incentivizes healthy living by gamifying
                    healthy habits
                  </p>
                  <ul className="list-disc leading-4 px-4">
                    <li>
                      Developed backend systems managing in-game currency,
                      experience, item-inventory, item-shop, quests, and
                      questline systems using <strong>Java</strong>
                    </li>
                    <li>
                      Architected algorithm that encourages continuous user
                      progress by rewarding users in-game experience and
                      currency based on consistency in questline completion
                    </li>
                    <li>
                      Graphical user interface implemented using built-in
                      <strong> Android Studio</strong> tools and{" "}
                      <strong>XML</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="place-self-center w-3/4 my-20">
          <div className="mockup-code">
            <pre data-prefix="1">
              <code>{'import MenuBar from "../Home/MenuBar";'}</code>
            </pre>
            <pre data-prefix="2">
              <code>{""}</code>
            </pre>
            <pre data-prefix="3">
              <code>
                {'import header from "../../assets/images/coopHeader.png";'}
              </code>
            </pre>
            <pre data-prefix="4">
              <code>{""}</code>
            </pre>
            <pre data-prefix="5">
              <code>{"export default function Resume() {"}</code>
            </pre>
            <pre data-prefix="6">
              <code>{"  return ("}</code>
            </pre>
            <pre data-prefix="7">
              <code>{"    <>"}</code>
            </pre>
            <pre data-prefix="8">
              <code>
                {
                  '      <main className="grid grid-cols-1 min-h-screen bg-gray-900 animate-gradient-xy overflow-hidden scroll-smooth snap-proximity snap-y">'
                }
              </code>
            </pre>
            <pre data-prefix="9">
              <code>{"        <MenuBar />"}</code>
            </pre>
            <pre data-prefix="10">
              <code>
                {'        <div className="grid place-items-center mt-20">'}
              </code>
            </pre>
            <pre data-prefix="11">
              <code>
                {
                  '          <h1 className="font-montserrat text-white text-xl text-center">'
                }
              </code>
            </pre>
            <pre data-prefix="12">
              <code>{"            Interactive Resume"}</code>
            </pre>
            <pre data-prefix="13">
              <code>{"          </h1>"}</code>
            </pre>
            <pre data-prefix="14">
              <code>{"          <h3>"}</code>
            </pre>
            <pre data-prefix="15">
              <code>
                {
                  "            Created Entirely with React + CSS! Identical to my actual resume!"
                }
              </code>
            </pre>
            <pre data-prefix="16">
              <code>{"          </h3>"}</code>
            </pre>
            <pre data-prefix="17">
              <code>
                {
                  '          <h3 className="font-montserrat text-green-500 text-lg mb-5">'
                }
              </code>
            </pre>
            <pre data-prefix="18">
              <code>{"            Click around!"}</code>
            </pre>
            <pre data-prefix="19">
              <code>{"          </h3>"}</code>
            </pre>
            <pre data-prefix="20">
              <code>{"        </div>"}</code>
            </pre>
            <pre data-prefix="21">
              <code>
                {
                  '        <div className="grid place-self-center place-items-center w-11/12 overflow-scroll mt-5  text-[14px]">'
                }
              </code>
            </pre>
            <pre data-prefix="22">
              <code>
                {
                  '          <article className="place-self-center bg-white w-[794px] h-[1123px] pt-5 z-0">'
                }
              </code>
            </pre>
            <pre data-prefix="23">
              <code>
                {'            <div className="flex justify-end w-full px-10">'}
              </code>
            </pre>
            <pre data-prefix="24">
              <code>
                {'              <img className="w-3/4 " src={header} />'}
              </code>
            </pre>
            <pre data-prefix="25">
              <code>{"            </div>"}</code>
            </pre>
            <pre data-prefix="26">
              <code>
                {
                  '            <div className="flex flex-col font-serif text-black px-[80px] w-full">'
                }
              </code>
            </pre>
            <pre data-prefix="27">
              <code>{'              <div className="flex w-full">'}</code>
            </pre>
            <pre data-prefix="28">
              <code>
                {'                <div className="w-5/12 justify-self-start">'}
              </code>
            </pre>
            <pre data-prefix="29">
              <code>
                {
                  '                  <h1 className="text-4xl font-bold">Bob Pham</h1>'
                }
              </code>
            </pre>
            <pre data-prefix="30">
              <code>{'                  <p className="text-left">'}</code>
            </pre>
            <pre data-prefix="31">
              <code>
                {
                  "                    <strong>Email:</strong> bobbaopham@gmail.com"
                }
              </code>
            </pre>
            <pre data-prefix="32">
              <code>{"                  </p>"}</code>
            </pre>
            <pre data-prefix="33">
              <code>{'                  <p className="text-left">'}</code>
            </pre>
            <pre data-prefix="34">
              <code>
                {"                    <strong>Phone:</strong> (604)-352-2975"}
              </code>
            </pre>
            <pre data-prefix="35">
              <code>{"                  </p>"}</code>
            </pre>
            <pre data-prefix="36">
              <code>
                {
                  '                  <h2 className="font-bold text-xl">Education</h2>'
                }
              </code>
            </pre>
            <pre data-prefix="37">
              <code>{"                </div>"}</code>
            </pre>
            <pre data-prefix="38">
              <code>
                {
                  '                <div className="w-7/12 justify-self-end mt-4 overflow-visible">'
                }
              </code>
            </pre>
            <pre data-prefix="39">
              <code>
                {
                  '                  <a href="https://www.linkedin.com/in/bobpham" target="_">'
                }
              </code>
            </pre>
            <pre data-prefix="40">
              <code>{'                    <p className="text-right ">'}</code>
            </pre>
            <pre data-prefix="41">
              <code>
                {'                      <strong>Linkedin:</strong>{" "}'}
              </code>
            </pre>
            <pre data-prefix="42">
              <code>
                {"                      https://www.linkedin.com/in/bobpham"}
              </code>
            </pre>
            <pre data-prefix="43">
              <code>{"                    </p>"}</code>
            </pre>
            <pre data-prefix="44">
              <code>{"                  </a>"}</code>
            </pre>
            <pre data-prefix="45">
              <code>{'                  <a href="/">'}</code>
            </pre>
            <pre data-prefix="46">
              <code>{'                    <p className="text-right">'}</code>
            </pre>
            <pre data-prefix="47">
              <code>
                {
                  "                      <strong>Website:</strong> https://bob-pham.github.io/"
                }
              </code>
            </pre>
            <pre data-prefix="48">
              <code>{"                    </p>"}</code>
            </pre>
            <pre data-prefix="49">
              <code>{"                  </a>"}</code>
            </pre>
            <pre data-prefix="50">
              <code>
                {
                  '                  <a href="https://github.com/bob-pham" target="_">'
                }
              </code>
            </pre>
            <pre data-prefix="51">
              <code>{'                    <p className="text-right">'}</code>
            </pre>
            <pre data-prefix="52">
              <code>
                {
                  "                      <strong>Github:</strong> https://github.com/bob-pham"
                }
              </code>
            </pre>
            <pre data-prefix="53">
              <code>{"                    </p>"}</code>
            </pre>
            <pre data-prefix="54">
              <code>{"                  </a>"}</code>
            </pre>
            <pre data-prefix="55">
              <code>{"                </div>"}</code>
            </pre>
            <pre data-prefix="56">
              <code>{"              </div>"}</code>
            </pre>
            <pre data-prefix="57">
              <code>
                {
                  '              <div className="divider bg-black h-[2px] m-0"></div>'
                }
              </code>
            </pre>
            <pre data-prefix="58">
              <code>{'              <div className="flex w-full mt-0">'}</code>
            </pre>
            <pre data-prefix="59">
              <code>{'                <div className="flex w-full">'}</code>
            </pre>
            <pre data-prefix="60">
              <code>
                {'                  <p className="justify-self-start w-10/12">'}
              </code>
            </pre>
            <pre data-prefix="61">
              <code>
                {
                  "                    <strong>University of British Columbia</strong> - Vancouver,"
                }
              </code>
            </pre>
            <pre data-prefix="62">
              <code>{"                    BC"}</code>
            </pre>
            <pre data-prefix="63">
              <code>{"                  </p>"}</code>
            </pre>
            <pre data-prefix="64">
              <code>
                {
                  '                  <strong className="justify-self-end text-right w-6/12">'
                }
              </code>
            </pre>
            <pre data-prefix="65">
              <code>{"                    Expected Graduation: May 2025"}</code>
            </pre>
            <pre data-prefix="66">
              <code>{"                  </strong>"}</code>
            </pre>
            <pre data-prefix="67">
              <code>{"                </div>"}</code>
            </pre>
            <pre data-prefix="68">
              <code>{"              </div>"}</code>
            </pre>
            <pre data-prefix="69">
              <code>{'              <div className="w-full">'}</code>
            </pre>
            <pre data-prefix="70">
              <code>
                {
                  '                <ul className="list-disc px-4 m-0 leading-snug">'
                }
              </code>
            </pre>
            <pre data-prefix="71">
              <code>{"                  <li>"}</code>
            </pre>
            <pre data-prefix="72">
              <code>
                {'                    3rd Year Bachelor of Science,{" "}'}
              </code>
            </pre>
            <pre data-prefix="73">
              <code>
                {
                  "                    <strong>Honours Computer Science</strong>"
                }
              </code>
            </pre>
            <pre data-prefix="74">
              <code>{"                  </li>"}</code>
            </pre>
            <pre data-prefix="75">
              <code>{"                  <li>"}</code>
            </pre>
            <pre data-prefix="76">
              <code>
                {
                  "                    4.1 GPA (87%) Overall, 4.33 GPA (90%) Computer Science (4.33"
                }
              </code>
            </pre>
            <pre data-prefix="77">
              <code>{"                    Scale)"}</code>
            </pre>
            <pre data-prefix="78">
              <code>{"                  </li>"}</code>
            </pre>
            <pre data-prefix="79">
              <code>{"                  <li>"}</code>
            </pre>
            <pre data-prefix="80">
              <code>
                {
                  "                    Relevant courses: Data Structures and Algorithms, Software"
                }
              </code>
            </pre>
            <pre data-prefix="81">
              <code>{"                    Design, Computer Systems"}</code>
            </pre>
            <pre data-prefix="82">
              <code>{"                  </li>"}</code>
            </pre>
            <pre data-prefix="83">
              <code>{"                </ul>"}</code>
            </pre>
            <pre data-prefix="84">
              <code>{"              </div>"}</code>
            </pre>
            <pre data-prefix="85">
              <code>{'              <div className="flex flex-col">'}</code>
            </pre>
            <pre data-prefix="86">
              <code>
                {
                  '                <h2 className="font-bold text-xl m-0">Technical Skills</h2>'
                }
              </code>
            </pre>
            <pre data-prefix="87">
              <code>
                {
                  '                <div className="divider bg-black h-[2px] m-0"></div>'
                }
              </code>
            </pre>
            <pre data-prefix="88">
              <code>{'                <div className=" leading-5">'}</code>
            </pre>
            <pre data-prefix="89">
              <code>
                {
                  '                  <h3 className="font-bold">Programming Languages:</h3>'
                }
              </code>
            </pre>
            <pre data-prefix="90">
              <code>{"                  <p>"}</code>
            </pre>
            <pre data-prefix="91">
              <code>
                {
                  "                    Assembly, Bash/Zsh, C, C++, C#, Go*, HTML + CSS, Java,"
                }
              </code>
            </pre>
            <pre data-prefix="92">
              <code>
                {
                  "                    JavaScript, LaTeX, Lua*, Python, R, Racket, Rust*, SQL,"
                }
              </code>
            </pre>
            <pre data-prefix="93">
              <code>{"                    TypeScript"}</code>
            </pre>
            <pre data-prefix="94">
              <code>{"                  </p>"}</code>
            </pre>
            <pre data-prefix="95">
              <code>{'                  <h3 className="font-bold">'}</code>
            </pre>
            <pre data-prefix="96">
              <code>
                {
                  "                    Frameworks, Engines, Libraries and Databases:"
                }
              </code>
            </pre>
            <pre data-prefix="97">
              <code>{"                  </h3>"}</code>
            </pre>
            <pre data-prefix="98">
              <code>{"                  <p>"}</code>
            </pre>
            <pre data-prefix="99">
              <code>
                {
                  "                    Angular*, Bootstrap, Django, Flask, GraphQL*, Image Magick,"
                }
              </code>
            </pre>
            <pre data-prefix="100">
              <code>
                {
                  "                    JUnit, MongoDB*, MySQL*, Next.js*, Node.js*, OpenCV*, React,"
                }
              </code>
            </pre>
            <pre data-prefix="101">
              <code>
                {
                  "                    React Native*, TailwindCSS, Three.js, Unity"
                }
              </code>
            </pre>
            <pre data-prefix="102">
              <code>{"                  </p>"}</code>
            </pre>
            <pre data-prefix="103">
              <code>{'                  <h3 className="font-bold">'}</code>
            </pre>
            <pre data-prefix="104">
              <code>
                {"                    Developement Tools and Environments"}
              </code>
            </pre>
            <pre data-prefix="105">
              <code>{"                  </h3>"}</code>
            </pre>
            <pre data-prefix="106">
              <code>{'                  <p className="mb-0">'}</code>
            </pre>
            <pre data-prefix="107">
              <code>
                {
                  "                    Android Studio, CMake, Git/GitHub, IntelliJ IDEA, Linux*,"
                }
              </code>
            </pre>
            <pre data-prefix="108">
              <code>
                {
                  "                    Vim, Visual Studio, VSCode, Vite, Webpack*"
                }
              </code>
            </pre>
            <pre data-prefix="109">
              <code>{"                  </p>"}</code>
            </pre>
            <pre data-prefix="110">
              <code>{"                </div>"}</code>
            </pre>
            <pre data-prefix="111">
              <code>{"              </div>"}</code>
            </pre>
            <pre data-prefix="112">
              <code>{'              <div className="flex flex-col ">'}</code>
            </pre>
            <pre data-prefix="113">
              <code>{'                <div className="flex w-full">'}</code>
            </pre>
            <pre data-prefix="114">
              <code>
                {
                  '                  <h2 className="w-1/2 font-bold text-xl m-0 justify-self-start">'
                }
              </code>
            </pre>
            <pre data-prefix="115">
              <code>{"                    Experience"}</code>
            </pre>
            <pre data-prefix="116">
              <code>{"                  </h2>"}</code>
            </pre>
            <pre data-prefix="117">
              <code>
                {
                  '                  <p className="w-1/2 m-0 text-right justify-self-end text-[12px]">'
                }
              </code>
            </pre>
            <pre data-prefix="118">
              <code>{"                    *Currently Acquiring"}</code>
            </pre>
            <pre data-prefix="119">
              <code>{"                  </p>"}</code>
            </pre>
            <pre data-prefix="120">
              <code>{"                </div>"}</code>
            </pre>
            <pre data-prefix="121">
              <code>
                {
                  '                <div className="divider bg-black h-[2px] m-0"></div>'
                }
              </code>
            </pre>
            <pre data-prefix="122">
              <code>{'                <div className="flex m-0">'}</code>
            </pre>
            <pre data-prefix="123">
              <code>
                {
                  '                  <strong className="w-1/2 text-left justify-self-start ">'
                }
              </code>
            </pre>
            <pre data-prefix="124">
              <code>
                {"                    Intel - Firmware Engineer Intern"}
              </code>
            </pre>
            <pre data-prefix="125">
              <code>{"                  </strong>"}</code>
            </pre>
            <pre data-prefix="126">
              <code>
                {
                  '                  <p className="w-1/2 text-right justify-self-end">'
                }
              </code>
            </pre>
            <pre data-prefix="127">
              <code>{"                    Sep 2022 - Present"}</code>
            </pre>
            <pre data-prefix="128">
              <code>{"                  </p>"}</code>
            </pre>
            <pre data-prefix="129">
              <code>{"                </div>"}</code>
            </pre>
            <pre data-prefix="130">
              <code>
                {'                <ul className="leading-4 list-disc px-4">'}
              </code>
            </pre>
            <pre data-prefix="131">
              <code>{"                  <li>"}</code>
            </pre>
            <pre data-prefix="132">
              <code>
                {
                  '                    Developing microcode using <strong>Assembly</strong> and{" "}'
                }
              </code>
            </pre>
            <pre data-prefix="133">
              <code>
                {
                  "                    <strong>C</strong> for custom security HW block for next"
                }
              </code>
            </pre>
            <pre data-prefix="134">
              <code>
                {
                  "                    generation Infrastructure Processing Units (IPU’s) as part"
                }
              </code>
            </pre>
            <pre data-prefix="135">
              <code>
                {"                    of the Ethernet Products Group (EPG)"}
              </code>
            </pre>
            <pre data-prefix="136">
              <code>{"                  </li>"}</code>
            </pre>
            <pre data-prefix="137">
              <code>{"                  <li>"}</code>
            </pre>
            <pre data-prefix="138">
              <code>
                {
                  '                    Developing system test suites and scripts using{" "}'
                }
              </code>
            </pre>
            <pre data-prefix="139">
              <code>
                {
                  "                    <strong>Python</strong> for new and previous untested"
                }
              </code>
            </pre>
            <pre data-prefix="140">
              <code>{"                    functionality"}</code>
            </pre>
            <pre data-prefix="141">
              <code>{"                  </li>"}</code>
            </pre>
            <pre data-prefix="142">
              <code>{"                </ul>"}</code>
            </pre>
            <pre data-prefix="143">
              <code>{'                <div className="flex m-0">'}</code>
            </pre>
            <pre data-prefix="144">
              <code>
                {
                  '                  <strong className="w-3/4 text-left justify-self-start ">'
                }
              </code>
            </pre>
            <pre data-prefix="145">
              <code>
                {
                  "                    Product Repurposing Solutions - Technical Assistant"
                }
              </code>
            </pre>
            <pre data-prefix="146">
              <code>{"                  </strong>"}</code>
            </pre>
            <pre data-prefix="147">
              <code>
                {
                  '                  <p className="w-1/4 text-right justify-self-end">'
                }
              </code>
            </pre>
            <pre data-prefix="148">
              <code>{"                    Jun 2021 - Aug 2021"}</code>
            </pre>
            <pre data-prefix="149">
              <code>{"                  </p>"}</code>
            </pre>
            <pre data-prefix="150">
              <code>{"                </div>"}</code>
            </pre>
            <pre data-prefix="151">
              <code>
                {'                <ul className="leading-4 list-disc px-4">'}
              </code>
            </pre>
            <pre data-prefix="152">
              <code>{"                  <li>"}</code>
            </pre>
            <pre data-prefix="153">
              <code>
                {
                  "                    Project leader of the computer repair and refurbish process,"
                }
              </code>
            </pre>
            <pre data-prefix="154">
              <code>
                {
                  "                    contributing to shipping and receiving, inventory"
                }
              </code>
            </pre>
            <pre data-prefix="155">
              <code>
                {
                  "                    management, warehouse organization, and desktop and laptop"
                }
              </code>
            </pre>
            <pre data-prefix="156">
              <code>{"                    repair"}</code>
            </pre>
            <pre data-prefix="157">
              <code>{"                  </li>"}</code>
            </pre>
            <pre data-prefix="158">
              <code>{"                  <li>"}</code>
            </pre>
            <pre data-prefix="159">
              <code>
                {
                  "                    Restructured laptop repair infrastructure and logistics,"
                }
              </code>
            </pre>
            <pre data-prefix="160">
              <code>
                {
                  "                    increasing productivity by <strong>200%</strong>"
                }
              </code>
            </pre>
            <pre data-prefix="161">
              <code>{"                  </li>"}</code>
            </pre>
            <pre data-prefix="162">
              <code>{"                </ul>"}</code>
            </pre>
            <pre data-prefix="163">
              <code>{"              </div>"}</code>
            </pre>
            <pre data-prefix="164">
              <code>{'              <div className="flex flex-col">'}</code>
            </pre>
            <pre data-prefix="165">
              <code>
                {
                  '                <h2 className="font-bold text-xl m-0">Technical Projects</h2>'
                }
              </code>
            </pre>
            <pre data-prefix="166">
              <code>
                {
                  '                <div className="divider bg-black h-[2px] m-0"></div>'
                }
              </code>
            </pre>
            <pre data-prefix="167">
              <code>{'                <div className="flex m-0">'}</code>
            </pre>
            <pre data-prefix="168">
              <code>{'                  <div className="flex w-full">'}</code>
            </pre>
            <pre data-prefix="169">
              <code>
                {
                  '                    <strong className="w-3/4 text-left justify-self-start ">'
                }
              </code>
            </pre>
            <pre data-prefix="170">
              <code>{"                      Benten - C++"}</code>
            </pre>
            <pre data-prefix="171">
              <code>{"                    </strong>"}</code>
            </pre>
            <pre data-prefix="172">
              <code>
                {
                  '                    <p className="w-1/4 text-right justify-self-end">'
                }
              </code>
            </pre>
            <pre data-prefix="173">
              <code>{"                      Sep 2022 - Present"}</code>
            </pre>
            <pre data-prefix="174">
              <code>{"                    </p>"}</code>
            </pre>
            <pre data-prefix="175">
              <code>{"                  </div>"}</code>
            </pre>
            <pre data-prefix="176">
              <code>{"                </div>"}</code>
            </pre>
            <pre data-prefix="177">
              <code>{'                <div className="w-full">'}</code>
            </pre>
            <pre data-prefix="178">
              <code>
                {"                  <p>Multithreaded CLI Image Editor</p>"}
              </code>
            </pre>
            <pre data-prefix="179">
              <code>
                {'                  <ul className="list-disc leading-4 px-4">'}
              </code>
            </pre>
            <pre data-prefix="180">
              <code>{"                    <li>"}</code>
            </pre>
            <pre data-prefix="181">
              <code>
                {
                  "                      Isolates areas by similar colour or shape using BFS and"
                }
              </code>
            </pre>
            <pre data-prefix="182">
              <code>
                {
                  "                      edge-detection algorithms for parallel processing"
                }
              </code>
            </pre>
            <pre data-prefix="183">
              <code>{"                    </li>"}</code>
            </pre>
            <pre data-prefix="184">
              <code>{"                    <li>"}</code>
            </pre>
            <pre data-prefix="185">
              <code>
                {
                  "                      Safeguards against race conditions and deadlocks using"
                }
              </code>
            </pre>
            <pre data-prefix="186">
              <code>{"                      mutexes and semaphores"}</code>
            </pre>
            <pre data-prefix="187">
              <code>{"                    </li>"}</code>
            </pre>
            <pre data-prefix="188">
              <code>{"                    <li>"}</code>
            </pre>
            <pre data-prefix="189">
              <code>
                {
                  "                      Edits and saves images into 10 complex predefined styles"
                }
              </code>
            </pre>
            <pre data-prefix="190">
              <code>{"                      using Image Magick library"}</code>
            </pre>
            <pre data-prefix="191">
              <code>{"                    </li>"}</code>
            </pre>
            <pre data-prefix="192">
              <code>{"                  </ul>"}</code>
            </pre>
            <pre data-prefix="193">
              <code>{"                </div>"}</code>
            </pre>
            <pre data-prefix="194">
              <code>{'                <div className="flex m-0">'}</code>
            </pre>
            <pre data-prefix="195">
              <code>{'                  <div className="flex w-full">'}</code>
            </pre>
            <pre data-prefix="196">
              <code>
                {
                  '                    <strong className="w-3/4 text-left justify-self-start ">'
                }
              </code>
            </pre>
            <pre data-prefix="197">
              <code>
                {
                  "                      Cornucopia - Python, Django, OpenCV, JavaScript, React"
                }
              </code>
            </pre>
            <pre data-prefix="198">
              <code>{"                    </strong>"}</code>
            </pre>
            <pre data-prefix="199">
              <code>
                {
                  '                    <p className="w-1/4 text-right justify-self-end">'
                }
              </code>
            </pre>
            <pre data-prefix="200">
              <code>{"                      May - Jul 2022"}</code>
            </pre>
            <pre data-prefix="201">
              <code>{"                    </p>"}</code>
            </pre>
            <pre data-prefix="202">
              <code>{"                  </div>"}</code>
            </pre>
            <pre data-prefix="203">
              <code>{"                </div>"}</code>
            </pre>
            <pre data-prefix="204">
              <code>{'                <div className="w-full">'}</code>
            </pre>
            <pre data-prefix="205">
              <code>{"                  <p>"}</code>
            </pre>
            <pre data-prefix="206">
              <code>
                {
                  "                    Full-stack web app that reduces food waste by scanning"
                }
              </code>
            </pre>
            <pre data-prefix="207">
              <code>
                {
                  "                    grocery receipts to manage kitchen pantries"
                }
              </code>
            </pre>
            <pre data-prefix="208">
              <code>{"                  </p>"}</code>
            </pre>
            <pre data-prefix="209">
              <code>
                {'                  <ul className="list-disc leading-4 px-4">'}
              </code>
            </pre>
            <pre data-prefix="210">
              <code>{"                    <li>"}</code>
            </pre>
            <pre data-prefix="211">
              <code>
                {
                  "                      Notifies users of food recalls using periodic API calls to"
                }
              </code>
            </pre>
            <pre data-prefix="212">
              <code>
                {
                  "                      government institutions and a web scraper developed with"
                }
              </code>
            </pre>
            <pre data-prefix="213">
              <code>{"                      Beautiful Soup"}</code>
            </pre>
            <pre data-prefix="214">
              <code>{"                    </li>"}</code>
            </pre>
            <pre data-prefix="215">
              <code>{"                    <li>"}</code>
            </pre>
            <pre data-prefix="216">
              <code>
                {
                  "                      Grocery receipt image manipulation and text recognition"
                }
              </code>
            </pre>
            <pre data-prefix="217">
              <code>
                {
                  '                      accomplished with <strong>OpenCV</strong>and{" "}'
                }
              </code>
            </pre>
            <pre data-prefix="218">
              <code>
                {"                      <strong>PyTesseract</strong>"}
              </code>
            </pre>
            <pre data-prefix="219">
              <code>{"                    </li>"}</code>
            </pre>
            <pre data-prefix="220">
              <code>{"                    <li>"}</code>
            </pre>
            <pre data-prefix="221">
              <code>
                {
                  "                      Developed custom unit testing framework to assess accuracy"
                }
              </code>
            </pre>
            <pre data-prefix="222">
              <code>
                {
                  "                      of text parsing and filtering algorithms"
                }
              </code>
            </pre>
            <pre data-prefix="223">
              <code>{"                    </li>"}</code>
            </pre>
            <pre data-prefix="224">
              <code>{"                    <li>"}</code>
            </pre>
            <pre data-prefix="225">
              <code>
                {
                  "                      Backend logic managed with <strong>Django</strong>, user"
                }
              </code>
            </pre>
            <pre data-prefix="226">
              <code>
                {
                  "                      data stored in <strong>SQL</strong> database, and frontend"
                }
              </code>
            </pre>
            <pre data-prefix="227">
              <code>
                {"                      created with <strong>React</strong>"}
              </code>
            </pre>
            <pre data-prefix="228">
              <code>{"                    </li>"}</code>
            </pre>
            <pre data-prefix="229">
              <code>{"                  </ul>"}</code>
            </pre>
            <pre data-prefix="230">
              <code>{"                </div>"}</code>
            </pre>
            <pre data-prefix="231">
              <code>{'                <div className="flex m-0">'}</code>
            </pre>
            <pre data-prefix="232">
              <code>{'                  <div className="flex w-full">'}</code>
            </pre>
            <pre data-prefix="233">
              <code>
                {
                  '                    <strong className="w-3/4 text-left justify-self-start ">'
                }
              </code>
            </pre>
            <pre data-prefix="234">
              <code>
                {
                  "                      Hercules - Java, Android, Android Studio"
                }
              </code>
            </pre>
            <pre data-prefix="235">
              <code>{"                    </strong>"}</code>
            </pre>
            <pre data-prefix="236">
              <code>
                {
                  '                    <p className="w-1/4 text-right justify-self-end">'
                }
              </code>
            </pre>
            <pre data-prefix="237">
              <code>{"                      Jan 2022"}</code>
            </pre>
            <pre data-prefix="238">
              <code>{"                    </p>"}</code>
            </pre>
            <pre data-prefix="239">
              <code>{"                  </div>"}</code>
            </pre>
            <pre data-prefix="240">
              <code>{"                </div>"}</code>
            </pre>
            <pre data-prefix="241">
              <code>{'                <div className="w-full">'}</code>
            </pre>
            <pre data-prefix="242">
              <code>{"                  <p>"}</code>
            </pre>
            <pre data-prefix="243">
              <code>
                {
                  "                    Android app which incentivizes healthy living by gamifying"
                }
              </code>
            </pre>
            <pre data-prefix="244">
              <code>{"                    healthy habits"}</code>
            </pre>
            <pre data-prefix="245">
              <code>{"                  </p>"}</code>
            </pre>
            <pre data-prefix="246">
              <code>
                {'                  <ul className="list-disc leading-4 px-4">'}
              </code>
            </pre>
            <pre data-prefix="247">
              <code>{"                    <li>"}</code>
            </pre>
            <pre data-prefix="248">
              <code>
                {
                  "                      Developed backend systems managing in-game currency,"
                }
              </code>
            </pre>
            <pre data-prefix="249">
              <code>
                {
                  "                      experience, item-inventory, item-shop, quests, and"
                }
              </code>
            </pre>
            <pre data-prefix="250">
              <code>
                {
                  "                      questline systems using <strong>Java</strong>"
                }
              </code>
            </pre>
            <pre data-prefix="251">
              <code>{"                    </li>"}</code>
            </pre>
            <pre data-prefix="252">
              <code>{"                    <li>"}</code>
            </pre>
            <pre data-prefix="253">
              <code>
                {
                  "                      Architected algorithm that encourages continuous user"
                }
              </code>
            </pre>
            <pre data-prefix="254">
              <code>
                {
                  "                      progress by rewarding users in-game experience and"
                }
              </code>
            </pre>
            <pre data-prefix="255">
              <code>
                {
                  "                      currency based on consistency in questline completion"
                }
              </code>
            </pre>
            <pre data-prefix="256">
              <code>{"                    </li>"}</code>
            </pre>
            <pre data-prefix="257">
              <code>{"                    <li>"}</code>
            </pre>
            <pre data-prefix="258">
              <code>
                {
                  "                      Graphical user interface implemented using built-in "
                }
              </code>
            </pre>
            <pre data-prefix="259">
              <code>
                {
                  "                      <strong> Android Studio</strong> tools and <strong>XML</strong>"
                }
              </code>
            </pre>
            <pre data-prefix="260">
              <code>{"                    </li>"}</code>
            </pre>
            <pre data-prefix="261">
              <code>{"                  </ul>"}</code>
            </pre>
            <pre data-prefix="262">
              <code>{"                </div>"}</code>
            </pre>
            <pre data-prefix="263">
              <code>{"              </div>"}</code>
            </pre>
            <pre data-prefix="264">
              <code>{"            </div>"}</code>
            </pre>
            <pre data-prefix="265">
              <code>{"          </article>"}</code>
            </pre>
            <pre data-prefix="266">
              <code>{"        </div>"}</code>
            </pre>
            <pre data-prefix="267">
              <code>{"      </main>"}</code>
            </pre>
            <pre data-prefix="268">
              <code>{"    </>"}</code>
            </pre>
            <pre data-prefix="269">
              <code>{"  );"}</code>
            </pre>
            <pre data-prefix="270">
              <code>{"}"}</code>
            </pre>
          </div>
        </div>
      </main>
    </>
  );
}
