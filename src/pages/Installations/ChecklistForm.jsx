import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  TextField,
} from "@mui/material";

const ChecklistForm = ({ onChange }) => {
  const [checklist, setChecklist] = useState({
    poweredOn: false,
    connectedToNetwork: false,
    calibrationDone: false,
    remarks: "",
  });

  const handleToggle = (field) => (e) => {
    const updated = { ...checklist, [field]: e.target.checked };
    setChecklist(updated);
    onChange(updated);
  };

  const handleRemarks = (e) => {
    const updated = { ...checklist, remarks: e.target.value };
    setChecklist(updated);
    onChange(updated);
  };

  return (
    <Box p={3} boxShadow={2} borderRadius={2} bgcolor="#fff" mt={3}>
      <Typography variant="h6" gutterBottom>
        Installation Checklist
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
            checked={checklist.poweredOn}
            onChange={handleToggle("poweredOn")}
          />
        }
        label="Device Powered On"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checklist.connectedToNetwork}
            onChange={handleToggle("connectedToNetwork")}
          />
        }
        label="Connected to Network"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checklist.calibrationDone}
            onChange={handleToggle("calibrationDone")}
          />
        }
        label="Initial Calibration Completed"
      />
      <TextField
        fullWidth
        multiline
        rows={3}
        label="Remarks"
        margin="normal"
        onChange={handleRemarks}
      />
    </Box>
  );
};

export default ChecklistForm;
