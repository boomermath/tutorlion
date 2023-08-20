import {useState} from "react";


export function MobileNav({children}) {
    const [toggled, setToggled] = useState(false);

    return (
        <>
            <div className="md:hidden">
                <div onClick={() => setToggled(t => !t)} className="absolute top-6 right-3 scale-125 cursor-pointer">
                    <div
                        className={`h-1 rounded-md w-8 bg-black m-1 duration-100 ${toggled ? "rotate-45 translate-y-2" : ""}`}></div>
                    <div className={`h-1 rounded-md w-8 bg-black m-1 ${toggled ? "hidden" : ""}`}></div>
                    <div className={`h-1 rounded-md w-8 bg-black m-1 duration-100 ${toggled ? "-rotate-45" : ""}`}></div>
                </div>
            </div>
            <div className={`w-screen border-b-2 border-black ${toggled ? "" : "hidden"}`}>
                <div className="m-3 -mt-2">
                    {children}
                </div>
            </div>
        </>
    )
}