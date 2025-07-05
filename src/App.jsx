import React from "react";
import { Container, Typography, Tabs, Tab, Box } from "@mui/material";
import DeviceInventory from "./pages/DeviceInventory";
import InstallationPage from "./pages/Installations/InstallationPage";
import ServiceVisitForm from "./pages/ServiceVisits/ServiceVisitForm";
import AMCTracker from "./pages/AMCTracker/AMCTracker";
import AlertsAndPhotos from "./pages/AlertsAndPhotos/AlertsAndPhotos";

const App = () => {
  const [tab, setTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Medical Device Admin Dashboard
      </Typography>

      <Tabs value={tab} onChange={handleTabChange} sx={{ mb: 3 }}>
        <Tab label="Device Inventory" />
        <Tab label="Installation & Training" />
        <Tab label="Service Visit Logs" />
        <Tab label="AMC / CMC Tracker" />
        <Tab label="Alerts & Photo Logs" />
      </Tabs>

      {tab === 0 && <DeviceInventory />}
      {tab === 1 && <InstallationPage />}
      {tab === 2 && <ServiceVisitForm />}
      {tab === 3 && <AMCTracker />}
      {tab === 4 && <AlertsAndPhotos />}
    </Container>
  );
};

export default App;
