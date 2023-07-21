import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import TeacherView from "../Components/TeacherView";
import AddTeacher from "../Components/AddTeacher";
import EditTeacher from "../Components/EditTeacher";
import Addcordinator from "../Components/Add cordinator";
import Editcordinator from "../Components/Editcordinator";
import CordinatorView from "../Components/CordinatorView";
import StudentView from "../Components/StudentView";
import ViewStudent from "../Components/Viewstudent";
import TutorView from "../Components/Tutorview";
import CourseView from "../Components/CourseView";
import Addnewcourse from "../Components/Addnewcourse";
import Viewcourse from "../Components/Viewcourse";
import AddStudent from "../Components/Addstudent";
import CorporateView from "../Components/CorporateView";
import Addportal from "../Components/Addportal";
import EditCorporate from "../Components/EditCorporate";
import Login from "../Components/Login";
import { AuthenticationContext } from "../Components/AuthenticationContext";
import React, { useContext, useEffect, useState } from "react";
import TeacherStudentView from "../Components/TeacherView/TeacherViewStudent";
import TutorialsView from "../Components/TeacherView/TutorialsView";
import AddTutorial from "../Components/TeacherView/AddTutotial";
import JobadminView from "../Components/JobadminView";
import JobadminAdd from "../Components/JobadminAdd";
import JobadminEdit from "../Components/JobadminEdit";
import ViewApplicants from "../component/ViewApplicants";

function JobAdminNavigation() {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<TeacherView />} />
        <Route path="/addteacher" element={<AddTeacher />} />l
        <Route path="/editteacher" element={<EditTeacher />} />
        <Route path="/cordinatorview" element={<CordinatorView />} />
        <Route path="/addcordinator" element={<Addcordinator />} />
        <Route path="/editcordinator" element={<Editcordinator />} />
        <Route path="/studentview" element={<StudentView />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/ViewStudent" element={<ViewStudent />} />
        <Route path="/TutorView" element={<TutorView />} />
        <Route path="/CourseView" element={<CourseView />} />
        <Route path="/Addnewcourse" element={<Addnewcourse />} />
        <Route path="/Viewcourse" element={<Viewcourse />} />
        <Route path="/CorporateView" element={<CorporateView />} />
        <Route path="/Addportal" element={<Addportal />} />
        <Route path="/editcorporate" element={<EditCorporate />} />

        <Route path="/jobadminview" element={<JobadminView />} />
        <Route path="/jobadminadd" element={<JobadminAdd />} />
        <Route path="/jobadminedit" element={<JobadminEdit />} />
        <Route path="/viewapplicants" element={<ViewApplicants/>} />
      </Routes>
    </>
  );
}

export default JobAdminNavigation;
