import HomePage from "../Pages/HomePage";
import Translator from "../Pages/API/Translator";
import About from "../Pages/About";

export const routes = [{
        path: '/home',
        element: HomePage,
        exact: true
    },
    {
        path: '/vocabulary',
        element: Translator,
        exact: true
    },
    {
        path: '/about',
        element: About,
        exact: true
    },
]