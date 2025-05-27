import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import AddCoffee from "../components/AddCoffee/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";
import Spinner from "../components/Spinner/Spinner";
import CoffeeDetails from "../components/CoffeeDetails/CoffeeDetails";
import SignUp from "../components/SignUp/SignUp";
import SignIn from "../components/SignIn/SignIn";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            hydrateFallbackElement:<Spinner></Spinner>,
            loader:()=>fetch('https://coffee-store-server-mu-rosy.vercel.app/coffees'),
            Component: Home,
        },
        {
            path: "/AddCoffee",
            element: <PrivateRoute><AddCoffee></AddCoffee></PrivateRoute>
        },
        {
          path: '/UpdateCoffee/:id',
          loader:({params})=>fetch(`https://coffee-store-server-mu-rosy.vercel.app/coffees/${params.id}`),
          element: <PrivateRoute><UpdateCoffee></UpdateCoffee></PrivateRoute>
        },
        {
          path: '/CoffeeDetails/:id',
          loader:({params})=>fetch(`https://coffee-store-server-mu-rosy.vercel.app/coffees/${params.id}`),
          element: <PrivateRoute><CoffeeDetails></CoffeeDetails></PrivateRoute>
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
