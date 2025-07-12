import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

interface SliderInfosInterface {
    imgUrl: string;
    sliderDesc: string;
}

const sliderInfos: SliderInfosInterface[] = [
    {
        imgUrl: "https://gikm.az/wp-content/uploads/2020/09/1%C3%BCerty-thegem-testimonial.jpg",
        sliderDesc: "“Bizim bu günkü gəncliyimiz sağlam düşüncəli gənclikdir, vətənpərvər gənclikdir, xalqını, millətini sevən gənclikdir… Gənclərimiz mükəmməl təhsil almalı, həyatı dərindən öyrənməli, dünyada gedən prosesləri bilməlidir. Lazımi fəaliyyət göstərib öz xalqına, dövlətinə xidmət etməlidir.”",
    },
    {
        imgUrl: "https://gikm.az/wp-content/uploads/2020/09/Ilham_Aliyev_official_portrait-1-thegem-testimonial.jpg",
        sliderDesc: "“Gənclər Azərbaycanın bu günü və gələcəyidir. Onların üzərinə böyük vəzifə düşür, bu vəzifələr gələcəkdə daha da böyük olacaqdır, onlar müstəqil Azərbaycanın XXI əsrdə yaradanları, quranları, inkişaf etdirənləridir.Biz müstəqil Azərbaycanın taleyini gələcəkdə gənclərə etibar edəcəyik, onlara tapşıracağıq.”",
    },
    {
        imgUrl: "https://gikm.az/wp-content/uploads/2020/09/038-heyder-thegem-testimonial.jpg",
        sliderDesc: "“Əziz gənclər, siz çiçəklənən, gözəl bir ölkədə yaşayırsınız. Hamılıqla uğurlarınıza ürəkdən sevinirik. Zəngin bilikli və dərin mənəviyyatlı, vətənpərvər gənclik olaraq formalaşmağınız gələcəyə inamımızı artırır, qəlbimizi qürur hissi ilə doldurur. Sizinlə fəxr edirik! Azərbaycanın gələcəyi məhz sizlərin bilik səviyyəsindən və müasir innovativ texnologiyalara yiyələnmək bacarığınızdan asılı olacaq. Sizin dövlətimizin və xalqımızın etimadını layiqincə doğruldacağınıza inanıram.”",
    },
];


export default function InspirationSection() {
    return (
        <>
            <div className="h-[90vh] bg-no-repeat w-full bg-cover bg-[url('https://gikm.az/wp-content/uploads/2020/08/Slider-3-2.jpg')] bg-fixed">
                <div className='container h-full flex items-center justify-center'>
                    <Swiper
                        loop={true}
                        speed={900}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        className="mySwiper">
                        {
                            sliderInfos?.map((sliderInfo, index) => (
                                <SwiperSlide>
                                    <div key={index} className='flex items-center justify-center gap-[20px] flex-col max-w-[1000px] mx-auto my-0 px-5 lg:px-0'>
                                        <div className='rounded-full w-[160px]'>
                                            <img src={sliderInfo.imgUrl} alt="image" className='rounded-full w-full object-cover' />
                                        </div>
                                        <div className='text-lg md:text-2xl text-center text-white font-light'>{sliderInfo.sliderDesc}</div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </>
    )
}