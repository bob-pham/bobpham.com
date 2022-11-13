import { useRef } from 'react';
import Image from 'next/image';

import ProjectHeader from '../components/ProjectHeader';

import HomeScreenShowCase from '../public/images/device_repair_manager/homescreen_showcase.png';
import DesktopShowCase from '../public/images/device_repair_manager/desktop_showcase.png';
import LaptopShowCase from '../public/images/device_repair_manager/laptop_showcase.png';
import PhoneShowCase from '../public/images/device_repair_manager/phone_showcase.png';
import SDRManager from '../public/images/device_repair_manager/simple_device_repair_manager.png';
import UML from '../public/images/device_repair_manager/UML_design_diagram.png';
import View from '../public/images/device_repair_manager/view_showcase.png';

const tech = ['Java', 'Java Swing', 'JUnit'];

export default function SimpleDeviceRepairManager() {
  const development = useRef(null);
  const uml = useRef(null);
  const pictures = useRef(null);

  return (
    <main className="grid grid-cols-1 min-h-screen bg-gray-900 animate-gradient-y font-montserrat text-white max-w-screen">
      <ProjectHeader
        name="Simple Device Repair Manager"
        logo={SDRManager}
        tech={tech}
        gitLink="https://github.com/bob-pham/simple-device-repair-manager"
        demo="akGHhbT7Yq4"
      />
      <div className="grid place-self-center w-11/12 text-white mb-10 max-w-screen">
        <p>
          This is a simple desktop application that assists in
          Desktop/Laptop/Phone repair/refurbish process. This application helps
          streamline the repair process by keeping track of device repair status
          and parts, which can be especially helpful when working in a team
          setting. A comprehensive list of features is available on GitHub. All
          devices are indexed with a unique numeric ID, and has search features
          that can search your device inventory and returns ID's of devices with
          desired attributes. A full list of features is available on the GitHub
          ReadMe
        </p>
        <div className="grid place-items-center my-5 text-green-500">
          <div className="flex flex-col w-1/2 place-self-center">
            <h1 className="text-xl text-white text-center">Page Navigation</h1>
            <div className="divider"></div>
          </div>
          <button
            className="my-2 transition ease-in-out hover:-translate-y-1 hover:bg-slate-700 hover:rounded-lg hover:px-4"
            onClick={() =>
              window.scrollTo({
                top: development.current.offsetTop,
                behaviour: 'smooth'
              })
            }
          >
            - Development + Implementation
          </button>
          <button
            className="my-2 transition ease-in-out hover:-translate-y-1 hover:bg-slate-700 hover:rounded-lg hover:px-4"
            onClick={() =>
              window.scrollTo({
                top: uml.current.offsetTop,
                behaviour: 'smooth'
              })
            }
          >
            - UML
          </button>
          <button
            className="my-2 transition ease-in-out hover:-translate-y-1 hover:bg-slate-700 hover:rounded-lg hover:px-4"
            onClick={() =>
              window.scrollTo({
                top: pictures.current.offsetTop,
                behaviour: 'smooth'
              })
            }
          >
            - Image Gallery
          </button>
        </div>
        <div className="flex flex-col w-1/2 place-self-center">
          <h1 className="text-xl mt-10 text-center" ref={development}>
            Development + Implementation
          </h1>
          <div className="divider"></div>
        </div>
        <p>
          The simple device repair manager project demonstrates my understanding
          of object-oriented design, particularly regarding polymorphism and
          inheritance.
          <br />
          <br />
          The program's core functionality revolves around the three devices,
          desktops, laptops, and phones. All three inherit from an abstract
          'device' class, which encapsulates core functionality that all three
          instruments share, such as: powering, storage size, operating system,
          etc. An interface was created to represent mobile devices, also having
          a battery and screen. Similar abstractions were created with the Java
          Swing GUI to manage inputs to the device data fields. A full UML of
          the project can be seen here:
        </p>
        <Image
          src={UML}
          className="w-3/4 place-self-center my-5"
          ref={uml}
          alt="Simple Device Manager UML"
        />
        <p>
          Data persistence was implemented by parsing the objects and storing
          them in a single JSON. Upon entry into the program, users choose to
          load an existing JSON file or create a new one.
          <br />
          <br />
          Simple device repair manager was created using a test-driven
          development process done using JUnit. The backend code boasts a 100%
          code coverage score; however, unit tests were not made for the
          frontend code due to complexity and time constraints.
        </p>
      </div>
      <div className="grid place-items-center text-green-500">
        <h1 className="text-2xl" ref={pictures}>
          Image Gallery
        </h1>
        <div className="lg:w-1/2 md:w-5/6 w-11/12">
          <div className="carousel w-full rounded-xl max-h-80">
            <div
              id="slide1"
              className="carousel-item relative w-full justify-center bg-slate-700 p-3"
            >
              <Image
                src={HomeScreenShowCase}
                className="w-auto"
                alt="Home Screen Showcase"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide6" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide2"
              className="carousel-item relative w-full justify-center bg-slate-700 p-3"
            >
              <Image
                src={DesktopShowCase}
                className="w-auto"
                alt="Desktop Showcase"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide3"
              className="carousel-item relative w-full justify-center bg-slate-700 p-3"
            >
              <Image
                src={LaptopShowCase}
                className="w-auto"
                alt="Laptop Showcase"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide4"
              className="carousel-item relative w-full justify-center bg-slate-700 p-3"
            >
              <Image
                src={PhoneShowCase}
                className="w-auto"
                alt="Phone Showcase"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide5" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide5"
              className="carousel-item relative w-full justify-center bg-slate-700 p-3"
            >
              <Image src={View} className="w-auto" alt="View Devices" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide6" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide6"
              className="carousel-item relative w-full justify-center bg-slate-700 p-3"
            >
              <Image src={SDRManager} className="w-auto" alt="SDR Manager" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide5" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-10 w-full py-2 gap-2">
        <a href="#slide1" className="btn btn-xs">
          1
        </a>
        <a href="#slide2" className="btn btn-xs">
          2
        </a>
        <a href="#slide3" className="btn btn-xs">
          3
        </a>
        <a href="#slide4" className="btn btn-xs">
          4
        </a>
        <a href="#slide5" className="btn btn-xs">
          5
        </a>
        <a href="#slide6" className="btn btn-xs">
          6
        </a>
      </div>
    </main>
  );
}
