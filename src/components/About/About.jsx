import React from "react";

function Home() {
  return (
    <>
      <div className="bg-[#222831] h-[800px] text-[#eeeeee] flex justify-around">
        <div>
          <img
            src="./images/music.svg"
            alt="Image 1"
            className="mt-24 inline"
          />{" "}
          <div className="mt-[5rem] text-5xl font-bold h-[586px]">
            About <span className="text-[#00adb5]">me</span>
            <img src="./images/bulb.svg" alt="bulb" className="inline ml-10"/>
            <div>
              <div className="mt-3 w-64 text-md text-base leading-[1.2rem] font-normal">
                To work with a leading company where I can leverage my
                analytical thinking, creativity, and problem-solving skills to
                contribute meaningfully to organizational success. I aim to
                continuously grow professionally, adapt to challenges, and
                utilize my perseverance and dedication to achieve both personal
                and organizational goals while fostering innovation and
                collaboration in a dynamic work environment.........{" "}
                <span className="font-bold">Read more</span>
                <img
                  src="./images/pointing.svg"
                  alt="Image 1"
                  className="mt-[1px] scale-75"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="scale-[.79] mt-35">
          <img
            src="./images/aboutBack.svg"
            alt="Image 1"
            className="mt-[130px]"
          />
          <img
            src="./images/buzz.svg"
            alt="Image 1"
            className="mt-[-19.5rem] ml-[13rem]"
          />
          <img
            src="./images/aboutMen.svg"
            alt="Image 2"
            className="mt-[-0rem] ml-[6.2rem]"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
