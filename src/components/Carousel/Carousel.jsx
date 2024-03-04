"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "@/data/data";
import PostCard from "../PostCard/PostCard";

function NextArrow({ handleClick }) {
    return (
        <div
            onClick={handleClick}
            className={`flex items-center justify-center bg-gray-300 w-[30px] h-[30px] cursor-pointer p-2 m-auto rounded-full absolute top-1/2 right-0 z-10`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
            >
                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
            </svg>
        </div>
    );
}

function PrevArrow({ handleClick }) {
    return (
        <div
            onClick={handleClick}
            className={`flex items-center justify-center bg-gray-300 w-[30px] h-[30px] cursor-pointer p-2 m-auto rounded-full absolute top-1/2 left-0 z-10`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                // className={className}
            >
                <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
            </svg>
        </div>
    );
}

export default function Carousel({ children }) {
    let sliderRef = useRef(null);

    const next = () => {
        sliderRef.current.slickNext(); // Use sliderRef.current
    };

    const prev = () => {
        sliderRef.current.slickPrev(); // Use sliderRef.current
    };

    let settings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: "",
    };

    return (
        <div className="relative">
            <Slider {...settings} className="w-11/12 mx-auto" ref={sliderRef}>
                {children}
            </Slider>
            <NextArrow handleClick={next} />
            <PrevArrow handleClick={prev} />
        </div>
    );
}
