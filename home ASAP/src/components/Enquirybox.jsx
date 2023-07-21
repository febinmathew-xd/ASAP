import React, { useState } from 'react'

function Enquirybox({sentQuery}) {

    const [queryTitle, setQueryTitle] = useState('');
    const [queryContent, setQueryContent] = useState('');

    const sent =()=> {
        sentQuery(queryTitle, queryContent);
    }


  return (
    <div style={{width:'100%', backgroundColor:'white', height:'100vh', display:'flex', flexDirection:'column', gap:'30px', alignItems:'center', marginTop:'-10px'}}>

        <input onChange={(event) => {setQueryTitle(event.target.value)}} type="text" placeholder='Enter Title' style={{height:'40px',borderRadius:'6px', width:'500px', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px', outline:'none' }}/>

        <textarea onChange={(event) => {setQueryContent(event.target.value)}} placeholder='Enquiry' style={{width:'500px',boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}} name="postContent" rows={4} cols={40} />
         
         <input onClick={sent} type="submit" value='Sent' style={{width:'500px', padding:'8px 20px', backgroundColor:'#3b82f6', color:'white', fontWeight:'600', borderRadius:'10px'}}/>
    </div>
  )
}

export default Enquirybox