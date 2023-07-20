import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function MessageSenderCard({data}) {
  return (
    <NavLink activeclassname="active" to='' style={{width:'100%', height:'80px',display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'flex-start', backgroundColor:'#1b4965', marginBottom:'20px', paddingLeft:'16px', borderRadius:'7px'}}>
      <h5 style={{opacity:'0.7', fontSize:'15px'}}>{data.username}</h5>
      <h6 style={{fontSize:'14px', fontWeight:'100', color:'#6b7280'}}>{data.message}</h6>
    </NavLink>
  )
}

export default MessageSenderCard