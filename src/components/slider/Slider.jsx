import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
};

export function TestimonialSlider() {
    return (
        <Slider slidesToShow={3} {...settings}>
            {[1, 2, 3, 4, 5].map((i) =>
                <div key={i} className="outline-none">
                    <img className="p-2" src={`/testimonials/testimonial-${i}.png`} alt={`testimonial number ${i}`}/>
                </div>)}
        </Slider>
    )
}