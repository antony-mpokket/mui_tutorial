import React from "react";
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import { MuiButton } from "./MuiButton";
import { MuiTypography } from "./MuiTypography";


const CustomRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/typography" element={<MuiTypography />} /> 
            <Route path="/button" element={<MuiButton />} />
        </Routes>
    </Router>
  )
}

export default CustomRoutes