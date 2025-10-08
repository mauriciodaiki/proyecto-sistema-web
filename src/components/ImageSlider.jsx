import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider() {
    const slides = [
        `${import.meta.env.BASE_URL}img/slide1.jpg`,
        `${import.meta.env.BASE_URL}img/slide2.jpg`,
        `${import.meta.env.BASE_URL}img/slide3.jpg`,
        `${import.meta.env.BASE_URL}img/ecoclean-1.png`,
        `${import.meta.env.BASE_URL}img/ecoclean-2.png`,
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <div className="mb-8">
            <Slider {...settings}>
                {slides.map((src, i) => (
                    <div key={i}>
                        <img
                            src={src}
                            alt={`slide-${i + 1}`}
                            style={{ width: "100%", height: "360px", objectFit: "contain", borderRadius: "12px" }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
