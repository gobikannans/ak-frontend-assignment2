import React, { useState } from 'react'
import data from "../../data.json"
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import Popup from 'reactjs-popup'

import close from "../../assets/main/close.png"
import search from "../../assets/main/search.png"


import "./index.css"


const status=[
  {id:1,
   stat:"Confirmed",
  },
  {id:2,
    stat:"Delivered",
   },
   {id:3,
    stat:"Refund Completed (30d)",
   },
   {id:4,
    stat:"Pending",
   },
]

const amount=[
  {
    id:1,
    text:"Lowest",
  },
  {
    id:2,
    text:"Highest",
  }
]


const dateList=[
  {
    id:1,
    text:"From Lowest Date",
  },
  {
    id:2,
    text:"From Highest Date",
  }
]

const overlayStyles = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
 }

function Main() {

  //useState Functions
  const [showstatus,setStatus]=useState("Confirmed")
  const [sortRes,setSortRes]=useState("Lowest")
  const [name,setName]=useState("")
  const [itemInp,setItem]=useState("")
  const [quantityInp,setQuantity]=useState("")
  const [amountInp,setAmountInp]=useState("")
  const [dateInp,setDateInp]=useState("")

  const filterResults=data.filter(eachItem=>eachItem.status===showstatus)
    
 // sort Amount Funcitons 
 const filterAmountResults=filterResults.sort((a,b)=>{
  if(sortRes==="Lowest"){
    return parseInt(a.price)-parseInt(b.price)
  }else{
    return parseInt(b.price)-parseInt(a.price)
  }
})
 
 
  // results map function
  const results=filterAmountResults

  return (
    <div className='px-[30px] py-[20px] font-inter w-[80%]'>
      <nav className='flex justify-between w-100% mb-8'>
        <h1 className='font-bold text-[24px]'>Orders</h1>
        <button className='bg-[#1B59F8] rounded-md w-[120px] h-[40px] px-[10px] text-white flex text-[14px] items-center'> <span className='text-[25px] mr-2'>
          <img src={close} alt="close"/>
          </span> Add Order</button>
      </nav>
      <hr className='text-[#f5f5f5]'/>
      <div className='bg-white h-[745px] w-[1150px] rounded-[20px] px-[25px] py-[18px] border-[1px] border-solid border-[#eff0f6] mt-8'>        
         <div className='flex justify-between w-100% mb-2'>
           <h1 className='font-bold text-[18px]'>{showstatus} <span className='text-slate-400 text-[14px] ml-2'>{results.length}</span> </h1>
           <button className='bg-[#EFF0F6] rounded w-[26px] h-[26px] px-[10px]  flex text-[14px] items-center'> 
            -
           </button>
        </div>
        <hr className='text-[#f5f5f5]'/>
       <div className='flex items-center mt-8'>
         <div className='flex w-[400px]  items-center'>
           <img src={search} alt="search" className='mr-[20px] h-[15px]'/>
           <input placeholder='Search' type="text" className='bg-transparent border-none text-[14px] outline-none'/>
         </div>

     {/*-------status method------- */} 
      <div className= 'w-[240px] h-[27px] rounded-md'>
        <Popup
        trigger={
          <button className='group bg-[#eff0f6]  flex px-[6px] py-[3px] items-center text-[#4F5E74] font-[500] text-[13px] rounded-md' >
          ACTIVE ORDERS 
          <span><MdOutlineKeyboardArrowDown className='text-black group-focus:rotate-180'/> </span>
         </button>
        } >

         { close=>(<ul className='shadow-lg flex flex-col justify-between w-[150px] rounded px-[5px] py-[5px]  h-[100px] mr-[50px] bg-[#ffffff]  relative'>
          {status.map(({id,stat})=>{
            const onClickStatus=()=>{
              setStatus(stat)
            }

            const check=showstatus===stat?true:false

            return(
              <li key={id} className='flex items-center cursor-pointer' onClick={onClickStatus} >
                <input id={stat} checked={check} onChange={(e)=>e.target.value} type="radio" className='mr-1' name="foo"/>
                <label onClick={()=>close()} htmlFor={stat} className='text-[11px] cursor-pointer'>{stat}</label>
              </li>
            )
          })}
        </ul>)}
        </Popup> 
     </div>

     {/*----Amount method-----------*/}

      <div className= 'w-[230px] h-[27px]'>
         <Popup
          trigger={
            <button className='group w-[110px] rounded-md  bg-[#eff0f6] flex justify-center px-[6px] py-[3px] items-center text-[#4F5E74] font-[500] text-[13px]'>
            Amount
            <span className='group-focus:rotate-180'><MdOutlineKeyboardArrowDown/></span>
          </button>
          }
          position={'bottom end'}
          >
            {close=>(
            <ul className='shadow-lg  flex flex-col justify-between w-[80px] rounded px-[10px] py-[5px] h-[50px] mr-[50px] bg-[#ffffff]  relative'>
          {amount.map(({id,text})=>{
            const onClickSort=()=>{
              setSortRes(text)             
            }
            return(
              <li key={id} className='flex items-center cursor-pointer' onClick={onClickSort} >
                <p className='text-[11px] pl-3' onClick={()=>close()}>{text}</p>
              </li>
            )
          })}
        </ul>
            )}
          </Popup>
         </div>

     {/*------Placed on ----------*/}
     <div className= 'w-[165px] h-[27px] flex'>
          <Popup
          trigger={
            <button className='group bg-[#eff0f6] w-[110px] rounded-md flex justify-center px-[6px] py-[3px] items-center text-[#4F5E74] font-[500] text-[13px]'>
            Placed On
            <span className='group-focus:rotate-180'><MdOutlineKeyboardArrowDown/></span>
          </button>
          }
          position={'bottom end'}
          >
            {close=>( <ul className='shadow-lg  flex flex-col justify-between w-[140px] rounded px-[10px] py-[5px] h-[50px] mr-[50px] bg-[#ffffff]  relative'>
          {dateList.map(({id,text})=>{
  

            return(
              <li key={id} className='flex items-center cursor-pointer' onClick={()=>close()}>
                <p  className='text-[11px]'>{text}</p>
              </li>
            )
          })}
        </ul>)}
          </Popup>
         </div>

     {/*------Options method------*/}
         <div>
         <button className='group flex px-[6px] py-[3px] items-center text-[#4F5E74] font-[500] text-[13px]'>
            Options
            <span className='group-focus:rotate-180'><MdOutlineKeyboardArrowDown/></span>
          </button>
         </div>
        </div> 

     {/*------data array object methods-------*/}   
        <ul className='p-0 list-style-none mt-8 h-[500px]'>
          {results.map(({id,logo,brand_name,item,status,quantity,price,placed_on})=>{
           let cal;

            const onSubmitEdit=()=>{
             if(name==="" || item==="" || quantity==="" || amountInp==="" || dateInp===""){
             } else{
               cal=results.filter(eachItem=>{
                if(id===eachItem.id){
                  return [eachItem.brand_name=name,
                    eachItem.item=itemInp , 
                    eachItem.quantity=quantityInp,
                    eachItem.price=amountInp,
                    eachItem.placed_on=dateInp, ]
                } else{
                  return cal;
                }
              })
            }
              setName("")
              setItem("")
              setQuantity("")
              setAmountInp("")
              setDateInp("")
            }
            return(
            <li className='group flex mb-6 cursor-pointer' key={id}  >
                <input type="radio" className='group-focus:checked text-[30px]' name="foo"/>
               <div className='ml-8 flex w-[300px]'>
                 <img src={logo} alt="logo" className='w-[61px] h-[41px]'/>
                    <div className='ml-2'> 
                    <p className='text-[14px] font-bold'>{brand_name}</p>
                     <p className='text-[12px] font-bold text-black opacity-50'>{item}</p>
                    </div>
                </div> 

                <div className='ml-[100px] w-[130px]'>
                  <p className='text-[14px] text-[#70768c] font-bold'>{quantity}</p>
                </div>

                <div className='ml-[100px] w-[125px]'>
                  <p className='text-[14px] text-[#70768c] font-bold'>{price}</p>
                </div>

                <div className='ml-[90px] w-[90px]'>
                  <p className='text-[14px] text-[#70768c] font-bold'>{placed_on}</p>
                </div>

          {/*----edit methods function and inputs------ */}
                <div className='ml-[80px]'  >
                 <Popup
                 trigger={
                  <button >
                    <p className='text-[14px] text-[#70768c] font-bold'>. . .</p>
                  </button>
                 }
                 modal
                 overlayStyle={overlayStyles}

                 >

                {close=>(
              <div className='bg-[#eeeeee] rounded-2xl flex flex-wrap justify-between   items-center h-[50vh] w-[40vw] p-[40px] '  >
                  <div className='mb-3 flex flex-col w-[200px]'>
                     <label id="name" className='font-bold'>Brand Name</label>
                     <input value={name} htmlFor="name" className='h-[30px] w-[230px] pl-[5px] rounded-md mt-2 outline-none' onChange={(e)=>setName(e.target.value)}/>
                  </div>  
                  <div className='mb-3 flex flex-col'>
                     <label id="item" className='font-bold'>Item</label>
                     <input htmlFor="item" value={itemInp} className='h-[30px] w-[230px]  pl-[5px]  rounded-md mt-2  outline-none'  onChange={(e)=>setItem(e.target.value)}/>
                  </div>  
                  <div className='mb-3 flex flex-col  w-[200px]'>
                    <label id="quantity" className='font-bold'>Quantity</label>
                    <input htmlFor="quantity" value={quantityInp} type="number" className='h-[30px] w-[230px]  pl-[5px]  rounded-md mt-2  outline-none' onChange={(e)=>setQuantity(e.target.value)}/>
                  </div>  
                  <div className='mb-3 flex flex-col'>
                    <label id="price" className='font-bold'>Price</label>
                    <input htmlFor="price" value={amountInp} type="number" className='h-[30px] w-[230px]  pl-[5px]  rounded-md mt-2  outline-none' onChange={(e)=>setAmountInp(e.target.value)}/>
                  </div>  
                  <div className='mb-3 flex flex-col'>
                    <label id="placedOn" className='font-bold'>Placed On</label>
                    <input type="date" value={dateInp} htmlFor="placedOn" className='h-[30px] w-[230px]  pl-[5px]  rounded-md mt-2  outline-none' onChange={(e)=>setDateInp(e.target.value)}/>
                  </div>  
                  <div onClick={onSubmitEdit}>
                   <button onClick={()=>close()}    className='bg-[#1B59F8] text-white mr-[20px] rounded-md w-[100px] h-[30px]  mt-5'>
                    Submit Edit
                   </button>
                   </div> 
                   <br/>
                   <p className='text-red-500 text-[14px]'>*Enter all details in the Input to get edited results</p>

              </div>)}
              
            </Popup>
          </div>
        </li>
            )
          })}
        </ul>

    </div>
    <div className='bg-white flex flex-col justify-center h-[80px] w-[1150px] rounded-[20px] px-[25px] py-[18px] border-[1px] border-solid border-[#eff0f6] mt-10'>
        <div className='flex justify-between w-100% mb-2'>
           <h1 className='font-bold text-[18px]'>Issues <span className='text-slate-400 text-[14px] ml-2'>21</span> </h1>
           <button className='bg-[#EFF0F6] rounded w-[26px] h-[26px] px-[10px]  flex text-[14px] items-center'> 
            +
           </button>
        </div>
    </div>
</div>

  )
}

export default Main