import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { MuiButton } from "./MuiButton";
import { MuiTypography } from "./MuiTypography";
import { MuiTextField } from "./MuiTextField";
import { MuiSelect } from "./MuiSelect";
import {MuiRadioButton} from "./MuiRadioButton";
import MuiCheckbox from "./MuiCheckbox";
import Home from "./Home";
import MuiSwitch from "./MuiSwitch";
import MuiRating from "./MuiRating";
import MuiIcon from "./MuiIcon";
import MuiAutocomplete from "./MuiAutocomplete";
import MuiLayout from "./MuiLayout";
import MuiCard from "./MuiCard";
import MuiAccordion from "./MuiAccordion";
import MuiImageList from "./MuiImageList";
import MuiNavBar from "./MuiNavBar";



const CustomRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/typography" element={<MuiTypography />} />
        <Route path="/button" element={<MuiButton />} />
        <Route path="/textfield" element={<MuiTextField />} />
        <Route path="/select" element={<MuiSelect />} />
        <Route path="/radio-button" element={<MuiRadioButton />} />
        <Route path="/checkbox" element={<MuiCheckbox />} />
        <Route path="/switch" element={<MuiSwitch />} />
        <Route path="/rating" element={<MuiRating />} />
        <Route path="/icon" element={<MuiIcon />} />
        <Route path="/autocomplete" element={<MuiAutocomplete />} />
        <Route path="/layout" element={<MuiLayout />} />
        <Route path="/card" element={<MuiCard />} />
        <Route path="/accordion" element={<MuiAccordion />} />
        <Route path="/image-list" element={<MuiImageList />} />
        <Route path="/navbar" element={<MuiNavBar />} />
      </Routes>
    </Router>
  );
};

export default CustomRoutes;
