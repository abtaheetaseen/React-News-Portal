import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import TechnologyNewsDetails from "../pages/TechnologyNewsDetails";
import FavoriteList from "../pages/FavoriteList";
import BusinessNewsDetails from "../pages/BusinessNewsDetails";
import SportsNewsDetails from "../pages/SportsNewsDetails";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/favoriteList",
                element: <FavoriteList />
            },
            {
                path: "/technologyNewsDetails/:author",
                element: <TechnologyNewsDetails />,
                loader: () => fetch(`https://newsapi.org/v2/everything?q=technology&apiKey=b12bba7e0e0d45a9babe5288419c430a`)
            },
            {
                path: "/businessNewsDetails/:author",
                element: <BusinessNewsDetails />,
                loader: () => fetch(`https://newsapi.org/v2/everything?q=business&apiKey=b12bba7e0e0d45a9babe5288419c430a`)
            },
            {
                path: "/sportsNewsDetails/:author",
                element: <SportsNewsDetails />,
                loader: () => fetch(`https://newsapi.org/v2/everything?q=sports&apiKey=b12bba7e0e0d45a9babe5288419c430a`)
            },
        ]
    }
])