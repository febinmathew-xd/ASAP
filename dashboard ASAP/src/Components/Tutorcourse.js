import Sidebar from "./Sidebar"
import Navbar from "./Nav bar"
import Sales from "./Sales"
import Saleschart from "./Saleschart"
import Recentsale from "./Recentsale"
import Widget from "./Widget"
import Footer2 from "./Footer2"
function Tutorcourse(){
    return(
        
        <div className="container-fluid position-relative d-flex p-0">
        <div className="content">
         <Sidebar/>
        <Navbar/>
       
        <div className="col-sm-12 col-xl-11" style={{marginLeft:'30px',marginTop:'20px'}}>
                        <div className="bg-secondary rounded h-100 p-4">
                            <h6 className="mb-4">View OnlineTutorials</h6>
                          
                            <div className="form-floating mb-3">
                              <textarea className="form-control"></textarea>
                                <label for="floatingInput"></label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="file" className="form-control" id="floatingPassword"
                                    placeholder="Password"/>
                                <label for="floatingPassword">Password</label>
                            </div>
                            
                            <div className="form-floating mb-3">
                                <select className="form-select" id="floatingSelect"
                                    >
                                    <option selected>Courses</option>
                                    <option value="1">App Development</option>
                                    <option value="2">Web Designing</option>
                                    <option value="3">JAVA Developer</option>
                                </select>
                                <label for="floatingSelect">Select Courses</label>
                            </div>
                            <button className="btn btn-success"> Save </button>
                            {/* <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here"
                                    id="floatingTextarea" style={{height: '150px'}}></textarea>
                                <label for="floatingTextarea">Comments</label>
                            </div> */}



                        </div>
                    </div>
        {/* <Footer2/> */}
        
        </div>
        </div>

    )
}
 export default Tutorcourse;