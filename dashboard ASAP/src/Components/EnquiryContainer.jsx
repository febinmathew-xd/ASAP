import React, { useEffect, useState } from 'react'
import EnquiryCard from './EnquiryCard'
import { Post } from '../Service/Api';

function EnquiryContainer() {

    const [enquiries, setEnquiries] = useState([]);
    const [refresh, setRefresh] = useState(0);


    useEffect(() => {
     
        Post('getAllEnquiry').then((data) => {
            setEnquiries(data);
            console.log('e',data);
        })


    },[refresh]);

    const update = (id, replytitle, reply) => {

        let param = {
            id:id,
            tablename:'enquiry',
            replytitle:replytitle,
            reply:reply
        };

        Post('update', param).then((data) => {
            setRefresh(refresh+1);
        })
    };



  return (
    <div style={{width:'1200px', minHeight:'600px', backgroundColor:'#426981', margin:'20px auto', borderRadius:'10px', padding:'25px 60px', display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>

        {
            enquiries?.map((enquiry, index) => {
                return (
                    <EnquiryCard key={index} enquiry={enquiry} update={update}/>
                )
            })
        
        }
        


       
        
    </div>
  )
}

export default EnquiryContainer