import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import useWindowWidth from "../../../../hooks/windowWidth.ts";

export default function HeroSlider() {
    const images: string[] = [
        '/images/slider-images/slider-1.JPG',
        '/images/slider-images/slider-2.JPG',
        '/images/slider-images/slider-3.JPG',
        '/images/slider-images/slider-4.JPG',
        '/images/slider-images/slider-5.JPG',
        '/images/slider-images/slider-6.JPG'
    ]

    const texts: string[] = [
        "İki ildən bir keçirilən Azərbaycan Tələbə Gənclər Təşkilatları İttifaqının Hesabat-Seçki Konfransı",
        "Tələbə auditoriyasını hədəfləyən və on minlərlə gənci bir araya gətirən festivallar",
        "“Bizim bugünkü gəncliyimiz sağlam düşüncəli gənclikdir, vətənpərvər gənclikdir, xalqını, millətini sevən gənclikdir.”",
        "Sən də bu enerjiyə qoşul!",
        "Əylən, öyrən, təşkil et!",
        "Tələbə gənclər burdadır.",
    ];

    const [currentImage, setCurrentImage] = useState<number>(0);
    const sliceRefs = useRef<(HTMLDivElement | null)[]>([]);
    const totalSlides: number = images.length;

    const windowWidth = useWindowWidth();
    const sliceCount = windowWidth < 768 ? 2 : 5;
    const sliceWidth = 100 / sliceCount;
    const backgroundSize = `${sliceCount * 100}% 130%`;

    const textRef = useRef<(HTMLSpanElement | null)[]>([]);


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

    useEffect(() => {
        gsap.fromTo(
            textRef.current,
            {
                opacity: 0,
                rotate: 20,
                y: -20,
            },
            {
                opacity: 1,
                rotate: 0,
                y: 0,
                stagger: 0.1,
                duration: 2,
                ease: "power3.out",
            }
        );
    }, [currentImage]);



    return (
        <div key={currentImage} className={`relative w-full h-[95vh] overflow-hidden bg-cover bg-center bg-no-repeat `}
            style={{
                backgroundImage: `url(${images[(currentImage - 1 + totalSlides) % totalSlides]})`,
            }}>
            {[...Array(sliceCount)].map((_, i) => (
                <div
                    key={i}
                    className={`absolute top-0 h-full bg-cover bg-no-repeat`}
                    ref={(el) => { sliceRefs.current[i] = el; }}
                    style={{
                        width: `${sliceWidth}%`,
                        left: `${i * sliceWidth}%`,
                        backgroundImage: `url(${images[currentImage]})`,
                        backgroundSize: backgroundSize,
                        backgroundPositionX: `${i * (100 / (sliceCount - 1))}%`,
                        backgroundPositionY: "center",
                    }}
                ></div>
            ))}
            <div className="absolute inset-0 bg-blue-900 opacity-40 z-1"></div>
            <div className="absolute top-[30%] left-[8%] sm:left-[15%] right-[13%] sm:right-[20%] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white flex flex-wrap gap-x-2">
                {texts[currentImage].split(" ").map((word, i) => (
                    <span
                        key={i}
                        ref={(el) => { textRef.current[i] = el; }}
                        className="inline-block"
                    >
                        {word}
                    </span>
                ))}
            </div>

            <div className={`absolute z-[3] bottom-[2%] right-[30%] flex justify-center gap-[15px] mt-5`}>
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentImage(i)}
                        className={`w-[10px] h-[60px] rotate-[35deg] border-none cursor-pointer transition-colors duration-300
                        ${currentImage === i ? `bg-[#e7ff89]` : 'bg-[#7d7d7d]'}`}
                    ></button>
                ))}
            </div>
        </div>
    );
}