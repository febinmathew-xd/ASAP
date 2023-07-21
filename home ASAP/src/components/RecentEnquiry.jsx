import React from 'react'
import RecentEnqBox from './RecentEnqBox'

function RecentEnquiry({recentQueries}) {
  return (
    <div style={{width:'100%', height:'100vh', backgroundColor:'white', marginTop:'-400px'}}>
         <h5 style={{color:'black', opacity:'0.5', padding:'10px', marginLeft:'100px'}}>Recent enquiries</h5>
     <div style={{width:'1300px', minHeight:'300px', backgroundColor:'#f3f4f6', margin:'1px auto', borderRadius:'10px', padding:'20px', display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
       
    {
      recentQueries?.map((query, index)=> {
        return(
            <RecentEnqBox key={index} query={query}/>
        )
      })

    }

        
       

     </div>
    </div>
  )
}

export default RecentEnquiry