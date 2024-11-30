import React from "react";

const Header = () => {
  return (
    <div className="bg-[#222831] text-[#eeeeee]">
      <div className="flex items-center justify-between font-bold">
        <div className="text-3xl ml-16 text-[#00adb5]">
          P<span className="text-xl text-[#eeeeee]">ortfolio</span>
        </div>
        <div>
          <ul className="flex items-center justify-center mr-16 py-2">
            <li className="m-4 hover:text-[#00adb5] hover:border-b">HOME</li>
            <li className="m-4 hover:text-[#00adb5] hover:border-b">ABOUT ME</li>
            <li className="m-4 hover:text-[#00adb5] hover:border-b">CONTACT</li>
          </ul>
        </div>
      </div>
          <hr className="text-white" />
    </div>
  );
};

export default Header;
