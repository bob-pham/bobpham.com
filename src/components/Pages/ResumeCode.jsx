export default function ResumeCode() {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-plus border border-base-300 bg-green-500 text-white rounded-box w-3/4 place-self-center my-10"
    >
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium font-montserrat">
        Click Me To Review Code (also on my GitHub)
      </div>
      <div className="w-screen collapse-content">
        <div className="mockup-code my-10 place-self-center w-3/4">
          <pre data-prefix="1">
            <code>{'import { useState } from "react";'}</code>
          </pre>
          <pre data-prefix="2">
            <code>{'import Popup from "reactjs-popup";'}</code>
          </pre>
          <pre data-prefix="3">
            <code>{""}</code>
          </pre>
          <pre data-prefix="4">
            <code>{'import MenuBar from "../Home/MenuBar";'}</code>
          </pre>
          <pre data-prefix="5">
            <code>{""}</code>
          </pre>
          <pre data-prefix="6">
            <code>
              {'import header from "../../assets/images/coopHeader.png";'}
            </code>
          </pre>
          <pre data-prefix="7">
            <code>
              {
                'import Cornucopia from "../../assets/images/cornucopia/logo.png";'
              }
            </code>
          </pre>
          <pre data-prefix="8">
            <code>
              {'import Hercules from "../../assets/images/hercules/home.png";'}
            </code>
          </pre>
          <pre data-prefix="9">
            <code>{""}</code>
          </pre>
          <pre data-prefix="10">
            <code>{"const Languages = () => {"}</code>
          </pre>
          <pre data-prefix="11">
            <code>{"  const [languages, setLanguages] = useState(0);"}</code>
          </pre>
          <pre data-prefix="12">
            <code>{"  return ("}</code>
          </pre>
          <pre data-prefix="13">
            <code>{"    <div"}</code>
          </pre>
          <pre data-prefix="14">
            <code>
              {
                '      className="w-full bg-white transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2"'
              }
            </code>
          </pre>
          <pre data-prefix="15">
            <code>{"      onClick={() => setLanguages(1)}"}</code>
          </pre>
          <pre data-prefix="16">
            <code>{"    >"}</code>
          </pre>
          <pre data-prefix="17">
            <code>{'      <div className="indicator w-1/2">'}</code>
          </pre>
          <pre data-prefix="18">
            <code>{"        <span"}</code>
          </pre>
          <pre data-prefix="19">
            <code>{"          className={"}</code>
          </pre>
          <pre data-prefix="20">
            <code>{"            languages == 0"}</code>
          </pre>
          <pre data-prefix="21">
            <code>
              {
                '              ? "indicator-item indicator-center badge badge-accent animate-bounce font-montserrat"'
              }
            </code>
          </pre>
          <pre data-prefix="22">
            <code>{'              : "hidden"'}</code>
          </pre>
          <pre data-prefix="23">
            <code>{"          }"}</code>
          </pre>
          <pre data-prefix="24">
            <code>{"        >"}</code>
          </pre>
          <pre data-prefix="25">
            <code>{"          !"}</code>
          </pre>
          <pre data-prefix="26">
            <code>{"        </span>"}</code>
          </pre>
          <pre data-prefix="27">
            <code>
              {'        <h3 className="font-bold">Programming Languages:</h3>'}
            </code>
          </pre>
          <pre data-prefix="28">
            <code>{"      </div>"}</code>
          </pre>
          <pre data-prefix="29">
            <code>{"      <p>"}</code>
          </pre>
          <pre data-prefix="30">
            <code>
              {
                "        Assembly, Bash/Zsh, C, C++, C#, Go*, HTML + CSS, Java, JavaScript,"
              }
            </code>
          </pre>
          <pre data-prefix="31">
            <code>
              {"        LaTeX, Lua*, Python, R, Racket, Rust*, SQL, TypeScript"}
            </code>
          </pre>
          <pre data-prefix="32">
            <code>{"      </p>"}</code>
          </pre>
          <pre data-prefix="33">
            <code>{"    </div>"}</code>
          </pre>
          <pre data-prefix="34">
            <code>{"  );"}</code>
          </pre>
          <pre data-prefix="35">
            <code>{"};"}</code>
          </pre>
          <pre data-prefix="36">
            <code>{""}</code>
          </pre>
          <pre data-prefix="37">
            <code>{"const Frameworks = () => {"}</code>
          </pre>
          <pre data-prefix="38">
            <code>{"  const [frameworks, setFrameworks] = useState(0);"}</code>
          </pre>
          <pre data-prefix="39">
            <code>{"  return ("}</code>
          </pre>
          <pre data-prefix="40">
            <code>{"    <div"}</code>
          </pre>
          <pre data-prefix="41">
            <code>
              {
                '      className="bg-white transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2"'
              }
            </code>
          </pre>
          <pre data-prefix="42">
            <code>{"      onClick={() => setFrameworks(1)}"}</code>
          </pre>
          <pre data-prefix="43">
            <code>{"    >"}</code>
          </pre>
          <pre data-prefix="44">
            <code>{'      <div className="indicator w-11/12">'}</code>
          </pre>
          <pre data-prefix="45">
            <code>{"        <span"}</code>
          </pre>
          <pre data-prefix="46">
            <code>{"          className={"}</code>
          </pre>
          <pre data-prefix="47">
            <code>{"            frameworks == 0"}</code>
          </pre>
          <pre data-prefix="48">
            <code>
              {
                '              ? "indicator-item indicator-center badge badge-accent animate-bounce font-montserrat"'
              }
            </code>
          </pre>
          <pre data-prefix="49">
            <code>{'              : "hidden"'}</code>
          </pre>
          <pre data-prefix="50">
            <code>{"          }"}</code>
          </pre>
          <pre data-prefix="51">
            <code>{"        >"}</code>
          </pre>
          <pre data-prefix="52">
            <code>{"          !"}</code>
          </pre>
          <pre data-prefix="53">
            <code>{"        </span>"}</code>
          </pre>
          <pre data-prefix="54">
            <code>{'        <h3 className="font-bold">'}</code>
          </pre>
          <pre data-prefix="55">
            <code>
              {"          Frameworks, Engines, Libraries and Databases:"}
            </code>
          </pre>
          <pre data-prefix="56">
            <code>{"        </h3>"}</code>
          </pre>
          <pre data-prefix="57">
            <code>{"      </div>"}</code>
          </pre>
          <pre data-prefix="58">
            <code>{"      <p>"}</code>
          </pre>
          <pre data-prefix="59">
            <code>
              {
                "        Angular*, Bootstrap, Django, Flask, GraphQL*, Image Magick, JUnit,"
              }
            </code>
          </pre>
          <pre data-prefix="60">
            <code>
              {
                "        MongoDB*, MySQL*, Next.js*, Node.js*, OpenCV*, React, React Native*,"
              }
            </code>
          </pre>
          <pre data-prefix="61">
            <code>{"        TailwindCSS, Three.js, Unity"}</code>
          </pre>
          <pre data-prefix="62">
            <code>{"      </p>"}</code>
          </pre>
          <pre data-prefix="63">
            <code>{"    </div>"}</code>
          </pre>
          <pre data-prefix="64">
            <code>{"  );"}</code>
          </pre>
          <pre data-prefix="65">
            <code>{"};"}</code>
          </pre>
          <pre data-prefix="66">
            <code>{""}</code>
          </pre>
          <pre data-prefix="67">
            <code>{"const Tools = () => {"}</code>
          </pre>
          <pre data-prefix="68">
            <code>{"  const [tools, setTools] = useState(0);"}</code>
          </pre>
          <pre data-prefix="69">
            <code>{""}</code>
          </pre>
          <pre data-prefix="70">
            <code>{"  return ("}</code>
          </pre>
          <pre data-prefix="71">
            <code>{"    <div"}</code>
          </pre>
          <pre data-prefix="72">
            <code>
              {
                '      className="bg-white transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2"'
              }
            </code>
          </pre>
          <pre data-prefix="73">
            <code>{"      onClick={() => setTools(1)}"}</code>
          </pre>
          <pre data-prefix="74">
            <code>{"    >"}</code>
          </pre>
          <pre data-prefix="75">
            <code>{'      <div className="indicator w-3/4">'}</code>
          </pre>
          <pre data-prefix="76">
            <code>{"        <span"}</code>
          </pre>
          <pre data-prefix="77">
            <code>{"          className={"}</code>
          </pre>
          <pre data-prefix="78">
            <code>{"            tools == 0"}</code>
          </pre>
          <pre data-prefix="79">
            <code>
              {
                '              ? "indicator-item indicator-center badge badge-accent animate-bounce font-montserrat"'
              }
            </code>
          </pre>
          <pre data-prefix="80">
            <code>{'              : "hidden"'}</code>
          </pre>
          <pre data-prefix="81">
            <code>{"          }"}</code>
          </pre>
          <pre data-prefix="82">
            <code>{"        >"}</code>
          </pre>
          <pre data-prefix="83">
            <code>{"          !"}</code>
          </pre>
          <pre data-prefix="84">
            <code>{"        </span>"}</code>
          </pre>
          <pre data-prefix="85">
            <code>
              {
                '        <h3 className="font-bold">Development Tools and Environments</h3>'
              }
            </code>
          </pre>
          <pre data-prefix="86">
            <code>{"      </div>"}</code>
          </pre>
          <pre data-prefix="87">
            <code>{'      <p className="mb-0">'}</code>
          </pre>
          <pre data-prefix="88">
            <code>
              {
                "        Android Studio, Azure DevOps, CMake, Git/GitHub, IntelliJ IDEA, Jira,"
              }
            </code>
          </pre>
          <pre data-prefix="89">
            <code>
              {"        Linux*, Vim, Visual Studio, VSCode, Vite, Webpack*"}
            </code>
          </pre>
          <pre data-prefix="90">
            <code>{"      </p>"}</code>
          </pre>
          <pre data-prefix="91">
            <code>{"    </div>"}</code>
          </pre>
          <pre data-prefix="92">
            <code>{"  );"}</code>
          </pre>
          <pre data-prefix="93">
            <code>{"};"}</code>
          </pre>
          <pre data-prefix="94">
            <code>{""}</code>
          </pre>
          <pre data-prefix="95">
            <code>{"const Job1 = () => {"}</code>
          </pre>
          <pre data-prefix="96">
            <code>{"  const [job1, setJob1] = useState(0);"}</code>
          </pre>
          <pre data-prefix="97">
            <code>{""}</code>
          </pre>
          <pre data-prefix="98">
            <code>{"  return ("}</code>
          </pre>
          <pre data-prefix="99">
            <code>{"    <div"}</code>
          </pre>
          <pre data-prefix="100">
            <code>
              {
                '      className="bg-white transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2"'
              }
            </code>
          </pre>
          <pre data-prefix="101">
            <code>{"      onClick={() => setJob1(1)}"}</code>
          </pre>
          <pre data-prefix="102">
            <code>{"    >"}</code>
          </pre>
          <pre data-prefix="103">
            <code>{'      <div className="indicator w-full">'}</code>
          </pre>
          <pre data-prefix="104">
            <code>{"        <span"}</code>
          </pre>
          <pre data-prefix="105">
            <code>{"          className={"}</code>
          </pre>
          <pre data-prefix="106">
            <code>{"            job1 == 0"}</code>
          </pre>
          <pre data-prefix="107">
            <code>
              {
                '              ? "indicator-item indicator-center badge badge-accent animate-bounce font-montserrat"'
              }
            </code>
          </pre>
          <pre data-prefix="108">
            <code>{'              : "hidden"'}</code>
          </pre>
          <pre data-prefix="109">
            <code>{"          }"}</code>
          </pre>
          <pre data-prefix="110">
            <code>{"        >"}</code>
          </pre>
          <pre data-prefix="111">
            <code>{"          !"}</code>
          </pre>
          <pre data-prefix="112">
            <code>{"        </span>"}</code>
          </pre>
          <pre data-prefix="113">
            <code>{'        <div className="flex m-0 w-full">'}</code>
          </pre>
          <pre data-prefix="114">
            <code>
              {
                '          <strong className="w-1/2 text-left justify-self-start ">'
              }
            </code>
          </pre>
          <pre data-prefix="115">
            <code>{"            Intel - Firmware Engineer Intern"}</code>
          </pre>
          <pre data-prefix="116">
            <code>{"          </strong>"}</code>
          </pre>
          <pre data-prefix="117">
            <code>
              {'          <p className="w-1/2 text-right justify-self-end">'}
            </code>
          </pre>
          <pre data-prefix="118">
            <code>{"            Sep 2022 - Present"}</code>
          </pre>
          <pre data-prefix="119">
            <code>{"          </p>"}</code>
          </pre>
          <pre data-prefix="120">
            <code>{"        </div>"}</code>
          </pre>
          <pre data-prefix="121">
            <code>{"      </div>"}</code>
          </pre>
          <pre data-prefix="122">
            <code>{'      <ul className="leading-4 list-disc px-3">'}</code>
          </pre>
          <pre data-prefix="123">
            <code>{"        <li>"}</code>
          </pre>
          <pre data-prefix="124">
            <code>
              {
                "          Implementing new <strong>cryptographic algorithms</strong> for custom"
              }
            </code>
          </pre>
          <pre data-prefix="125">
            <code>
              {
                '          security HW block using <strong>Assembly</strong> and{" "}'
              }
            </code>
          </pre>
          <pre data-prefix="126">
            <code>
              {
                "          <strong>C</strong>, for next generation IPU's and FNIC's as part of"
              }
            </code>
          </pre>
          <pre data-prefix="127">
            <code>
              {"          NEX Cloud Networking Group (NCNG), FW security team"}
            </code>
          </pre>
          <pre data-prefix="128">
            <code>{"        </li>"}</code>
          </pre>
          <pre data-prefix="129">
            <code>{"        <li>"}</code>
          </pre>
          <pre data-prefix="130">
            <code>
              {
                "          designed binary data and <strong>device attestation</strong> parsers,"
              }
            </code>
          </pre>
          <pre data-prefix="131">
            <code>
              {
                "          streamlining verification and cross team collaboration"
              }
            </code>
          </pre>
          <pre data-prefix="132">
            <code>{"        </li>"}</code>
          </pre>
          <pre data-prefix="133">
            <code>{"        <li>"}</code>
          </pre>
          <pre data-prefix="134">
            <code>
              {
                "          Developing <strong>Python</strong> testing framework and system test"
              }
            </code>
          </pre>
          <pre data-prefix="135">
            <code>
              {
                "          suites that simplifiy verification of new functionality"
              }
            </code>
          </pre>
          <pre data-prefix="136">
            <code>{"        </li>"}</code>
          </pre>
          <pre data-prefix="137">
            <code>{"      </ul>"}</code>
          </pre>
          <pre data-prefix="138">
            <code>{"    </div>"}</code>
          </pre>
          <pre data-prefix="139">
            <code>{"  );"}</code>
          </pre>
          <pre data-prefix="140">
            <code>{"};"}</code>
          </pre>
          <pre data-prefix="141">
            <code>{""}</code>
          </pre>
          <pre data-prefix="142">
            <code>{"const Job2 = () => {"}</code>
          </pre>
          <pre data-prefix="143">
            <code>{"  const [job2, setJob2] = useState(0);"}</code>
          </pre>
          <pre data-prefix="144">
            <code>{""}</code>
          </pre>
          <pre data-prefix="145">
            <code>{"  return ("}</code>
          </pre>
          <pre data-prefix="146">
            <code>{"    <div"}</code>
          </pre>
          <pre data-prefix="147">
            <code>
              {
                '      className="bg-white transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2"'
              }
            </code>
          </pre>
          <pre data-prefix="148">
            <code>{"      onClick={() => setJob2(1)}"}</code>
          </pre>
          <pre data-prefix="149">
            <code>{"    >"}</code>
          </pre>
          <pre data-prefix="150">
            <code>{'      <div className="indicator w-full">'}</code>
          </pre>
          <pre data-prefix="151">
            <code>{"        <span"}</code>
          </pre>
          <pre data-prefix="152">
            <code>{"          className={"}</code>
          </pre>
          <pre data-prefix="153">
            <code>{"            job2 == 0"}</code>
          </pre>
          <pre data-prefix="154">
            <code>
              {
                '              ? "indicator-item indicator-center badge badge-accent animate-bounce font-montserrat"'
              }
            </code>
          </pre>
          <pre data-prefix="155">
            <code>{'              : "hidden"'}</code>
          </pre>
          <pre data-prefix="156">
            <code>{"          }"}</code>
          </pre>
          <pre data-prefix="157">
            <code>{"        >"}</code>
          </pre>
          <pre data-prefix="158">
            <code>{"          !"}</code>
          </pre>
          <pre data-prefix="159">
            <code>{"        </span>"}</code>
          </pre>
          <pre data-prefix="160">
            <code>{'        <div className="flex m-0 w-full">'}</code>
          </pre>
          <pre data-prefix="161">
            <code>
              {
                '          <strong className="w-3/4 text-left justify-self-start ">'
              }
            </code>
          </pre>
          <pre data-prefix="162">
            <code>
              {
                "            Product Repurposing Solutions - Technical Assistant"
              }
            </code>
          </pre>
          <pre data-prefix="163">
            <code>{"          </strong>"}</code>
          </pre>
          <pre data-prefix="164">
            <code>
              {'          <p className="w-1/4 text-right justify-self-end">'}
            </code>
          </pre>
          <pre data-prefix="165">
            <code>{"            Jun 2021 - Aug 2021"}</code>
          </pre>
          <pre data-prefix="166">
            <code>{"          </p>"}</code>
          </pre>
          <pre data-prefix="167">
            <code>{"        </div>"}</code>
          </pre>
          <pre data-prefix="168">
            <code>{"      </div>"}</code>
          </pre>
          <pre data-prefix="169">
            <code>{'      <ul className="leading-4 list-disc px-3">'}</code>
          </pre>
          <pre data-prefix="170">
            <code>{"        <li>"}</code>
          </pre>
          <pre data-prefix="171">
            <code>
              {
                "          Project leader of the computer repair and refurbish process,"
              }
            </code>
          </pre>
          <pre data-prefix="172">
            <code>
              {
                "          contributing to shipping and receiving, inventory management,"
              }
            </code>
          </pre>
          <pre data-prefix="173">
            <code>
              {
                "          warehouse organization, and desktop and laptop repair"
              }
            </code>
          </pre>
          <pre data-prefix="174">
            <code>{"        </li>"}</code>
          </pre>
          <pre data-prefix="175">
            <code>{"        <li>"}</code>
          </pre>
          <pre data-prefix="176">
            <code>
              {
                "          Restructured laptop repair infrastructure and logistics, increasing"
              }
            </code>
          </pre>
          <pre data-prefix="177">
            <code>{"          productivity by <strong>200%</strong>"}</code>
          </pre>
          <pre data-prefix="178">
            <code>{"        </li>"}</code>
          </pre>
          <pre data-prefix="179">
            <code>{"      </ul>"}</code>
          </pre>
          <pre data-prefix="180">
            <code>{"    </div>"}</code>
          </pre>
          <pre data-prefix="181">
            <code>{"  );"}</code>
          </pre>
          <pre data-prefix="182">
            <code>{"};"}</code>
          </pre>
          <pre data-prefix="183">
            <code>{""}</code>
          </pre>
          <pre data-prefix="184">
            <code>{"const Projects = () => {"}</code>
          </pre>
          <pre data-prefix="185">
            <code>{"  const [projects, setProjects] = useState(0);"}</code>
          </pre>
          <pre data-prefix="186">
            <code>{""}</code>
          </pre>
          <pre data-prefix="187">
            <code>{"  return ("}</code>
          </pre>
          <pre data-prefix="188">
            <code>{"    <div"}</code>
          </pre>
          <pre data-prefix="189">
            <code>
              {
                '      className="bg-white transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2"'
              }
            </code>
          </pre>
          <pre data-prefix="190">
            <code>{"      onClick={() => setProjects(1)}"}</code>
          </pre>
          <pre data-prefix="191">
            <code>{"    >"}</code>
          </pre>
          <pre data-prefix="192">
            <code>{'      <div className="indicator w-1/3">'}</code>
          </pre>
          <pre data-prefix="193">
            <code>{"        <span"}</code>
          </pre>
          <pre data-prefix="194">
            <code>{"          className={"}</code>
          </pre>
          <pre data-prefix="195">
            <code>{"            projects == 0"}</code>
          </pre>
          <pre data-prefix="196">
            <code>
              {
                '              ? "indicator-item indicator-end badge badge-accent animate-bounce font-montserrat"'
              }
            </code>
          </pre>
          <pre data-prefix="197">
            <code>{'              : "hidden"'}</code>
          </pre>
          <pre data-prefix="198">
            <code>{"          }"}</code>
          </pre>
          <pre data-prefix="199">
            <code>{"        >"}</code>
          </pre>
          <pre data-prefix="200">
            <code>{"          !"}</code>
          </pre>
          <pre data-prefix="201">
            <code>{"        </span>"}</code>
          </pre>
          <pre data-prefix="202">
            <code>
              {
                '        <h2 className="font-bold text-xl m-0">Technical Projects</h2>'
              }
            </code>
          </pre>
          <pre data-prefix="203">
            <code>{"      </div>"}</code>
          </pre>
          <pre data-prefix="204">
            <code>{"    </div>"}</code>
          </pre>
          <pre data-prefix="205">
            <code>{"  );"}</code>
          </pre>
          <pre data-prefix="206">
            <code>{"};"}</code>
          </pre>
          <pre data-prefix="207">
            <code>{""}</code>
          </pre>
          <pre data-prefix="208">
            <code>{"const Project1 = () => {"}</code>
          </pre>
          <pre data-prefix="209">
            <code>{"  const [project1, setProject1] = useState(0);"}</code>
          </pre>
          <pre data-prefix="210">
            <code>{"  return ("}</code>
          </pre>
          <pre data-prefix="211">
            <code>{"    <div"}</code>
          </pre>
          <pre data-prefix="212">
            <code>
              {
                '      className="bg-white transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2"'
              }
            </code>
          </pre>
          <pre data-prefix="213">
            <code>{"      onClick={() => setProject1(1)}"}</code>
          </pre>
          <pre data-prefix="214">
            <code>{"    >"}</code>
          </pre>
          <pre data-prefix="215">
            <code>{'      <div className="flex m-0">'}</code>
          </pre>
          <pre data-prefix="216">
            <code>{'        <div className="indicator w-full">'}</code>
          </pre>
          <pre data-prefix="217">
            <code>{"          <span"}</code>
          </pre>
          <pre data-prefix="218">
            <code>{"            className={"}</code>
          </pre>
          <pre data-prefix="219">
            <code>{"              project1 == 0"}</code>
          </pre>
          <pre data-prefix="220">
            <code>
              {
                '                ? "indicator-item indicator-center badge badge-accent animate-bounce font-montserrat"'
              }
            </code>
          </pre>
          <pre data-prefix="221">
            <code>{'                : "hidden"'}</code>
          </pre>
          <pre data-prefix="222">
            <code>{"            }"}</code>
          </pre>
          <pre data-prefix="223">
            <code>{"          >"}</code>
          </pre>
          <pre data-prefix="224">
            <code>{"            !"}</code>
          </pre>
          <pre data-prefix="225">
            <code>{"          </span>"}</code>
          </pre>
          <pre data-prefix="226">
            <code>{'          <div className="flex w-full">'}</code>
          </pre>
          <pre data-prefix="227">
            <code>
              {
                '            <strong className="w-3/4 text-left justify-self-start ">'
              }
            </code>
          </pre>
          <pre data-prefix="228">
            <code>{"              Benten - C++"}</code>
          </pre>
          <pre data-prefix="229">
            <code>{"            </strong>"}</code>
          </pre>
          <pre data-prefix="230">
            <code>
              {'            <p className="w-1/4 text-right justify-self-end">'}
            </code>
          </pre>
          <pre data-prefix="231">
            <code>{"              Sep 2022 - Present"}</code>
          </pre>
          <pre data-prefix="232">
            <code>{"            </p>"}</code>
          </pre>
          <pre data-prefix="233">
            <code>{"          </div>"}</code>
          </pre>
          <pre data-prefix="234">
            <code>{"        </div>"}</code>
          </pre>
          <pre data-prefix="235">
            <code>{"      </div>"}</code>
          </pre>
          <pre data-prefix="236">
            <code>{'      <div className="w-full">'}</code>
          </pre>
          <pre data-prefix="237">
            <code>{"        <p>Multithreaded CLI Image Editor</p>"}</code>
          </pre>
          <pre data-prefix="238">
            <code>{'        <ul className="list-disc leading-4 px-3">'}</code>
          </pre>
          <pre data-prefix="239">
            <code>{"          <li>"}</code>
          </pre>
          <pre data-prefix="240">
            <code>
              {
                "            Isolates areas by similar colour or shape using BFS and"
              }
            </code>
          </pre>
          <pre data-prefix="241">
            <code>
              {"            edge-detection algorithms for parallel processing"}
            </code>
          </pre>
          <pre data-prefix="242">
            <code>{"          </li>"}</code>
          </pre>
          <pre data-prefix="243">
            <code>{"          <li>"}</code>
          </pre>
          <pre data-prefix="244">
            <code>
              {
                "            Safeguards against race conditions and deadlocks using mutexes and"
              }
            </code>
          </pre>
          <pre data-prefix="245">
            <code>{"            semaphores"}</code>
          </pre>
          <pre data-prefix="246">
            <code>{"          </li>"}</code>
          </pre>
          <pre data-prefix="247">
            <code>{"          <li>"}</code>
          </pre>
          <pre data-prefix="248">
            <code>
              {
                "            Edits and saves images into 10 complex predefined styles using Image"
              }
            </code>
          </pre>
          <pre data-prefix="249">
            <code>{"            Magick library"}</code>
          </pre>
          <pre data-prefix="250">
            <code>{"          </li>"}</code>
          </pre>
          <pre data-prefix="251">
            <code>{"        </ul>"}</code>
          </pre>
          <pre data-prefix="252">
            <code>{"      </div>"}</code>
          </pre>
          <pre data-prefix="253">
            <code>{"    </div>"}</code>
          </pre>
          <pre data-prefix="254">
            <code>{"  );"}</code>
          </pre>
          <pre data-prefix="255">
            <code>{"};"}</code>
          </pre>
          <pre data-prefix="256">
            <code>{""}</code>
          </pre>
          <pre data-prefix="257">
            <code>{"const Project2 = () => {"}</code>
          </pre>
          <pre data-prefix="258">
            <code>{"  const [project2, setProject2] = useState(0);"}</code>
          </pre>
          <pre data-prefix="259">
            <code>{"  return ("}</code>
          </pre>
          <pre data-prefix="260">
            <code>{"    <div"}</code>
          </pre>
          <pre data-prefix="261">
            <code>
              {
                '      className="bg-white transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2"'
              }
            </code>
          </pre>
          <pre data-prefix="262">
            <code>{"      onClick={() => setProject2(1)}"}</code>
          </pre>
          <pre data-prefix="263">
            <code>{"    >"}</code>
          </pre>
          <pre data-prefix="264">
            <code>{'      <div className="flex m-0">'}</code>
          </pre>
          <pre data-prefix="265">
            <code>{'        <div className="flex w-full">'}</code>
          </pre>
          <pre data-prefix="266">
            <code>{'          <div className="indicator w-3/4">'}</code>
          </pre>
          <pre data-prefix="267">
            <code>{"            <span"}</code>
          </pre>
          <pre data-prefix="268">
            <code>{"              className={"}</code>
          </pre>
          <pre data-prefix="269">
            <code>{"                project2 == 0"}</code>
          </pre>
          <pre data-prefix="270">
            <code>
              {
                '                  ? "indicator-item indicator-end badge badge-accent animate-bounce font-montserrat"'
              }
            </code>
          </pre>
          <pre data-prefix="271">
            <code>{'                  : "hidden"'}</code>
          </pre>
          <pre data-prefix="272">
            <code>{"              }"}</code>
          </pre>
          <pre data-prefix="273">
            <code>{"            >"}</code>
          </pre>
          <pre data-prefix="274">
            <code>{"              !"}</code>
          </pre>
          <pre data-prefix="275">
            <code>{"            </span>"}</code>
          </pre>
          <pre data-prefix="276">
            <code>
              {'            <strong className="text-left justify-self-start ">'}
            </code>
          </pre>
          <pre data-prefix="277">
            <code>
              {
                "              Cornucopia - Python, Django, OpenCV, JavaScript, React"
              }
            </code>
          </pre>
          <pre data-prefix="278">
            <code>{"            </strong>"}</code>
          </pre>
          <pre data-prefix="279">
            <code>{"          </div>"}</code>
          </pre>
          <pre data-prefix="280">
            <code>
              {
                '          <p className="w-1/4 text-right justify-self-end">May - Jul 2022</p>'
              }
            </code>
          </pre>
          <pre data-prefix="281">
            <code>{"        </div>"}</code>
          </pre>
          <pre data-prefix="282">
            <code>{"      </div>"}</code>
          </pre>
          <pre data-prefix="283">
            <code>{'      <div className="w-full">'}</code>
          </pre>
          <pre data-prefix="284">
            <code>{"        <p>"}</code>
          </pre>
          <pre data-prefix="285">
            <code>
              {
                "          Full-stack web app that reduces food waste by scanning grocery"
              }
            </code>
          </pre>
          <pre data-prefix="286">
            <code>{"          receipts to manage kitchen pantries"}</code>
          </pre>
          <pre data-prefix="287">
            <code>{"        </p>"}</code>
          </pre>
          <pre data-prefix="288">
            <code>{'        <ul className="list-disc leading-4 px-3">'}</code>
          </pre>
          <pre data-prefix="289">
            <code>{"          <li>"}</code>
          </pre>
          <pre data-prefix="290">
            <code>
              {
                "            Grocery receipt image manipulation and text recognition accomplished"
              }
            </code>
          </pre>
          <pre data-prefix="291">
            <code>
              {
                "            with <strong>OpenCV</strong>and <strong>PyTesseract</strong>"
              }
            </code>
          </pre>
          <pre data-prefix="292">
            <code>{"          </li>"}</code>
          </pre>
          <pre data-prefix="293">
            <code>{"          <li>"}</code>
          </pre>
          <pre data-prefix="294">
            <code>
              {
                "            Developed custom unit testing framework to assess accuracy of text"
              }
            </code>
          </pre>
          <pre data-prefix="295">
            <code>{"            parsing and filtering algorithms"}</code>
          </pre>
          <pre data-prefix="296">
            <code>{"          </li>"}</code>
          </pre>
          <pre data-prefix="297">
            <code>{"          <li>"}</code>
          </pre>
          <pre data-prefix="298">
            <code>
              {
                "            Notifies users of food recalls using periodic API calls to"
              }
            </code>
          </pre>
          <pre data-prefix="299">
            <code>
              {"            government institutions and a web scraper"}
            </code>
          </pre>
          <pre data-prefix="300">
            <code>{"          </li>"}</code>
          </pre>
          <pre data-prefix="301">
            <code>{"          <li>"}</code>
          </pre>
          <pre data-prefix="302">
            <code>
              {
                "            Backend logic managed with <strong>Django</strong>, user data stored"
              }
            </code>
          </pre>
          <pre data-prefix="303">
            <code>
              {
                '            in <strong>SQL</strong> database, and frontend created with{" "}'
              }
            </code>
          </pre>
          <pre data-prefix="304">
            <code>{"            <strong>React</strong>"}</code>
          </pre>
          <pre data-prefix="305">
            <code>{"          </li>"}</code>
          </pre>
          <pre data-prefix="306">
            <code>{"        </ul>"}</code>
          </pre>
          <pre data-prefix="307">
            <code>{"      </div>"}</code>
          </pre>
          <pre data-prefix="308">
            <code>{"    </div>"}</code>
          </pre>
          <pre data-prefix="309">
            <code>{"  );"}</code>
          </pre>
          <pre data-prefix="310">
            <code>{"};"}</code>
          </pre>
          <pre data-prefix="311">
            <code>{""}</code>
          </pre>
          <pre data-prefix="312">
            <code>{"const Project3 = () => {"}</code>
          </pre>
          <pre data-prefix="313">
            <code>{"  const [project3, setProject3] = useState(0);"}</code>
          </pre>
          <pre data-prefix="314">
            <code>{"  return ("}</code>
          </pre>
          <pre data-prefix="315">
            <code>{"    <div"}</code>
          </pre>
          <pre data-prefix="316">
            <code>
              {
                '      className="bg-white transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2"'
              }
            </code>
          </pre>
          <pre data-prefix="317">
            <code>{"      onClick={() => setProject3(1)}"}</code>
          </pre>
          <pre data-prefix="318">
            <code>{"    >"}</code>
          </pre>
          <pre data-prefix="319">
            <code>{'      <div className="flex m-0">'}</code>
          </pre>
          <pre data-prefix="320">
            <code>{'        <div className="indicator w-full">'}</code>
          </pre>
          <pre data-prefix="321">
            <code>{"          <span"}</code>
          </pre>
          <pre data-prefix="322">
            <code>{"            className={"}</code>
          </pre>
          <pre data-prefix="323">
            <code>{"              project3 == 0"}</code>
          </pre>
          <pre data-prefix="324">
            <code>
              {
                '                ? "indicator-item indicator-center badge badge-accent animate-bounce font-montserrat"'
              }
            </code>
          </pre>
          <pre data-prefix="325">
            <code>{'                : "hidden"'}</code>
          </pre>
          <pre data-prefix="326">
            <code>{"            }"}</code>
          </pre>
          <pre data-prefix="327">
            <code>{"          >"}</code>
          </pre>
          <pre data-prefix="328">
            <code>{"            !"}</code>
          </pre>
          <pre data-prefix="329">
            <code>{"          </span>"}</code>
          </pre>
          <pre data-prefix="330">
            <code>{'          <div className="flex w-full">'}</code>
          </pre>
          <pre data-prefix="331">
            <code>
              {
                '            <strong className="w-3/4 text-left justify-self-start ">'
              }
            </code>
          </pre>
          <pre data-prefix="332">
            <code>
              {"              Hercules - Java, Android, Android Studio"}
            </code>
          </pre>
          <pre data-prefix="333">
            <code>{"            </strong>"}</code>
          </pre>
          <pre data-prefix="334">
            <code>
              {
                '            <p className="w-1/4 text-right justify-self-end">Jan 2022</p>'
              }
            </code>
          </pre>
          <pre data-prefix="335">
            <code>{"          </div>"}</code>
          </pre>
          <pre data-prefix="336">
            <code>{"        </div>"}</code>
          </pre>
          <pre data-prefix="337">
            <code>{"      </div>"}</code>
          </pre>
          <pre data-prefix="338">
            <code>{'      <div className="w-full">'}</code>
          </pre>
          <pre data-prefix="339">
            <code>{"        <p>"}</code>
          </pre>
          <pre data-prefix="340">
            <code>
              {
                "          Android app which incentivizes healthy living by gamifying healthy"
              }
            </code>
          </pre>
          <pre data-prefix="341">
            <code>{"          habits"}</code>
          </pre>
          <pre data-prefix="342">
            <code>{"        </p>"}</code>
          </pre>
          <pre data-prefix="343">
            <code>{'        <ul className="list-disc leading-4 px-3">'}</code>
          </pre>
          <pre data-prefix="344">
            <code>{"          <li>"}</code>
          </pre>
          <pre data-prefix="345">
            <code>
              {
                "            Developed backend systems managing in-game currency, experience,"
              }
            </code>
          </pre>
          <pre data-prefix="346">
            <code>
              {
                '            item-inventory, item-shop, quests, and questline systems using{" "}'
              }
            </code>
          </pre>
          <pre data-prefix="347">
            <code>
              {'            <strong>Java</strong>, and frontend GUI with{" "}'}
            </code>
          </pre>
          <pre data-prefix="348">
            <code>
              {
                "            <strong>Android Studio</strong> tools and <strong>XML</strong>"
              }
            </code>
          </pre>
          <pre data-prefix="349">
            <code>{"          </li>"}</code>
          </pre>
          <pre data-prefix="350">
            <code>{"          <li>"}</code>
          </pre>
          <pre data-prefix="351">
            <code>
              {
                "            Architected algorithm that encourages continuous user progress by"
              }
            </code>
          </pre>
          <pre data-prefix="352">
            <code>
              {
                "            rewarding users in-game experience and currency based on consistency"
              }
            </code>
          </pre>
          <pre data-prefix="353">
            <code>{"            in questline completion"}</code>
          </pre>
          <pre data-prefix="354">
            <code>{"          </li>"}</code>
          </pre>
          <pre data-prefix="355">
            <code>{"        </ul>"}</code>
          </pre>
          <pre data-prefix="356">
            <code>{"      </div>"}</code>
          </pre>
          <pre data-prefix="357">
            <code>{"    </div>"}</code>
          </pre>
          <pre data-prefix="358">
            <code>{"  );"}</code>
          </pre>
          <pre data-prefix="359">
            <code>{"};"}</code>
          </pre>
          <pre data-prefix="360">
            <code>{""}</code>
          </pre>
          <pre data-prefix="361">
            <code>{"export default function Resume() {"}</code>
          </pre>
          <pre data-prefix="362">
            <code>{"  return ("}</code>
          </pre>
          <pre data-prefix="363">
            <code>{"    <>"}</code>
          </pre>
          <pre data-prefix="364">
            <code>
              {
                '      <main className="grid grid-cols-1 min-h-screen bg-gray-900 animate-gradient-xy overflow-hidden scroll-smooth snap-proximity snap-y">'
              }
            </code>
          </pre>
          <pre data-prefix="365">
            <code>{"        <MenuBar />"}</code>
          </pre>
          <pre data-prefix="366">
            <code>
              {'        <div className="grid place-items-center mt-20">'}
            </code>
          </pre>
          <pre data-prefix="367">
            <code>
              {
                '          <h1 className="font-montserrat text-white text-xl text-center">'
              }
            </code>
          </pre>
          <pre data-prefix="368">
            <code>{"            Interactive Resume"}</code>
          </pre>
          <pre data-prefix="369">
            <code>{"          </h1>"}</code>
          </pre>
          <pre data-prefix="370">
            <code>{'          <h3 className="text-center">'}</code>
          </pre>
          <pre data-prefix="371">
            <code>
              {
                "            Created Entirely with React + CSS! Identical to my actual resume!"
              }
            </code>
          </pre>
          <pre data-prefix="372">
            <code>{"          </h3>"}</code>
          </pre>
          <pre data-prefix="373">
            <code>
              {
                '          <h3 className="font-montserrat text-green-500 text-lg mb-5 animate-bounce">'
              }
            </code>
          </pre>
          <pre data-prefix="374">
            <code>{"            Click around!"}</code>
          </pre>
          <pre data-prefix="375">
            <code>{"          </h3>"}</code>
          </pre>
          <pre data-prefix="376">
            <code>{"        </div>"}</code>
          </pre>
          <pre data-prefix="377">
            <code>
              {
                '        <div className="grid place-self-center place-items-center w-11/12 overflow-scroll mt-5  text-[14px]">'
              }
            </code>
          </pre>
          <pre data-prefix="378">
            <code>
              {
                '          <article className="place-self-center bg-white w-[794px] h-[1123px] pt-5 z-0">'
              }
            </code>
          </pre>
          <pre data-prefix="379">
            <code>
              {'            <div className="flex justify-end w-full px-10">'}
            </code>
          </pre>
          <pre data-prefix="380">
            <code>
              {'              <img className="w-3/4 " src={header} />'}
            </code>
          </pre>
          <pre data-prefix="381">
            <code>{"            </div>"}</code>
          </pre>
          <pre data-prefix="382">
            <code>
              {
                '            <div className="flex flex-col font-serif text-black px-[80px] w-full">'
              }
            </code>
          </pre>
          <pre data-prefix="383">
            <code>{'              <div className="flex w-full">'}</code>
          </pre>
          <pre data-prefix="384">
            <code>
              {'                <div className="w-5/12 justify-self-start">'}
            </code>
          </pre>
          <pre data-prefix="385">
            <code>
              {
                '                  <h1 className="text-4xl font-bold">Bob Pham</h1>'
              }
            </code>
          </pre>
          <pre data-prefix="386">
            <code>
              {
                '                  <p className="text-left transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2">'
              }
            </code>
          </pre>
          <pre data-prefix="387">
            <code>
              {
                "                    <strong>Email:</strong> bobbaopham@gmail.com"
              }
            </code>
          </pre>
          <pre data-prefix="388">
            <code>{"                  </p>"}</code>
          </pre>
          <pre data-prefix="389">
            <code>
              {
                '                  <p className="text-left transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2">'
              }
            </code>
          </pre>
          <pre data-prefix="390">
            <code>
              {"                    <strong>Phone:</strong> (604) - 352 - 2975"}
            </code>
          </pre>
          <pre data-prefix="391">
            <code>{"                  </p>"}</code>
          </pre>
          <pre data-prefix="392">
            <code>
              {
                '                  <h2 className="font-bold text-xl">Education</h2>'
              }
            </code>
          </pre>
          <pre data-prefix="393">
            <code>{"                </div>"}</code>
          </pre>
          <pre data-prefix="394">
            <code>
              {
                '                <div className="w-7/12 justify-self-end mt-4 overflow-visible">'
              }
            </code>
          </pre>
          <pre data-prefix="395">
            <code>
              {
                '                  <a href="https://www.linkedin.com/in/bobpham" target="_">'
              }
            </code>
          </pre>
          <pre data-prefix="396">
            <code>
              {
                '                    <p className="text-right transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2">'
              }
            </code>
          </pre>
          <pre data-prefix="397">
            <code>
              {'                      <strong>Linkedin:</strong>{" "}'}
            </code>
          </pre>
          <pre data-prefix="398">
            <code>
              {"                      https://www.linkedin.com/in/bobpham"}
            </code>
          </pre>
          <pre data-prefix="399">
            <code>{"                    </p>"}</code>
          </pre>
          <pre data-prefix="400">
            <code>{"                  </a>"}</code>
          </pre>
          <pre data-prefix="401">
            <code>{'                  <a href="/">'}</code>
          </pre>
          <pre data-prefix="402">
            <code>
              {
                '                    <p className="text-right transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2">'
              }
            </code>
          </pre>
          <pre data-prefix="403">
            <code>
              {
                "                      <strong>Website:</strong> https://bob-pham.github.io/"
              }
            </code>
          </pre>
          <pre data-prefix="404">
            <code>{"                    </p>"}</code>
          </pre>
          <pre data-prefix="405">
            <code>{"                  </a>"}</code>
          </pre>
          <pre data-prefix="406">
            <code>
              {
                '                  <a href="https://github.com/bob-pham" target="_">'
              }
            </code>
          </pre>
          <pre data-prefix="407">
            <code>
              {
                '                    <p className="text-right transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2">'
              }
            </code>
          </pre>
          <pre data-prefix="408">
            <code>
              {
                "                      <strong>Github:</strong> https://github.com/bob-pham"
              }
            </code>
          </pre>
          <pre data-prefix="409">
            <code>{"                    </p>"}</code>
          </pre>
          <pre data-prefix="410">
            <code>{"                  </a>"}</code>
          </pre>
          <pre data-prefix="411">
            <code>{"                </div>"}</code>
          </pre>
          <pre data-prefix="412">
            <code>{"              </div>"}</code>
          </pre>
          <pre data-prefix="413">
            <code>
              {
                '              <div className="divider bg-black h-[2px] m-0"></div>'
              }
            </code>
          </pre>
          <pre data-prefix="414">
            <code>{'              <div className="flex w-full mt-0">'}</code>
          </pre>
          <pre data-prefix="415">
            <code>{'                <div className="flex w-full">'}</code>
          </pre>
          <pre data-prefix="416">
            <code>
              {'                  <p className="justify-self-start w-10/12">'}
            </code>
          </pre>
          <pre data-prefix="417">
            <code>
              {
                "                    <strong>University of British Columbia</strong> - Vancouver,"
              }
            </code>
          </pre>
          <pre data-prefix="418">
            <code>{"                    BC"}</code>
          </pre>
          <pre data-prefix="419">
            <code>{"                  </p>"}</code>
          </pre>
          <pre data-prefix="420">
            <code>
              {
                '                  <strong className="justify-self-end text-right w-6/12">'
              }
            </code>
          </pre>
          <pre data-prefix="421">
            <code>{"                    Expected Graduation: May 2025"}</code>
          </pre>
          <pre data-prefix="422">
            <code>{"                  </strong>"}</code>
          </pre>
          <pre data-prefix="423">
            <code>{"                </div>"}</code>
          </pre>
          <pre data-prefix="424">
            <code>{"              </div>"}</code>
          </pre>
          <pre data-prefix="425">
            <code>{'              <div className="w-full">'}</code>
          </pre>
          <pre data-prefix="426">
            <code>
              {
                '                <ul className="list-disc px-3 m-0 leading-snug">'
              }
            </code>
          </pre>
          <pre data-prefix="427">
            <code>{"                  <li>"}</code>
          </pre>
          <pre data-prefix="428">
            <code>
              {'                    3rd Year Bachelor of Science,{" "}'}
            </code>
          </pre>
          <pre data-prefix="429">
            <code>
              {"                    <strong>Honours Computer Science</strong>"}
            </code>
          </pre>
          <pre data-prefix="430">
            <code>{"                  </li>"}</code>
          </pre>
          <pre data-prefix="431">
            <code>{"                  <li>"}</code>
          </pre>
          <pre data-prefix="432">
            <code>
              {
                "                    4.1 GPA (87%) Overall, 4.33 GPA (90%) Computer Science (4.33"
              }
            </code>
          </pre>
          <pre data-prefix="433">
            <code>{"                    Scale)"}</code>
          </pre>
          <pre data-prefix="434">
            <code>{"                  </li>"}</code>
          </pre>
          <pre data-prefix="435">
            <code>{"                  <li>"}</code>
          </pre>
          <pre data-prefix="436">
            <code>
              {
                "                    Relevant courses: Data Structures and Algorithms, Software"
              }
            </code>
          </pre>
          <pre data-prefix="437">
            <code>{"                    Design, Computer Systems"}</code>
          </pre>
          <pre data-prefix="438">
            <code>{"                  </li>"}</code>
          </pre>
          <pre data-prefix="439">
            <code>{"                </ul>"}</code>
          </pre>
          <pre data-prefix="440">
            <code>{"              </div>"}</code>
          </pre>
          <pre data-prefix="441">
            <code>{'              <div className="flex flex-col">'}</code>
          </pre>
          <pre data-prefix="442">
            <code>
              {
                '                <h2 className="font-bold text-xl m-0">Technical Skills</h2>'
              }
            </code>
          </pre>
          <pre data-prefix="443">
            <code>
              {
                '                <div className="divider bg-black h-[2px] m-0"></div>'
              }
            </code>
          </pre>
          <pre data-prefix="444">
            <code>{'                <div className=" leading-5 grid">'}</code>
          </pre>
          <pre data-prefix="445">
            <code>{"                  <Popup"}</code>
          </pre>
          <pre data-prefix="446">
            <code>{"                    trigger={"}</code>
          </pre>
          <pre data-prefix="447">
            <code>
              {
                '                      <button className="w-full flex text-left">'
              }
            </code>
          </pre>
          <pre data-prefix="448">
            <code>{"                        <Languages />"}</code>
          </pre>
          <pre data-prefix="449">
            <code>{"                      </button>"}</code>
          </pre>
          <pre data-prefix="450">
            <code>{"                    }"}</code>
          </pre>
          <pre data-prefix="451">
            <code>{"                    modal"}</code>
          </pre>
          <pre data-prefix="452">
            <code>{"                  >"}</code>
          </pre>
          <pre data-prefix="453">
            <code>
              {
                '                    <div className="grid place-items-center bg-gradient-to-br from-slate-700 to-blue-900 via-gray-700 animate-gradient-x rounded-lg p-10 mx-20 font-montserrat">'
              }
            </code>
          </pre>
          <pre data-prefix="454">
            <code>
              {
                '                      <h1 className="font-bold mb-10">Programming Languages</h1>'
              }
            </code>
          </pre>
          <pre data-prefix="455">
            <code>{"                      <p>"}</code>
          </pre>
          <pre data-prefix="456">
            <code>
              {
                "                        Learning a new programming languages is something that I"
              }
            </code>
          </pre>
          <pre data-prefix="457">
            <code>
              {
                "                        really enjoy, which is why I have so many listed here."
              }
            </code>
          </pre>
          <pre data-prefix="458">
            <code>
              {
                "                        Of course I haven't mastered every language, but I've"
              }
            </code>
          </pre>
          <pre data-prefix="459">
            <code>
              {"                        made a todo list with most of these."}
            </code>
          </pre>
          <pre data-prefix="460">
            <code>{"                        <br />"}</code>
          </pre>
          <pre data-prefix="461">
            <code>{"                        <br />"}</code>
          </pre>
          <pre data-prefix="462">
            <code>
              {"                        My most comfortable languages are:"}
            </code>
          </pre>
          <pre data-prefix="463">
            <code>{"                      </p>"}</code>
          </pre>
          <pre data-prefix="464">
            <code>
              {'                      <ul className="list-disc leading-4">'}
            </code>
          </pre>
          <pre data-prefix="465">
            <code>{"                        <li>Python</li>"}</code>
          </pre>
          <pre data-prefix="466">
            <code>{"                        <li>C++</li>"}</code>
          </pre>
          <pre data-prefix="467">
            <code>{"                        <li>Java</li>"}</code>
          </pre>
          <pre data-prefix="468">
            <code>
              {"                        <li>JavaScript/TypeScript</li>"}
            </code>
          </pre>
          <pre data-prefix="469">
            <code>{"                      </ul>"}</code>
          </pre>
          <pre data-prefix="470">
            <code>{"                    </div>"}</code>
          </pre>
          <pre data-prefix="471">
            <code>{"                  </Popup>"}</code>
          </pre>
          <pre data-prefix="472">
            <code>{"                  <Popup"}</code>
          </pre>
          <pre data-prefix="473">
            <code>{"                    trigger={"}</code>
          </pre>
          <pre data-prefix="474">
            <code>
              {'                      <button className="w-full text-left">'}
            </code>
          </pre>
          <pre data-prefix="475">
            <code>{"                        <Frameworks />"}</code>
          </pre>
          <pre data-prefix="476">
            <code>{"                      </button>"}</code>
          </pre>
          <pre data-prefix="477">
            <code>{"                    }"}</code>
          </pre>
          <pre data-prefix="478">
            <code>{"                    modal"}</code>
          </pre>
          <pre data-prefix="479">
            <code>{"                  >"}</code>
          </pre>
          <pre data-prefix="480">
            <code>
              {
                '                    <div className="grid place-items-center bg-gradient-to-br from-slate-700 to-blue-900 via-gray-700 animate-gradient-x rounded-lg p-10 font-montserrat mx-10">'
              }
            </code>
          </pre>
          <pre data-prefix="481">
            <code>
              {'                      <h1 className="font-bold mb-10">'}
            </code>
          </pre>
          <pre data-prefix="482">
            <code>
              {
                "                        Frameworks, Engines, Libraries and Databases"
              }
            </code>
          </pre>
          <pre data-prefix="483">
            <code>{"                      </h1>"}</code>
          </pre>
          <pre data-prefix="484">
            <code>{"                      <p>"}</code>
          </pre>
          <pre data-prefix="485">
            <code>
              {
                "                        You don't always have to reinvent the wheel for every"
              }
            </code>
          </pre>
          <pre data-prefix="486">
            <code>
              {
                "                        project - even if I try to. Most of my projects have"
              }
            </code>
          </pre>
          <pre data-prefix="487">
            <code>
              {
                "                        been full-stack, and so most of this list revolves"
              }
            </code>
          </pre>
          <pre data-prefix="488">
            <code>
              {
                "                        around that, though my favorite library to play with is"
              }
            </code>
          </pre>
          <pre data-prefix="489">
            <code>{"                        OpenCV."}</code>
          </pre>
          <pre data-prefix="490">
            <code>{"                        <br />"}</code>
          </pre>
          <pre data-prefix="491">
            <code>{"                        <br />"}</code>
          </pre>
          <pre data-prefix="492">
            <code>{"                      </p>"}</code>
          </pre>
          <pre data-prefix="493">
            <code>{'                      <p className="text-center">'}</code>
          </pre>
          <pre data-prefix="494">
            <code>
              {"                        My current go-to tech stack:"}
            </code>
          </pre>
          <pre data-prefix="495">
            <code>{"                      </p>"}</code>
          </pre>
          <pre data-prefix="496">
            <code>
              {'                      <ul className="list-disc leading-4">'}
            </code>
          </pre>
          <pre data-prefix="497">
            <code>{"                        <li>React + NextJS</li>"}</code>
          </pre>
          <pre data-prefix="498">
            <code>{"                        <li>Tailwindcss</li>"}</code>
          </pre>
          <pre data-prefix="499">
            <code>{"                        <li>Flask</li>"}</code>
          </pre>
          <pre data-prefix="500">
            <code>{"                        <li>MongoDB</li>"}</code>
          </pre>
          <pre data-prefix="501">
            <code>{"                      </ul>"}</code>
          </pre>
          <pre data-prefix="502">
            <code>{"                    </div>"}</code>
          </pre>
          <pre data-prefix="503">
            <code>{"                  </Popup>"}</code>
          </pre>
          <pre data-prefix="504">
            <code>{"                  <Popup"}</code>
          </pre>
          <pre data-prefix="505">
            <code>{"                    trigger={"}</code>
          </pre>
          <pre data-prefix="506">
            <code>
              {'                      <button className="w-full text-left">'}
            </code>
          </pre>
          <pre data-prefix="507">
            <code>{"                        <Tools />"}</code>
          </pre>
          <pre data-prefix="508">
            <code>{"                      </button>"}</code>
          </pre>
          <pre data-prefix="509">
            <code>{"                    }"}</code>
          </pre>
          <pre data-prefix="510">
            <code>{"                    modal"}</code>
          </pre>
          <pre data-prefix="511">
            <code>{"                  >"}</code>
          </pre>
          <pre data-prefix="512">
            <code>
              {
                '                    <div className="grid place-items-center bg-gradient-to-br from-slate-700 to-blue-900 via-gray-700 animate-gradient-x rounded-lg p-10 font-montserrat mx-10">'
              }
            </code>
          </pre>
          <pre data-prefix="513">
            <code>
              {'                      <h1 className="font-bold mb-5">'}
            </code>
          </pre>
          <pre data-prefix="514">
            <code>
              {"                        Development Tools and Environments"}
            </code>
          </pre>
          <pre data-prefix="515">
            <code>{"                      </h1>"}</code>
          </pre>
          <pre data-prefix="516">
            <code>
              {"                      <p>My current developer setup is:</p>"}
            </code>
          </pre>
          <pre data-prefix="517">
            <code>
              {'                      <ul className="list-disc leading-4">'}
            </code>
          </pre>
          <pre data-prefix="518">
            <code>{"                        <li>VSCode</li>"}</code>
          </pre>
          <pre data-prefix="519">
            <code>
              {
                "                        <li>VSCode Neovim - Extension (Highly recommended)</li>"
              }
            </code>
          </pre>
          <pre data-prefix="520">
            <code>
              {"                        <li>Atom One Dark Pro - Theme</li>"}
            </code>
          </pre>
          <pre data-prefix="521">
            <code>{"                        <li>Git/GitHub</li>"}</code>
          </pre>
          <pre data-prefix="522">
            <code>{"                      </ul>"}</code>
          </pre>
          <pre data-prefix="523">
            <code>{"                    </div>"}</code>
          </pre>
          <pre data-prefix="524">
            <code>{"                  </Popup>"}</code>
          </pre>
          <pre data-prefix="525">
            <code>{"                </div>"}</code>
          </pre>
          <pre data-prefix="526">
            <code>{"              </div>"}</code>
          </pre>
          <pre data-prefix="527">
            <code>{'              <div className="flex flex-col ">'}</code>
          </pre>
          <pre data-prefix="528">
            <code>{'                <div className="flex w-full">'}</code>
          </pre>
          <pre data-prefix="529">
            <code>
              {
                '                  <h2 className="w-1/2 font-bold text-xl m-0 justify-self-start">'
              }
            </code>
          </pre>
          <pre data-prefix="530">
            <code>{"                    Experience"}</code>
          </pre>
          <pre data-prefix="531">
            <code>{"                  </h2>"}</code>
          </pre>
          <pre data-prefix="532">
            <code>
              {
                '                  <p className="w-1/2 m-0 text-right justify-self-end text-[12px]">'
              }
            </code>
          </pre>
          <pre data-prefix="533">
            <code>{"                    *Currently Acquiring"}</code>
          </pre>
          <pre data-prefix="534">
            <code>{"                  </p>"}</code>
          </pre>
          <pre data-prefix="535">
            <code>{"                </div>"}</code>
          </pre>
          <pre data-prefix="536">
            <code>
              {
                '                <div className="divider bg-black h-[2px] m-0"></div>'
              }
            </code>
          </pre>
          <pre data-prefix="537">
            <code>{"                <Popup"}</code>
          </pre>
          <pre data-prefix="538">
            <code>{"                  trigger={"}</code>
          </pre>
          <pre data-prefix="539">
            <code>
              {'                    <button className="w-full text-left">'}
            </code>
          </pre>
          <pre data-prefix="540">
            <code>{"                      <Job1 />"}</code>
          </pre>
          <pre data-prefix="541">
            <code>{"                    </button>"}</code>
          </pre>
          <pre data-prefix="542">
            <code>{"                  }"}</code>
          </pre>
          <pre data-prefix="543">
            <code>{"                  modal"}</code>
          </pre>
          <pre data-prefix="544">
            <code>{"                >"}</code>
          </pre>
          <pre data-prefix="545">
            <code>
              {
                '                  <div className="grid place-items-center bg-gradient-to-br from-slate-700 to-blue-900 via-gray-700 animate-gradient-x rounded-lg p-10 font-montserrat mx-10">'
              }
            </code>
          </pre>
          <pre data-prefix="546">
            <code>{'                    <h1 className="font-bold">'}</code>
          </pre>
          <pre data-prefix="547">
            <code>
              {"                      Intel - Firmware Engineer Intern"}
            </code>
          </pre>
          <pre data-prefix="548">
            <code>{"                    </h1>"}</code>
          </pre>
          <pre data-prefix="549">
            <code>{"                    <p>"}</code>
          </pre>
          <pre data-prefix="550">
            <code>
              {
                "                      As of the time of writing, I am a Firmware Engineer Itern"
              }
            </code>
          </pre>
          <pre data-prefix="551">
            <code>
              {
                "                      at Intel. Since I work in a security team and handle"
              }
            </code>
          </pre>
          <pre data-prefix="552">
            <code>
              {
                "                      sensitive device information/secrets, I cannot speak about"
              }
            </code>
          </pre>
          <pre data-prefix="553">
            <code>
              {
                "                      much of what I was able to create and accomplish. As far"
              }
            </code>
          </pre>
          <pre data-prefix="554">
            <code>
              {
                "                      as what is currently within the resume, this is a"
              }
            </code>
          </pre>
          <pre data-prefix="555">
            <code>
              {
                "                      representative but vague description of some of these"
              }
            </code>
          </pre>
          <pre data-prefix="556">
            <code>
              {
                "                      tasks. Though, based on these facts the knowledgable"
              }
            </code>
          </pre>
          <pre data-prefix="557">
            <code>
              {
                "                      reader should be able to extrapolate my abilities. Feel"
              }
            </code>
          </pre>
          <pre data-prefix="558">
            <code>
              {
                "                      free to contact me if you want any clarifications. many of"
              }
            </code>
          </pre>
          <pre data-prefix="559">
            <code>
              {
                "                      my accomplishments at Intel need to be kept vague and"
              }
            </code>
          </pre>
          <pre data-prefix="560">
            <code>{"                      non-specific."}</code>
          </pre>
          <pre data-prefix="561">
            <code>{"                      <br />"}</code>
          </pre>
          <pre data-prefix="562">
            <code>{"                      <br />"}</code>
          </pre>
          <pre data-prefix="563">
            <code>{"                      Other tidbits of information:"}</code>
          </pre>
          <pre data-prefix="564">
            <code>{"                    </p>"}</code>
          </pre>
          <pre data-prefix="565">
            <code>
              {'                    <ul className="list-disc leading-4">'}
            </code>
          </pre>
          <pre data-prefix="566">
            <code>
              {
                "                      <li>Intel Security Yellow + White Belt Certified</li>"
              }
            </code>
          </pre>
          <pre data-prefix="567">
            <code>{"                      <li>"}</code>
          </pre>
          <pre data-prefix="568">
            <code>
              {
                "                        Developed suite of scripts to parse and interpret"
              }
            </code>
          </pre>
          <pre data-prefix="569">
            <code>
              {"                        previously unknown binary data"}
            </code>
          </pre>
          <pre data-prefix="570">
            <code>{"                      </li>"}</code>
          </pre>
          <pre data-prefix="571">
            <code>{"                      <li>"}</code>
          </pre>
          <pre data-prefix="572">
            <code>
              {
                "                        Implemented assembly microcode of functions implementing"
              }
            </code>
          </pre>
          <pre data-prefix="573">
            <code>
              {"                        cutting edge cryptography algorithms"}
            </code>
          </pre>
          <pre data-prefix="574">
            <code>{"                      </li>"}</code>
          </pre>
          <pre data-prefix="575">
            <code>
              {
                "                      <li>Pushing for further C adoption within team</li>"
              }
            </code>
          </pre>
          <pre data-prefix="576">
            <code>{"                    </ul>"}</code>
          </pre>
          <pre data-prefix="577">
            <code>{"                  </div>"}</code>
          </pre>
          <pre data-prefix="578">
            <code>{"                </Popup>"}</code>
          </pre>
          <pre data-prefix="579">
            <code>{"                <Popup"}</code>
          </pre>
          <pre data-prefix="580">
            <code>{"                  trigger={"}</code>
          </pre>
          <pre data-prefix="581">
            <code>
              {'                    <button className="w-full text-left">'}
            </code>
          </pre>
          <pre data-prefix="582">
            <code>{"                      <Job2 />"}</code>
          </pre>
          <pre data-prefix="583">
            <code>{"                    </button>"}</code>
          </pre>
          <pre data-prefix="584">
            <code>{"                  }"}</code>
          </pre>
          <pre data-prefix="585">
            <code>{"                  modal"}</code>
          </pre>
          <pre data-prefix="586">
            <code>{"                >"}</code>
          </pre>
          <pre data-prefix="587">
            <code>
              {
                '                  <div className="grid place-items-center bg-gradient-to-br from-slate-700 to-blue-900 via-gray-700 animate-gradient-x rounded-lg p-10 font-montserrat mx-10">'
              }
            </code>
          </pre>
          <pre data-prefix="588">
            <code>
              {
                '                    <h1 className="font-bold">Product Repurposing Solutions</h1>'
              }
            </code>
          </pre>
          <pre data-prefix="589">
            <code>{"                    <p>"}</code>
          </pre>
          <pre data-prefix="590">
            <code>
              {
                "                      Product Repurposing Solutions (PRS) is a local business"
              }
            </code>
          </pre>
          <pre data-prefix="591">
            <code>
              {
                "                      that refurbishes used electronics. As one of the first"
              }
            </code>
          </pre>
          <pre data-prefix="592">
            <code>
              {
                "                      hires are PRS, I was able to influence much of the repair"
              }
            </code>
          </pre>
          <pre data-prefix="593">
            <code>
              {
                "                      and refurbish process, and was able to touch many"
              }
            </code>
          </pre>
          <pre data-prefix="594">
            <code>
              {
                "                      different aspects of the business, though my focus was"
              }
            </code>
          </pre>
          <pre data-prefix="595">
            <code>{"                      primarily on laptop repair."}</code>
          </pre>
          <pre data-prefix="596">
            <code>{"                      <br />"}</code>
          </pre>
          <pre data-prefix="597">
            <code>{"                      <br />"}</code>
          </pre>
          <pre data-prefix="598">
            <code>
              {
                "                      Part of being a professional is being knowledgable in the"
              }
            </code>
          </pre>
          <pre data-prefix="599">
            <code>
              {
                "                      tools that you use. Having a job both designing low-level"
              }
            </code>
          </pre>
          <pre data-prefix="600">
            <code>
              {
                "                      computer systems and repairing them are skills that I"
              }
            </code>
          </pre>
          <pre data-prefix="601">
            <code>{"                      value."}</code>
          </pre>
          <pre data-prefix="602">
            <code>{"                    </p>"}</code>
          </pre>
          <pre data-prefix="603">
            <code>{"                  </div>"}</code>
          </pre>
          <pre data-prefix="604">
            <code>{"                </Popup>"}</code>
          </pre>
          <pre data-prefix="605">
            <code>{"              </div>"}</code>
          </pre>
          <pre data-prefix="606">
            <code>{'              <div className="flex flex-col">'}</code>
          </pre>
          <pre data-prefix="607">
            <code>{"                <Popup"}</code>
          </pre>
          <pre data-prefix="608">
            <code>{"                  trigger={"}</code>
          </pre>
          <pre data-prefix="609">
            <code>
              {'                    <button className="w-full text-left">'}
            </code>
          </pre>
          <pre data-prefix="610">
            <code>{"                      <Projects />"}</code>
          </pre>
          <pre data-prefix="611">
            <code>{"                    </button>"}</code>
          </pre>
          <pre data-prefix="612">
            <code>{"                  }"}</code>
          </pre>
          <pre data-prefix="613">
            <code>{"                  modal"}</code>
          </pre>
          <pre data-prefix="614">
            <code>{"                >"}</code>
          </pre>
          <pre data-prefix="615">
            <code>
              {
                '                  <div className="grid place-items-center bg-gradient-to-br from-slate-700 to-blue-900 via-gray-700 animate-gradient-x rounded-lg p-10 font-montserrat mx-10">'
              }
            </code>
          </pre>
          <pre data-prefix="616">
            <code>
              {
                '                    <h1 className="font-bold">Technical Projects</h1>'
              }
            </code>
          </pre>
          <pre data-prefix="617">
            <code>{"                    <p>"}</code>
          </pre>
          <pre data-prefix="618">
            <code>
              {
                "                      Just like every other computer science students, I work on"
              }
            </code>
          </pre>
          <pre data-prefix="619">
            <code>
              {
                "                      a lot of technical projects in my spare time. The three"
              }
            </code>
          </pre>
          <pre data-prefix="620">
            <code>
              {
                "                      projects here are the three that I am currently the most"
              }
            </code>
          </pre>
          <pre data-prefix="621">
            <code>
              {
                "                      proud of. A complete list of my projects can be found on"
              }
            </code>
          </pre>
          <pre data-prefix="622">
            <code>{"                      the home page."}</code>
          </pre>
          <pre data-prefix="623">
            <code>{"                    </p>"}</code>
          </pre>
          <pre data-prefix="624">
            <code>{"                  </div>"}</code>
          </pre>
          <pre data-prefix="625">
            <code>{"                </Popup>"}</code>
          </pre>
          <pre data-prefix="626">
            <code>
              {
                '                <div className="divider bg-black h-[2px] m-0"></div>'
              }
            </code>
          </pre>
          <pre data-prefix="627">
            <code>{"                <Popup"}</code>
          </pre>
          <pre data-prefix="628">
            <code>{"                  trigger={"}</code>
          </pre>
          <pre data-prefix="629">
            <code>
              {'                    <button className="w-full text-left">'}
            </code>
          </pre>
          <pre data-prefix="630">
            <code>{"                      <Project1 />"}</code>
          </pre>
          <pre data-prefix="631">
            <code>{"                    </button>"}</code>
          </pre>
          <pre data-prefix="632">
            <code>{"                  }"}</code>
          </pre>
          <pre data-prefix="633">
            <code>{"                  modal"}</code>
          </pre>
          <pre data-prefix="634">
            <code>{"                >"}</code>
          </pre>
          <pre data-prefix="635">
            <code>
              {
                '                  <div className="grid place-items-center bg-gradient-to-br from-slate-700 to-blue-900 via-gray-700 animate-gradient-x rounded-lg p-10 font-montserrat mx-10">'
              }
            </code>
          </pre>
          <pre data-prefix="636">
            <code>
              {'                    <h1 className="font-bold">Benten</h1>'}
            </code>
          </pre>
          <pre data-prefix="637">
            <code>{"                    <p>"}</code>
          </pre>
          <pre data-prefix="638">
            <code>
              {
                "                      Benten is a multithreaded CLI image editor written in C++"
              }
            </code>
          </pre>
          <pre data-prefix="639">
            <code>
              {
                "                      and utilizes the ImageMagick library. Benten does not give"
              }
            </code>
          </pre>
          <pre data-prefix="640">
            <code>
              {
                "                      the user the usual granular control of a traditional"
              }
            </code>
          </pre>
          <pre data-prefix="641">
            <code>
              {
                "                      editor, rather it transforms images into predefined"
              }
            </code>
          </pre>
          <pre data-prefix="642">
            <code>
              {
                "                      permutations. Each permutation is a testbed for different"
              }
            </code>
          </pre>
          <pre data-prefix="643">
            <code>
              {"                      algorithms, and computer vision tools."}
            </code>
          </pre>
          <pre data-prefix="644">
            <code>{"                      <br />"}</code>
          </pre>
          <pre data-prefix="645">
            <code>{"                      <br />"}</code>
          </pre>
          <pre data-prefix="646">
            <code>
              {
                "                      Current permutations supported / under development (goal"
              }
            </code>
          </pre>
          <pre data-prefix="647">
            <code>{"                      is to have 10):"}</code>
          </pre>
          <pre data-prefix="648">
            <code>{"                    </p>"}</code>
          </pre>
          <pre data-prefix="649">
            <code>
              {'                    <ul className="list-disc leading-4">'}
            </code>
          </pre>
          <pre data-prefix="650">
            <code>{"                      <li>PixelArtTransform</li>"}</code>
          </pre>
          <pre data-prefix="651">
            <code>
              {"                      <li>TriangleVectorTransform</li>"}
            </code>
          </pre>
          <pre data-prefix="652">
            <code>{"                      <li>CircleAreaTransform</li>"}</code>
          </pre>
          <pre data-prefix="653">
            <code>
              {"                      <li>AbstractBlobTransform</li>"}
            </code>
          </pre>
          <pre data-prefix="654">
            <code>{"                      <li>ColorReducer</li>"}</code>
          </pre>
          <pre data-prefix="655">
            <code>{"                      <li>Silhoutter</li>"}</code>
          </pre>
          <pre data-prefix="656">
            <code>{"                    </ul>"}</code>
          </pre>
          <pre data-prefix="657">
            <code>{'                    <a href="/benten">'}</code>
          </pre>
          <pre data-prefix="658">
            <code>
              {
                '                      <button className="btn bg-green-500 text-white mt-10">'
              }
            </code>
          </pre>
          <pre data-prefix="659">
            <code>{"                        Learn More"}</code>
          </pre>
          <pre data-prefix="660">
            <code>{"                      </button>"}</code>
          </pre>
          <pre data-prefix="661">
            <code>{"                    </a>"}</code>
          </pre>
          <pre data-prefix="662">
            <code>{"                  </div>"}</code>
          </pre>
          <pre data-prefix="663">
            <code>{"                </Popup>"}</code>
          </pre>
          <pre data-prefix="664">
            <code>{"                <Popup"}</code>
          </pre>
          <pre data-prefix="665">
            <code>{"                  trigger={"}</code>
          </pre>
          <pre data-prefix="666">
            <code>
              {'                    <button className="w-full text-left">'}
            </code>
          </pre>
          <pre data-prefix="667">
            <code>{"                      <Project2 />"}</code>
          </pre>
          <pre data-prefix="668">
            <code>{"                    </button>"}</code>
          </pre>
          <pre data-prefix="669">
            <code>{"                  }"}</code>
          </pre>
          <pre data-prefix="670">
            <code>{"                  modal"}</code>
          </pre>
          <pre data-prefix="671">
            <code>{"                >"}</code>
          </pre>
          <pre data-prefix="672">
            <code>
              {
                '                  <div className="grid place-items-center bg-gradient-to-br from-slate-700 to-blue-900 via-gray-700 animate-gradient-x rounded-lg p-10 font-montserrat mx-10">'
              }
            </code>
          </pre>
          <pre data-prefix="673">
            <code>
              {'                    <h1 className="font-bold">Cornucopia</h1>'}
            </code>
          </pre>
          <pre data-prefix="674">
            <code>
              {
                '                    <img className="w-1/2 my-5" src={Cornucopia} />'
              }
            </code>
          </pre>
          <pre data-prefix="675">
            <code>{"                    <p>"}</code>
          </pre>
          <pre data-prefix="676">
            <code>
              {
                "                      Project Cornucopia PythonDjangoReactTailwindcssOpenCV"
              }
            </code>
          </pre>
          <pre data-prefix="677">
            <code>
              {
                "                      Cornucopia is an app which helps users manage kitchen"
              }
            </code>
          </pre>
          <pre data-prefix="678">
            <code>
              {
                "                      pantries and minimize food waste Users are able to add"
              }
            </code>
          </pre>
          <pre data-prefix="679">
            <code>
              {
                "                      grocery items to their pantry, and Cornucopia will notify"
              }
            </code>
          </pre>
          <pre data-prefix="680">
            <code>
              {
                "                      them when their items are expired. Pantry items can be"
              }
            </code>
          </pre>
          <pre data-prefix="681">
            <code>
              {
                "                      added individually, or in batches by scanning grocery"
              }
            </code>
          </pre>
          <pre data-prefix="682">
            <code>
              {
                "                      receipts. Additionally, users will be notified if any food"
              }
            </code>
          </pre>
          <pre data-prefix="683">
            <code>
              {
                "                      item within their pantry has been recalled for saftey"
              }
            </code>
          </pre>
          <pre data-prefix="684">
            <code>
              {
                "                      reasons. Cornucopia also is able to scan user pantry, and"
              }
            </code>
          </pre>
          <pre data-prefix="685">
            <code>
              {
                "                      suggest meals which use items that may expire soon."
              }
            </code>
          </pre>
          <pre data-prefix="686">
            <code>{"                    </p>"}</code>
          </pre>
          <pre data-prefix="687">
            <code>{'                    <a href="/project-cornucopia">'}</code>
          </pre>
          <pre data-prefix="688">
            <code>
              {
                '                      <button className="btn bg-green-500 text-white mt-10">'
              }
            </code>
          </pre>
          <pre data-prefix="689">
            <code>{"                        Learn More"}</code>
          </pre>
          <pre data-prefix="690">
            <code>{"                      </button>"}</code>
          </pre>
          <pre data-prefix="691">
            <code>{"                    </a>"}</code>
          </pre>
          <pre data-prefix="692">
            <code>{"                  </div>"}</code>
          </pre>
          <pre data-prefix="693">
            <code>{"                </Popup>"}</code>
          </pre>
          <pre data-prefix="694">
            <code>{"                <Popup"}</code>
          </pre>
          <pre data-prefix="695">
            <code>{"                  trigger={"}</code>
          </pre>
          <pre data-prefix="696">
            <code>
              {'                    <button className="w-full text-left">'}
            </code>
          </pre>
          <pre data-prefix="697">
            <code>{"                      <Project3 />"}</code>
          </pre>
          <pre data-prefix="698">
            <code>{"                    </button>"}</code>
          </pre>
          <pre data-prefix="699">
            <code>{"                  }"}</code>
          </pre>
          <pre data-prefix="700">
            <code>{"                  modal"}</code>
          </pre>
          <pre data-prefix="701">
            <code>{"                >"}</code>
          </pre>
          <pre data-prefix="702">
            <code>
              {
                '                  <div className="grid place-items-center bg-gradient-to-br from-slate-700 to-blue-900 via-gray-700 animate-gradient-x rounded-lg p-10 font-montserrat mx-10">'
              }
            </code>
          </pre>
          <pre data-prefix="703">
            <code>
              {'                    <h1 className="font-bold">Hercules</h1>'}
            </code>
          </pre>
          <pre data-prefix="704">
            <code>{"                    <p>"}</code>
          </pre>
          <pre data-prefix="705">
            <code>
              {
                "                      Hercules is a project created during NwHacks 2022 by"
              }
            </code>
          </pre>
          <pre data-prefix="706">
            <code>
              {
                "                      myself and a team of three others. Hercules is a"
              }
            </code>
          </pre>
          <pre data-prefix="707">
            <code>
              {
                '                      "gamified" health tracking app, oriented towards those who'
              }
            </code>
          </pre>
          <pre data-prefix="708">
            <code>
              {
                "                      struggle to maintain a healthy lifestyle. The app is"
              }
            </code>
          </pre>
          <pre data-prefix="709">
            <code>
              {
                "                      engineered to incentivize users to work out, eat well, and"
              }
            </code>
          </pre>
          <pre data-prefix="710">
            <code>
              {
                "                      develop healthy habits by rewarding them for fulfilling"
              }
            </code>
          </pre>
          <pre data-prefix="711">
            <code>
              {
                "                      their fitness plans, or questlines, which are comprised"
              }
            </code>
          </pre>
          <pre data-prefix="712">
            <code>
              {
                "                      of different tasks. Each user has a customizable avatar,"
              }
            </code>
          </pre>
          <pre data-prefix="713">
            <code>
              {
                '                      and upon completion of certain goals "quests", users will'
              }
            </code>
          </pre>
          <pre data-prefix="714">
            <code>
              {
                "                      earn gold and experience points that can be used to buy"
              }
            </code>
          </pre>
          <pre data-prefix="715">
            <code>
              {
                "                      items at the shop and increase their character's stats. As"
              }
            </code>
          </pre>
          <pre data-prefix="716">
            <code>
              {
                "                      a proof of concept developed over the course of 24 hours,"
              }
            </code>
          </pre>
          <pre data-prefix="717">
            <code>
              {
                "                      it is relatively simple, however a simple algorithm was"
              }
            </code>
          </pre>
          <pre data-prefix="718">
            <code>
              {
                "                      developed to make it harder to earn rewards with"
              }
            </code>
          </pre>
          <pre data-prefix="719">
            <code>
              {"                      inconsistent or unhealthy progress."}
            </code>
          </pre>
          <pre data-prefix="720">
            <code>{"                    </p>"}</code>
          </pre>
          <pre data-prefix="721">
            <code>{'                    <a href="/hercules">'}</code>
          </pre>
          <pre data-prefix="722">
            <code>
              {
                '                      <button className="btn bg-green-500 text-white mt-10">'
              }
            </code>
          </pre>
          <pre data-prefix="723">
            <code>{"                        Learn More"}</code>
          </pre>
          <pre data-prefix="724">
            <code>{"                      </button>"}</code>
          </pre>
          <pre data-prefix="725">
            <code>{"                    </a>"}</code>
          </pre>
          <pre data-prefix="726">
            <code>{"                  </div>"}</code>
          </pre>
          <pre data-prefix="727">
            <code>{"                </Popup>"}</code>
          </pre>
          <pre data-prefix="728">
            <code>{"              </div>"}</code>
          </pre>
          <pre data-prefix="729">
            <code>{"            </div>"}</code>
          </pre>
          <pre data-prefix="730">
            <code>{"          </article>"}</code>
          </pre>
          <pre data-prefix="731">
            <code>{"        </div>"}</code>
          </pre>
          <pre data-prefix="732">
            <code>{"      </main>"}</code>
          </pre>
          <pre data-prefix="733">
            <code>{"    </>"}</code>
          </pre>
          <pre data-prefix="734">
            <code>{"  );"}</code>
          </pre>
          <pre data-prefix="735">
            <code>{"}"}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
