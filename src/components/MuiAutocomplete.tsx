import React, {useState} from "react";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];
type Skill = {
    id: number
    label: string
}
const skillsOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
}))

const MuiAutocomplete = () => {
    const [value, setValue] = useState<string | null>(null)
    console.log(value);

    const [skill, setskill] = useState<Skill | null>(null)
    console.log(skillsOptions);

  return (
    <div>
      <Stack >
        <Stack spacing={2} direction='column'>
          <Autocomplete
            options={skills}
            renderInput={(params) => <TextField {...params} label="Skills" />}
            value={value}
            onChange={(event: any, newValue: string | null) =>
              setValue(newValue)
            }
            freeSolo
          />
          <Autocomplete
            options={skillsOptions}
            renderInput={(params) => <TextField {...params} label="Skills" />}
            value={skill}
            onChange={(event: any, newValue: Skill | null) =>
              setskill(newValue)
            }
            
          />
        </Stack>
      </Stack>
    </div>
  );
};

export default MuiAutocomplete;
