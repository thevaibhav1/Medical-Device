import React from "react";
import {
  Box,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Button,
  Chip,
} from "@mui/material";

const deviceContracts = [
  {
    deviceId: "ECG-001",
    type: "ECG",
    facility: "Apollo Delhi",
    contractType: "AMC",
    startDate: "2023-08-01",
    endDate: "2024-07-20",
  },
  {
    deviceId: "VENT-103",
    type: "Ventilator",
    facility: "Max Hospital",
    contractType: "CMC",
    startDate: "2022-10-01",
    endDate: "2024-07-05",
  },
  {
    deviceId: "MON-302",
    type: "Monitor",
    facility: "Fortis Mumbai",
    contractType: "AMC",
    startDate: "2024-01-01",
    endDate: "2025-12-31",
  },
];

const isExpiringSoon = (endDate) => {
  const today = new Date();
  const expiry = new Date(endDate);
  const diff = (expiry - today) / (1000 * 60 * 60 * 24);
  return diff < 30 && diff > 0;
};

const AMCTracker = () => {
  return (
    <Paper sx={{ p: 3, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        AMC / CMC Tracker
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Device ID</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Facility</TableCell>
            <TableCell>Contract Type</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {deviceContracts.map((device, index) => {
            const expired = new Date(device.endDate) < new Date();
            const expiringSoon = isExpiringSoon(device.endDate);
            let chipColor = expired
              ? "error"
              : expiringSoon
              ? "warning"
              : "success";
            let label = expired
              ? "Expired"
              : expiringSoon
              ? "Expiring Soon"
              : "Active";

            return (
              <TableRow key={index}>
                <TableCell>{device.deviceId}</TableCell>
                <TableCell>{device.type}</TableCell>
                <TableCell>{device.facility}</TableCell>
                <TableCell>{device.contractType}</TableCell>
                <TableCell>{device.startDate}</TableCell>
                <TableCell>{device.endDate}</TableCell>
                <TableCell>
                  <Chip label={label} color={chipColor} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <Box mt={3}>
        <Button variant="outlined">Export as CSV</Button>
      </Box>
    </Paper>
  );
};

export default AMCTracker;
