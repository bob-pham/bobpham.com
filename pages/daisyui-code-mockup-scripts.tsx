import ProjectHeader from "../components/ProjectHeader";

const tech = ["Python"];

export default function DaisyUIMockupCode() {
  return (
    <main className="grid grid-cols-1 min-h-screen bg-gray-900 animate-gradient-y font-montserrat text-white max-w-screen">
      <ProjectHeader
        name="Daisy UI Code Mockup Script"
        tech={tech}
        gitLink="https://github.com/bob-pham/DaisyUI-Code-Markup-Scripts"
      />
      <div className="grid place-self-center w-11/12 text-white mb-10 max-w-screen">
        <p>
          Scripts used to generate HTML or JSX to be used within one of Daisy
          UI's code mockups. These can be seen used throughout my site.
          <br />
          <br />
          Also allows for syntax highlighting, which you specify in a{" "}
          <strong>.json</strong> file named <strong>config.json</strong> into
          the sample directory, which store the regex and highlight colour for
          syntax highlighting. Two categories, keywords and other. Example ReGex
          are within the configs directory of the GitHub repo, but these{" "}
          <strong>.json</strong> files need to be renamed and moved in order to
          work.
          <br />
          <br />
          Usage instructions can be found on the GitHub README, linked above.
        </p>
        <div className="flex flex-col w-1/2 place-self-center">
          <h1 className="text-xl mt-10 text-center">
            Development + Implementation
          </h1>
          <div className="divider"></div>
        </div>
        <p>
          I wanted to display the code of some of my simpler projects like
          scripts within my portfolio site. However, I did not want to include a
          screenshot of my code, since I appreciate the ability to be able to
          simply copy + paste code from a website, which that wouldn't allow. I
          was already using DaisyUI for many of the UI components, and I liked
          how the code blocks looked and so I chose to use it.
          <br />
          <br />
          This is a Python script that analyzes the code in the specified file,
          and goes line by line converting it into a format that HTML/JSX
          allows. There is also syntax highlighting, but this was chosen to be
          ommitted on this site specifically for the sake of smaller packages
          being sent to the user.
        </p>
      </div>
      <div className="mockup-code place-self-center w-3/4 my-20">
        <pre data-prefix="1">
          <code>{"import os"}</code>
        </pre>
        <pre data-prefix="2">
          <code>{"import sys"}</code>
        </pre>
        <pre data-prefix="3">
          <code>{"import re "}</code>
        </pre>
        <pre data-prefix="4">
          <code>{"import json"}</code>
        </pre>
        <pre data-prefix="5">
          <code>{""}</code>
        </pre>
        <pre data-prefix="6">
          <code>{"INVALID_INPUT = 'Invalid Input, Exitting...'"}</code>
        </pre>
        <pre data-prefix="7">
          <code>{""}</code>
        </pre>
        <pre data-prefix="8">
          <code>{"def find_and_replace_string(reg, line):"}</code>
        </pre>
        <pre data-prefix="9">
          <code>{"    for (regex, edit) in reg:"}</code>
        </pre>
        <pre data-prefix="10">
          <code>{"        words = re.findall(regex, line)"}</code>
        </pre>
        <pre data-prefix="11">
          <code>{"                "}</code>
        </pre>
        <pre data-prefix="12">
          <code>{"        visited = {}"}</code>
        </pre>
        <pre data-prefix="13">
          <code>{"        for word in words:"}</code>
        </pre>
        <pre data-prefix="14">
          <code>{"            if word not in visited.keys():"}</code>
        </pre>
        <pre data-prefix="15">
          <code>{"                visited[word] = 1"}</code>
        </pre>
        <pre data-prefix="16">
          <code>
            {
              "                line = line.replace(word, '\\\"}{<span className=\\\"' + edit + '\\\">{\\\"' + word + '\\\"}</span>}{\\\"')"
            }
          </code>
        </pre>
        <pre data-prefix="17">
          <code>{""}</code>
        </pre>
        <pre data-prefix="18">
          <code>{"    return line"}</code>
        </pre>
        <pre data-prefix="19">
          <code>{""}</code>
        </pre>
        <pre data-prefix="20">
          <code>{"def find_and_replace_word(reg, line):"}</code>
        </pre>
        <pre data-prefix="21">
          <code>{"    temp = line.split(' ')"}</code>
        </pre>
        <pre data-prefix="22">
          <code>{"    line = ''"}</code>
        </pre>
        <pre data-prefix="23">
          <code>{""}</code>
        </pre>
        <pre data-prefix="24">
          <code>{"    for word in temp:"}</code>
        </pre>
        <pre data-prefix="25">
          <code>{"        for (regex, edit) in reg:"}</code>
        </pre>
        <pre data-prefix="26">
          <code>{"            if re.search(regex, word):"}</code>
        </pre>
        <pre data-prefix="27">
          <code>
            {
              "                word = '\\\"}{<span className=\\\"' + edit + '\\\">{\\\"' + word + '\\\"}</span>}{\\\"'"
            }
          </code>
        </pre>
        <pre data-prefix="28">
          <code>{"                break"}</code>
        </pre>
        <pre data-prefix="29">
          <code>{"        line += word + ' '"}</code>
        </pre>
        <pre data-prefix="30">
          <code>{"    "}</code>
        </pre>
        <pre data-prefix="31">
          <code>{"    return line "}</code>
        </pre>
        <pre data-prefix="32">
          <code>{""}</code>
        </pre>
        <pre data-prefix="33">
          <code>{"def parse_input(fp, jsx):"}</code>
        </pre>
        <pre data-prefix="34">
          <code>{"    lines = fp.readlines()"}</code>
        </pre>
        <pre data-prefix="35">
          <code>{""}</code>
        </pre>
        <pre data-prefix="36">
          <code>{"    keywords = []"}</code>
        </pre>
        <pre data-prefix="37">
          <code>{"    other = []"}</code>
        </pre>
        <pre data-prefix="38">
          <code>{"    strings = []"}</code>
        </pre>
        <pre data-prefix="39">
          <code>{"    comments= []"}</code>
        </pre>
        <pre data-prefix="40">
          <code>{""}</code>
        </pre>
        <pre data-prefix="41">
          <code>{"    if os.path.exists('config.json'):"}</code>
        </pre>
        <pre data-prefix="42">
          <code>{"        with open('config.json', 'r') as cfg:"}</code>
        </pre>
        <pre data-prefix="43">
          <code>{"            j = json.load(cfg)"}</code>
        </pre>
        <pre data-prefix="44">
          <code>{'            keywords = j["keywords"]'}</code>
        </pre>
        <pre data-prefix="45">
          <code>{'            other = j["other"]'}</code>
        </pre>
        <pre data-prefix="46">
          <code>{'            strings = j["strings"]'}</code>
        </pre>
        <pre data-prefix="47">
          <code>{'            comments = j["comments"]'}</code>
        </pre>
        <pre data-prefix="48">
          <code>{""}</code>
        </pre>
        <pre data-prefix="49">
          <code>{"    if jsx:"}</code>
        </pre>
        <pre data-prefix="50">
          <code>{"        for i in range(len(lines)):"}</code>
        </pre>
        <pre data-prefix="51">
          <code>
            {
              "            curr = lines[i].replace('\\n', '').replace('\\\\', '\\\\\\\\').replace('\\'', '\\\\\\'').replace('\\\"', '\\\\\\\"')"
            }
          </code>
        </pre>
        <pre data-prefix="52">
          <code>{""}</code>
        </pre>
        <pre data-prefix="53">
          <code>{"            if strings:"}</code>
        </pre>
        <pre data-prefix="54">
          <code>
            {"               curr = find_and_replace_string(strings, curr) "}
          </code>
        </pre>
        <pre data-prefix="55">
          <code>{""}</code>
        </pre>
        <pre data-prefix="56">
          <code>{"            if other:"}</code>
        </pre>
        <pre data-prefix="57">
          <code>
            {"                curr = find_and_replace_word(other, curr)"}
          </code>
        </pre>
        <pre data-prefix="58">
          <code>{""}</code>
        </pre>
        <pre data-prefix="59">
          <code>{"            if keywords:"}</code>
        </pre>
        <pre data-prefix="60">
          <code>
            {"                curr = find_and_replace_word(keywords, curr)"}
          </code>
        </pre>
        <pre data-prefix="61">
          <code>{""}</code>
        </pre>
        <pre data-prefix="62">
          <code>
            {
              "            lines[i] = f'<pre data-prefix=\\\"{i + 1}\\\">' + '<code>{\\\"'+ curr + '\\\"}</code></pre>\\n'"
            }
          </code>
        </pre>
        <pre data-prefix="63">
          <code>{"    else:"}</code>
        </pre>
        <pre data-prefix="64">
          <code>{"        for i in range(len(lines)):"}</code>
        </pre>
        <pre data-prefix="65">
          <code>
            {
              "            lines[i] = f'<pre data-prefix=\\\"{i}\\\">' + '<code>'+ lines[i].replace('\\n', '') + '</code></pre>\\n'"
            }
          </code>
        </pre>
        <pre data-prefix="66">
          <code>{"    "}</code>
        </pre>
        <pre data-prefix="67">
          <code>
            {"    output_name = 'output_jsx' if jsx else 'output_html'"}
          </code>
        </pre>
        <pre data-prefix="68">
          <code>{""}</code>
        </pre>
        <pre data-prefix="69">
          <code>
            {"    with open(output_name, 'w', encoding=\"utf-8\") as out:"}
          </code>
        </pre>
        <pre data-prefix="70">
          <code>{"        out.writelines(lines)"}</code>
        </pre>
        <pre data-prefix="71">
          <code>{""}</code>
        </pre>
        <pre data-prefix="72">
          <code>{"def handle_inputs():"}</code>
        </pre>
        <pre data-prefix="73">
          <code>{"    if len(sys.argv) > 3:"}</code>
        </pre>
        <pre data-prefix="74">
          <code>{"        print(INVALID_INPUT)"}</code>
        </pre>
        <pre data-prefix="75">
          <code>{"    else:"}</code>
        </pre>
        <pre data-prefix="76">
          <code>{"        if (os.path.exists(sys.argv[1])):"}</code>
        </pre>
        <pre data-prefix="77">
          <code>
            {"            with open(sys.argv[1], 'r', encoding='utf-8') as fp:"}
          </code>
        </pre>
        <pre data-prefix="78">
          <code>{"                parse_input(fp, 'jsx' in sys.argv)"}</code>
        </pre>
        <pre data-prefix="79">
          <code>{""}</code>
        </pre>
        <pre data-prefix="80">
          <code>{"        else:"}</code>
        </pre>
        <pre data-prefix="81">
          <code>{"            print(INVALID_INPUT)"}</code>
        </pre>
        <pre data-prefix="82">
          <code>{""}</code>
        </pre>
        <pre data-prefix="83">
          <code>{"handle_inputs()"}</code>
        </pre>
      </div>
    </main>
  );
}
