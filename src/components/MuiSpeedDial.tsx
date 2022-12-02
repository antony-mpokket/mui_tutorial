import React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: "absolute", botom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<EditOutlinedIcon />} />}
    >
      <SpeedDialAction
        tooltipTitle="copy"
        tooltipPlacement="left-end"
        tooltipOpen
        delay={1}
        icon={<FileCopyOutlinedIcon color="success" />}
      />
      <SpeedDialAction
        tooltipTitle="Print"
        tooltipPlacement="left-end"
        tooltipOpen
        delay={2}
        icon={<PrintIcon color="secondary" />}
      />
      <SpeedDialAction
        tooltipTitle="Share"
        tooltipPlacement="left-end"
        tooltipOpen
        delay={1000000}
        icon={<ShareIcon color="primary" />}
      />
    </SpeedDial>
  );
};

export default MuiSpeedDial;
