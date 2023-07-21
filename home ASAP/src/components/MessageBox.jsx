import React, { useEffect, useState } from 'react'
import { Post } from '../Api';

function MessageBox({id}) {

    const [inputMessage, setInputMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [refresh, setRefresh] = useState(0);

    const userdata = JSON.parse(localStorage.getItem('userdata'))

    useEffect(()=>{

        
        let param = {
            id:userdata.loginid
        }

        Post('getmessagesbystudentid',param).then((data)=>{
            setMessages(data)
        })
    },[refresh])

    const saveMessage = () => { 
        const userdata = JSON.parse(localStorage.getItem("userdata"));
    
        let param = {
          tablename:'messages',
          courseid: id,
          userid: userdata.loginid,
          message:inputMessage,
        };
    
      Post('save',param).then((data)=> {
        setRefresh(refresh+1);
        
    
      });
      };
    

  return (
    <div className="question-container" style={{width:'500px', height:'400px', backgroundColor:'whitesmoke', marginTop:'30px', borderRadius:'10px', paddingTop:'20px'}}>

              {/* MESSAGE CONTAINER */}

              <div className="message-container" style={{width:'100%', height:'100%', overflowY:"scroll" }}>
              
              {
                messages.map((data)=>{
                    return(
              <div style={{ backgroundColor:data.hostid==0?'#bae6fd':'#fecaca', marginLeft:'18px',marginBottom:'10px', padding:'5px 10px', width:'400px', borderRadius:'10px'}}> 
                <p>{data.hostid==0?"You :"+data.message:"Tutor :"+data.message} </p>
              </div>

                    )
                })
              }
              
 

             

             

              </div>

              <div>

              <input onChange={(event) => {setInputMessage(event.target.value)}} type="text" placeholder="Ask Doubts" style={{color:'black', border:'1px solid black', marginLeft:'5px', width:'400px', borderRadius:'10px', height:'50px',marginBottom:'18px',marginTop:'10px', backgroundColor:'#dbeafe'}} />

              <input onClick={saveMessage}  type="button" value='sent' style={{backgroundColor:'white', padding:'9px 25px', marginLeft:'10px', borderRadius:'7px', fontSize:'14px', fontWeight:'600',}}/>

              </div>
              

          
            </div>
  )
}

export default MessageBox