import "./Mentor.css";
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export function Mentor() {
  const [mentorId, setMentorId] = useState("");
  const [name, setName] = useState("");
  const createMentor = () => {
    const credentials = {
      mentorId,
      name,
    };

    fetch("https://node-mentorapi.herokuapp.com/mentor/mentors", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="mentor">
      <h1>Mentor Details</h1>
      <div className="mentor-credentials">
        <TextField
          value={mentorId}
          onChange={(em) => setMentorId(em.target.value)}
          id="standard-basic"
          label="Enter Mentor Id"
          variant="standard"
        />
        <TextField
          value={name}
          onChange={(pass) => setName(pass.target.value)}
          id="standard-basic"
          label="Enter Name"
          variant="standard"
        />
        <Button onClick={createMentor} variant="contained">
          Create Mentor
        </Button>
      </div>
    </div>
  );
}
