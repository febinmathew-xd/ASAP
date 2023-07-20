import React from 'react'
import MessageSenderCard from './MessageSenderCard'

function MessageList() {
  return (
    <div style={{height:'100vh', width:'400px' , backgroundColor:'#426981', margin:'20px', borderRadius:'10px', padding:'10px 10px'}}>

    <MessageSenderCard/>
    <MessageSenderCard/>
    <MessageSenderCard/>
    <MessageSenderCard/>


    </div>
  )
}

export default MessageList