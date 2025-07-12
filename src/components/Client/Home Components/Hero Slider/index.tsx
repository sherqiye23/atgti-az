import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from './HeroSlider.module.css'

export default function HeroSlider() {
    const images = [
        '/images/slider-images/slider-1.JPG',
        '/images/slider-images/slider-2.JPG',
        '/images/slider-images/slider-3.JPG',
        '/images/slider-images/slider-4.JPG',
        '/images/slider-images/slider-5.JPG',
        '/images/slider-images/slider-6.JPG'
    ]

    const [currentImage, setCurrentImage] = useState<number>(0);
    const sliceRefs = useRef<(HTMLDivElement | null)[]>([]);
    const totalSlides = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % totalSlides);
        }, 15000);

        return () => clearInterval(interval);
    }, []);

    const animateSlices = () => {
        gsap.fromTo(
            sliceRefs.current,
            { y: "-100%", opacity: 0 },
            {
                y: "0%",
                opacity: 1,
                stagger: {
                    each: 0.15,
                    from: "center",
                },
                duration: 5,
                ease: "power3.out"
            }
        );
    };


    useEffect(() => {
        animateSlices();
    }, [currentImage]);


    return (
        <div key={currentImage} className={`${styles.imageWrapper}`}
            style={{
                backgroundImage: `url(${images[(currentImage - 1 + totalSlides) % totalSlides]})`, // <== Əsas hissə!
                // backgroundSize: 'cover',
                backgroundPositionY: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: "100% 100%",
                backgroundPositionX: "0%",
            }}>
            {[...Array(5)].map((_, i) => (
                <div
                    key={i}
                    className={`${styles.slice}`}
                    ref={(el) => { sliceRefs.current[i] = el; }}
                    style={{
                        left: `${i * 20}%`,
                        backgroundImage: `url(${images[currentImage]})`,
                        backgroundSize: "500% 100%",
                        backgroundPositionX: `${i * 25}%`
                    }}
                ></div>
            ))}
            <div className={`${styles.dots}`}>
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentImage(i)}
                        className={`${styles.dot} ${currentImage === i ? `${styles.active}` : ''}`}
                    ></button>
                ))}
            </div>
        </div>
    );
}