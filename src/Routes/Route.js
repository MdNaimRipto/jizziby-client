import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Secondary from "../Layout/Secondary";
import AllControllers from "../Pages/AllProducts/AllControllers";
import Consoles from "../Pages/AllProducts/Consoles";
import Decks from "../Pages/AllProducts/Decks";
import Drones from "../Pages/AllProducts/Drones";
import EarPhones from "../Pages/AllProducts/EarPhones";
import GraphicsCards from "../Pages/AllProducts/GraphicsCards";
import Headphones from "../Pages/AllProducts/Headphones";
import Laptops from "../Pages/AllProducts/Laptops";
import LaptopsBattery from "../Pages/AllProducts/LaptopsBattery";
import Phones from "../Pages/AllProducts/Phones";
import SmartWatch from "../Pages/AllProducts/SmartWatch";
import Speakers from "../Pages/AllProducts/Speakers";
import Tablets from "../Pages/AllProducts/Tablets";
import Televisions from "../Pages/AllProducts/Televisions";
import Cart from "../Pages/Cart/Cart";
import Favorite from "../Pages/Favourite/Favorite";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginRegister/Login";
import Register from "../Pages/LoginRegister/Register";
import AllProductsContainer from "../Pages/Shared/AllProductsContainer";
import SingleProducts from "../Pages/Shared/SingleProducts";
import UserProfile from "../Pages/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/favorite",
                element: <PrivateRoute><Favorite /></PrivateRoute>
            },
            {
                path: "/userProfile",
                element: <PrivateRoute><UserProfile /></PrivateRoute>
            },
            {
                path: "/allProducts",
                element: <AllProductsContainer />
            },
            {
                path: "/allProducts/:id",
                element: <SingleProducts />,
                loader: async ({ params }) => {
                    return fetch(`https://jizziby-server.vercel.app/allProducts/${params.id}`)
                }
            },
            {
                path: "/laptop",
                element: <Laptops />
            },
            {
                path: "/laptop/:id",
                element: <SingleProducts />,
                loader: async ({ params }) => {
                    return fetch(`https://jizziby-server.vercel.app/laptop/${params.id}`)
                }
            },
            {
                path: "laptopsBattery",
                element: <LaptopsBattery />
            },
            {
                path: "/laptopsBattery/:id",
                element: <SingleProducts />,
                loader: async ({ params }) => {
                    return fetch(`https://jizziby-server.vercel.app/laptopsBattery/${params.id}`)
                }
            },
            {
                path: "/laptop/:id",
                element: <SingleProducts />,
                loader: async ({ params }) => {
                    return fetch(`https://jizziby-server.vercel.app/laptop/${params.id}`)
                }
            },
            {
                path: "televisions",
                element: <Televisions />
            },
            {
                path: "/televisions/:id",
                element: <SingleProducts />,
                loader: async ({ params }) => {
                    return fetch(`https://jizziby-server.vercel.app/televisions/${params.id}`)
                }
            },
            {
                path: "phones",
                element: <Phones />
            },
            {
                path: "/phones/:id",
                element: <SingleProducts />,
                loader: async ({ params }) => {
                    return fetch(`https://jizziby-server.vercel.app/phones/${params.id}`)
                }
            },
            {
                path: "tablets",
                element: <Tablets />
            },
            {
                path: "/tablets/:id",
                element: <SingleProducts />,
                loader: async ({ params }) => {
                    return fetch(`https://jizziby-server.vercel.app/tablets/${params.id}`)
                }
            },
            {
                path: "smartWatches",
                element: <SmartWatch />
            },
            {
                path: "/smartWatches/:id",
                element: <SingleProducts />,
                loader: async ({ params }) => {
                    return fetch(`https://jizziby-server.vercel.app/smartWatches/${params.id}`)
                }
            },
            {
                path: "gpus",
                element: <GraphicsCards />
            },
            {
                path: "/gpus/:id",
                element: <SingleProducts />,
                loader: async ({ params }) => {
                    return fetch(`https://jizziby-server.vercel.app/gpus/${params.id}`)
                }
            },
            {
                path: "headphones",
                element: <Headphones />
            },
            {
                path: "/headphones/:id",
                element: <SingleProducts />,
                loader: async ({ params }) => {
                    return fetch(`https://jizziby-server.vercel.app/headphones/${params.id}`)
                }
            },
            {
                path: "speakers",
                element: <Speakers />
            },
            {
                path: "/speakers/:id",
                element: <SingleProducts />,
                loader: async ({ params }) => {
                    return fetch(`https://jizziby-server.vercel.app/speakers/${params.id}`)
                }
            },
            {
                path: "earPhones",
                element: <EarPhones />
            },
            {
                path: "/earPhones/:id",
                element: <SingleProducts />,
                loader: async ({ params }) => {
                    return fetch(`https://jizziby-server.vercel.app/earPhones/${params.id}`)
                }
            },
            {
                path: "/controllers",
                element: <AllControllers />
            },
            {
                path: "/controllers/:id",
                element: <SingleProducts />,
                loader: async ({ params }) => {
                    return fetch(`https://jizziby-server.vercel.app/controllers/${params.id}`)
                }
            },
            {
                path: "/consoles",
                element: <Consoles />
            },
            {
                path: "/consoles/:id",
                element: <SingleProducts />,
                loader: async ({ params }) => {
                    return fetch(`https://jizziby-server.vercel.app/consoles/${params.id}`)
                }
            },
            {
                path: "/drones",
                element: <Drones />
            },
            {
                path: "/drones/:id",
                element: <SingleProducts />,
                loader: async ({ params }) => {
                    return fetch(`https://jizziby-server.vercel.app/drones/${params.id}`)
                }
            },
            {
                path: "/decks",
                element: <Decks />
            },
            {
                path: "/decks/:id",
                element: <SingleProducts />,
                loader: async ({ params }) => {
                    return fetch(`https://jizziby-server.vercel.app/decks/${params.id}`)
                }
            },
        ]
    },
    {
        path: "/",
        element: <Secondary />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }
])