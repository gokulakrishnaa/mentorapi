import "./Student.css";
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

export function Student() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const createStudent = () => {
    const credentials = {
      id,
      name,
      course,
    };

    fetch("https://node-mentorapi.herokuapp.com/mentor/students", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleChange = (event) => {
    setCourse(event.target.value);
  };

  return (
    <div className="student">
      <h1>Student Details</h1>
      <div className="student-credentials">
        <TextField
          value={id}
          onChange={(em) => setId(em.target.value)}
          id="standard-basic"
          label="Enter Student Id"
          variant="standard"
        />
        <TextField
          value={name}
          onChange={(pass) => setName(pass.target.value)}
          id="standard-basic"
          label="Enter Name"
          variant="standard"
        />
        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Course</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={course}
              label="Course"
              onChange={handleChange}
            >
              <MenuItem value={"JavaScript"}>JavaScript</MenuItem>
              <MenuItem value={"React"}>React</MenuItem>
              <MenuItem value={"MongoDB"}>MongoDB</MenuItem>
              <MenuItem value={"Nodejs"}>Nodejs</MenuItem>
              <MenuItem value={"Html-CSS"}>Html-CSS</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Button onClick={createStudent} variant="contained">
          Create Student
        </Button>
      </div>
    </div>
  );
}
