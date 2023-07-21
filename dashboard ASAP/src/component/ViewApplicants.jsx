import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Nav bar'
import ApplicantContainer from './ApplicantContainer'

function ViewApplicants() {
  return (
    
        <div className="container-fluid position-relative d-flex p-0">
          <div className="content">

            <Sidebar/>
            <Navbar/>
            <ApplicantContainer/>
            </div>
            </div>
  )
}

export default ViewApplicants