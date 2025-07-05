import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  MenuItem,
  Button,
  InputLabel,
  IconButton,
  Paper,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const ServiceVisitForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    engineer: "",
    date: "",
    purpose: "",
    notes: "",
    files: [],
  });

  const handleChange = (field) => (e) => {
    const value =
      field === "files" ? Array.from(e.target.files) : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Service Visit Log:", form);
    alert("Service Visit logged");
    onSubmit?.(form);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 700, mx: "auto", mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Log Service Visit
      </Typography>

      <TextField
        fullWidth
        label="Engineer Name"
        margin="normal"
        value={form.engineer}
        onChange={handleChange("engineer")}
      />

      <TextField
        fullWidth
        type="date"
        margin="normal"
        label="Visit Date"
        InputLabelProps={{ shrink: true }}
        value={form.date}
        onChange={handleChange("date")}
      />

      <TextField
        fullWidth
        select
        label="Visit Purpose"
        margin="normal"
        value={form.purpose}
        onChange={handleChange("purpose")}
      >
        <MenuItem value="Preventive">Preventive</MenuItem>
        <MenuItem value="Breakdown">Breakdown</MenuItem>
      </TextField>

      <TextField
        fullWidth
        multiline
        rows={4}
        label="Visit Notes"
        margin="normal"
        value={form.notes}
        onChange={handleChange("notes")}
      />

      <InputLabel sx={{ mt: 2, mb: 1 }}>
        Upload Attachments (PDFs or Images)
      </InputLabel>
      <Button
        component="label"
        variant="outlined"
        startIcon={<UploadFileIcon />}
      >
        Upload Files
        <input
          hidden
          multiple
          type="file"
          accept=".pdf,image/*"
          onChange={handleChange("files")}
        />
      </Button>

      <Box mt={2} display="flex" flexDirection="column" gap={1}>
        {form.files.map((file, idx) => (
          <Box
            key={idx}
            p={1}
            sx={{ border: "1px solid #ddd", borderRadius: 1 }}
          >
            📎 {file.name}
          </Box>
        ))}
      </Box>

      <Box mt={3}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit Service Log
        </Button>
      </Box>
    </Paper>
  );
};

export default ServiceVisitForm;
