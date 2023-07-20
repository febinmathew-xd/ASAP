import Sidebar from "./Sidebar"
import Navbar from "./Nav bar"
import Sales from "./Sales"
import Saleschart from "./Saleschart"
import Recentsale from "./Recentsale"
import Widget from "./Widget"
import Footer2 from "./Footer2"
import { Link } from "react-router-dom"

function CampusView(){
    return(
        <div className="container-fluid position-relative d-flex p-0">
        <div className="content">
        <Sidebar/>
        <Navbar/>
 
        <div className="container-fluid pt-4 px-4">
        <div className="bg-secondary text-center rounded p-4">
            <div className="d-flex align-items-center justify-content-between mb-4">
                <h6 className="mb-0">CAMPUS DETAILS</h6>
                <Link to="/Addcampus">Add new</Link>
              
                
            

            

        
            </div>
            <div className="table-responsive">
                <table className="table text-start align-middle table-bordered table-hover mb-0">
                    <thead>
                        <tr className="text-white">
                            <th scope="col"><input className="form-check-input" type="checkbox"/></th>
                           
                           
                            <th scope="col"> Campus Name</th>
                            <th scope="col">Location </th>
                            
                            <th scope="col">Contact </th>
                            <th scope="col">Courses</th>
                            <th scope="col">Action</th>
                            <th scope="col">Action</th>
                           
                           
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input className="form-check-input" type="checkbox"/></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                         
                            <td><Link className="btn btn-warning btn-primary" to="../Editcampus">Edit</Link></td>
                            <td><Link className="btn btn-danger btn-primary" to="Editcampus">Delete</Link>  </td>
                           
                           
                           
                           
                          
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
 
 
        <Footer2/>
        
        </div>
        </div>
    )
}

export default CampusView;