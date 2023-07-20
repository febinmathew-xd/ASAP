import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import TeacherView from "../Components/TeacherView";
import AddTeacher from "../Components/AddTeacher";
import EditTeacher from "../Components/EditTeacher";
import StudentView from "../Components/StudentView";
import ViewStudent from "../Components/Viewstudent";
import CourseView from "../Components/CourseView";
import Addnewcourse from "../Components/Addnewcourse";
import Viewcourse from "../Components/Viewcourse";
import AddStudent from "../Components/Addstudent";
import React, { useContext, useEffect, useState } from "react";
import TimetableView from "../Components/ResourceTeacher/Timetableview";
import AddTimetable from "../Components/ResourceTeacher/AddTimeTable";
import EditTimetable from "../Components/ResourceTeacher/EditTimetable";
import ViewVenue from "../Components/ResourceTeacher/ViewVenue";
import AddVenue from "../Components/ResourceTeacher/AddVenue";
import EditVenue from "../Components/ResourceTeacher/EditVenue";
import ExamsView from "../Components/ResourceTeacher/ExamsView";
import AddExams from "../Components/ResourceTeacher/AddExams";
import EditExams from "../Components/ResourceTeacher/EditExams";
import PracticalView from "../Components/ResourceTeacher/PracticalView";
import AddPractical from "../Components/ResourceTeacher/AddPractical";
import EditPractical from "../Components/ResourceTeacher/EditPractical";
import JobadminView from "../Components/JobadminView";
import JobadminAdd from "../Components/JobadminAdd";
import JobadminEdit from "../Components/JobadminEdit";
function ResourceNavigation() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TeacherView />} />
        <Route path="/addteacher" element={<AddTeacher />} />
        <Route path="/editteacher" element={<EditTeacher />} />

        <Route path="/studentview" element={<StudentView />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/ViewStudent" element={<ViewStudent />} />

        <Route path="/CourseView" element={<CourseView />} />
        <Route path="/Addnewcourse" element={<Addnewcourse />} />
        <Route path="/Viewcourse" element={<Viewcourse />} />

        <Route path="/timetableview" element={<TimetableView />} />
        <Route path="/addtimetable" element={<AddTimetable />} />
        <Route path="/edittimetable" element={<EditTimetable />} />

        <Route path="/viewvenue" element={<ViewVenue />} />
        <Route path="/addvenue" element={<AddVenue />} />
        <Route path="/editvenue" element={<EditVenue />} />

        <Route path="/examsview" element={<ExamsView />} />
        <Route path="/addexams" element={<AddExams />} />
        <Route path="/editexams" element={<EditExams />} />

        <Route path="/practicalview" element={<PracticalView />} />
        <Route path="/addpractical" element={<AddPractical />} />
        <Route path="/editpractical" element={<EditPractical />} />
      </Routes>
    </>
  );
}

export default ResourceNavigation;
