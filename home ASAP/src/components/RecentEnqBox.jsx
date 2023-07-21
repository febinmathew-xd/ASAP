import React from 'react'

function RecentEnqBox({query}) {

    const {querytitle, querycontent, replytitle, reply} = query;
  return (
    <div style={{backgroundColor:'white', width:"500px", minHeight:"170px", borderRadius:'10px', marginBottom:'20px'}}>
        <div style={{ width:'80%', margin:'10px 10px', backgroundColor:'rgba(192, 132, 252, 0.3)', borderRadius:'10px',padding:'10px 10px', marginLeft:'30px'}}>

       <h6 style={{color:'black', opacity:'0.5'}}>{querytitle}</h6>
       <p>{querycontent}</p> 
      
       
        </div>

        <div style={{ marginLeft:'10px', paddingLeft:'20px', paddingBottom:'20px'}}>
        <h6 style={{color:'#3b82f6', opacity:'0.5'}}>Reply:</h6>

       {
        reply ? 
        <>
        <div style={{backgroundColor:'rgba(56, 189, 248, 0.3)', width:'70%', padding:'10px', borderRadius:'10px'}}>
        <p style={{fontSize:'16px', fontWeight:'700'}}>{replytitle}</p>
         <p style={{fontSize:'16px'}}>{reply}</p>
        </div>
         
        </>   : 
         <p style={{color:'#6b7280', fontSize:'16px', backgroundColor:'rgba(245, 158, 11, 0.2)', padding:'10px 10px', borderRadius:'10px', width:'70%', marginTop:'20px'}}>Pending...Admin not yet Replied</p>
       }

       
      
        </div>
        
            
        
    </div>
  )
}

export default RecentEnqBox