import { useState } from "react";

export function MobileNav({ children }) {
  const [toggled, setToggled] = useState(false);

  return (
    <>
      <div className="md:hidden">
        <div
          onClick={() => setToggled((t) => !t)}
          className="top-[30px] right-5 fixed z-50 cursor-pointer"
        >
          <div
            className={`h-1 rounded-md w-8 bg-white m-1 duration-200 ${
              toggled ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`h-1 rounded-md w-8 bg-white m-1 ${
              toggled ? "hidden" : ""
            }`}
          ></div>
          <div
            className={`h-1 rounded-md w-8 bg-white m-1 duration-200 ${
              toggled ? "-rotate-45" : ""
            }`}
          ></div>
        </div>
      </div>
      <div
        className={`w-screen fixed top-20 shadow-lg bg-brown text-white border-b-2 z-50 border-white ${
          toggled ? "" : "hidden"
        }`}
      >
        <div className="m-3">{children}</div>
      </div>
    </>
  );
}
