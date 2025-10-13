import { useState, useEffect } from "react";
import "./SectionInit.css";

export const SectionInit = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "imgs/logo-ml.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section id="section-init" className="section-init">
            <div className="section-init-div">
                <div className="section-dotted-bg"></div>
                <div className="animated-lines">
                    {Array.from({ length: 16 }).map((_, index) => (
                        <span
                            key={index}
                            className={`animated-line line-${index + 1} ${index % 2 === 0 ? 'odd' : 'even'}`}
                        ></span>
                    ))}
                </div>
            </div>
            <div className="container-init">
                <div className="container-info-init">
                    <h3>Los mejores productos</h3>
                    <p>Tu universo tecnológico en un solo lugar</p>
                </div>
                <div className="container-imgs-carousel">
                    <img
                        src={images[currentIndex]}
                        alt="imagen publicitaria"
                    />
                </div>
            </div>
        </section>
    )
}
