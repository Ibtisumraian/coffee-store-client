import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import AddCoffee from "../components/AddCoffee/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";
import Spinner from "../components/Spinner/Spinner";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            hydrateFallbackElement:<Spinner></Spinner>,
            loader:()=>fetch('http://localhost:5000/coffees'),
            Component: Home,
        },
        {
            path: "/AddCoffee",
            Component: AddCoffee,
        },
        {
            path: '/UpdateCoffee',
            Component: UpdateCoffee
        }
        
    ],
  },
]);
