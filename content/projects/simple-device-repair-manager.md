---
title: Device Repair Manager
description: Desktop application that streamlines the computer repair process by keeping track of progress and parts
link: simple-device-repair-manager 
startDate: 10-01-2021
endDate: 12-01-2021
tech: 
- Java
logo: /projects/device_repair_manager/homescreen_showcase.png
demoVideo: akGHhbT7Yq4
gitLink: https://github.com/bob-pham/simple-device-repair-manager
demoImages:
- /projects/device_repair_manager/desktop_showcase.png
- /projects/device_repair_manager/homescreen_showcase.png
- /projects/device_repair_manager/laptop_showcase.png
- /projects/device_repair_manager/phone_showcase.png
- /projects/device_repair_manager/view_showcase.png
---

This is a simple desktop application that assists in Desktop/Laptop/Phone
repair/refurbish process. This application helps streamline the repair process
by keeping track of device repair status and parts, which can be especially
helpful when working in a team setting. All devices are indexed with a unique
numeric ID, and has search features that can search your device inventory and
returns ID's of devices with desired attributes.

#### Features

**Specific to the repair process:**
- Assign each device a numerical code that can be easily indexed and searched
- Track brand and devices of the device
- Track device repair progress
- General device parts (Contains hard-drive, hard-drive caddie, battery, ram, etc.)
- Tracks Other specific condition notes (unique to each device)

**Collaborative features:**
- Tracks who have worked on the device
- List of devices that are still being worked on
- List of completed devices

**Additional miscellaneous features:**
- Search features for similar devices, (brand, cpu, gpu)

### Development + Implementation

The simple device repair manager project demonstrates my understanding of
object-oriented design, particularly regarding polymorphism and inheritance.

The program's core functionality revolves around the three devices, desktops,
laptops, and phones. All three inherit from an abstract 'device' class, which
encapsulates core functionality that all three instruments share, such as:
powering, storage size, operating system, etc. An interface was created to
represent mobile devices, also having a battery and screen. Similar
abstractions were created with the Java Swing GUI to manage inputs to the
device data fields. A full UML of the project can be seen here:

![uml](/projects/device_repair_manager/UML_Design_Diagram.png)

Data persistence was implemented by parsing the objects and storing them in a
single JSON. Upon entry into the program, users choose to load an existing JSON
file or create a new one.

Simple device repair manager was created using a test-driven development
process done using JUnit. The backend code boasts a 100% code coverage score;
however, unit tests were not made for the frontend code due to complexity and
time constraints.
