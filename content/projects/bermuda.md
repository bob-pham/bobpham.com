---
title: Bermuda
description: Underwater rogue-like with custom game engine 
link: bermuda 
startDate: 10-01-2024
endDate: 12-01-2024
tech: 
- C++
- OpenGL
- SDL2
logo: /projects/bermuda/starting_screen.png
demoVideo: 
gitLink: https://github.com/bob-pham/Hercules
demoImages:
- /projects/bermuda/tutorial.png
- /projects/bermuda/level1.png
- /projects/bermuda/boss1.png
- /projects/bermuda/level2.png
- /projects/bermuda/boss2.png
- /projects/bermuda/boss2-2.png
- /projects/bermuda/level3.png
- /projects/bermuda/boss-1.png
- /projects/bermuda/boss-2.png
---

An expedition team never returned from exploring an unknown area at the bottom
of the ocean. You are dispatched to go investigate. While exploring in your
submarine, you’re attacked by a mysterious creature and the submarine is torn
apart. You find yourself surrounded by the debris of the expedition team’s
submarines and equipment trailing off towards a cave-like entrance

All you have left is an oxygen tank, an atmospheric diving suit, and a harpoon
gun to explore through these caves and figure out what happened.
  
Bermuda is an underwater roguelike where survival hinges on managing your
oxygen supply. Dive deep into procedurally generated challenges, evade dangers,
and explore the depths. Built entirely on a custom game engine developed from
scratch using C++, OpenGL, CMake, and SDL2.

### Credits:
- Andy Li [@andyyyli](https://github.com/AndyyyLi)
- Bob Pham [@bob-pham](https://github.com/bob-pham)
- Brandon Yih [@byih221](https://github.com/byih221)
- Caeleb Koharjo [@caelebk](https://github.com/caelebk)
- David Sopheap [@gmdvdsp](https://github.com/gmdvdsp)
- Tony Zhang [@TonyZhang1112](https://github.com/TonyZhang1112)

# Requirements
Most of the requirements have been included as header libaries. The follow may
or may not need to be installed

### General requirements:
- `CMake`
- `C++14`

### Windows
Hitting `Build` within Visual Studio should be enough, but otherwise you may
have to install [C++ CMake Tools for
Windows](https://learn.microsoft.com/en-us/cpp/build/cmake-projects-in-visual-studio#installation)

### MacOS
The following packages (may be) required:
- `pkg-config`
- `glfw3`
- `sdl2`
- `sdl2_mixer`

### Linux
The following packages are required:
- `ibglfw3-dev`
- `libsdl2-dev`
- `libsdl2-mixer-dev`

# Building
### Windows
Clone the repository, then open and compile using Visual Studio's tools.

### MacOS/Linux
1. Run CMake
```shell
cmake .
```
2. Build the Game
```shell
make
```
3. Run the game
```shell
./bermuda
```

* Not for MacOS: Do not build/run using Rosetta
