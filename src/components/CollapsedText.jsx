import {useEffect, useRef, useState} from "react";
import arrow from "../assets/arrow.svg";

export default function CollapsedText({description}) {
    const [show, setShow] = useState(false);

    return (
        <div id="description" className="text-center md:hidden">
            <p>Click for more
                <span
                    onClick={() => setShow(s => !s)}
                    className="text-xl inline-flex font-extrabold cursor-pointer m-2">
                    <img className={`${show ? "" : "rotate-180"} duration-200`}  src={arrow.src} alt=""/>
                </span>
            </p>
            <p className={`text-lg mt-3 p-2 ${show ? "block" : "hidden"}`}>{description}</p>
        </div>
    )
}