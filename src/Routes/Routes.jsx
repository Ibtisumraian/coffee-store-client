import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import AddCoffee from "../components/AddCoffee/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";
import Spinner from "../components/Spinner/Spinner";
import CoffeeDetails from "../components/CoffeeDetails/CoffeeDetails";
import SignUp from "../components/SignUp/SignUp";
import SignIn from "../components/SignIn/SignIn";

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
          path: '/UpdateCoffee/:id',
          loader:({params})=>fetch(`http://localhost:5000/coffees/${params.id}`),
          Component: UpdateCoffee
        },
        {
          path: '/CoffeeDetails/:id',
          loader:({params})=>fetch(`http://localhost:5000/coffees/${params.id}`),
          Component: CoffeeDetails
        },
        {
          path: '/SignUp',
          Component: SignUp
        },
        {
          path: '/SignIn',
          Component: SignIn
        }
        
    ],
  },
]);
