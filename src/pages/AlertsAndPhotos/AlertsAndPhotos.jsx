import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const AlertsAndPhotos = () => {
  const [alertText, setAlertText] = useState("");
  const [alertType, setAlertType] = useState("");
  const [alerts, setAlerts] = useState([]);
  const [photos, setPhotos] = useState([]);

  const handleAddAlert = () => {
    if (alertText && alertType) {
      setAlerts([
        ...alerts,
        { text: alertText, type: alertType, date: new Date().toLocaleString() },
      ]);
      setAlertText("");
      setAlertType("");
    }
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setPhotos([...photos, ...files]);
  };

  return (
    <Paper sx={{ p: 3, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Alerts & Photo Logs
      </Typography>

      {/* Alert Form */}
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <FormControl fullWidth>
          <InputLabel>Alert Type</InputLabel>
          <Select
            value={alertType}
            label="Alert Type"
            onChange={(e) => setAlertType(e.target.value)}
          >
            <MenuItem value="Installation">Installation</MenuItem>
            <MenuItem value="Maintenance">Maintenance</MenuItem>
            <MenuItem value="Critical">Critical</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label="Alert Description"
          value={alertText}
          onChange={(e) => setAlertText(e.target.value)}
        />
        <Button variant="contained" onClick={handleAddAlert}>
          Add Alert
        </Button>
      </Box>

      {/* Alert List */}
      <List>
        {alerts.map((alert, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${alert.type} - ${alert.text}`}
              secondary={alert.date}
            />
          </ListItem>
        ))}
      </List>

      {/* Photo Upload */}
      <Box sx={{ mt: 4 }}>
        <InputLabel>Upload Device Condition Photos</InputLabel>
        <Button
          variant="outlined"
          component="label"
          startIcon={<UploadFileIcon />}
          sx={{ mt: 1 }}
        >
          Upload Photos
          <input
            type="file"
            hidden
            multiple
            accept="image/*"
            onChange={handlePhotoUpload}
          />
        </Button>

        <Box mt={2} display="flex" flexWrap="wrap" gap={2}>
          {photos.map((file, index) => (
            <img
              key={index}
              src={URL.createObjectURL(file)}
              alt="Uploaded preview"
              style={{
                width: 100,
                height: 100,
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default AlertsAndPhotos;
