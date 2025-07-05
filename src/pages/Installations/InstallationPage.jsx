import React from "react";
import InstallationForm from "./InstallationForm";
import ChecklistForm from "./ChecklistForm";
import TrainingForm from "./TrainingForm";
import { Box, Button } from "@mui/material";

const InstallationPage = () => {
  const formState = {
    installation: {},
    checklist: {},
    training: {},
  };

  const handleChange = (type) => (data) => {
    formState[type] = data;
  };

  const handleSubmit = () => {
    // console.log("Collected Form Data", formState);
    alert("Installation and Training submitted ");
  };

  return (
    <Box maxWidth="800px" mx="auto" my={4}>
      <InstallationForm onChange={handleChange("installation")} />
      <ChecklistForm onChange={handleChange("checklist")} />
      <TrainingForm onChange={handleChange("training")} />
      <Box mt={3} display="flex" justifyContent="flex-end">
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit All
        </Button>
      </Box>
    </Box>
  );
};

export default InstallationPage;
