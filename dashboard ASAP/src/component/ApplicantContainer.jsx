import React, { useEffect, useState } from 'react'
import ApplicationCard from './ApplicationCard'
import { Post } from '../Service/Api';

function ApplicantContainer() {

    const [applications, SetApplications] = useState([]);

    useEffect(()=> {
      
      

      Post('getAllApplications ').then((data) => {
        SetApplications(data);
        console.log('app', data);
      })

    }, [])
    

  return (
    <div style={{width:'1200px', minHeight:'600px', backgroundColor:'#426981', margin:'20px auto', borderRadius:'10px', padding:'25px 60px', display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>


        {
            applications.map((application, index) => {
                return(
                    <ApplicationCard key={index} application={application}/>
                )
            })
        }
        
        

    </div>
  )
}

export default ApplicantContainer