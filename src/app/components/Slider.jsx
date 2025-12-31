"use client";
import { HeroSlides } from "@/data/SiteData";
import { useState, useEffect } from "react";

const Slider = () => {
    const [slideId, setSlideId] = useState(0);

    useEffect(() => {
    const timer = setInterval(() => {
        setSlideId((prev) => (prev === HeroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
    }, []);

    return(
        <div className="top-image">
            {HeroSlides.map((slide, index) => (
                <figure key={slide.id} className={`slide ${index === slideId ? "active" : ""}`}><img src={slide.src} alt={slide.alt} /></figure>
                
            ))}
        </div>
    )
}
export default Slider;