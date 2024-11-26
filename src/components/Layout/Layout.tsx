// src/components/Layout/Layout.tsx
import React from "react";
import { Box } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <Box sx={{ marginLeft: "250px", padding: 4 }}>{children}</Box>;
};

export default Layout;
