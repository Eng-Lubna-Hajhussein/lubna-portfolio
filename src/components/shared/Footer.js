import { Box, Typography } from "@basetoolkit/ui";
import React from "react";

const Footer = () => {
  return (
    <Box
      style={{
        backgroundColor: "var(--icon-color)",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "6px",
      }}
    >
      <Typography
        style={{
          color: "var(--bg-primary)",
          textTransform: "capitalize",
        }}
        variant="body2"
      >
        Lubna Hajhussein
      </Typography>
      <Typography
        style={{
          color: "var(--copyright-color)",
        }}
        variant="body2"
      >
        &copy; {new Date().getFullYear()} All rights reserved. Designed by
        <a
          href="https://github.com/Eng-Lubna-Hajhussein"
          style={{
            textDecoration: "none",
            color: "var(--bg-dot)",
            marginLeft: "5px",
          }}
        >
          Eng-Lubna-Hajhussein
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
