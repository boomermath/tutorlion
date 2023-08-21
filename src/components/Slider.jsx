import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useEffect, useState} from "react";

const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
};

export default function TestimonialSlider() {
    const [show, setShow] = useState(3);

    useEffect(() => {
        if (window.matchMedia("(max-width: 768px)").matches) {
            setShow(1);
        }

        window.addEventListener("resize", () => {
            if (window.matchMedia("(max-width: 768px)").matches) {
                setShow(1);
            }
        })
    }, [])

    return (
        <div className="h-full w-full cursor-ew-resize space-x-3.5">
            <Slider slidesToShow={show} {...settings}
            >
                {[1, 2, 3, 4, 5].map((i) =>
                    <div key={i} className="outline-none">
                        <img className="p-2" src={`/testimonials/testimonial-${i}.png`}
                             alt={`testimonial number ${i}`}/>
                    </div>)}
            </Slider>
        </div>
    )
}