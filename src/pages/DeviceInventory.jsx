import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  LinearProgress,
  Typography,
} from "@mui/material";

const devices = [
  {
    type: "ECG",
    id: "ECG-001",
    facility: "Apollo Delhi",
    status: "Online",
    battery: 85,
    lastService: "2024-06-12",
    installDate: "2023-12-15",
    contract: "AMC Active",
  },
  {
    type: "Ventilator",
    id: "VENT-103",
    facility: "Max Hospital",
    status: "Offline",
    battery: 15,
    lastService: "2024-03-10",
    installDate: "2023-11-05",
    contract: "CMC Expired",
  },
  {
    type: "Defibrillator",
    id: "DEF-901",
    facility: "Fortis Mumbai",
    status: "Maintenance",
    battery: 45,
    lastService: "2024-05-01",
    installDate: "2023-08-20",
    contract: "None",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Online":
      return "success";
    case "Offline":
      return "error";
    case "Maintenance":
      return "warning";
    default:
      return "default";
  }
};

const getContractColor = (status) => {
  if (status.includes("Active")) return "success";
  if (status.includes("Expired")) return "error";
  return "default";
};

const DeviceInventory = () => {
  return (
    <Paper sx={{ padding: 2, maxWidth: 1200, margin: "auto", marginTop: 4 }}>
      <Typography variant="h6" gutterBottom>
        Device Inventory Dashboard
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Device Type</TableCell>
              <TableCell>Device ID</TableCell>
              <TableCell>Facility</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Battery</TableCell>
              <TableCell>Last Service</TableCell>
              <TableCell>Installation Date</TableCell>
              <TableCell>AMC/CMC</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {devices.map((device, index) => (
              <TableRow key={index}>
                <TableCell>{device.type}</TableCell>
                <TableCell>{device.id}</TableCell>
                <TableCell>{device.facility}</TableCell>
                <TableCell>
                  <Chip
                    label={device.status}
                    color={getStatusColor(device.status)}
                  />
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{device.battery}%</Typography>
                  <LinearProgress
                    variant="determinate"
                    value={device.battery}
                    sx={{
                      height: 8,
                      borderRadius: 5,
                      mt: 0.5,
                      backgroundColor: "#eee",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor:
                          device.battery > 50
                            ? "green"
                            : device.battery > 20
                            ? "orange"
                            : "red",
                      },
                    }}
                  />
                </TableCell>
                <TableCell>{device.lastService}</TableCell>
                <TableCell>{device.installDate}</TableCell>
                <TableCell>
                  <Chip
                    label={device.contract}
                    color={getContractColor(device.contract)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default DeviceInventory;
