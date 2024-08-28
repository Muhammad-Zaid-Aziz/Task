import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const AddCar = () => {
  return (
    <>
      <Box>
        <Box>
          <Typography>Car</Typography>
          <input />
          <Typography>Price</Typography>
          <input />
          <Typography>Phone</Typography>
          <input />

          <Typography>City</Typography>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="Sadiqabad"
                control={<Radio />}
                label="Sadiqabad"
              />
              <FormControlLabel
                value="lahore"
                control={<Radio />}
                label="lahore"
              />
              <FormControlLabel
                value="Karachi"
                control={<Radio />}
                label="Karachi"
              />
            </RadioGroup>
          </FormControl>
          <Box>
            <Typography>No. of Photos</Typography>
            <FormControl sx={{ width: "30%" }}>
              <InputLabel id="demo-simple-select-label">select</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //   value={""}
                label="up to 10"
                //   onChange={handleChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button variant="contained">Add Car</Button>
        </Box>
      </Box>
    </>
  );
};

export default AddCar;
