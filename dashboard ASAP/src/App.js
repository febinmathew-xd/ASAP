import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TeacherView from "./Components/TeacherView";
import AddTeacher from "./Components/AddTeacher";
import EditTeacher from "./Components/EditTeacher";
import Addcordinator from "./Components/Add cordinator";
import Editcordinator from "./Components/Editcordinator";
import CordinatorView from "./Components/CordinatorView";
import StudentView from "./Components/StudentView";
import ViewStudent from "./Components/Viewstudent";
import TutorView from "./Components/Tutorview";
import CourseView from "./Components/CourseView";
import Addnewcourse from "./Components/Addnewcourse";
import Viewcourse from "./Components/Viewcourse";
import AddStudent from "./Components/Addstudent";
import CorporateView from "./Components/CorporateView";
import Addportal from "./Components/Addportal";
import EditCorporate from "./Components/EditCorporate";
import Login from "./Components/Login";
import { AuthenticationContext } from "./Components/AuthenticationContext";
import React, { useContext, useEffect, useState } from "react";
import TeacherStudentView from "./Components/TeacherView/TeacherViewStudent";
import TutorialsView from "./Components/TeacherView/TutorialsView";
import AddTutorial from "./Components/TeacherView/AddTutotial";
import AdminNavigation from "./Navigation/AdminNavigation";
import TeacherNavigation from "./Navigation/TeacherNavigation";
import ResourceNavigation from "./Navigation/ResourceNavigation";
import JobAdminNavigation from "./Navigation/JobadminNavigation";

function App() {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <>
      <BrowserRouter>
        {isAuthenticated ? (
          isAuthenticated == "admin" ? (
            <AdminNavigation />
          ) : isAuthenticated == "teacher" ? (
            <TeacherNavigation />
          ) : isAuthenticated == "resourceteacher" ? (
            <ResourceNavigation />
          ) : isAuthenticated == "jobadmin" ? (
            <JobAdminNavigation />
          ) : (
            ""
          )
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
