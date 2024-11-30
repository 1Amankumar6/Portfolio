import React from "react";

const Recent = () => {
  // Define the image sources in an array
  const images = [
    "./images/aboutBack.svg",
    "./images/aboutBack.svg",
    "./images/aboutBack.svg",
    "./images/aboutBack.svg",
    "./images/aboutBack.svg",
    "./images/aboutBack.svg",
    "./images/aboutBack.svg",
    "./images/aboutBack.svg",
    "./images/aboutBack.svg",
    "./images/aboutBack.svg",
  ];

  const randomImage = [
    {
      img: "./images/random.png",
      name: "Random 1",
    },
    {
      img: "./images/random.png",
      name: "Random 2",
    },
    {
      img: "./images/random.png",
      name: "Random 3",
    },
  ];

  return (
    <>
<div className="relative text-center py-4 bg-[#222831]">
        <h1 className="text-6xl inline-block font-bold bg-transparent mt-24 left-24 text-white absolute">
          My recent <span className="text-[#00adb5]">work's</span>
        </h1>
        <div className="absolute mt-[220px] ml-24 flex items-center gap-12">
          {randomImage.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center hover:scale-110 ml-10 inset-0 bg-transparent opacity-50 backdrop-blur-md px-10 py-5 "
            >
              <img
                src={item.img} // Access the `img` property for image source
                className="h-[180px] w-[240px] object-contain"
                alt={`Recent project ${index + 1}`}
              />
              <h1 className="text-white mt-2">{item.name}</h1> {/* Display name under image */}
            </div>
          ))}
        </div>
      </div>

      {/* Grid Layout */}
      <hr />
      <div className="bg-[#222831] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 grid-rows-2">
        {images.map((src, index) => (
          <div>
            <img
              key={index.img}
              src={src}
              className="h-72 w-72 object-cover"
              alt={`Recent project ${index + 1}`}
            />
            <h1 className="text-white">{index.name}</h1>
          </div>
        ))}
      </div>

      <hr />
    </>
  );
};

export default Recent;
