import ClientLayout from "../pages/Client/ClientLayout";
import HomePage from "../pages/Client/Home";
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
                element: <HomePage />,
            },
            {
                path: '*',
                element: <NotFoundPage />
            }
        ]
    }
]

export default ROUTES