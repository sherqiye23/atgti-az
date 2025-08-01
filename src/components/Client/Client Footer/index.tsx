export default function ClientFooter() {
    return (
        <>
            <footer>
                <div>
                    <div className="bg-white text-center pt-[70px] pb-5">
                        <div className="text-xl sm:text-2xl md:text-4xl tracking-wider font-bold text-[var(--base-text-color)]">İNKİŞAF SƏNDƏN BAŞLAYIR!</div>
                    </div>
                    <div className="relative flex justify-center items-center">
                        <img src="/images/footer images/footer-img.jpg" alt="footer-bg" className=" w-full h-[70vh] sm:h-auto" />
                        <div className="max-w-[1200px] my-0 mx-auto flex justify-between items-center absolute w-full px-5 flex-col sm:flex-row bottom-[5%] lg:bottom-[23%]">
                            <img className="w-[150px] lg:w-[200px] xl:w-[250px]" src="/images/logo/atgti-white.png" alt="logo" />
                            <div className="text-white flex flex-col">
                                <span className="text-[var(--base-text-color)] font-semibold uppercase text-lg">Ünvan</span>

                                <div className="flex flex-col mt-3">
                                    <span>Baş ofis: C.Cabbarlı küç., 609, Globus Center</span>
                                    <span>Şəhər və rayonlarda yerləşən Heydər Əliyev mərkəzləri</span>
                                </div>

                                <div className="flex flex-col my-3">
                                    <span>Əlaqə nömrəsi:</span>
                                    <span>+994 12 597 56 30</span>
                                </div>

                                <span>Elektron poçt: info@gikm.az</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}