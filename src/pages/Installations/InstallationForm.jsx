import React, { useState } from "react";
import { Box, TextField, Button, Typography, InputLabel } from "@mui/material";

const InstallationForm = ({ onChange }) => {
  const [form, setForm] = useState({
    device: "",
    facility: "",
    installer: "",
    date: "",
    photos: [],
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    onChange({ ...form, [field]: e.target.value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setForm((prev) => ({ ...prev, photos: files }));
    onChange({ ...form, photos: files });
  };

  return (
    <Box p={3} boxShadow={2} borderRadius={2} bgcolor="#fff">
      <Typography variant="h6" gutterBottom>
        New Installation
      </Typography>
      <TextField
        fullWidth
        label="Device ID"
        margin="normal"
        onChange={handleChange("device")}
      />
      <TextField
        fullWidth
        label="Facility Name"
        margin="normal"
        onChange={handleChange("facility")}
      />
      <TextField
        fullWidth
        label="Installer Name"
        margin="normal"
        onChange={handleChange("installer")}
      />
      <TextField
        fullWidth
        type="date"
        margin="normal"
        onChange={handleChange("date")}
      />

      <InputLabel sx={{ mt: 2 }}>Upload Photos</InputLabel>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />

      <Box mt={2} display="flex" gap={1} flexWrap="wrap">
        {form.photos.map((file, idx) => (
          <img
            key={idx}
            src={URL.createObjectURL(file)}
            alt="preview"
            width={80}
            height={80}
            style={{ borderRadius: 8, objectFit: "cover" }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default InstallationForm;
