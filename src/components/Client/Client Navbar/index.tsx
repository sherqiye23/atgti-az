import { useEffect, useRef, useState } from "react";

interface ArrowLinkInterface {
    title: string;
    link?: string;
    arrowLinks?: string[];
}

interface NavLinksInterface {
    title: string;
    link?: string;
    hoverLinks?: ArrowLinkInterface[];
}

const navLinks: NavLinksInterface[] = [
    {
        title: "Haqqımızda",
        hoverLinks: [
            { title: "Sərəncam", link: "/serencam" },
            { title: "Struktur", link: "/struktur" },
            { title: "Haqqımızda", link: "/haqqimizda" },
            {
                title: "Nümayəndəliklər",
                arrowLinks: ["Siyahı", "Struktur"],
                link: "/numayendelikler",
            },
            { title: "Fəaliyyət istiqamətləri", link: "/fealiyyet-istiqametleri" },
            { title: "Təlim materiallarının bazası", link: "/telim-materyallari" },
            { title: "Tərəfdaşlar", link: "/terefdaslar" },
        ],
    },
    { title: "Fəaliyyətimiz", link: "/fealiyyetimiz" },
    { title: "Mətbuatda biz", link: "/metbuatda-biz" },
    {
        title: "Əlaqə",
        link: "/elaqe",
        hoverLinks: [
            { title: "Əlaqə", link: "/elaqe" },
            {
                title: "Karyera",
                arrowLinks: ["İş müraciəti", "Təcrübə proqramları"],
                link: "/karyera",
            },
        ],
    },
];

export default function ClientNavbar() {
    const [logoUrl, setLogoUrl] = useState<boolean>(true) // /images/logo/atgti-color.png
    const [logoWidth, setLogoWidth] = useState<string>('w-[125px]') // w-[100px]
    const [textColorClass, setTextColorClass] = useState<string>('text-white') // text-gray-700
    const [paddingClass, setPaddingClass] = useState<string>('py-5') // py-2
    const navRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 70) {
                setLogoUrl(false);
                setLogoWidth('w-[100px]');
                setTextColorClass('text-gray-700');
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
            <nav className={` ${paddingClass} px-4 max-w-[1250px] mx-auto flex items-center justify-between`}>
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

                <ul className={`flex gap-6 font-semibold ${textColorClass}`}>
                    {navLinks.map((link, idx) => {
                        const hasDropdown = !!link.hoverLinks;
                        return (
                            <li
                                key={idx}
                                className={`relative group cursor-pointer uppercase font-bold transition-all duration-200 ease-in hover:text-[var(--base-text-color)]`}
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
                                    <ul className={`absolute top-full mt-1 min-w-[200px] bg-white border border-gray-300 shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50 ${link.title == 'Haqqımızda' ? 'left-0' : 'right-0'}`}>
                                        {link.hoverLinks!.map((subLink, subIdx) => {
                                            const hasSubDropdown = !!subLink.arrowLinks;
                                            return (
                                                <li
                                                    key={subIdx}
                                                    className={`text-gray-700 relative px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap ${subLink.title == 'Nümayəndəliklər' || 'Karyera' ? 'group/subDrop' : ''}`}
                                                >
                                                    {subLink.link ? (
                                                        <a
                                                            href={subLink.link}
                                                            className={`flex justify-between items-center w-full ${hasSubDropdown ? "pr-4" : ""
                                                                }`}
                                                        >
                                                            {
                                                                subLink.title == 'Nümayəndəliklər' ? `${subLink.title} >>` : subLink.title
                                                            }
                                                        </a>
                                                    ) : (
                                                        <div
                                                            className={`flex justify-between items-center w-full ${hasSubDropdown ? "pr-4" : ""
                                                                }`}
                                                        >
                                                            {subLink.title}
                                                        </div>
                                                    )}

                                                    {/* Second dropdown */}
                                                    {hasSubDropdown && (
                                                        <ul
                                                            className={`absolute top-0 ml-1 min-w-[180px] bg-white border border-gray-300 shadow-md 
                                                            opacity-0 invisible transition-all duration-200 z-50
                                                             group-hover/subDrop:opacity-100 group-hover/subDrop:visible
                                                            ${link.title == 'Haqqımızda' ? 'left-full' : 'right-full'}`}
                                                        >
                                                            {subLink.arrowLinks!.map((arrowTitle, arrowIdx) => (
                                                                <li
                                                                    key={arrowIdx}
                                                                    className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap cursor-pointer"
                                                                >
                                                                    <a href={`/${arrowTitle.toLowerCase().replace(/ə/g, 'e').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ç/g, 'c').replace(/ş/g, 's').replace(/ /g, '-')}`} className="block">
                                                                        {arrowTitle}
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
            </nav>
        </div>
    );
}