import { RiFacebookFill, RiLinkedinFill, RiShareFill, RiTumblrFill, RiTwitterXFill } from "react-icons/ri"
import { FaPinterestSquare, FaRedditSquare } from "react-icons/fa";
import { NavLink } from "react-router"
import { TiDocumentText } from "react-icons/ti";
import type { fakeData } from "../../../../types/metbuatdabiz.types";
import { useState } from "react";

type GridCardProps = {
    data: fakeData;
    i: number;
};

export default function GridCard({ data, i }: GridCardProps) {
    const [activeShareIndex, setActiveShareIndex] = useState<number | null>(null);

    const toggleShareIcons = (index: number) => {
        setActiveShareIndex(prev => (prev === index ? null : index));
    };

    return (
        <div key={i} className="relative p-3 min-h-[800px] border border-solid border-gray-300 flex flex-col gap-5 animate-section opacity-0 translate-y-10 transition-all duration-700">
            <NavLink to={data.readMoreLink}>
                <div className="w-full cursor-pointer relative group overflow-hidden">
                    <div>
                        <img src={data.image} alt="" className="w-full" />
                    </div>
                    <div className="bg-[#ffffffd2] absolute left-0 w-full h-full flex items-center justify-center group-hover:-translate-y-[100%] translate-y-0 transition-transform duration-500 ease-out">
                        <span className="rounded-full w-[60px] h-[60px] bg-gray-600 text-4xl flex items-center justify-center text-white">
                            <TiDocumentText />
                        </span>
                    </div>
                </div>
            </NavLink>

            <div className="flex flex-col gap-5">
                <NavLink to={data.readMoreLink}>
                    <div className="text-2xl hover:text-[var(--base-text-color)] transition-all duration-200 ease-in cursor-pointer">
                        {data.title}
                    </div>
                </NavLink>
                <div className="text-gray-500 text-sm">{data.description}</div>
                <div className="absolute flex gap-4 items-center left-3 bottom-3">
                    <span onClick={() => toggleShareIcons(i)}
                        className="cursor-pointer p-1 rounded-sm text-white bg-gray-400 hover:bg-gray-600 transition-all duration-200 ease-in text-xl">
                        <RiShareFill />
                    </span>
                    <NavLink to={data.readMoreLink}>
                        <span className="cursor-pointer font-semibold px-4 border-2 border-[var(--base-text-color)] border-solid rounded-sm text-[var(--base-text-color)] hover:text-white hover:bg-[var(--base-text-color)] transition-all duration-200 ease-in">
                            READ MORE
                        </span>
                    </NavLink>
                    {activeShareIndex === i && (
                        <div className={`absolute -left-3 bottom-[50px]`}>
                            <div className="bg-[#DFE5E8] rounded-full p-3 flex items-center justify-center gap-3 relative 
                                     ">
                                <div className="h-[20px] w-[30px] bg-[#DFE5E8] absolute left-[10%] top-full
                                        before:absolute before:content-[''] before:h-[20px] before:w-[15px] before:bg-white before:bottom-0 before:right-0 before:rounded-tl-full 
                                        after:absolute after:content-[''] after:h-[20px] after:w-[15px] after:bg-white after:bottom-0 after:left-0 after:rounded-tr-full"></div>
                                {
                                    [<RiFacebookFill />, <RiTwitterXFill />, <FaPinterestSquare />, <RiTumblrFill />, <RiLinkedinFill />, <FaRedditSquare />].map((icon, i) => (
                                        <span key={i}
                                            className={`cursor-pointer transition-all duration-250 ease-in text-lg 
                                                    ${i == 5 ? 'text-[#ff5700]' : 'text-gray-500'}
                                                    ${i == 0 ? 'hover:text-blue-700'
                                                    : i == 2 ? 'text-red-600'
                                                        : i == 3 ? 'hover:text-blue-950'
                                                            : i == 4 ? 'hover:text-cyan-600'
                                                                : ''
                                                }`}>
                                            {icon}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}