import React,{useState,useEffect} from 'react'
import { useUser } from '../AddToCart/UserContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Salads() {
    const navigate=useNavigate()
    const {cart,addToCart}=useUser()
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:2000/salads ")
        .then(res=>setData(res.data))
        .catch(err=>alert(err))
    },[])
    const price=cart.reduce((sum,item)=>sum+item.price,0)
  return (
    <>
    <h1>salads list</h1>
    <button onClick={()=>navigate('/cart')}>go to cart</button>
    <h1>total price {price}</h1>
    <h1>total items {cart.length}</h1>
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

export default Salads