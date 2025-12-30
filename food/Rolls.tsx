import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useUser } from '../AddToCart/UserContext'
import { useNavigate } from 'react-router-dom'
function Rolls() {
    const navigate=useNavigate()
    const[data,setData]=useState([])
    const {addToCart,cart}=useUser()
    const price=cart.reduce((sum,item)=>sum+item.price,0)
    useEffect(()=>{
        axios.get("http://localhost:2000/rolls ")
        .then((res)=>setData(res.data))
        .catch(err=>alert(err))
    },[])
  return (
    <>
    <h1>rolls list</h1>
    <h1>total price {price}</h1>
    <h1>total items {cart.length}</h1>
    <button onClick={()=>navigate('/cart')}>go to cart</button>

    <div>
        {data.map((item)=>(
            <div key={item.id}>
                <div>{item.name}</div>
                <div>{item.description}</div>
                <div>{item.price}</div>
                <button onClick={()=>addToCart(item)}>add to cart</button>
            </div>
        ))}
    </div>
    </>
  )
}

export default Rolls