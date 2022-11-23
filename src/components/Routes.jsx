import React from "react";
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import { MuiButton } from "./MuiButton";
import { MuiTypography } from "./MuiTypography";
import { MuiTextField } from "./MuiTextField";
import { MuiSelect } from "./MuiSelect";
import { MuiRadioButton } from "./MuiRadioButton";

const CustomRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/typography" element={<MuiTypography />} /> 
            <Route path="/button" element={<MuiButton />} />
            <Route path="/textfield" element={<MuiTextField />} />
            <Route path="/select" element={<MuiSelect />} />
            <Route path="/radio-button" element={<MuiRadioButton />} />
        </Routes>
    </Router>
  )
}

export default CustomRoutes