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
import MuiBreadcrumbs from "./MuiBreadcrumbs";
import MuiDrawer from "./MuiDrawer";
import MuiSpeedDial from "./MuiSpeedDial";
import MuiBottomNavigation from "./MuiBottomNavigation";
import MuiAvatar from "./MuiAvatar";
import MuiBadge from "./MuiBadge";
import MuiList from "./MuiList";
import MuiChip from "./MuiChip";
import MuiTooltip from "./MuiTooltip";
import MuiTable from "./MuiTable";
import MuiAlert from "./MuiAlert";
import MuiSnackbar from "./MuiSnackbar";
import MuiDialog from "./MuiDialog";
import MuiProgress from "./MuiProgress";
import MuiSkeleton from "./MuiSkeleton";
import MuiLoadingButton from "./MuiLoadingButton";
import MuiPicker from "./MuiPicker";
import MuiDateRangePicker from "./MuiDateRangePicker";
import MuiTabs from "./MuiTabs";
import MuiTimeline from "./MuiTimeline";
import MuiMasonry from "./MuiMasonry";
import MuiResponsiveness from "./MuiResponsiveness";


import Accessibility from "./react_main_concepts/Accessibility";

// amazon is a e-commerce product
import AmazonRoutes from "./amazon/Routes";

const CustomRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/*Change the Home.Tsx --> Home.tsx*/}
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
        <Route path="/breadcrumbs" element={<MuiBreadcrumbs />} />
        <Route path="/drawer" element={<MuiDrawer />} />
        <Route path="/speed-dial" element={<MuiSpeedDial />} />
        <Route path="/bottom-navigation" element={<MuiBottomNavigation />} />
        <Route path="/avatar" element={<MuiAvatar />} />
        <Route path="/badge" element={<MuiBadge />} />
        <Route path="/list" element={<MuiList />} />
        <Route path="/chip" element={<MuiChip />} />
        <Route path="/tool-tip" element={<MuiTooltip />} />
        <Route path="/table" element={<MuiTable />} />
        <Route path="/alert" element={<MuiAlert />} />
        <Route path="/snackbar" element={<MuiSnackbar />} />
        <Route path="/dialog" element={<MuiDialog />} />
        <Route path="/progress" element={<MuiProgress />} />
        <Route path="/skeleton" element={<MuiSkeleton />} />
        <Route path="/loading-button" element={<MuiLoadingButton />} />
        <Route path="/picker" element={<MuiPicker />} />
        <Route path="/date-range-picker" element={<MuiDateRangePicker />} />
        <Route path="/tabs" element={<MuiTabs />} />
        <Route path="/timeline" element={<MuiTimeline />} />
        <Route path="/masonry" element={<MuiMasonry />} />
        <Route path="/responsiveness" element={<MuiResponsiveness />} />


        {/* React Main Concepts */}
        <Route path="/accessibility" element={<Accessibility />} />


        {/* Amazon e-commerce project */}
        <Route path="/amazon/*" element={<AmazonRoutes />} />

      </Routes>
    </Router>
  );
};

export default CustomRoutes;
