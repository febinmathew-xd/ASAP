import Sidebar from "./Sidebar"
import Navbar from "./Nav bar"
import Sales from "./Sales"
import Saleschart from "./Saleschart"
import Recentsale from "./Recentsale"
import Widget from "./Widget"
import Footer2 from "./Footer2"

function Editexam(){
    return(
        <div className="container-fluid position-relative d-flex p-0">
        <div className="content">
        <Sidebar/>
        <Navbar/>
       
        <div className="col-sm-12 col-xl-11" style={{marginLeft:'30px',marginTop:'20px'}}>
                        <div className="bg-secondary rounded h-100 p-4">
                            <h6 className="mb-4">Edit Exam Scheduling</h6>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput"
                                    placeholder="name@example.com"/>
                                <label for="floatingInput">Username</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" id="floatingInput"
                                    placeholder="name@example.com"/>
                                <label for="floatingInput">Exam register No</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput"
                                    placeholder="name@example.com"/>
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword"
                                    placeholder="Password"/>
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <select className="form-select" id="floatingSelect"
                                    >
                                    <option selected>Exam Courses</option>
                                    <option value="1">Java developer</option>
                                    <option value="2">PHP developer</option>
                                    <option value="3">Video Editing</option>
                                    <option value="3">Content Writing</option>
                                </select>
                                <label for="floatingSelect">Select Qualification</label>
                            </div>
                            <button className="btn btn-success"> Save </button> &nbsp; &nbsp; &nbsp;
                            <button className="btn btn-success"> Back </button>
                            {/* <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here"
                                    id="floatingTextarea" style={{height: '150px'}}></textarea>
                                <label for="floatingTextarea">Comments</label>
                            </div> */}



                        </div>
                    </div>
        <Footer2/>
        
        </div>
        </div>
    )
}

export default Editexam