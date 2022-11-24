import {
  FormControlLabel,
  Typography,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText
} from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const MuiCheckbox = () => {
  const [acceptTnc, setacceptTnc] = useState(false);
  const [NewSkills, setNewSkills] = useState<string[]>([]);
  console.log(NewSkills)
  const handleNewSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = NewSkills.indexOf(event.target.value);
    if (index === -1){
        setNewSkills([...NewSkills, event.target.value]);
        // setNewSkills(...NewSkills, event.target.value);
    }else {
        setNewSkills(NewSkills.filter((skill) => skill !== event.target.value));
    }
}


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(acceptTnc);
    // setacceptTnc(event.target.checked);
    if (event.target.value === "TnC") {
      setacceptTnc(event.target.checked);
    } else {
      setSkill(event.target.checked);
    }
  };

  const [acceptBM, setacceptBM] = useState(false);
  const [skil, setSkill] = useState(false);

  const handleBMChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(acceptBM);
    setacceptBM(event.target.checked);
    
  };

//   const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setSkill(event.target.checked)
//   }
  return (
    <div>
      <Typography variant="h3" align="left" fontSize="150">
        This section we are going to see the muicheckbox
      </Typography>
      <hr />
      <Box
        sx={{
          color: "white",
          background: "linear-gradient(to right bottom, #36EAEF, #6B0AC9)",
          //   background: "linear-gradient(#e66465, #9198e5)",
          // background:" linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);",
        }}
      >
        <Box>
          <FormControlLabel
            value="TnCForm"
            label="I accept terms and conditions"
            control={
              <Checkbox
                value="TnC"
                checked={acceptTnc}
                onChange={handleChange}
                color="secondary"
              />
            } // TnC --> Terms and Conditions
          />
        </Box>
        <Box>
          <FormControlLabel
            label="I accept terms and conditions"
            control={<Checkbox color="secondary" />}
          />
        </Box>
      </Box>
      <br />
      <Typography variant="h3" align="left" sx={{ paddingLeft: "20px" }}>
        Icon as a Checkbox
      </Typography>
      <Box>
        <Box
          sx={{
            color: "white",
            fontSize: "25px",
            background: "linear-gradient(#e66465, #9198e5);",
          }}
        >
          <FormControlLabel
            label="Add a Bookmark"
            control={
              <Checkbox
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
                checked={acceptBM}
                onChange={handleBMChange}
              />
            }
          />
        </Box>
      </Box>
      <hr />
      <Typography variant="h3" align="left">
        Select Checkbox
      </Typography>
      <Box>
        <Box>
          <FormControl>
            <FormLabel>Skills</FormLabel>
            <FormGroup row>
              <FormControlLabel
                label="HTML"
                control={
                  <Checkbox
                    value="html"
                    checked={acceptTnc || skil}
                    onChange={handleChange}
                    color="secondary"
                  />
                }
              />
              <FormControlLabel
                label="React"
                control={
                  <Checkbox
                    value="react"
                    checked={acceptTnc || skil}
                    onChange={handleChange}
                    color="secondary"
                  />
                }
              />
              <FormControlLabel
                label="Python"
                control={
                  <Checkbox
                    value="python"
                    checked={acceptTnc}
                    onChange={handleChange}
                    color="secondary"
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </Box>
      </Box>
      <hr />

      <Typography variant="h3" align="left">
        --- X -- New Select Checkbox using the useState Hook
      </Typography>
      <Box>
        <Box>
          <FormControl>
            <FormLabel>Skills</FormLabel>
            <FormGroup>
              <FormControlLabel
                label="HTML"
                control={
                  <Checkbox
                    value="html"
                    checked={NewSkills.includes("html")}
                    onChange={handleNewSkillsChange}
                    color="secondary"
                  />
                }
              />
              <FormControlLabel
                label="React"
                control={
                  <Checkbox
                    value="react"
                    checked={NewSkills.includes("react")}
                    onChange={handleNewSkillsChange}
                    color="secondary"
                  />
                }
              />
              <FormControlLabel
                label="Python"
                control={
                  <Checkbox
                    value="python"
                    checked={NewSkills.includes("python")}
                    onChange={handleNewSkillsChange}
                    color="secondary"
                  />
                }
              />
            </FormGroup>
            <FormHelperText>This is a form helper text, Please select you Skills</FormHelperText>
          </FormControl>
        </Box>
      </Box>
    </div>
  );
};

export default MuiCheckbox;
