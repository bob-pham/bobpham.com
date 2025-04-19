---
title: Misc Scripts
description: Random Scripts I've written that are useful
link: misc-scripts 
tech: 
- Python
---

# Daisy UI Code Mockup Script

Scripts used to generate HTML or JSX to be used within one of Daisy UI's code
mockups. These can be seen used throughout my site.

Also allows for syntax highlighting, which you specify in a .json file named
config.json into the sample directory, which store the regex and highlight
colour for syntax highlighting. Two categories, keywords and other. Example
ReGex are within the configs directory of the GitHub repo, but these .json
files need to be renamed and moved in order to work.

Usage instructions can be found on the GitHub README, linked above.

### Development + Implementation

I wanted to display the code of some of my simpler projects like scripts within
my portfolio site. However, I did not want to include a screenshot of my code,
since I appreciate the ability to be able to simply copy + paste code from a
website, which that wouldn't allow. I was already using DaisyUI for many of the
UI components, and I liked how the code blocks looked and so I chose to use it.

This is a Python script that analyzes the code in the specified file, and goes
line by line converting it into a format that HTML/JSX allows. There is also
syntax highlighting, but this was chosen to be ommitted on this site
specifically for the sake of smaller packages being sent to the user.

```python
import os
import sys
import re 
import json
INVALID_INPUT = 'Invalid Input, Exitting...'

def find_and_replace_string(reg, line):
    for (regex, edit) in reg:
        words = re.findall(regex, line)
        visited = {}

        for word in words:
            if word not in visited.keys():
                visited[word] = 1
                line = line.replace(word, '\"}{<span className=\"' + edit + '\">{\"' + word + '\"}</span>}{\"')

    return line

def find_and_replace_word(reg, line):
    temp = line.split(' ')
    line = ''

    for word in temp:
        for (regex, edit) in reg:
            if re.search(regex, word):
                word = '\"}{<span className=\"' + edit + '\">{\"' + word + '\"}</span>}{\"'
                break
        line += word + ' '

    return line 

def parse_input(fp, jsx):
    lines = fp.readlines()
    keywords = []
    other = []
    strings = []
    comments= []

    if os.path.exists('config.json'):
        with open('config.json', 'r') as cfg:
            j = json.load(cfg)
            keywords = j["keywords"]
            other = j["other"]
            strings = j["strings"]
            comments = j["comments"]

    if jsx:
        for i in range(len(lines)):
            curr = lines[i].replace('\n', '').replace('\\', '\\\\').replace('\'', '\\\'').replace('\"', '\\\"')
            if strings:
               curr = find_and_replace_string(strings, curr) 
            if other:
                curr = find_and_replace_word(other, curr)
            if keywords:
                curr = find_and_replace_word(keywords, curr)
            lines[i] = f'<pre data-prefix=\"{i + 1}\">' + '<code>{\"'+ curr + '\"}</code></pre>\n'
    else:
        for i in range(len(lines)):
            lines[i] = f'<pre data-prefix=\"{i}\">' + '<code>'+ lines[i].replace('\n', '') + '</code></pre>\n'

    output_name = 'output_jsx' if jsx else 'output_html'

    with open(output_name, 'w', encoding="utf-8") as out:
        out.writelines(lines)

def handle_inputs():
    if len(sys.argv) > 3:
        print(INVALID_INPUT)
    else:
        if (os.path.exists(sys.argv[1])):
            with open(sys.argv[1], 'r', encoding='utf-8') as fp:
                parse_input(fp, 'jsx' in sys.argv)
        else:
            print(INVALID_INPUT)

handle_inputs()
```

# Useful-R-Functions

A collection of R functions that make certain calculations simpler. Built on
top of pre-existing R functions. 

Copy + Paste into RStudio or similar

