import { useEffect, useRef } from "react";
import { MdChevronRight } from "react-icons/md";

export default function ScrollButton() {
    const scrollButton = useRef<HTMLDivElement | null>(null);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollButton.current) {
                if (scrollPosition > 50) {
                    scrollButton.current.style.opacity = '0.5';
                } else {
                    scrollButton.current.style.opacity = '0';
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div
                ref={scrollButton}
                onClick={handleClick}
                className="fixed bottom-[5%] right-[3%] w-[50px] h-[50px] flex justify-center items-center bg-black transition-all ease-out duration-200 cursor-pointer"
                style={{
                    opacity: '0'
                }}>
                <span className="text-white -rotate-90 text-2xl"><MdChevronRight /></span>
            </div>
        </>
    )
}