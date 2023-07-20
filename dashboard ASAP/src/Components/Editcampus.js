import Sidebar from "./Sidebar"
import Navbar from "./Nav bar"
import Sales from "./Sales"
import Saleschart from "./Saleschart"
import Recentsale from "./Recentsale"
import Widget from "./Widget"
import Footer2 from "./Footer2"
function Editcampus(){
    return(
        
        <div className="container-fluid position-relative d-flex p-0">
        <div className="content">
         <Sidebar/>
        <Navbar/>
       
        <div className="col-sm-12 col-xl-11" style={{marginLeft:'30px',marginTop:'20px'}}>
                        <div className="bg-secondary rounded h-100 p-4">
                            <h6 className="mb-4">EDIT CAMPUS DETAILS</h6>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput"
                                    placeholder="name@example.com"/>
                                <label for="floatingInput"> Campus Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" id="floatingInput"
                                    placeholder="name@example.com"/>
                                <label for="floatingInput">Location</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" id="floatingInput"
                                    placeholder="name@example.com"/>
                                <label for="floatingInput">Contact</label>
                            </div>
                            
                            
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here"
                                    id="floatingTextarea" style={{height: '150px'}}></textarea>
                                <label for="floatingTextarea">Course</label>
                            </div>
                            <br>



                            </br>
                            




                    
                           
                            <button className="btn btn-success"> Save </button> &nbsp; &nbsp; &nbsp;
                            <button className="btn btn-danger"> Back</button>
                          



                        </div>
                    </div>
        {/* <Footer2/> */}
        
        </div>
        </div>

    )
}
 export default Editcampus;