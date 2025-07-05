import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const TrainingForm = ({ onChange }) => {
  const [training, setTraining] = useState({
    isTrained: false,
    trainerName: "",
    traineeName: "",
    trainingDate: "",
    feedback: "",
  });

  const handleChange = (field) => (e) => {
    const value = field === "isTrained" ? e.target.checked : e.target.value;
    const updated = { ...training, [field]: value };
    setTraining(updated);
    onChange(updated);
  };

  return (
    <Box p={3} boxShadow={2} borderRadius={2} bgcolor="#fff" mt={3}>
      <Typography variant="h6" gutterBottom>
        Training Information
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
            checked={training.isTrained}
            onChange={handleChange("isTrained")}
          />
        }
        label="Training Completed"
      />
      <TextField
        fullWidth
        label="Trainer Name"
        margin="normal"
        onChange={handleChange("trainerName")}
      />
      <TextField
        fullWidth
        label="Trainee Name"
        margin="normal"
        onChange={handleChange("traineeName")}
      />
      <TextField
        fullWidth
        type="date"
        margin="normal"
        onChange={handleChange("trainingDate")}
      />
      <TextField
        fullWidth
        multiline
        rows={3}
        label="Feedback"
        margin="normal"
        onChange={handleChange("feedback")}
      />
    </Box>
  );
};

export default TrainingForm;
