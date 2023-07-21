import React from 'react';
import { fileurl } from '../Api';

function ApplicationCard({application}) {

    const {username, age, contact, qualification, title, resume} = application;
  return (
   <>
   <div style={{width:'200px', height:'200px', backgroundColor:'white', marginLeft:'30px',borderRadius:'10px', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1px 30px', marginBottom:'30px'}}>
   <img src={fileurl+resume} style={{borderRadius:'10px', boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px'}} width={210} height={210} alt="" />
   
   <div style={{display:'flex', flexDirection:'column', alignItems:"flex-start", flexGrow:'1', marginLeft:'40px', height:'210px', justifyContent:"space-around"}}>
    <h6 style={{color:'black' ,opacity:'0.6'}}><span>Name : </span>{username}</h6>
    <h6 style={{color:'black' ,opacity:'0.6'}}><span>Age : </span>{age}</h6>
    <h6 style={{color:'black' ,opacity:'0.6'}}><span>Contact : </span>{contact}</h6>
    <h6 style={{color:'black' ,opacity:'0.6'}}><span>Qualification : </span>{qualification}</h6>
    <h6 style={{color:'black' ,opacity:'0.6'}}><span>Applied for : </span>{title}</h6>
    <a  href={fileurl+resume} target='_blank'>
        <button style={{backgroundColor:'#0ea5e9', padding:"4px 15px", borderRadius:'10px', fontWeight:'400', fontSize:'14px'}}>View Resume</button>
    </a>
   </div>
   </div>
   </>
  )
}

export default ApplicationCard