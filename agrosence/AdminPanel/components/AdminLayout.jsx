import React from "react";
import { Layout, AppBar, Menu, MenuItem } from "react-admin";
import { Typography, Box } from "@mui/material";

// Custom App Bar (Header)
const CustomAppBar = (props) => (
  <AppBar {...props}>
    <Typography variant="h6" sx={{ flex: 1, textAlign: "center" }}>
      AgroSense Admin Panel
    </Typography>
  </AppBar>
);

// Custom Menu (Sidebar)
const CustomMenu = (props) => (
  <Menu {...props}>
    <MenuItem to="/contact">Contact Form Submissions</MenuItem>
    {/* Add more menu items here */}
  </Menu>
);

// Custom Layout with Sidebar and Content Area
const AdminLayout = (props) => (
  <Layout {...props} appBar={CustomAppBar} menu={CustomMenu}>
    {/* This is where the main content will be rendered */}
    <Box sx={{ display: "flex", flexDirection: "row", padding: 2 }}>
      <Box sx={{ flex: 1 }}>
        {props.children} {/* The main content area */}
      </Box>
    </Box>
  </Layout>
);

export default AdminLayout;
