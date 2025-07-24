import { useEffect, useRef, useState } from "react";
import type { ArrowLinkInterface, NavLinksInterface, PropsNavbar } from "../../../types/nav.types";
import { MdChevronRight } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { RiFacebookFill, RiLinkedinFill, RiTwitterXFill, RiInstagramLine, RiYoutubeFill } from "react-icons/ri";
import { useLocation } from "react-router";

const navLinks: NavLinksInterface[] = [
    {
        title: "HAQQIMIZDA",
        hoverLinks: [
            { title: "SƏRƏNCAM", link: "/" },
            { title: "STRUKTUR", link: "/" },
            { title: "HAQQIMIZDA", link: "/" },
            {
                title: "NÜMAYƏNDƏLİKLƏR",
                arrowLinks: [
                    { title: "SİYAHI", link: "/" },
                    { title: "STRUKTUR", link: "/" },
                ],
                link: "/",
            },
            { title: "FƏALİYYƏT İSTİQAMƏTLƏRİ", link: "/" },
            { title: "TƏLİM MATERİALLARININ BAZASI", link: "/" },
            { title: "TƏRƏFDAŞLAR", link: "/" },
        ],
    },
    { title: "FƏALİYYƏTİMİZ", link: "/" },
    { title: "MƏTBUATDA BİZ", link: "/" },
    {
        title: "ƏLAQƏ",
        link: "/",
        hoverLinks: [
            { title: "ƏLAQƏ", link: "/" },
            {
                title: "KARYERA",
                arrowLinks: [
                    { title: "İŞ MÜRACİƏTİ", link: "/" },
                    { title: "TƏCRÜBƏ PROQRAMLARI", link: "/" },
                ],
                link: "/",
            },
        ],
    },
];

