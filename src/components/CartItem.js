import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import { useDispatch } from 'react-redux'
import {remove} from"../redux/slices/CartSlice"
import toast from 'react-hot-toast';


function CartItem({item,itemIndex}) {
  const dispatch=useDispatch();

  const removeFromCart=()=>{
   dispatch(remove(item.id));
   toast.success("Item Removed");
  }
  return (
    <div>
      <div className='flex flex-row items-center gap-8 p-4 mt-10 ml-5 rounded-xl  border-b-2 w-100'>
        <div className='h-[150px]  '>
          <img src={item.image} alt="" className="h-[10rem] w-[8rem] object-fill"/>
        </div>
        <div className='flex flex-col gap-3 mt-0 pt-0 w-11/12 '>
          <h1 className="text-gray-700 font-semibold text-lg text-left  mt-0 ">{item.title}</h1>
          <h1 className=" text-gray-400 font-normal text-[15px] text-left ">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
          <div className='flex justify-between'>
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div onClick={removeFromCart} className='bg-red-400 rounded-full'>
              <AiFillDelete className='m-1'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem