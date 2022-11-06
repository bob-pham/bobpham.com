import ProjectHeader from "./ProjectHeader";
import pomodoro from "../../assets/images/pomodoro.png";

const tech = ["Bash"];

export default function CliPomodoro() {
  return (
    <main className="grid grid-cols-1 min-h-screen bg-gray-900 animate-gradient-y font-montserrat text-white max-w-screen">
      <ProjectHeader name="CLI Pomodoro App" tech={tech} logo={pomodoro} gitLink="https://github.com/bob-pham/CLI-Pomodoro" />
      <div className="flex flex-col place-self-center w-fit sm:p-10 max-w-screen">
        <p>
          A simple bash pomodoro script for productivity. Feature a clean
          minimal CLI UI, with progress bar and progress %
          <br />
          <br />
          Use:
          <br />
          Can be initiated with the following commands:
        </p>
        <ul className="list-disc">
          <li>
            <strong>./pomodoro "d" </strong> | for default settings (25min work
            interval, 5min break, 20min long break)
          </li>
          <li>
            <strong>
              ./pomodoro [work interval (min)] [break interval (mins)] [long
              break interval (mins)]{" "}
            </strong>
          </li>
          <li>
            <strong>./pomodoro</strong> | Will prompt you to enter in
            work/break/long break intervals
          </li>
          <li>
            Default settings can be changed by editting global DEFAULT variables
          </li>
          <li>
            Intervals can be changed during breaks once a pomodoro sesion has
            started
          </li>
        </ul>
      </div>
      <div className="flex flex-col w-1/2 place-self-center mb-10 ">
        <h1 className="text-xl mt-10 text-center">
          Development + Implementation
        </h1>
        <div className="divider"></div>
        <p>
          During my time coding in the terminal with NeoVim, I thought that it
          would be nice to have my pomodoro app also run within the terminal.
          <br />
          <br />
          Thus I created a simple CLI pomodoro app with bash, so that it could
          be used within any linux distro without different exports
        </p>
      </div>
      <div className="mockup-code w-3/4 place-self-center mb-20">
        <pre data-prefix="1">
          <code>{"#!/bin/bash"}</code>
        </pre>
        <pre data-prefix="2">
          <code>{""}</code>
        </pre>
        <pre data-prefix="3">
          <code>{"# Bash Pomodoro Timer by Bob Pham"}</code>
        </pre>
        <pre data-prefix="4">
          <code>{""}</code>
        </pre>
        <pre data-prefix="5">
          <code>
            {
              "# Inputs to be inputed as either 'd' for default or 'timer_length' 'break_length'"
            }
          </code>
        </pre>
        <pre data-prefix="6">
          <code>{""}</code>
        </pre>
        <pre data-prefix="7">
          <code>{""}</code>
        </pre>
        <pre data-prefix="8">
          <code>{"# Time in minutes for readability"}</code>
        </pre>
        <pre data-prefix="9">
          <code>{"DEFAULT_LENGTH=25"}</code>
        </pre>
        <pre data-prefix="10">
          <code>{"DEFAULT_BREAK=5"}</code>
        </pre>
        <pre data-prefix="11">
          <code>{"DEFAULT_LONG_BREAK=20"}</code>
        </pre>
        <pre data-prefix="12">
          <code>{"DEFAULT_FOR_LONG_BREAK=4"}</code>
        </pre>
        <pre data-prefix="13">
          <code>{'DEFAULT_TIMER_CHARACTER="d"'}</code>
        </pre>
        <pre data-prefix="14">
          <code>{'DEFAULT_BREAK_CHARACTER="s"'}</code>
        </pre>
        <pre data-prefix="15">
          <code>{"TIMER_LENGTH=1"}</code>
        </pre>
        <pre data-prefix="16">
          <code>{"BREAK_LENGTH=1"}</code>
        </pre>
        <pre data-prefix="17">
          <code>{"LONG_BREAK=1"}</code>
        </pre>
        <pre data-prefix="18">
          <code>{"COUNT=1"}</code>
        </pre>
        <pre data-prefix="19">
          <code>{""}</code>
        </pre>
        <pre data-prefix="20">
          <code>{"function timer () {"}</code>
        </pre>
        <pre data-prefix="21">
          <code>{"	SLEEP_TIME=$(( $TIMER_LENGTH/100 ))"}</code>
        </pre>
        <pre data-prefix="22">
          <code>{""}</code>
        </pre>
        <pre data-prefix="23">
          <code>{"	for (( i=1; i <= 99 ; i++ ))"}</code>
        </pre>
        <pre data-prefix="24">
          <code>{"	do "}</code>
        </pre>
        <pre data-prefix="25">
          <code>{'		echo -n "Pomodoro in Progress... ["'}</code>
        </pre>
        <pre data-prefix="26">
          <code>{"		"}</code>
        </pre>
        <pre data-prefix="27">
          <code>{"		for (( j=0; j<=$i; j++ ))"}</code>
        </pre>
        <pre data-prefix="28">
          <code>{"		do"}</code>
        </pre>
        <pre data-prefix="29">
          <code>{'			echo -n "█"'}</code>
        </pre>
        <pre data-prefix="30">
          <code>{"		done"}</code>
        </pre>
        <pre data-prefix="31">
          <code>{"	"}</code>
        </pre>
        <pre data-prefix="32">
          <code>{"		for (( j=$i; j<=99;j++ ))"}</code>
        </pre>
        <pre data-prefix="33">
          <code>{"		do"}</code>
        </pre>
        <pre data-prefix="34">
          <code>{'			echo -n " "'}</code>
        </pre>
        <pre data-prefix="35">
          <code>{"		done"}</code>
        </pre>
        <pre data-prefix="36">
          <code>{""}</code>
        </pre>
        <pre data-prefix="37">
          <code>{'		echo -n "]" $i "% Done" $\'\\r\''}</code>
        </pre>
        <pre data-prefix="38">
          <code>{"		sleep $SLEEP_TIME"}</code>
        </pre>
        <pre data-prefix="39">
          <code>{"	done"}</code>
        </pre>
        <pre data-prefix="40">
          <code>{""}</code>
        </pre>
        <pre data-prefix="41">
          <code>
            {"	REMAINDER=$(( $(( $TIMER_LENGTH%100 )) + $SLEEP_TIME ))"}
          </code>
        </pre>
        <pre data-prefix="42">
          <code>{"	"}</code>
        </pre>
        <pre data-prefix="43">
          <code>{'	echo -n "Pomodoro in Progress... ["'}</code>
        </pre>
        <pre data-prefix="44">
          <code>{"	"}</code>
        </pre>
        <pre data-prefix="45">
          <code>{"	for (( j=0; j<=99; j++ ))"}</code>
        </pre>
        <pre data-prefix="46">
          <code>{"	do"}</code>
        </pre>
        <pre data-prefix="47">
          <code>{'		echo -n "█"'}</code>
        </pre>
        <pre data-prefix="48">
          <code>{"	done"}</code>
        </pre>
        <pre data-prefix="49">
          <code>{"	"}</code>
        </pre>
        <pre data-prefix="50">
          <code>{"	echo -n \" ] 99% Done\" $'\\r'"}</code>
        </pre>
        <pre data-prefix="51">
          <code>{"	sleep $REMAINDER"}</code>
        </pre>
        <pre data-prefix="52">
          <code>{"	"}</code>
        </pre>
        <pre data-prefix="53">
          <code>{'	echo -n "Pomodoro in Progress... ["'}</code>
        </pre>
        <pre data-prefix="54">
          <code>{""}</code>
        </pre>
        <pre data-prefix="55">
          <code>{"	for (( j=0; j<=100; j++ ))"}</code>
        </pre>
        <pre data-prefix="56">
          <code>{"	do"}</code>
        </pre>
        <pre data-prefix="57">
          <code>{'		echo -n "█"'}</code>
        </pre>
        <pre data-prefix="58">
          <code>{"	done"}</code>
        </pre>
        <pre data-prefix="59">
          <code>{"	"}</code>
        </pre>
        <pre data-prefix="60">
          <code>{"	echo -n \"] 100% Done!\" $'\\r'"}</code>
        </pre>
        <pre data-prefix="61">
          <code>{"	"}</code>
        </pre>
        <pre data-prefix="62">
          <code>{"	COUNT=$(( $COUNT+1 ))"}</code>
        </pre>
        <pre data-prefix="63">
          <code>{"	pomodoro_break_prompt"}</code>
        </pre>
        <pre data-prefix="64">
          <code>{"}"}</code>
        </pre>
        <pre data-prefix="65">
          <code>{""}</code>
        </pre>
        <pre data-prefix="66">
          <code>{"function break_timer () {"}</code>
        </pre>
        <pre data-prefix="67">
          <code>{"	SLEEP_TIME=$(( $1/100 ))"}</code>
        </pre>
        <pre data-prefix="68">
          <code>{""}</code>
        </pre>
        <pre data-prefix="69">
          <code>{"	for (( i=1; i <= 99 ; i++ ))"}</code>
        </pre>
        <pre data-prefix="70">
          <code>{"	do "}</code>
        </pre>
        <pre data-prefix="71">
          <code>{'		echo -n "Break in Progress... ["'}</code>
        </pre>
        <pre data-prefix="72">
          <code>{"		"}</code>
        </pre>
        <pre data-prefix="73">
          <code>{"		for (( j=0; j<=$i; j++ ))"}</code>
        </pre>
        <pre data-prefix="74">
          <code>{"		do"}</code>
        </pre>
        <pre data-prefix="75">
          <code>{'			echo -n "█"'}</code>
        </pre>
        <pre data-prefix="76">
          <code>{"		done"}</code>
        </pre>
        <pre data-prefix="77">
          <code>{"	"}</code>
        </pre>
        <pre data-prefix="78">
          <code>{"		for (( j=$i; j<=99;j++ ))"}</code>
        </pre>
        <pre data-prefix="79">
          <code>{"		do"}</code>
        </pre>
        <pre data-prefix="80">
          <code>{'			echo -n " "'}</code>
        </pre>
        <pre data-prefix="81">
          <code>{"		done"}</code>
        </pre>
        <pre data-prefix="82">
          <code>{""}</code>
        </pre>
        <pre data-prefix="83">
          <code>{'		echo -n "]" $i "% Done" $\'\\r\''}</code>
        </pre>
        <pre data-prefix="84">
          <code>{"		sleep $SLEEP_TIME"}</code>
        </pre>
        <pre data-prefix="85">
          <code>{"	done"}</code>
        </pre>
        <pre data-prefix="86">
          <code>{""}</code>
        </pre>
        <pre data-prefix="87">
          <code>{"	REMAINDER=$(( $(( $1%100 )) + $SLEEP_TIME ))"}</code>
        </pre>
        <pre data-prefix="88">
          <code>{"	"}</code>
        </pre>
        <pre data-prefix="89">
          <code>{'	echo -n "Break in Progress... ["'}</code>
        </pre>
        <pre data-prefix="90">
          <code>{"	"}</code>
        </pre>
        <pre data-prefix="91">
          <code>{"	for (( j=0; j<=99; j++ ))"}</code>
        </pre>
        <pre data-prefix="92">
          <code>{"	do"}</code>
        </pre>
        <pre data-prefix="93">
          <code>{'		echo -n "█"'}</code>
        </pre>
        <pre data-prefix="94">
          <code>{"	done"}</code>
        </pre>
        <pre data-prefix="95">
          <code>{"	"}</code>
        </pre>
        <pre data-prefix="96">
          <code>{"	echo -n \" ] 99% Done\" $'\\r'"}</code>
        </pre>
        <pre data-prefix="97">
          <code>{"	sleep $REMAINDER"}</code>
        </pre>
        <pre data-prefix="98">
          <code>{"	"}</code>
        </pre>
        <pre data-prefix="99">
          <code>{'	echo -n "Break in Progress... ["'}</code>
        </pre>
        <pre data-prefix="100">
          <code>{""}</code>
        </pre>
        <pre data-prefix="101">
          <code>{"	for (( j=0; j<=100; j++ ))"}</code>
        </pre>
        <pre data-prefix="102">
          <code>{"	do"}</code>
        </pre>
        <pre data-prefix="103">
          <code>{'		echo -n "█"'}</code>
        </pre>
        <pre data-prefix="104">
          <code>{"	done"}</code>
        </pre>
        <pre data-prefix="105">
          <code>{"	"}</code>
        </pre>
        <pre data-prefix="106">
          <code>{"	echo -n \"] 100% Done!\" $'\\r'"}</code>
        </pre>
        <pre data-prefix="107">
          <code>{""}</code>
        </pre>
        <pre data-prefix="108">
          <code>{"	clear"}</code>
        </pre>
        <pre data-prefix="109">
          <code>{"	pomodoro_start_prompt"}</code>
        </pre>
        <pre data-prefix="110">
          <code>{"}"}</code>
        </pre>
        <pre data-prefix="111">
          <code>{""}</code>
        </pre>
        <pre data-prefix="112">
          <code>{"function pomodoro_start_prompt () {"}</code>
        </pre>
        <pre data-prefix="113">
          <code>{"	while true"}</code>
        </pre>
        <pre data-prefix="114">
          <code>{"	do"}</code>
        </pre>
        <pre data-prefix="115">
          <code>
            {"		read -p \"Enter 's' to start your pomodoro timer		\" INPUT"}
          </code>
        </pre>
        <pre data-prefix="116">
          <code>{""}</code>
        </pre>
        <pre data-prefix="117">
          <code>{"		if [ $INPUT == $DEFAULT_BREAK_CHARACTER ]"}</code>
        </pre>
        <pre data-prefix="118">
          <code>{"		then"}</code>
        </pre>
        <pre data-prefix="119">
          <code>{"			break"}</code>
        </pre>
        <pre data-prefix="120">
          <code>{"		fi "}</code>
        </pre>
        <pre data-prefix="121">
          <code>{""}</code>
        </pre>
        <pre data-prefix="122">
          <code>{'		echo "Invalid Input"'}</code>
        </pre>
        <pre data-prefix="123">
          <code>{"	done"}</code>
        </pre>
        <pre data-prefix="124">
          <code>{""}</code>
        </pre>
        <pre data-prefix="125">
          <code>{"	clear"}</code>
        </pre>
        <pre data-prefix="126">
          <code>{"	timer"}</code>
        </pre>
        <pre data-prefix="127">
          <code>{"}"}</code>
        </pre>
        <pre data-prefix="128">
          <code>{""}</code>
        </pre>
        <pre data-prefix="129">
          <code>{"function pomodoro_break_prompt () {"}</code>
        </pre>
        <pre data-prefix="130">
          <code>{"	clear"}</code>
        </pre>
        <pre data-prefix="131">
          <code>{""}</code>
        </pre>
        <pre data-prefix="132">
          <code>{"	echo $COUNT"}</code>
        </pre>
        <pre data-prefix="133">
          <code>{""}</code>
        </pre>
        <pre data-prefix="134">
          <code>{"	while true"}</code>
        </pre>
        <pre data-prefix="135">
          <code>{"	do"}</code>
        </pre>
        <pre data-prefix="136">
          <code>{"		read -p \"Enter 's' to start your break		\" INPUT"}</code>
        </pre>
        <pre data-prefix="137">
          <code>{""}</code>
        </pre>
        <pre data-prefix="138">
          <code>{"		if [ $INPUT == $DEFAULT_BREAK_CHARACTER ]"}</code>
        </pre>
        <pre data-prefix="139">
          <code>{"		then"}</code>
        </pre>
        <pre data-prefix="140">
          <code>{"			break"}</code>
        </pre>
        <pre data-prefix="141">
          <code>{"		fi "}</code>
        </pre>
        <pre data-prefix="142">
          <code>{""}</code>
        </pre>
        <pre data-prefix="143">
          <code>{'		echo "Invalid Input"'}</code>
        </pre>
        <pre data-prefix="144">
          <code>{"	done"}</code>
        </pre>
        <pre data-prefix="145">
          <code>{""}</code>
        </pre>
        <pre data-prefix="146">
          <code>{"	if [ $COUNT -eq $DEFAULT_FOR_LONG_BREAK ]"}</code>
        </pre>
        <pre data-prefix="147">
          <code>{"	then"}</code>
        </pre>
        <pre data-prefix="148">
          <code>{"		COUNT=1"}</code>
        </pre>
        <pre data-prefix="149">
          <code>{"		clear"}</code>
        </pre>
        <pre data-prefix="150">
          <code>{'		echo "RUNNING"'}</code>
        </pre>
        <pre data-prefix="151">
          <code>{"		break_timer $LONG_BREAK"}</code>
        </pre>
        <pre data-prefix="152">
          <code>{"	else"}</code>
        </pre>
        <pre data-prefix="153">
          <code>{"		clear"}</code>
        </pre>
        <pre data-prefix="154">
          <code>{"		break_timer $BREAK_LENGTH"}</code>
        </pre>
        <pre data-prefix="155">
          <code>{"	fi"}</code>
        </pre>
        <pre data-prefix="156">
          <code>{"}"}</code>
        </pre>
        <pre data-prefix="157">
          <code>{""}</code>
        </pre>
        <pre data-prefix="158">
          <code>{"function pomodoro_init () {"}</code>
        </pre>
        <pre data-prefix="159">
          <code>
            {
              "	read -p \"Enter 'd' for default time or 'timer_length' 'break_length'		\" VAR1 VAR2 VAR3"
            }
          </code>
        </pre>
        <pre data-prefix="160">
          <code>{""}</code>
        </pre>
        <pre data-prefix="161">
          <code>{"	if [[ $VAR1 == $DEFAULT_TIMER_CHARACTER ]]"}</code>
        </pre>
        <pre data-prefix="162">
          <code>{"	then"}</code>
        </pre>
        <pre data-prefix="163">
          <code>{"		TIMER_LENGTH=$(($DEFAULT_LENGTH*60))"}</code>
        </pre>
        <pre data-prefix="164">
          <code>{"		BREAK_LENGTH=$(($DEFAULT_BREAK*60))"}</code>
        </pre>
        <pre data-prefix="165">
          <code>{"		LONG_BREAK=$(($DEFAULT_LONG_BREAK*60))"}</code>
        </pre>
        <pre data-prefix="166">
          <code>{"	else"}</code>
        </pre>
        <pre data-prefix="167">
          <code>{"		TIMER_LENGTH= $(($VAR1*60))"}</code>
        </pre>
        <pre data-prefix="168">
          <code>{"		BREAK_LENGTH=$(($VAR2*60))"}</code>
        </pre>
        <pre data-prefix="169">
          <code>{"		LONG_BREAK=$(($VAR3*60))"}</code>
        </pre>
        <pre data-prefix="170">
          <code>{"	fi"}</code>
        </pre>
        <pre data-prefix="171">
          <code>{""}</code>
        </pre>
        <pre data-prefix="172">
          <code>{"	clear"}</code>
        </pre>
        <pre data-prefix="173">
          <code>{"	pomodoro_start_prompt"}</code>
        </pre>
        <pre data-prefix="174">
          <code>{"}"}</code>
        </pre>
        <pre data-prefix="175">
          <code>{""}</code>
        </pre>
        <pre data-prefix="176">
          <code>{""}</code>
        </pre>
        <pre data-prefix="177">
          <code>{"if [[ $1 == $DEFAULT_TIMER_CHARACTER ]]"}</code>
        </pre>
        <pre data-prefix="178">
          <code>{"then"}</code>
        </pre>
        <pre data-prefix="179">
          <code>{"	TIMER_LENGTH=$(($DEFAULT_LENGTH*60))"}</code>
        </pre>
        <pre data-prefix="180">
          <code>{"	BREAK_LENGTH=$(($DEFAULT_BREAK*60))"}</code>
        </pre>
        <pre data-prefix="181">
          <code>{"	LONG_BREAK=$(($DEFAULT_LONG_BREAK*60))"}</code>
        </pre>
        <pre data-prefix="182">
          <code>{"	timer"}</code>
        </pre>
        <pre data-prefix="183">
          <code>{'elif [[ "$1" -eq 0 ]] && [[ "$2" -eq 0 ]];'}</code>
        </pre>
        <pre data-prefix="184">
          <code>{"then"}</code>
        </pre>
        <pre data-prefix="185">
          <code>{"	pomodoro_init"}</code>
        </pre>
        <pre data-prefix="186">
          <code>{"else "}</code>
        </pre>
        <pre data-prefix="187">
          <code>{"	TIMER_LENGTH=$(($1*60))"}</code>
        </pre>
        <pre data-prefix="188">
          <code>{"	BREAK_LENGTH=$(($2*60))"}</code>
        </pre>
        <pre data-prefix="189">
          <code>{"	LONG_BREAK=$(($3*60))"}</code>
        </pre>
        <pre data-prefix="190">
          <code>{"	timer"}</code>
        </pre>
        <pre data-prefix="191">
          <code>{"fi"}</code>
        </pre>
      </div>
    </main>
  );
}
