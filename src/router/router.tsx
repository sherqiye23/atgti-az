import ClientLayout from "../pages/Client/ClientLayout";
import HomePage from "../pages/Client/Home";
import MetbuatdaBiz from "../pages/Client/Metbuatda Biz";
import NotFoundPage from "../pages/Client/NotFoundPage";

const ROUTES = [
    {
        path: '/',
        element: <ClientLayout />,
        children: [
            {
                path: '',
                element: <HomePage />,
            },
            {
                path: '/justified-grids/mətbuatda-biz/',
                element: <MetbuatdaBiz />,
            },
            {
                path: '*',
                element: <NotFoundPage />
            }
        ]
    }
]

export default ROUTES