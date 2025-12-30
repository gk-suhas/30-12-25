import React from 'react'
import { useUser } from './UserContext'
import { useSearchParams } from 'react-router-dom'
function Cart() {
    const {cart}=useUser()
    const price=cart.reduce((sum,item)=>sum+item.price,0)
  return (
    <>
    <h1>{price}</h1>
    <div>
        {cart.map((item)=>(
            <div key={item.id}>
                <div>{item.name}</div>
                <div>{item.description}</div>
                <div>{item.price}</div>
            </div>
        ))}
    </div>
    </>
  )
}

export default Cart