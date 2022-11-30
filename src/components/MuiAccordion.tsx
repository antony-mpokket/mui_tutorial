import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { useState } from "react";

const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (isExpanded:boolean, pannel:string) => {
    setExpanded(isExpanded ? pannel : false);
  }
  return (
    <div>
      <Accordion
        expanded={expanded === "pannel1"}
        onChange={(event: any, isExpanded: any) =>
          handleChange(isExpanded, "pannel1")
        }
        sx={{
          background: "linear-gradient(#e66465, #9198e5);",
          my: "20px",
        }}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="pannel1-content"
          expandIcon={<ExpandCircleDownIcon color="disabled" />}
        >
          {/* 'inherit' | 'action' | 'disabled' | 'primary' | 'secondary' | 'error'
          | 'info' | 'success' | 'warning' | string */}
          <Typography variant="h6" color="whitesmoke">
            Accordion 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "pannel2"}
        onChange={(event: React.SyntheticEvent, isExpanded: boolean) =>
          handleChange(isExpanded, "pannel2")
        }
        sx={{
          background:
            "linear-gradient(217deg, rgba(255,0,0,.8), rgba(245, 40, 145, 0.8) 70.71%);",
          my: "20px",
        }}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="pannel2-content"
          expandIcon={<ExpandCircleDownIcon style={{ color: "white" }} />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "pannel3"}
        onChange={(event: React.SyntheticEvent, isExpanded: boolean) =>
          handleChange(isExpanded, "pannel3")
        }
        sx={{
          background: "linear-gradient(#e66465, #9198e5);",
          my: "20px",
        }}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="pannel3-content"
          expandIcon={<ExpandCircleDownIcon color="disabled" />}
        >
          {/* 'inherit' | 'action' | 'disabled' | 'primary' | 'secondary' | 'error'
          | 'info' | 'success' | 'warning' | string */}
          <Typography variant="h6" color="whitesmoke">
            Accordion 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "pannel4"}
        onChange={(event: React.SyntheticEvent, isExpanded: boolean) =>
          handleChange(isExpanded, "pannel4")
        }
        sx={{
          background:
            "linear-gradient(217deg, rgba(255,0,0,.8), rgba(245, 40, 145, 0.8) 70.71%);",
          my: "20px",
        }}
      >
        <AccordionSummary
          id="panel4-header"
          aria-controls="pannel4-content"
          expandIcon={<ExpandCircleDownIcon style={{ color: "white" }} />}
        >
          <Typography>Accordion 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "pannel5"}
        onChange={(event: React.SyntheticEvent, isExpanded: boolean) =>
          handleChange(isExpanded, "pannel5")
        }
        sx={{
          background: "linear-gradient(#e66465, #9198e5);",
          my: "20px",
        }}
      >
        <AccordionSummary
          id="panel5-header"
          aria-controls="pannel5-content"
          expandIcon={<ExpandCircleDownIcon color="disabled" />}
        >
          {/* 'inherit' | 'action' | 'disabled' | 'primary' | 'secondary' | 'error'
          | 'info' | 'success' | 'warning' | string */}
          <Typography variant="h6" color="whitesmoke">
            Accordion 5
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "pannel6"}
        onChange={(event: React.SyntheticEvent, isExpanded: boolean) =>
          handleChange(isExpanded, "pannel6")
        }
        sx={{
          background:
            "linear-gradient(217deg, rgba(255,0,0,.8), rgba(245, 40, 145, 0.8) 70.71%);",
          my: "20px",
        }}
      >
        <AccordionSummary
          id="panel6-header"
          aria-controls="pannel6-content"
          expandIcon={
            <ExpandCircleDownIcon
              style={{
                color: "#61dafb",
              }}
            />
          }
        >
          <Typography>Accordion 6</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MuiAccordion;
