import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Nav bar'
import EnquiryContainer from './EnquiryContainer'

function Enquiry() {
  return (
    <div className="container-fluid position-relative d-flex p-0">
      <div className="content">
        <Sidebar />
        <Navbar />
        <EnquiryContainer/>
        </div>
        </div>
  )
}

export default Enquiry