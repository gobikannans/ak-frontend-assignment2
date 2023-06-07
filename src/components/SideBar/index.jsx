import React from 'react'
import zag from "../../assets/sidebar/zag.png"
import vector from "../../assets/sidebar/Vector.png"
import workspaces from "../../assets/sidebar/workspace.png"
import setting from "../../assets/sidebar/settings.png"


const zagList=[
    {id:1,
     src:vector,
     text:"Reports"
    },
    {id:2,
     src:workspaces,
     text:"Workspaces",
     bg:"bg-[#0671D8] bg-opacity-30 text-[#0671D8]"
    },
    {id:3,
     src:setting,
     text:"Settings"
    },
]

function Sidebar() {
  return (
    <div className='bg-[white] w-[246px] rounded-2xl flex flex-col justify-start items-center font-inter py-[30px] '>
        <img src={zag} alt="zag"/>
        <ul className='p-0 w-[100%] mt-10 flex flex-col justify-between items-center h-[19%]'>
            {zagList.map(({id,src,text,bg})=>{
                return(
                    <li key={id} className={`flex  items-center w-[65%] rounded-lg px-[10px] h-[40px] ${bg}`}>
                        <img src={src} alt={src} className='w-[25px] h-[20px] '/>
                        <p className='ml-[20px] font-[500]'>{text}</p>
                    </li>
                )
            })}

        </ul>
    </div>
  )
}

export default Sidebar