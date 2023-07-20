import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthenticationContext } from "../Components/AuthenticationContext";
import React, { useContext, useEffect, useState } from "react";
import TeacherStudentView from "../Components/TeacherView/TeacherViewStudent";
import TutorialsView from "../Components/TeacherView/TutorialsView";
import AddTutorial from "../Components/TeacherView/AddTutotial";
import EditTutorial from "../Components/TeacherView/EditTutorial";
import ViewExamResults from "../Components/TeacherView/ViewExamResults";
import AddExamResults from "../Components/TeacherView/AddExamResults";
import EditExamResults from "../Components/TeacherView/EditExamResults";
import Messages from "../Components/TeacherView/Messages";

function TeacherNavigation() {
  const { isAuthenticated } = useContext(AuthenticationContext);
  console.log("hh");

  return (
    <Routes>
      <Route path="/" element={<TeacherStudentView />} />
      <Route path="/tutorialsview" element={<TutorialsView />} />
      <Route path="/addtutorial" element={<AddTutorial />} />
      <Route path="/edittutorial" element={<EditTutorial />} />
      <Route path="/examresultsview" element={<ViewExamResults />} />
      <Route path="/addexamresults" element={<AddExamResults />} />
      <Route path="/editexamresults" element={<EditExamResults />} />
      <Route path="/messages" element={<Messages/>} />
    </Routes>
  );
}

export default TeacherNavigation;
