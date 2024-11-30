import React, { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";

function Home() {
  const [resumeLink, setResumeLink] = useState(
    "https://drive.google.com/file/d/1jupXhjZ4GbkKMmGqNGYfG8G46wwA-BnA/view?usp=drive_link"
  );

  // Function triggered by the button to download the resume
  const useResume = () => {
    if (resumeLink) {
      // Download logic: Open the link in a new tab
      window.open(resumeLink, "_blank");
    } else {
      console.error("Resume link is not set.");
    }
  };
  return (
    <>
      <div className="bg-[#222831] h-[700px] text-[#eeeeee] flex justify-around">
        <img
          src="./images/arrow.svg"
          alt="arrowImages"
          className="-mr-[250px] mb-[4px] scale-[.30]"
        />
        <div className="mt-[13rem] text-7xl font-bold h-[586px]">
          A<span className="text-[3.3rem] ">MAN KUMAR </span>
          <div className="text-5xl mt-5 text-[#00adb5] font-bold">
            FINAL YEAR, <span>ECE</span>
          </div>
          <div>
            <div className="text-xl mt-11">
              <button
                className="text-xl bg-[#00adb5] text-[#eeeeee] text-semibold px-4 py-2 rounded-full"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
              >
                Hire me
              </button>
              <button
                onClick={() => useResume()}
                aria-label="Download CV"
                className="text-xl mx-5 bg-[#393e46] text-[#eeeeee] text-semibold  px-4 py-2 rounded-full"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
              >
                Download CV{" "}
                <MdOutlineFileDownload className="inline text-3xl text-center" />
              </button>
            </div>
          </div>
        </div>
        <div className="scale-[.79] mt-15">
          <img src="./images/tempBack.svg" alt="Image 1" className="" />
          <img
            src="./images/homeMen.svg"
            alt="Image 2"
            className="mt-[-19.5rem] ml-[-2.2rem]  rounded-full "
          />
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
