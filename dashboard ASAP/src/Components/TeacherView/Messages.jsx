import React from 'react'
import Sidebar from '../Sidebar';
import Navbar from '../Nav bar';
import MessageList from './MessageList';
import ChatContainer from './ChatContainer';

function Messages() {
  return (
    <div className="container-fluid position-relative d-flex p-0">
      <div className="content">
        <Sidebar/>
        <Navbar/>

        <div style={{display:'flex'}}>
        <MessageList/>
        <ChatContainer/>
        </div>
       

    </div>
    </div>
  )
}

export default Messages