## Functions For Calculating:
 - Standard Error for Sample Proportions/Means/Independent Groups
 - Test Statistic for Sample Proportions/Means (unknown SD)/Independent Groups/Dependent Groups
 - Test Statistic for Analysis of Variance
 - Confidence intervals for Sample Proportion (with + without SE)
 - Confidence intervals for Sample Means (with + without SE, known/unknown population SD)
 - Confidence intervals for Independent Groups 
 - Margin of Error (from Confidence Level)
 - Minimum Sample size given margin of error
 - Regression Line Model Slope + Intercepts

```r
# ------------------------------------------------------------------------
# CTRL-A COPY THIS ENTIRE THING AND PASTE IT INTO R
# FUNCTIONS RELY ON ONE ANOTHER, SAFEST JUST TO COPY THE ENTIRE THING
# ------------------------------------------------------------------------

#Calculates Standard Error for Sample Proportions
se_prop <- function(phat, n) {
	return (sqrt(phat * (1-phat) / n))
}

#Calculates Standard Error for Sample Means
se_mean <- function(s, n) {
	return (s/sqrt(n))
}

#Calculates Standard Error for Independent Groups 
se_igroups <- function(s1,s2,n1,n2) {
	return (sqrt((s1^2/n1) + (s2^2/n2)))
}

#Calculates Test Statistic for Sample Proportions
ts_prop <- function(phat, p0, n) {
    return ((phat-p0)/sqrt((p0*(1-p0))/n))
}

#Calculates Test Statistic for Sample Means (if sd known use pnorm)
ts_mean <- function(ybar, mew, se, n) {
	return ((ybar - mew)/se_mean(se,n))
} 

#Calculates Test Statistic for Independent Groups
ts_igroups <- function(ybar1, ybar2, se1, se2, n1, n2, delta) {
	return ((ybar1 - ybar2 - delta)/se_igroups(se1, se2, n1, n2))
}

#Calculates Test Statistic for Independent Groups
ts_igroups <- function(ybar1, ybar2, se, delta) {
	return ((ybar1 - ybar2 - delta)/se)
}

#Calculates Test Statistic for Dependent Groups
ts_dgroups <- function(dbar, SD, n, delta) {
	return ((dbar - delta)/(SD/(sqrt(n))))
}

#Calculates Test Statistic for Analysis of Variance
ts_var <- function(mst, mse) {
	return (mst/mse)
}

#Returns proportion of population for confidence interval
ci_up_bound <- function(conf_level) {
	return((conf_level) + ((1-conf_level)/2))
}

#Prints Confidence Intervals for Sample Proportions
ci_prop <- function (phat, n, conf_level) {	
	me <- me_prop(conf_level, se_prop(phat, n))
	
	print(paste("Upper bound: ", (phat + me)))
    print(paste("Lower bound: ", (phat - me)))	
}

#Prints Confidence Intervals for Sample Proportions (se given)
ci_prop_se <- function(phat, se, conf_level) {
	me <- me_prop(conf_level, se)

	print(paste("Upper bound: ", (phat + me)))
    print(paste("Lower bound: ", (phat - me)))
}

#Prints Confidence Intervals for Sample Means 
ci_mean <-function(ybar, s, n, conf_level) {
	t_star <- qt(ci_up_bound(conf_level), n-1)
	
	int <- (t_star * se_mean(s, n))
	
	print(paste("Upper bound: ", (ybar + int)))
    print(paste("Lower bound: ", (ybar - int)))	
}

#Prints Confidence Intervals for Sample Means (se given)
ci_mean_se <-function(ybar, se, n, conf_level) {
	t_star <- qt(ci_up_bound(conf_level), n-1)
	
	int <- (t_star * se)
	
	print(paste("Upper bound: ", (ybar + int)))
    print(paste("Lower bound: ", (ybar - int)))	
}


#Prints Confidence Intervals for Sample Means with known population sd
ci_mean_known <-function(ybar, sigma, n, conf_level) {
	z_star <- qnorm(ci_up_bound(conf_level), n-1)
	
	int <- (z_star * se_mean(sigma, n))
	
	print(paste("Upper bound: ", (ybar + int)))
    print(paste("Lower bound: ", (ybar - int)))	
}

#Prints Confidence Intervals for Independent Groups 
ci_igroups <- function(y1, y2, s1, s2, n1, n2, conf_level) {
    t_star <- 0
	confidence <- ci_up_bound(conf_level)    
		
    if (n1 < n2) {
        t_star <- qt(confidence, n1-1)
    } else {
        t_star <- qt(confidence, n2-1)
    }
	
    int <- (t_star* se_igroups(s1,s2,n1,n2))
    
    print(paste("Upper bound: ", ((y1-y2) + int)))
    print(paste("Lower bound: ", ((y1-y2) - int)))
}

#Prints Confidence Intervals for Independent Groups 
ci_igroups_se <- function(difference, se, nmin, conf_level) {
    t_star <- 0
	confidence <- ci_up_bound(conf_level)    
	
    t_star <- qt(confidence, nmin-1)

	
    int <- (t_star * se)
    
    print(paste("Upper bound: ", (difference + int)))
    print(paste("Lower bound: ", (difference - int)))
}

#Prints Confidence Intervals for Independent Groups 
ci_dgroups <- function(dbar, deviation, n, conf_level) {
	t_star <- qt(ci_up_bound(conf_level), n-1)
	
	int <- (t_star * (deviation/sqrt(n)))
	
	print(paste("Upper bound: ", (dbar + int)))
    print(paste("Lower bound: ", (dbar - int)))
}

#Returns slope (b1) from r sy and sx
rl_b1 <- function(r,sy,sx) {
    return(r*sy/sx)
}

#Returns y-intercept (b0) from slope(b1), xmean, and ymean
rl_b0 <- function(xmean,ymean,slope) {
    return (ymean-(slope*xmean))
}

#Predicts y-value from x, slope and intercept
rl_predicty <- function(x, b1, b0) {
    print(paste("predicted value of y: ", ((x*b1) + b0)))
}

#Predicts x-value from y, slope and intercept
rl_predictx <- function(y,b1,b0) {
    print(paste("approximate x value of: ", ((y-b0)/b1)))
}

#Returns the margin of error
me_prop <- function(conf_level,se) {
    z_star <- qnorm(ci_up_bound(conf_level))
    return (z_star * se)
}

#Returns appropriate n 
n_prop <- function(phat, conf_level, me) {
	z_star <- qnorm(ci_up_bound(conf_level))
	
	return (((z_star^2)*phat*(1-phat))/(me^2))
}
```

