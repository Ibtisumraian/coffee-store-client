import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import AddCoffee from "../components/AddCoffee/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
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
