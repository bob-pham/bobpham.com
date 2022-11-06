import Youtube from "react-youtube";
import { useRef } from "react";

import logo from "../../assets/images/cornucopia/logo.png";
import ProjectHeader from "./ProjectHeader";
import monochromeProcess from "../../assets/images/cornucopia/monochromatization.png";
import finalProcess from "../../assets/images/cornucopia/finalprocess.png";
import home from "../../assets/images/cornucopia/home.png";
import mobileAddItem from "../../assets/images/cornucopia/mobile add item.png";
import homeMobile from "../../assets/images/cornucopia/homemobile.png";
import login from "../../assets/images/cornucopia/Cornucopia Login.png";

const tech = ["Python", "Django", "React", "Tailwindcss", "OpenCV"];

export default function ProjectCornucopia() {
  const imageProcessing = useRef(null);
  const textFiltering = useRef(null);
  const testingFramework = useRef(null);
  const recipeFinding = useRef(null);
  const recalls = useRef(null);
  const backFrontEnd = useRef(null);
  const pictures = useRef(null);

  return (
    <main className="grid grid-cols-1 min-h-screen bg-gray-900 animate-gradient-y font-montserrat text-white max-w-screen">
      <ProjectHeader name="Project Cornucopia" logo={logo} tech={tech} gitLink="https://github.com/bob-pham/Project-Cornucopia" demo="FyvjRFwsdPY"/>
      <div className="grid place-self-center w-11/12 text-white mb-10 max-w-screen">
        <p>
          Cornucopia is an app which helps users manage kitchen pantries and
          minimize food waste Users are able to add grocery items to their
          pantry, and Cornucopia will notify them when their items are expired.
          Pantry items can be added individually, or in batches by scanning
          grocery receipts. Additionally, users will be notified if any food
          item within their pantry has been recalled for saftey reasons.
          Cornucopia also is able to scan user pantry, and suggest meals which
          use items that may expire soon.
        </p>
        <div className="grid place-items-center my-5 text-green-500">
          <div className="flex flex-col w-1/2 place-self-center">
            <h1 className="text-xl text-white text-center">Page Navigation</h1>
            <div className="divider"></div>
          </div>
          <button
            className="my-2"
            onClick={() =>
              window.scrollTo({
                top: imageProcessing.current.offsetTop,
                behaviour: "smooth",
              })
            }
          >
            - Image Processing + Text Recognition
          </button>
          <button
            className="my-2"
            onClick={() =>
              window.scrollTo({
                top: textFiltering.current.offsetTop,
                behaviour: "smooth",
              })
            }
          >
            - Text Filtering + Correction
          </button>
          <button
            className="my-2"
            onClick={() =>
              window.scrollTo({
                top: testingFramework.current.offsetTop,
                behaviour: "smooth",
              })
            }
          >
            - Custom (accuracy) Testing Framework
          </button>
          <button
            className="my-2"
            onClick={() =>
              window.scrollTo({
                top: recipeFinding.current.offsetTop,
                behaviour: "smooth",
              })
            }
          >
            - Recipe Finding
          </button>
          <button
            className="my-2"
            onClick={() =>
              window.scrollTo({
                top: recalls.current.offsetTop,
                behaviour: "smooth",
              })
            }
          >
            - Recall Identification
          </button>
          <button
            className="my-2"
            onClick={() =>
              window.scrollTo({
                top: backFrontEnd.current.offsetTop,
                behaviour: "smooth",
              })
            }
          >
            - Backend + Frontend
          </button>
          <button
            className="my-2"
            onClick={() =>
              window.scrollTo({
                top: pictures.current.offsetTop,
                behaviour: "smooth",
              })
            }
          >
            - Image Gallery
          </button>
        </div>
        <div className="flex flex-col w-1/2 place-self-center">
          <h1 className="text-xl mt-10 text-center">
            Development + Implementation
          </h1>
          <div className="divider"></div>
          <h2
            className="text-center text-lg mb-4 text-green-500"
            ref={imageProcessing}
          >
            Image Processing + Text Recognition
          </h2>
        </div>
        <p>
          Cornucopia enables users to upload receipts to add items to their
          pantry in bulk. After uploading the image to the server, Cornucopia
          scans the receipt for grocery items, which are then sent back to the
          user to confirm. PyTesseract is the tool used for text recognition
          within each image, but because PyTesseract is able to read text from
          any image, this process can sometimes be slow. Images are optimized
          for PyTesseract by first compressing them (by downscaling), and then
          gray-scaling the image.
          <br />
          <br />
          The table below shows data based on tests developed to find the ideal
          image optimizations, where a combination of down-scaling,
          gray-scaling, and monochromatization were tested. The results are an
          average based on 40 large images. Monochromatization had significant
          performance benefits, however this was at the cost of accuracy, which
          was significantly worse due to how aggresive monochromatization can
          be.
          <br />
        </p>
        <div className="grid overflow-scroll place-items-center font-montserrat my-2 ">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Optimization</th>
                <th>Avg. Elapsed Time (Seconds)</th>
                <th>Performance Increase</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>None (Baseline)</td>
                <td>10.86</td>
                <td>-</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Down scaling</td>
                <td>1.3</td>
                <td>x8.35</td>
              </tr>
              <tr>
                <th>3</th>
                <td>Gray scaling</td>
                <td>5.4</td>
                <td>x2.01</td>
              </tr>
              <tr>
                <th>4</th>
                <td>Gray scaling + Monochrome</td>
                <td>1.54</td>
                <td>x7.05</td>
              </tr>
              <tr>
                <th>5</th>
                <td>Down + Gray scaling</td>
                <td>0.98</td>
                <td>x11.08</td>
              </tr>
              <tr>
                <th>6</th>
                <td>Gray + Down Scaling</td>
                <td>1.05</td>
                <td>x10.34</td>
              </tr>
              <tr>
                <th>7</th>
                <td>Down + Gray scaling + Monochrome</td>
                <td>0.63</td>
                <td>x17.23</td>
              </tr>
              <tr>
                <th>8</th>
                <td>Gray scaling + Monochrome + Down Scaling</td>
                <td>0.63</td>
                <td>x17.23</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <p className="my-5">
          I also played around with the idea of further cropping the image after
          down-scaling, which was accomplished by cropping the image based on
          black pixel density (after monochromatization), however this had
          negligable performance benefits, and suffered from the same accuracy
          issues.
        </p>
        <img
          className="my-5 rounded-xl place-self-center"
          src={monochromeProcess}
        />
        <p>Thus, the final process that was chosen was to down + grayscale</p>
        <img className="my-5 rounded-xl place-self-center" src={finalProcess} />
        <h2
          className="text-center text-lg mb-4 text-green-500"
          ref={textFiltering}
        >
          Text-Filtering + Correction
        </h2>
        <p>
          With the receipt scanned, the text from the receipt must be filtered,
          since not all the text is relevant to the grocery items. Luckily,
          PyTesseract is able to identify line breaks, and as grocery receipts
          generally lay out their items on separate lines, we simply need to
          identify where the grocery items are located, and then discard the
          rest of the text. For example, information after any kind of
          total/subtotal information is irrelevant to Cornucopia's function.
          <br />
          <br />
          This text is filtered using a combination of Regular Expressions, as
          well as functions which identify and remove large gaps within the text
          and special characters.
          <br />
          <br />
          Additionally, PyTesseract is not perfect and can misidentify certain
          characters, often mistaking a W for two V's (VV). As mistakes such as
          these are accumulated, they are added towards a list of common
          mistakes that Cornucopia checks for prior to sending the data back to
          the user. Some receipts also abbreviate product and company names,
          which are corrected through a similar process.
        </p>
        <h2
          className="text-center text-lg m-8 text-green-500"
          ref={testingFramework}
        >
          Custom (accuracy) Testing Framework
        </h2>
        <p>
          The consistency and performance of the above systems were thanks to
          the extensive testing that I conducted during the development of this
          project. Cornucopia was developed using test-driven development. To
          test the accuracy and performance of reading and filtering text, I
          created a custom unit testing framework on top of Python's unittest.
          The framework tests the text by comparing what is read and filtered
          with what the tester provides in a .txt document. The tester provides
          an accuracy score, and if the score calculated by the framework is
          lower than the provided score, the test fails. Accuracy is determined
          by looking at the differences in frequency of the characters that
          appear in the document and sentence structure, as well as individual
          words within the strings. Finally, in order to easily see where the
          descrepencies originate from, the framework generates a seperate .txt
          files with the descrepencies highlighted.
          <br />
          <br />
          Missing characters are highlighted using []. For example, if the
          program receives "nucopia is amazing" instead of "cornucopia is
          amazing", the output file will display "[c][o][r]nucopia is amazing"
          <br />
          <br />
          Misidentified characters are highlighed using {"{}"}. For example, if
          an extra character was in a line, it would be flagged as unnessessary
          like "cornucopia is amazing
          {"{!}"}". If a characteris misidentified, the correct character would
          be displayed as well "cor{"{n(m)}"}ucopia is amazing"
        </p>
        <h2
          className="text-center text-lg m-8 text-green-500"
          ref={recipeFinding}
        >
          Recipe Finding
        </h2>
        <p>
          Recipes are stored in the backend as a graph, which each node in the
          graph being an ingredient, and clusters of interwoven nodes
          representing a dish. In order to find recipes that use items from the
          user's pantry, a DFS is conducted on the graph, where nodes are only
          traversed if they are within the users pantry. This DFS identifies
          recipes that can be made, which are stored and compared, based on how
          many pantry items they use that are near expiry. This is accomplished
          by adding recipes to a priority queue, and after the search is done
          the head node is returned. Overall, this process takes O(nlogn), where
          n is the size of the user's pantry.
        </p>
        <h2 className="text-center text-lg m-8 text-green-500" ref={recalls}>
          Recall Indentification
        </h2>
        <p>
          Recalls are found by calling the API's of government institutions.
          This happens on the server daily, however the user can request an
          immediate recall check if they so please. If a recall is found,
          Cornucopia searches its database to see if any users have that item,
          and if they do, notifies them that their pantry contains recalled
          items.
        </p>
        <h2
          className="text-center text-lg m-8 text-green-500"
          ref={backFrontEnd}
        >
          Backend + Frontend
        </h2>
        <p>
          Since this is my first Full Stack project, this has been an experience
          in learning the technologies. Due to this, there is not that much
          problem-solving as with the other sections. The database was created
          using Django Models, however some MySQL was also written. The frontend
          was created using the React Framework.
        </p>
      </div>
      <div className="grid place-items-center mb-10 text-green-500">
        <h1 className="text-2xl" ref={pictures}>
          Image Gallery
        </h1>
        <div className="w-1/2">
          <div className="carousel w-full rounded-xl max-h-80">
            <div
              id="slide1"
              className="carousel-item relative w-full justify-center bg-slate-700 p-3"
            >
              <img src={login} className="w-auto" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
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
              <img src={homeMobile} className="w-auto" />
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
              <img src={home} className="w-auto" />
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
              <img src={mobileAddItem} className="w-auto" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
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
    </main>
  );
}
