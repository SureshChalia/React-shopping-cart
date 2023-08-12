import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from "../components/CartItem"


function Cart() {

  const {cart} = useSelector((state)=>state);
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])

  return (
    <div>
      {
        cart.length > 0 ?
        (
        <div className='flex flex-row max-w-6xl mx-auto sm:flex-col md:flex-row gap-2 mb-10'>
         <div className='w-50'>
          {
            cart.map((item,index)=>{
              return <CartItem key={item.id} item={item} itemIndex={index}/>
            })
          }
         </div>

         <div className='flex flex-col justify-between mt-16 w-50'>
          <div>
            <div className='text-green-700 font-bold'>YOUR CART</div>
            <div className='text-green-700 font-bold text-[25px]'>SUMMARY</div>
            <p>
              <span className='font-semibold'>Total Item:{cart.length}</span>
            </p>
          </div>
          <div className='flex flex-col gap-5'>
            <p className='font-semibold'>Total Amount: <b>${totalAmount}</b> </p>
            <button className='bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded w-full'>Checkout Now</button>
          </div>
         </div>
 
        </div>
        ):
        (<div className='flex flex-col justify-center items-center h-screen gap-3 '>
          <h1 className='text-green-700 font-bold'>Cart Empty</h1>
          <Link to="/">
          <button className='bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded w-full'>
            Shop Now
          </button>
          </Link>
        </div>)
      }
    </div>
  )
}

export default Cart