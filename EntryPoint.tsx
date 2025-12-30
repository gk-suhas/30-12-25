import React,{useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
function EntryPoint() {
  const navigate=useNavigate()
  const inputRef=useRef()
  useEffect(()=>{
    inputRef.current.focus()
  },[])
  return (
    <>
    <div>Eat club</div>
    <select name="" ref={inputRef} onChange={(e)=>navigate(`/${e.target.value}`)}>
      <option value="select">select</option>
      <option value="biryani">Biryani</option>
      <option value="icecream">IceCream</option>
      <option value="meals">Meals</option>
      <option value="pizza">Pizza</option>
      <option value="rolls">rolls</option>
      <option value="salads">salads</option>
    </select>
    </>
  )
}

export default EntryPoint
