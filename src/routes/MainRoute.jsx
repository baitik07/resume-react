import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AboutMe from "../pages/AboutMe";
import Education from "../pages/Education";
import MyProgress from "../pages/MyProgress";
import Skills from "../pages/Skills";
import Contacts from "../pages/Contacts";

const MainRoute = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<AboutMe />} />
        <Route path="/education" element={<Education />} />
        <Route path="/my-progress" element={<MyProgress />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};

export default MainRoute;
