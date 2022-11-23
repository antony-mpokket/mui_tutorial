import React from "react";
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import { MuiButton } from "./MuiButton";
import { MuiTypography } from "./MuiTypography";
import { MuiTextField } from "./MuiTextField";
import { MuiSelect } from "./MuiSelect";

const CustomRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/typography" element={<MuiTypography />} /> 
            <Route path="/button" element={<MuiButton />} />
            <Route path="/textfield" element={<MuiTextField />} />
            <Route path="/select" element={<MuiSelect />} />
        </Routes>
    </Router>
  )
}

export default CustomRoutes