import ClientFooter from "../../components/Client/Client Footer";
import ClientNavbar from "../../components/Client/Client Navbar";
import { Outlet } from 'react-router'
import ScrollButton from "../../components/Client/Scroll Button";

export default function ClientLayout() {
    return (
        <>
            <ClientNavbar />
            <Outlet />
            <ClientFooter />
            <ScrollButton />
        </>
    )
}