# CLI Pomodoro App

A simple bash pomodoro script for productivity. Feature a clean minimal CLI UI,
with progress bar and progress %

Use:
Can be initiated with the following commands:

    ./pomodoro "d" | for default settings (25min work interval, 5min break, 20min long break)
    ./pomodoro [work interval (min)] [break interval (mins)] [long break interval (mins)]
    ./pomodoro | Will prompt you to enter in work/break/long break intervals
    Default settings can be changed by editting global DEFAULT variables
    Intervals can be changed during breaks once a pomodoro sesion has started

### Development + Implementation

During my time coding in the terminal with NeoVim, I thought that it would be
nice to have my pomodoro app also run within the terminal.

Thus I created a simple CLI pomodoro app with bash, so that it could be used
within any linux distro without different exports

```shell
#!/bin/bash

# Bash Pomodoro Timer by Bob Pham

# Inputs to be inputed as either 'd' for default or 'timer_length' 'break_length'


# Time in minutes for readability
DEFAULT_LENGTH=25
DEFAULT_BREAK=5
DEFAULT_LONG_BREAK=20
DEFAULT_FOR_LONG_BREAK=4
DEFAULT_TIMER_CHARACTER="d"
DEFAULT_BREAK_CHARACTER="s"
TIMER_LENGTH=1
BREAK_LENGTH=1
LONG_BREAK=1
COUNT=1

function timer () {
	SLEEP_TIME=$(( $TIMER_LENGTH/100 ))

	for (( i=1; i <= 99 ; i++ ))
	do 
		echo -n "Pomodoro in Progress... ["
		
		for (( j=0; j<=$i; j++ ))
		do
			echo -n "█"
		done
	
		for (( j=$i; j<=99;j++ ))
		do
			echo -n " "
		done

		echo -n "]" $i "% Done" $'\r'
		sleep $SLEEP_TIME
	done

	REMAINDER=$(( $(( $TIMER_LENGTH%100 )) + $SLEEP_TIME ))
	
	echo -n "Pomodoro in Progress... ["
	
	for (( j=0; j<=99; j++ ))
	do
		echo -n "█"
	done
	
	echo -n " ] 99% Done" $'\r'
	sleep $REMAINDER
	
	echo -n "Pomodoro in Progress... ["

	for (( j=0; j<=100; j++ ))
	do
		echo -n "█"
	done
	
	echo -n "] 100% Done!" $'\r'
	
	COUNT=$(( $COUNT+1 ))
	pomodoro_break_prompt
}

function break_timer () {
	SLEEP_TIME=$(( $1/100 ))

	for (( i=1; i <= 99 ; i++ ))
	do 
		echo -n "Break in Progress... ["
		
		for (( j=0; j<=$i; j++ ))
		do
			echo -n "█"
		done
	
		for (( j=$i; j<=99;j++ ))
		do
			echo -n " "
		done

		echo -n "]" $i "% Done" $'\r'
		sleep $SLEEP_TIME
	done

	REMAINDER=$(( $(( $1%100 )) + $SLEEP_TIME ))
	
	echo -n "Break in Progress... ["
	
	for (( j=0; j<=99; j++ ))
	do
		echo -n "█"
	done
	
	echo -n " ] 99% Done" $'\r'
	sleep $REMAINDER
	
	echo -n "Break in Progress... ["

	for (( j=0; j<=100; j++ ))
	do
		echo -n "█"
	done
	
	echo -n "] 100% Done!" $'\r'

	clear
	pomodoro_start_prompt
}

function pomodoro_start_prompt () {
	while true
	do
		read -p "Enter 's' to start your pomodoro timer		" INPUT

		if [ $INPUT == $DEFAULT_BREAK_CHARACTER ]
		then
			break
		fi 

		echo "Invalid Input"
	done

	clear
	timer
}

function pomodoro_break_prompt () {
	clear

	echo $COUNT

	while true
	do
		read -p "Enter 's' to start your break		" INPUT

		if [ $INPUT == $DEFAULT_BREAK_CHARACTER ]
		then
			break
		fi 

		echo "Invalid Input"
	done

	if [ $COUNT -eq $DEFAULT_FOR_LONG_BREAK ]
	then
		COUNT=1
		clear
		echo "RUNNING"
		break_timer $LONG_BREAK
	else
		clear
		break_timer $BREAK_LENGTH
	fi
}

function pomodoro_init () {
	read -p "Enter 'd' for default time or 'timer_length' 'break_length'		" VAR1 VAR2 VAR3

	if [[ $VAR1 == $DEFAULT_TIMER_CHARACTER ]]
	then
		TIMER_LENGTH=$(($DEFAULT_LENGTH*60))
		BREAK_LENGTH=$(($DEFAULT_BREAK*60))
		LONG_BREAK=$(($DEFAULT_LONG_BREAK*60))
	else
		TIMER_LENGTH= $(($VAR1*60))
		BREAK_LENGTH=$(($VAR2*60))
		LONG_BREAK=$(($VAR3*60))
	fi

	clear
	pomodoro_start_prompt
}


if [[ $1 == $DEFAULT_TIMER_CHARACTER ]]
then
	TIMER_LENGTH=$(($DEFAULT_LENGTH*60))
	BREAK_LENGTH=$(($DEFAULT_BREAK*60))
	LONG_BREAK=$(($DEFAULT_LONG_BREAK*60))
	timer
elif [[ "$1" -eq 0 ]] && [[ "$2" -eq 0 ]];
then
	pomodoro_init
else 
	TIMER_LENGTH=$(($1*60))
	BREAK_LENGTH=$(($2*60))
	LONG_BREAK=$(($3*60))
	timer
fi
```
