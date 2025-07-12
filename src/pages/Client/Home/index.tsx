import HeroSlider from "../../../components/Client/Home Components/Hero Slider";
import InspirationSection from "../../../components/Client/Home Components/Inspiration Section";
import OurPurpose from "../../../components/Client/Home Components/Our Purpose";

export default function HomePage() {
    return (
        <>
            <div className="h-[50vh] bg-gray-500"></div>
            {/* <HeroSlider/> */}
            <OurPurpose />
            <InspirationSection />
        </>
    )
}