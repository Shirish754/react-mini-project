
import React,{ useEffect, useState } from 'react'
import {FaPlus  } from 'react-icons/fa';

const dummyData = [

  {
    users:{
      data:{
        id:1,
        name:'Shirish',
        username:'Shirish',
        email:'shpokh455@gmail.com',
        address:{
          street: "Ratnachowk-7, Pokhara"
        },
        phone:"9824133994",
        website: "www.shirish.com"
      }
    }
  },
  {
      users:{
        data:{
          id:2,
          name:'Ayush',
          username:'Shirish',
          email:'shpokh455@gmail.com',
          address:{
            street: "Ratnachowk-7, Pokhara"
          },
          phone:"9824133994",
          website: "www.shirish.com"
        }
      }
    },
    {
      users:{
        data:{
          id:3,
          name:'Shirish',
          username:'Shirish',
          email:'shpokh455@gmail.com',
          address:{
            street: "Ratnachowk-7, Pokhara"
          },
          phone:"9824133994",
          website: "www.shirish.com"
        }
      }
    },
    
    {
      users:{
        data:{
          id:4,
          name:'Shirish',
          username:'Shirish',
          email:'shpokh455@gmail.com',
          address:{
            street: "Ratnachowk-7, Pokhara"
          },
          phone:"9824133994",
          website: "www.shirish.com"
        }
      }
    }
  ]
export default function Table() {
const [searchText,setSearchText]= useState();
const [isAllChecked, setIsAllChecked]=useState(false);


const [userData,setUserData]= useState([])

useEffect(()=>{

    const filterUserData = userData?.filter((data)=>{
        if(data?.users?.data?.isSelected){
            return data;
        }
    })
    if(filterUserData?.length===userData?.length){
        setIsAllChecked(true);
    }else{
        setIsAllChecked(false);
    }
    
},[userData])
     useEffect(()=>{
        const newData = dummyData?.map((data)=>{
            return {users:{data:{...data?.users?.data, isSelected:false}}}
        })
      setUserData(newData)
     },[dummyData])

useEffect(()=>{
  if (!searchText){
    const newData = dummyData?.map((data)=>{
        return {users:{data:{...data?.users?.data, isSelected:false}}}
    })
  setUserData(newData)
    return;

  }
  const filterData=userData.filter((user)=>{
    const {name,id,username,email,website,address,phone}= user?.users?.data
    if (name?.toLowerCase()?.includes(searchText)||username?.toLowerCase()?.includes(searchText)|| email?.toLowerCase()?.includes(searchText) || website?.toLowerCase()?.includes(searchText) ||address.street?.toLowerCase()?.includes(searchText)||phone?.toLowerCase()?.includes(searchText) ){
        return user;
    }
}
)
setUserData(filterData)
},[searchText])

console.log(isAllChecked)
const handleSelectAll =(e)=>{
    
    const newData = userData?.map((data)=>{
        return {users:{data:{...data?.users?.data, isSelected:isAllChecked ? false:true }}}
    })
  setUserData(newData)
}

const handleSelectOne =(id)=>{

    const newData = userData?.map((data)=>{
        if(data?.users?.data?.id===id){
            console.log("insideif")
            return {users:{data:{...data?.users?.data, isSelected:!data?.users?.data?.isSelected }}}
            
        }else{
            return data;// return {users:{data:{...data?.users?.data, isSelected: false }}}

        }
        
    })
  setUserData(newData) 
}

console.log(userData);

  return (
    <div className='m-2'>
      <section className='d-flex flex-wrap justify-content-between m-2'>
        <div className='d-flex  pt-1 align-items-center'><p style={{fontWeight:"500", fontStyle:"normal", fontSize:'20px', lineHeight:'24px' }}>Users</p></div>
        <div className='d-flex align-items-center'>
            <input className='me-1' value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <button className='btn' style={{background:"#02415C", color:"#ffffff",fontFamily:"roboto", fontWeight:"bold", fontSize:"13px", lineHeight:"100%", height:"44px"}}><FaPlus style={{height:"12px", width:"12px"}} className='m-1'/>New User</button>
        </div>
      </section>

      <section >
        <div className='d-flex flex-wrap justify-content-between align-items-center p-2 border-bottom ' style={{background:"#EEF1F7", boxShadow:"0px 5px 0px #E0E5EB", fontFamily:"roboto", fontWeight:"bold", fontSize:"13px", lineHeight:"24px"}}>
            <div style={{width:"4%"}}><input  class="form-check-input" type="checkbox" checked={isAllChecked} id="flexCheckDefault" onClick={(e)=>handleSelectAll(e)}/></div>
            <p className="m-1" style={{width:"14%"}}>Name</p>
            <p className="m-1 " style={{width:"14%"}}>UserName</p>
            <p className="m-1" style={{width:"14%"}}>Email</p>
            <p className="m-1" style={{width:"14%"}}>Phone</p>
            <p className="m-1" style={{width:"14%"}}>Website</p>
            <p className="m-1" style={{width:"14%"}}>Address</p>
        </div>
        
{userData.map((user,index)=>{
    const {name,id,username,email,website,address,phone,isSelected}= user?.users?.data
    return(
        <div className='d-flex flex-wrap justify-content-between align-items-center p-2 border-bottom' style={{background:"#ffffff", boxShadow:"0px 1px 0px #E0E5EB", fontFamily:"roboto", fontWeight:"normal", fontSize:"14px", lineHeight:"24px"}}>
            <div style={{width:"4%"}}><input class="form-check-input" type="checkbox" value={isSelected} id="flexCheckDefault" checked={isSelected} onClick={(e)=>handleSelectOne(id)}/></div>
            <p className="m-1" style={{width:"14%"}}>{name}</p>
            <p className="m-1" style={{width:"14%"}}>{username}</p>
            <p className="m-1" style={{width:"14%"}}>{email}</p>
            <p className="m-1" style={{width:"14%"}}>{phone}</p>
            <p className="m-1" style={{width:"14%"}}>{website}</p>
            <p className="m-1" style={{width:"14%"}}>{address.street}</p>
        </div>);
    }
    )
    }

      </section>
    </div>
  )
}
