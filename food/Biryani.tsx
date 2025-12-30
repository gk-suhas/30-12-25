import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../AddToCart/UserContext'
function Biryani() {
    const navigate=useNavigate()
    const[data,setData]=useState([])
    const {addToCart,cart}=useUser()
    useEffect(()=>{
        axios.get("http://localhost:2000/biryani ")
        .then((res)=>{
            setData(res.data)
        })
        .catch(err=>alert(err))
    },[])
    console.log(cart);
    
  return (
    <>
    <button onClick={()=>navigate('/cart')}>go to cart</button>
    <h1>Biryani menu</h1>
    <h4>Items in cart {cart.length}</h4>
    {/* <h4>Price {price}</h4> */}
    <div>
        {data.map((item)=>(
            <div key={item.id}>
                <img src={item.image} alt={item.name} width={150} />
                <div>{item.name}</div>
                <div>{item.description}</div>
                <div>{item.price}</div>
                <button onClick={()=>addToCart(item)}>Add to cart</button>
            </div>
        ))}
    </div>
    </>
  )
}

export default Biryani