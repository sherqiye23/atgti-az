import { useEffect, useRef, useState } from "react";
import type { ArrowLinkInterface, NavLinksInterface } from "../../../types/nav.types";
import { MdChevronRight } from "react-icons/md";

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

export default function ClientNavbar() {
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
            <nav className={` ${paddingClass} px-4 container flex items-center justify-between`}>
                <div className={`${logoWidth}`}>
                    <a href="/">
                        <img
                            key={logoUrl ? 'white' : 'color'}
                            src={logoUrl ? '/images/logo/atgti-white.png' : '/images/logo/atgti-color.png'}
                            alt="logo"
                            className="w-full transition-all duration-300"
                            draggable={false}
                        />
                    </a>
                </div>

                <ul className={`gap-6 ${textColorClass} hidden md:flex`}>
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
                        className={`text-3xl ${textColorClass}`}
                        aria-label="Toggle mobile menu"
                    >
                        ☰
                    </button>
                </div>
                {/* Mobile Menu */}
                {isMobileMenuOpen && !activeMobileDropdown && (
                    <div className={`fixed left-0 w-full bg-gray-100 shadow-lg z-40 md:hidden animate-slide-down ${logoUrl ? 'top-[145px]' : 'top-[110px]'}`}>
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
                    <div className={`fixed left-0 w-full bg-gray-100 shadow-lg z-40 lg:hidden animate-slide-down ${logoUrl ? 'top-[145px]' : 'top-[110px]'}`}>
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
                    <div className={`fixed left-0 w-full bg-gray-100 shadow-lg z-40 lg:hidden animate-slide-down ${logoUrl ? 'top-[145px]' : 'top-[110px]'}`}>
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