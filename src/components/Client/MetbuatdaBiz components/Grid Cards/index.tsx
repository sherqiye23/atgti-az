import PaginationComponent from "../Pagination";
import { useEffect, useState } from "react";
import type { fakeData } from "../../../../types/metbuatdabiz.types";
import GridCard from "../Grid Card";

export default function GridCards() {
    const fakeDataArray: fakeData[] = [
        {
            image: 'https://gikm.az/wp-content/uploads/2025/07/gikmlogo2-2-1-thegem-blog-justified.png',
            title: 'GİKM-İN 2025-Cİ İLİN İLK 6 AYI UĞURLU FƏALİYYƏT DÖVRÜ KİMİ DƏYƏRLƏNDİRİLİR',
            description: 'Bakı, 11 iyul,&nbsp;AZƏRTAC Gənclərin İnkişaf və Karyera Mərkəzinin (GİKM) 2025-ci ilin ilk 6 ayı uğurlu fəaliyyət dövrü kimi dəyərləndirilir. Bu…',
            readMoreLink: 'https://gikm.az/gikm-in-2025-ci-ilin-ilk-6-ayi-ugurlu-fealiyyet-dovru-kimi-deyerlendirilir/'
        },
        {
            image: 'https://gikm.az/wp-content/uploads/2025/06/508457369_1035116932136475_7892042966920802221_n-thegem-blog-justified.jpg',
            title: 'GİKM TƏRƏFİNDƏN REGİONLARDA GƏNCLƏRİN İŞTİRAKI İLƏ 28 MAY – MÜSTƏQİLLİK GÜNÜNƏ HƏSR OLUNMUŞ SİLSİLƏ TƏDBİRLƏR TƏŞKİL EDİLİB',
            description: 'Azərbaycan xalqının müstəqillik əldə edərək Şərqdə ilk demokratik və hüquqi dövlət olan Azərbaycan Xalq Cümhuriyyətini qurmasının 107-ci ildönümü region gəncləri…',
            readMoreLink: 'https://gikm.az/bakida-genclerin-suni-intellekt-forumu-kecirilib-4/'
        },
        {
            image: 'https://gikm.az/wp-content/uploads/2025/07/gikmlogo2-2-1-thegem-blog-justified.png',
            title: 'GİKM-İN 2025-Cİ İLİN İLK 6 AYI UĞURLU FƏALİYYƏT DÖVRÜ KİMİ DƏYƏRLƏNDİRİLİR',
            description: 'Bakı, 11 iyul,&nbsp;AZƏRTAC Gənclərin İnkişaf və Karyera Mərkəzinin (GİKM) 2025-ci ilin ilk 6 ayı uğurlu fəaliyyət dövrü kimi dəyərləndirilir. Bu…',
            readMoreLink: 'https://gikm.az/gikm-in-2025-ci-ilin-ilk-6-ayi-ugurlu-fealiyyet-dovru-kimi-deyerlendirilir/'
        },
        {
            image: 'https://gikm.az/wp-content/uploads/2025/06/508457369_1035116932136475_7892042966920802221_n-thegem-blog-justified.jpg',
            title: 'GİKM TƏRƏFİNDƏN REGİONLARDA GƏNCLƏRİN İŞTİRAKI İLƏ 28 MAY – MÜSTƏQİLLİK GÜNÜNƏ HƏSR OLUNMUŞ SİLSİLƏ TƏDBİRLƏR TƏŞKİL EDİLİB',
            description: 'Azərbaycan xalqının müstəqillik əldə edərək Şərqdə ilk demokratik və hüquqi dövlət olan Azərbaycan Xalq Cümhuriyyətini qurmasının 107-ci ildönümü region gəncləri…',
            readMoreLink: 'https://gikm.az/bakida-genclerin-suni-intellekt-forumu-kecirilib-4/'
        },
        {
            image: 'https://gikm.az/wp-content/uploads/2025/06/508457369_1035116932136475_7892042966920802221_n-thegem-blog-justified.jpg',
            title: 'GİKM TƏRƏFİNDƏN REGİONLARDA GƏNCLƏRİN İŞTİRAKI İLƏ 28 MAY – MÜSTƏQİLLİK GÜNÜNƏ HƏSR OLUNMUŞ SİLSİLƏ TƏDBİRLƏR TƏŞKİL EDİLİB',
            description: 'Azərbaycan xalqının müstəqillik əldə edərək Şərqdə ilk demokratik və hüquqi dövlət olan Azərbaycan Xalq Cümhuriyyətini qurmasının 107-ci ildönümü region gəncləri…',
            readMoreLink: 'https://gikm.az/bakida-genclerin-suni-intellekt-forumu-kecirilib-4/'
        },
        {
            image: 'https://gikm.az/wp-content/uploads/2025/06/508457369_1035116932136475_7892042966920802221_n-thegem-blog-justified.jpg',
            title: 'GİKM TƏRƏFİNDƏN REGİONLARDA GƏNCLƏRİN İŞTİRAKI İLƏ 28 MAY – MÜSTƏQİLLİK GÜNÜNƏ HƏSR OLUNMUŞ SİLSİLƏ TƏDBİRLƏR TƏŞKİL EDİLİB',
            description: 'Azərbaycan xalqının müstəqillik əldə edərək Şərqdə ilk demokratik və hüquqi dövlət olan Azərbaycan Xalq Cümhuriyyətini qurmasının 107-ci ildönümü region gəncləri…',
            readMoreLink: 'https://gikm.az/bakida-genclerin-suni-intellekt-forumu-kecirilib-4/'
        },
        {
            image: 'https://gikm.az/wp-content/uploads/2025/07/gikmlogo2-2-1-thegem-blog-justified.png',
            title: 'GİKM-İN 2025-Cİ İLİN İLK 6 AYI UĞURLU FƏALİYYƏT DÖVRÜ KİMİ DƏYƏRLƏNDİRİLİR',
            description: 'Bakı, 11 iyul,&nbsp;AZƏRTAC Gənclərin İnkişaf və Karyera Mərkəzinin (GİKM) 2025-ci ilin ilk 6 ayı uğurlu fəaliyyət dövrü kimi dəyərləndirilir. Bu…',
            readMoreLink: 'https://gikm.az/gikm-in-2025-ci-ilin-ilk-6-ayi-ugurlu-fealiyyet-dovru-kimi-deyerlendirilir/'
        },
        {
            image: 'https://gikm.az/wp-content/uploads/2025/06/508457369_1035116932136475_7892042966920802221_n-thegem-blog-justified.jpg',
            title: 'GİKM TƏRƏFİNDƏN REGİONLARDA GƏNCLƏRİN İŞTİRAKI İLƏ 28 MAY – MÜSTƏQİLLİK GÜNÜNƏ HƏSR OLUNMUŞ SİLSİLƏ TƏDBİRLƏR TƏŞKİL EDİLİB',
            description: 'Azərbaycan xalqının müstəqillik əldə edərək Şərqdə ilk demokratik və hüquqi dövlət olan Azərbaycan Xalq Cümhuriyyətini qurmasının 107-ci ildönümü region gəncləri…',
            readMoreLink: 'https://gikm.az/bakida-genclerin-suni-intellekt-forumu-kecirilib-4/'
        },
        {
            image: 'https://gikm.az/wp-content/uploads/2025/07/gikmlogo2-2-1-thegem-blog-justified.png',
            title: 'GİKM-İN 2025-Cİ İLİN İLK 6 AYI UĞURLU FƏALİYYƏT DÖVRÜ KİMİ DƏYƏRLƏNDİRİLİR',
            description: 'Bakı, 11 iyul,&nbsp;AZƏRTAC Gənclərin İnkişaf və Karyera Mərkəzinin (GİKM) 2025-ci ilin ilk 6 ayı uğurlu fəaliyyət dövrü kimi dəyərləndirilir. Bu…',
            readMoreLink: 'https://gikm.az/gikm-in-2025-ci-ilin-ilk-6-ayi-ugurlu-fealiyyet-dovru-kimi-deyerlendirilir/'
        },
        {
            image: 'https://gikm.az/wp-content/uploads/2025/06/508457369_1035116932136475_7892042966920802221_n-thegem-blog-justified.jpg',
            title: 'GİKM TƏRƏFİNDƏN REGİONLARDA GƏNCLƏRİN İŞTİRAKI İLƏ 28 MAY – MÜSTƏQİLLİK GÜNÜNƏ HƏSR OLUNMUŞ SİLSİLƏ TƏDBİRLƏR TƏŞKİL EDİLİB',
            description: 'Azərbaycan xalqının müstəqillik əldə edərək Şərqdə ilk demokratik və hüquqi dövlət olan Azərbaycan Xalq Cümhuriyyətini qurmasının 107-ci ildönümü region gəncləri…',
            readMoreLink: 'https://gikm.az/bakida-genclerin-suni-intellekt-forumu-kecirilib-4/'
        },
        {
            image: 'https://gikm.az/wp-content/uploads/2025/06/508457369_1035116932136475_7892042966920802221_n-thegem-blog-justified.jpg',
            title: 'GİKM TƏRƏFİNDƏN REGİONLARDA GƏNCLƏRİN İŞTİRAKI İLƏ 28 MAY – MÜSTƏQİLLİK GÜNÜNƏ HƏSR OLUNMUŞ SİLSİLƏ TƏDBİRLƏR TƏŞKİL EDİLİB',
            description: 'Azərbaycan xalqının müstəqillik əldə edərək Şərqdə ilk demokratik və hüquqi dövlət olan Azərbaycan Xalq Cümhuriyyətini qurmasının 107-ci ildönümü region gəncləri…',
            readMoreLink: 'https://gikm.az/bakida-genclerin-suni-intellekt-forumu-kecirilib-4/'
        },
        {
            image: 'https://gikm.az/wp-content/uploads/2025/06/508457369_1035116932136475_7892042966920802221_n-thegem-blog-justified.jpg',
            title: 'GİKM TƏRƏFİNDƏN REGİONLARDA GƏNCLƏRİN İŞTİRAKI İLƏ 28 MAY – MÜSTƏQİLLİK GÜNÜNƏ HƏSR OLUNMUŞ SİLSİLƏ TƏDBİRLƏR TƏŞKİL EDİLİB',
            description: 'Azərbaycan xalqının müstəqillik əldə edərək Şərqdə ilk demokratik və hüquqi dövlət olan Azərbaycan Xalq Cümhuriyyətini qurmasının 107-ci ildönümü region gəncləri…',
            readMoreLink: 'https://gikm.az/bakida-genclerin-suni-intellekt-forumu-kecirilib-4/'
        },
        {
            image: 'https://gikm.az/wp-content/uploads/2025/07/gikmlogo2-2-1-thegem-blog-justified.png',
            title: 'GİKM-İN 2025-Cİ İLİN İLK 6 AYI UĞURLU FƏALİYYƏT DÖVRÜ KİMİ DƏYƏRLƏNDİRİLİR',
            description: 'Bakı, 11 iyul,&nbsp;AZƏRTAC Gənclərin İnkişaf və Karyera Mərkəzinin (GİKM) 2025-ci ilin ilk 6 ayı uğurlu fəaliyyət dövrü kimi dəyərləndirilir. Bu…',
            readMoreLink: 'https://gikm.az/gikm-in-2025-ci-ilin-ilk-6-ayi-ugurlu-fealiyyet-dovru-kimi-deyerlendirilir/'
        },
        {
            image: 'https://gikm.az/wp-content/uploads/2025/06/508457369_1035116932136475_7892042966920802221_n-thegem-blog-justified.jpg',
            title: 'GİKM TƏRƏFİNDƏN REGİONLARDA GƏNCLƏRİN İŞTİRAKI İLƏ 28 MAY – MÜSTƏQİLLİK GÜNÜNƏ HƏSR OLUNMUŞ SİLSİLƏ TƏDBİRLƏR TƏŞKİL EDİLİB',
            description: 'Azərbaycan xalqının müstəqillik əldə edərək Şərqdə ilk demokratik və hüquqi dövlət olan Azərbaycan Xalq Cümhuriyyətini qurmasının 107-ci ildönümü region gəncləri…',
            readMoreLink: 'https://gikm.az/bakida-genclerin-suni-intellekt-forumu-kecirilib-4/'
        },
        {
            image: 'https://gikm.az/wp-content/uploads/2025/07/gikmlogo2-2-1-thegem-blog-justified.png',
            title: 'GİKM-İN 2025-Cİ İLİN İLK 6 AYI UĞURLU FƏALİYYƏT DÖVRÜ KİMİ DƏYƏRLƏNDİRİLİR',
            description: 'Bakı, 11 iyul,&nbsp;AZƏRTAC Gənclərin İnkişaf və Karyera Mərkəzinin (GİKM) 2025-ci ilin ilk 6 ayı uğurlu fəaliyyət dövrü kimi dəyərləndirilir. Bu…',
            readMoreLink: 'https://gikm.az/gikm-in-2025-ci-ilin-ilk-6-ayi-ugurlu-fealiyyet-dovru-kimi-deyerlendirilir/'
        },
        {
            image: 'https://gikm.az/wp-content/uploads/2025/06/508457369_1035116932136475_7892042966920802221_n-thegem-blog-justified.jpg',
            title: 'GİKM TƏRƏFİNDƏN REGİONLARDA GƏNCLƏRİN İŞTİRAKI İLƏ 28 MAY – MÜSTƏQİLLİK GÜNÜNƏ HƏSR OLUNMUŞ SİLSİLƏ TƏDBİRLƏR TƏŞKİL EDİLİB',
            description: 'Azərbaycan xalqının müstəqillik əldə edərək Şərqdə ilk demokratik və hüquqi dövlət olan Azərbaycan Xalq Cümhuriyyətini qurmasının 107-ci ildönümü region gəncləri…',
            readMoreLink: 'https://gikm.az/bakida-genclerin-suni-intellekt-forumu-kecirilib-4/'
        },
        {
            image: 'https://gikm.az/wp-content/uploads/2025/06/508457369_1035116932136475_7892042966920802221_n-thegem-blog-justified.jpg',
            title: 'GİKM TƏRƏFİNDƏN REGİONLARDA GƏNCLƏRİN İŞTİRAKI İLƏ 28 MAY – MÜSTƏQİLLİK GÜNÜNƏ HƏSR OLUNMUŞ SİLSİLƏ TƏDBİRLƏR TƏŞKİL EDİLİB',
            description: 'Azərbaycan xalqının müstəqillik əldə edərək Şərqdə ilk demokratik və hüquqi dövlət olan Azərbaycan Xalq Cümhuriyyətini qurmasının 107-ci ildönümü region gəncləri…',
            readMoreLink: 'https://gikm.az/bakida-genclerin-suni-intellekt-forumu-kecirilib-4/'
        },
        {
            image: 'https://gikm.az/wp-content/uploads/2025/06/508457369_1035116932136475_7892042966920802221_n-thegem-blog-justified.jpg',
            title: 'GİKM TƏRƏFİNDƏN REGİONLARDA GƏNCLƏRİN İŞTİRAKI İLƏ 28 MAY – MÜSTƏQİLLİK GÜNÜNƏ HƏSR OLUNMUŞ SİLSİLƏ TƏDBİRLƏR TƏŞKİL EDİLİB',
            description: 'Azərbaycan xalqının müstəqillik əldə edərək Şərqdə ilk demokratik və hüquqi dövlət olan Azərbaycan Xalq Cümhuriyyətini qurmasının 107-ci ildönümü region gəncləri…',
            readMoreLink: 'https://gikm.az/bakida-genclerin-suni-intellekt-forumu-kecirilib-4/'
        },
        {
            image: 'https://gikm.az/wp-content/uploads/2025/07/gikmlogo2-2-1-thegem-blog-justified.png',
            title: 'GİKM-İN 2025-Cİ İLİN İLK 6 AYI UĞURLU FƏALİYYƏT DÖVRÜ KİMİ DƏYƏRLƏNDİRİLİR',
            description: 'Bakı, 11 iyul,&nbsp;AZƏRTAC Gənclərin İnkişaf və Karyera Mərkəzinin (GİKM) 2025-ci ilin ilk 6 ayı uğurlu fəaliyyət dövrü kimi dəyərləndirilir. Bu…',
            readMoreLink: 'https://gikm.az/gikm-in-2025-ci-ilin-ilk-6-ayi-ugurlu-fealiyyet-dovru-kimi-deyerlendirilir/'
        },
        {
            image: 'https://gikm.az/wp-content/uploads/2025/06/508457369_1035116932136475_7892042966920802221_n-thegem-blog-justified.jpg',
            title: 'GİKM TƏRƏFİNDƏN REGİONLARDA GƏNCLƏRİN İŞTİRAKI İLƏ 28 MAY – MÜSTƏQİLLİK GÜNÜNƏ HƏSR OLUNMUŞ SİLSİLƏ TƏDBİRLƏR TƏŞKİL EDİLİB',
            description: 'Azərbaycan xalqının müstəqillik əldə edərək Şərqdə ilk demokratik və hüquqi dövlət olan Azərbaycan Xalq Cümhuriyyətini qurmasının 107-ci ildönümü region gəncləri…',
            readMoreLink: 'https://gikm.az/bakida-genclerin-suni-intellekt-forumu-kecirilib-4/'
        },
        {
            image: 'https://gikm.az/wp-content/uploads/2025/07/gikmlogo2-2-1-thegem-blog-justified.png',
            title: 'GİKM-İN 2025-Cİ İLİN İLK 6 AYI UĞURLU FƏALİYYƏT DÖVRÜ KİMİ DƏYƏRLƏNDİRİLİR',
            description: 'Bakı, 11 iyul,&nbsp;AZƏRTAC Gənclərin İnkişaf və Karyera Mərkəzinin (GİKM) 2025-ci ilin ilk 6 ayı uğurlu fəaliyyət dövrü kimi dəyərləndirilir. Bu…',
            readMoreLink: 'https://gikm.az/gikm-in-2025-ci-ilin-ilk-6-ayi-ugurlu-fealiyyet-dovru-kimi-deyerlendirilir/'
        },
        {
            image: 'https://gikm.az/wp-content/uploads/2025/06/508457369_1035116932136475_7892042966920802221_n-thegem-blog-justified.jpg',
            title: 'GİKM TƏRƏFİNDƏN REGİONLARDA GƏNCLƏRİN İŞTİRAKI İLƏ 28 MAY – MÜSTƏQİLLİK GÜNÜNƏ HƏSR OLUNMUŞ SİLSİLƏ TƏDBİRLƏR TƏŞKİL EDİLİB',
            description: 'Azərbaycan xalqının müstəqillik əldə edərək Şərqdə ilk demokratik və hüquqi dövlət olan Azərbaycan Xalq Cümhuriyyətini qurmasının 107-ci ildönümü region gəncləri…',
            readMoreLink: 'https://gikm.az/bakida-genclerin-suni-intellekt-forumu-kecirilib-4/'
        },
        {
            image: 'https://gikm.az/wp-content/uploads/2025/06/508457369_1035116932136475_7892042966920802221_n-thegem-blog-justified.jpg',
            title: 'GİKM TƏRƏFİNDƏN REGİONLARDA GƏNCLƏRİN İŞTİRAKI İLƏ 28 MAY – MÜSTƏQİLLİK GÜNÜNƏ HƏSR OLUNMUŞ SİLSİLƏ TƏDBİRLƏR TƏŞKİL EDİLİB',
            description: 'Azərbaycan xalqının müstəqillik əldə edərək Şərqdə ilk demokratik və hüquqi dövlət olan Azərbaycan Xalq Cümhuriyyətini qurmasının 107-ci ildönümü region gəncləri…',
            readMoreLink: 'https://gikm.az/bakida-genclerin-suni-intellekt-forumu-kecirilib-4/'
        },
        {
            image: 'https://gikm.az/wp-content/uploads/2025/06/508457369_1035116932136475_7892042966920802221_n-thegem-blog-justified.jpg',
            title: 'GİKM TƏRƏFİNDƏN REGİONLARDA GƏNCLƏRİN İŞTİRAKI İLƏ 28 MAY – MÜSTƏQİLLİK GÜNÜNƏ HƏSR OLUNMUŞ SİLSİLƏ TƏDBİRLƏR TƏŞKİL EDİLİB',
            description: 'Azərbaycan xalqının müstəqillik əldə edərək Şərqdə ilk demokratik və hüquqi dövlət olan Azərbaycan Xalq Cümhuriyyətini qurmasının 107-ci ildönümü region gəncləri…',
            readMoreLink: 'https://gikm.az/bakida-genclerin-suni-intellekt-forumu-kecirilib-4/'
        },
    ]

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = fakeDataArray.slice(indexOfFirstItem, indexOfLastItem);

    // animation of cards appearing while scrolling
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const cards = document.querySelectorAll('.animate-section');
        cards.forEach(card => observer.observe(card));

        return () => observer.disconnect();
    }, [currentItems]);

    return (
        <div className="container px-3 pt-[300px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {currentItems?.map((data, i) => (
                    <GridCard data={data} i={i} />
                ))}
            </div>

            <PaginationComponent
                data={fakeDataArray}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage} />
        </div>
    )
}