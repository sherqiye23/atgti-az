import ClientLayout from "../pages/Client/ClientLayout";
import HomePage from "../pages/Client/Home";

const ROUTES = [
    {
        path: '/',
        element: <ClientLayout />,
        children: [
            {
                path: '',
                element: <HomePage />,
            },
        ]
    }
]

export default ROUTES