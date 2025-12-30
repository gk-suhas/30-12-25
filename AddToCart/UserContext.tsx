import { createContext,useContext,useState } from "react";

export const UserContext=createContext()
export const UserProvider=({children})=>{
    const[cart,setCart]=useState([])
    const addToCart=(item)=>{
        setCart(e=>[...e,item])
    }
    return <UserContext.Provider value={{cart,addToCart}}>
        {children}
    </UserContext.Provider>
}
export const useUser=()=>useContext(UserContext)