export default function ClientNavbar({ location }: PropsNavbar) {
    const pathLocation = useLocation()
    const isHomePage = pathLocation.pathname === "/";

    const [logoUrl, setLogoUrl] = useState<boolean>(true)
    const [logoWidth, setLogoWidth] = useState<string>('w-[125px]')
    const [textColorClass, setTextColorClass] = useState<string>('text-white')
    const [paddingClass, setPaddingClass] = useState<string>('py-5')
    const navRef = useRef<HTMLDivElement | null>(null);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState<NavLinksInterface | null>(null);
    const [activeSubDropdown, setActiveSubDropdown] = useState<ArrowLinkInterface | null>(null);


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 70) {
                setLogoUrl(false);
                setLogoWidth('w-[100px]');
                setTextColorClass('text-gray-600');
                setPaddingClass('py-2');

                if (navRef.current) {
                    navRef.current.style.backgroundColor = '#fff';
                }
            } else {
                setLogoUrl(true);
                setLogoWidth('w-[125px]');
                setTextColorClass('text-white');
                setPaddingClass('py-5');

                if (navRef.current) {
                    navRef.current.style.backgroundColor = 'transparent';
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div ref={navRef} className={`fixed w-full top-0 z-10`}>
            {
                !location ? (
                    <div className="border-0 border-solid border-t-[4px] border-t-[var(--base-text-color)] border-b-[1px] border-b-[#e4e4e4] bg-[#f4f6f7e4]">
                        <div className="container px-4 text-gray-500 gap-1 md:gap-7 flex md:items-center flex-col md:flex-row">
                            <div className="flex gap-1 xs:gap-7 py-1 sm:py-3 flex-col xs:flex-row">
                                <div className="flex items-center gap-1">
                                    <span><IoLocationOutline /></span>
                                    <span className="text-sm">C.Cabbarlı küç., 609, Globus Center</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span><MdPhone /></span>
                                    <span className="cursor-pointer text-sm transition-all duration-250 ease-in hover:text-[var(--base-text-color)]">+994 12 597 56 30</span>
                                </div>
                            </div>
                            <div className="flex gap-3 sm:gap-7 md:items-center">
                                <div className="h-[50px] w-[2px] bg-[#e4e4e4] hidden md:block"></div>
                                <div className="flex items-center md:justify-center gap-3 cursor-pointer">
                                    {
                                        [<RiFacebookFill />, <RiLinkedinFill />, <RiTwitterXFill />, <RiInstagramLine />, <RiYoutubeFill />].map((icon, i) => (
                                            <span key={i}
                                                className={`transition-all duration-250 ease-in text-lg
                                    ${i == 0 ? 'hover:text-blue-700'
                                                        : i == 1 ? 'hover:text-cyan-600'
                                                            : i == 2 ? 'hover:text-gray-400'
                                                                : i == 3 ? 'hover:text-yellow-600'
                                                                    : 'hover:text-red-700'
                                                    }`}>
                                                {icon}
                                            </span>
                                        ))
                                    }
                                </div>
                                <div className="h-[50px] w-[2px] bg-[#e4e4e4] hidden md:block"></div>
                                <div>
                                    <button className="bg-[#494c64] hover:bg-[var(--base-text-color)] transition-all duration-250 ease-in text-white rounded-md text-xs font-semibold py-2 px-4">Sorğu</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            }

            <nav className={` ${paddingClass} px-4 container flex items-center justify-between`}>
                <div className={`${logoWidth}`}>
                    <a href="/">
                        <img
                            key={logoUrl ? 'white' : 'color'}
                            src={
                                isHomePage ? (
                                    logoUrl ? '/images/logo/atgti-white.png' : '/images/logo/atgti-color.png'
                                ) : ('/images/logo/atgti-color.png')
                            }
                            alt="logo"
                            className="w-full transition-all duration-300"
                            draggable={false}
                        />
                    </a>
                </div>

                <ul className={`gap-6 ${isHomePage ? textColorClass : 'text-gray-600'} hidden md:flex`}>
                    {navLinks.map((link, idx) => {
                        const hasDropdown = !!link.hoverLinks;
                        return (
                            <li
                                key={idx}
                                className={`font-semibold relative group cursor-pointer transition-all duration-200 ease-in hover:text-[var(--base-text-color)]`}
                            >
                                {link.link ? (
                                    <a href={link.link} className="block py-2">
                                        {link.title}
                                    </a>
                                ) : (
                                    <div className="py-2">{link.title}</div>
                                )}

                                {/* First dropdown */}
                                {hasDropdown && (
                                    <ul className={`absolute font-normal text-sm top-full mt-1 min-w-[200px] bg-white shadow-md translate-y-5 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 invisible group-hover:visible  transition-all duration-200 z-50 ${!idx ? 'left-0' : 'right-0'}`}>
                                        {link.hoverLinks!.map((subLink, subIdx) => {
                                            const hasSubDropdown = !!subLink.arrowLinks;
                                            return (
                                                <li
                                                    key={subIdx}
                                                    className={`text-gray-500 relative px-4 py-3 bg-gray-100 hover:bg-white cursor-pointer whitespace-nowrap border border-solid border-gray-300 border-l-2 border-l-gray-300 hover:border-l-[var(--base-text-color)] ${subLink?.arrowLinks?.length ? 'group/subDrop' : ''}`}
                                                >
                                                    {subLink.link ? (
                                                        <a
                                                            href={subLink.link}
                                                            className={`flex justify-between items-center w-full`}
                                                        >
                                                            <span className="w-full flex items-center justify-between">
                                                                <span>{subLink.title}</span>
                                                                <span>{subLink?.arrowLinks?.length ? <MdChevronRight /> : ''}</span>
                                                            </span>
                                                        </a>
                                                    ) : (
                                                        <div
                                                            className={`flex justify-between items-center w-full`}
                                                        >
                                                            {subLink.title}
                                                        </div>
                                                    )}

                                                    {/* Second dropdown */}
                                                    {hasSubDropdown && (
                                                        <ul
                                                            className={`absolute top-0 ml-1 min-w-[180px] bg-white shadow-md 
                                                            opacity-0 invisible transition-all duration-200 z-50 group-hover/subDrop:opacity-100 group-hover/subDrop:visible translate-x-5 group-hover/subDrop:translate-x-0
                                                            ${!idx ? 'left-full' : 'right-full'}`}
                                                        >
                                                            {subLink.arrowLinks!.map((arrowTitle, arrowIdx) => (
                                                                <li
                                                                    key={arrowIdx}
                                                                    className="px-4 py-3 bg-gray-100 hover:bg-white text-gray-500 whitespace-nowrap cursor-pointer border border-solid border-gray-300 border-l-2 border-l-gray-300 hover:border-l-[var(--base-text-color)]"
                                                                >
                                                                    <a href={arrowTitle.link} className="block">
                                                                        {arrowTitle.title}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                            </li>
                        );
                    })}
                </ul>

                {/* mobile */}
                <div className="z-10 md:hidden">
                    <button
                        onClick={() => {
                            setIsMobileMenuOpen(prev => !prev);
                            setActiveMobileDropdown(null)
                            setActiveSubDropdown(null)
                        }}
                        className={`text-3xl ${isHomePage ? textColorClass : 'text-gray-600'}`}
                        aria-label="Toggle mobile menu"
                    >
                        ☰
                    </button>
                </div>
                {/* Mobile Menu */}
                {isMobileMenuOpen && !activeMobileDropdown && (
                    <div className={`fixed left-0 w-full bg-gray-100 shadow-lg z-40 md:hidden animate-slide-down 
                        ${isHomePage ? (logoUrl ? 'top-[145px]' : 'top-[110px]') : (paddingClass === 'py-5' ? 'top-[230px]' : 'top-[200px]')}`}>
                        <ul className="flex flex-col divide-y divide-gray-200">
                            {navLinks.map((link, idx) => (
                                <li key={idx}>
                                    <button
                                        className="text-gray-500 px-4 py-3 bg-gray-100 hover:bg-white cursor-pointer whitespace-nowrap border border-solid border-gray-300 border-l-2 border-l-gray-300 hover:border-l-[var(--base-text-color)] w-full text-left font-semibold flex justify-between items-center"
                                        onClick={() => {
                                            if (link.hoverLinks) {
                                                setActiveMobileDropdown(link);
                                            } else {
                                                setIsMobileMenuOpen(false);
                                                window.location.href = link.link || '/';
                                            }
                                        }}
                                    >
                                        {link.title}
                                        {link.hoverLinks && <MdChevronRight />}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {/* Dropdown 2 */}
                {activeMobileDropdown && (
                    <div className={`fixed left-0 w-full bg-gray-100 shadow-lg z-40 lg:hidden animate-slide-down 
                    ${isHomePage ? (logoUrl ? 'top-[145px]' : 'top-[110px]') : (paddingClass === 'py-5' ? 'top-[230px]' : 'top-[200px]')}`}>
                        <div className="flex items-center px-4 py-3 border-b border-gray-200">
                            <button
                                onClick={() => setActiveMobileDropdown(null)}
                                className="text-gray-600 text-sm flex justify-between items-center w-full"
                            >
                                <span className="rotate-180"><MdChevronRight /></span>
                                <span>Back</span>
                            </button>
                        </div>
                        <ul className="flex flex-col divide-y divide-gray-200">
                            {activeMobileDropdown.hoverLinks?.map((subLink, subIdx) => (
                                <li key={subIdx}>
                                    <button
                                        className="text-gray-500 px-4 py-3 bg-gray-100 hover:bg-white cursor-pointer whitespace-nowrap border border-solid border-gray-300 border-l-2 border-l-gray-300 hover:border-l-[var(--base-text-color)] w-full text-left font-semibold flex justify-between items-center"
                                        onClick={() => {
                                            if (subLink.arrowLinks) {
                                                setActiveSubDropdown(subLink);
                                            } else {
                                                setIsMobileMenuOpen(false);
                                                setActiveMobileDropdown(null);
                                                window.location.href = subLink.link || '/';
                                            }
                                        }}
                                    >
                                        {subLink.title}
                                        {subLink.arrowLinks && <MdChevronRight />}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* (arrowLinks)  */}
                {activeSubDropdown && (
                    <div className={`fixed left-0 w-full bg-gray-100 shadow-lg z-40 lg:hidden animate-slide-down 
                    ${isHomePage ? (logoUrl ? 'top-[145px]' : 'top-[110px]') : (paddingClass === 'py-5' ? 'top-[230px]' : 'top-[200px]')}`}>
                        <div className="flex items-center px-4 py-3 border-b border-gray-200">
                            <button
                                onClick={() => setActiveSubDropdown(null)}
                                className="text-gray-600 text-sm flex justify-between items-center w-full"
                            >
                                <span className="rotate-180"><MdChevronRight /></span>
                                <span>Back</span>
                            </button>
                        </div>
                        <ul className="flex flex-col divide-y divide-gray-200">
                            {activeSubDropdown.arrowLinks?.map((arrowTitle, idx) => (
                                <li key={idx}>
                                    <button
                                        className="text-gray-500 px-4 py-3 bg-gray-100 hover:bg-white cursor-pointer whitespace-nowrap border border-solid border-gray-300 border-l-2 border-l-gray-300 hover:border-l-[var(--base-text-color)] w-full text-left font-semibold flex justify-between items-center"
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            setActiveMobileDropdown(null);
                                            setActiveSubDropdown(null)
                                            window.location.href = arrowTitle.link || '/';
                                        }}
                                    >
                                        {arrowTitle.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
}