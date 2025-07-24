import ClientFooter from "../../components/Client/Client Footer";
import ClientNavbar from "../../components/Client/Client Navbar";
import { Outlet, useLocation } from 'react-router'
import ScrollButton from "../../components/Client/Scroll Button";

export default function ClientLayout() {
    const location = useLocation()

    const isSpecialPage = location.pathname === "/";

    return (
        <>
            <ClientNavbar location={isSpecialPage} />
            <Outlet />
            <ClientFooter />
            <ScrollButton />
        </>
    )
}