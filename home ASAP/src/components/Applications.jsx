import React, { useEffect, useState } from 'react'
import Header from './header'
import ApplicationCard from './ApplicationCard'
import { Post } from '../Api';

function Applications() {

    const [applications, setApplications] = useState([]);
    const userdata = JSON.parse(localStorage.getItem('userdata'));

    useEffect(() => {

        let param = {
           id:userdata.loginid
        };

        Post('getApplicationByCorpId', param).then((data) => {
            setApplications(data);
            console.log(data);
        })

    },[]);


  return (
    <>
    <Header/>
    <div style={{backgroundColor:'white', height:'100vh', width:'100%'}}>
        <div style={{width:'1500px', minHeight:'500px', backgroundColor:'#d1d5db', margin:' auto', borderRadius:'10px', padding:'30px', display:'flex', flexWrap:'wrap'}}>

            {
                applications?.map((application, index)=>{
                    return(
                         <ApplicationCard key={index} application={application}/> 
                    )
                })
            }
            
            
            
            

        </div>

    </div>
    </>
    
  )
}

export default Applications