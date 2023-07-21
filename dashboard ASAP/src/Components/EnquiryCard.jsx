import React, { useState } from 'react'

function EnquiryCard({enquiry, update}) {

    const [inputReplyTitle, setInputReplyTitle] = useState('');
    const [inputReply, setInputReply] = useState('');

    const updateReply = () => {
        update(enquiryid, inputReplyTitle, inputReply);
    }

    
    const  {username, contact, email, querytitle, querycontent, reply, replytitle, enquiryid    } = enquiry;

  return (
    <div style={{backgroundColor:'rgba(191, 219, 254, 0.3)', width:'500px', minHeight:'150px', borderRadius:'10px', padding:'10px 20px', marginBottom:'20px'}}>
        <div style={{display:'flex', justifyContent:'space-between', opacity:'0.6'}}>
        <h6 style={{fontSize:'14px'}}>{username}</h6>
        <h6 style={{fontSize:'14px'}}>{contact}</h6>
        <h6 style={{fontSize:'14px'}}>{email}</h6>
        </div>
        <div style={{backgroundColor:'rgba(191, 219, 254, 0.2)', borderRadius:'7px', padding:'10px', marginTop:'10px'}}>
            <h6 style={{opacity:'0.8', color:'#bef264'}}>{querytitle}</h6>
            <h6 style={{opacity:'0.8', fontSize:'14px', fontWeight:'100',color:'#e2e8f0'}}>{querycontent}</h6>
        </div>

 

        {reply ?  <>
        <h6 style={{marginTop:'10px', fontSize:'14px', opacity:'0.8', color:'#fda4af'}}>Replied:</h6>
        <div style={{backgroundColor:'rgba(191, 219, 254, 0.1)', borderRadius:'7px', padding:'10px', marginTop:'10px'}}>
            <h6 style={{opacity:'0.8', color:'#6ee7b7'}}>{replytitle}</h6>
            <h6 style={{opacity:'0.8', fontSize:'14px', fontWeight:'100',color:'#e2e8f0'}}>{reply}</h6>
        </div>
        </>
        :

        <>
        <div style={{marginTop:'10px', opacity:'0.6'}}>
            <input onChange={(e)=> {setInputReplyTitle(e.target.value)}} type="text" placeholder='Title' style={{outline:'none', border:'none', borderRadius:'7px',marginBottom:'10px', padding:'5px 10px'}}/>
            <textarea onChange={(e) => {setInputReply(e.target.value)}} name='content' rows={2} cols={40} placeholder='Reply' style={{outline:'none', border:'none', borderRadius:'7px', padding:'2px 10px'}}  />

        </div>
        <div>
            <button onClick={updateReply} style={{border:"none", padding:'8px 30px',borderRadius:'10px', fontSize:'13px', fontWeight:'700', backgroundColor:'#426981', color:'white', marginTop:'10px'}}>Reply</button>
        </div>
        
        </>

        
        }

        
    </div>
  )
}

export default EnquiryCard