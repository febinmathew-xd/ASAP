import Select, { components } from "react-select";


import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Homepage from "./components/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Signin from "./components/signin";
import Studreg from "./components/studreg";
import Mycourse from "./components/Mycourse";
import Web from "./components/Web";
import Corporatereg from "./components/Corporatereg";
import Vaccancies from "./components/Vaccancies";
import Jobs from "./components/Jobs";
import CourseView from "./components/CourseView";
import CoursePayment from "./components/CoursePayment";
import Certificate from "./components/Certificate";
import Jobdetail from "./components/Jobdetail";
import ViewNotifications from "./components/ViewNotifications";
import ExamResults from "./components/ExamResults";
import Enquiry from "./components/Enquiry";
function App() {
  const usertype = localStorage.getItem("usertype");

  return (
    <>
      <BrowserRouter>
        {usertype == 1 ? (
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="main" element={<Main />}></Route>
            <Route path="mycourse" element={<Mycourse />}></Route>
            <Route path="courseview" element={<CourseView />}></Route>
            <Route path="Web" element={<Web />}></Route>
            <Route path="vaccancies" element={<Vaccancies />}></Route>
            <Route path="jobs" element={<Jobs />}></Route>
            <Route path="jobdetail" element={<Jobdetail />}></Route>
            <Route path="coursepayment" element={<CoursePayment />}></Route>
            <Route path="certificate" element={<Certificate />}></Route>
            <Route path="notifications" element={<ViewNotifications />}></Route>
            <Route path="results" element={<ExamResults />}></Route>
            <Route path="enquiry" element={<Enquiry/>}></Route>
          </Routes>
        ) : usertype == 4 ? (
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="main" element={<Main />}></Route>
            <Route path="mycourse" element={<Mycourse />}></Route>
            <Route path="courseview" element={<CourseView />}></Route>
            <Route path="Web" element={<Web />}></Route>
            <Route path="vaccancies" element={<Vaccancies />}></Route>
            <Route path="jobs" element={<Jobs />}></Route>
            <Route path="jobdetail" element={<Jobdetail />}></Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Signin />}></Route>
            <Route path="studreg" element={<Studreg />}></Route>
            <Route path="corporatereg" element={<Corporatereg />}></Route>
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;

