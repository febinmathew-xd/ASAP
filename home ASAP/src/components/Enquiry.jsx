import React, { useEffect, useState } from 'react'
import Header from './header'
import Enquirybox from './Enquirybox'
import RecentEnquiry from './RecentEnquiry'
import { Post } from '../Api';

function Enquiry() {

 
  const [recentQueries, setRecentQueries] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const userdata = JSON.parse(localStorage.getItem('userdata'));


  useEffect(()=> {

    Post('getenquirybystudentid', {studentid:userdata.loginid}).then((data) => {
      setRecentQueries(data);
     
    });

  }, [refresh]);

 


  const sentQuery = (querytitle, querycontent) => {
   

    const param = {
      tablename:'enquiry',
      studentid: userdata.loginid,
      querytitle:querytitle, 
      querycontent:querycontent
    };

    Post('save', param).then((data)=> {
      setRefresh(refresh+1);
    })

  }


  return (

    <>
    <Header/>
    <h5 style={{color:'black', backgroundColor:'white', border:'none', paddingTop:'20px', paddingBottom:'30px', textAlign:'center'}}>Enquiry</h5>
    <Enquirybox sentQuery={sentQuery}/>
    <RecentEnquiry recentQueries={recentQueries}/>
    </>
  )
}

export default Enquiry