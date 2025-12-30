import React,{useState,useEffect} from 'react'
import { useUser } from '../AddToCart/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function IceCream() {
    const navigate=useNavigate()
    const {cart,addToCart}=useUser()
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:2000/icecream ")
        .then((res)=>{
            setData(res.data)
        })
        .catch(err=>alert(err))
    },[])
    const price=cart.reduce((sum,item)=>sum+item.price,0)
  return (
    <>
    <h1>icecream items</h1>
    <button onClick={()=>navigate('/cart')}>go to cart</button>
    <h1>total items {cart.length}</h1>
    <h1>price {price}</h1>
    <div>
        {data.map((item)=>(
            <div key={item.id}>
                <div>{item.name}</div>
                <div>{item.description}</div>
                <div>{item.price}</div>
                <button onClick={(e)=>addToCart(item)}>add to cart</button>
            </div>
        ))}
    </div>
    </>
  )
}

export default IceCream