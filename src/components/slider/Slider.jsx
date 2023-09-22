import Slider from "react-slick";
import { testimonials } from "../../resources/testimonials.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  slidesToScroll: 1,
  slidesToShow: 3,
  autoplay: false,
  autoplaySpeed: 2000,
  speed: 700,
  responsive: [
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        speed: 500,
        autoplaySpeed: 3000,
      },
    },
  ],
  pauseOnHover: true,
  pauseOnDotsHover: true,
  swipe: true,
  waitForAnimate: false,
  swipeToSlide: true,
};

export default function TestimonialSlider() {
  return (
    <div className="h-full cursor-ew-resize outline-none">
      <div>
        <Slider {...settings}>
          {testimonials.map((t) => (
            <div key={t.text} className="h-full">
              <div className="shadow-xl bg-white rounded-md hover:-translate-y-2 duration-300 h-[400px] md:h-[500px] p-4 md:p-10 text-center flex flex-col items-center justify-center m-4">
                <p className="text-md md:text-lg m-2 align-middle">
                  "{t.text}"
                </p>
                <p className="m-2 md:m-4 text-sm md:text-md font-semibold">
                  {t.person} <br /> {t.subject}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
