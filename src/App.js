import React from "react";
import { Navigate } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Sidebar from "./Layout/Sidebar";
import Header from "./Layout/Header";
import Footer from "./Layout/footer";

import Home from "./pages/Home";
import Registration from "./pages/Registration";
import StudentRecord from "./pages/StudentRecord";
import CollegeService from "./pages/CollegeService";
import FinancialService from "./pages/FinancialService";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App ">
        <div className="d-flex">
          <div className="">
            <Sidebar />
          </div>
          <div className="container-fluid ps-4 pe-4">
            <Header />
            <Routes>
              <Route index path="/" exact element={<Home />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/student-record" element={<StudentRecord />} />
              <Route path="/college-service" element={<CollegeService />} />
              <Route path="/financial-service" element={<FinancialService />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
