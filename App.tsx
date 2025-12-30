import { createBrowserRouter,RouterProvider } from "react-router-dom";
import EntryPoint from "./EntryPoint";
import Biryani from "./food/Biryani";
import { UserProvider } from "./AddToCart/UserContext";
import Cart from "./AddToCart/Cart";
import IceCream from "./food/IceCream";
import Meals from "./food/Meals";
import Pizza from "./food/Pizza";
import Rolls from "./food/Rolls";
import Salads from "./food/Salads";
const router=createBrowserRouter([
  {
    path:'/',
    element: <EntryPoint/>
  },
  {
    path:'/biryani',
    element: <Biryani/>
  },
  {
    path:'/cart',
    element:<Cart/>
  },
  {
    path:'/icecream',
    element:<IceCream/>
  },
  {
    path:'/meals',
    element:<Meals/>
  },
  {
    path:'/pizza',
    element:<Pizza/>
  },
  {
    path:'/rolls',
    element:<Rolls/>
  },
  {
    path:'/salads',
    element:<Salads/>
  }
])

export default function App(){
  return (
    <>
    <UserProvider >
      <RouterProvider router={router}/>
      </UserProvider>
    </>
  )
}