import React from "react";
import { Button } from "@basetoolkit/ui";

const CustomeButton = ({ text, icon }) => {
  return (
    <Button
      variant="contained"
      endIcon={
        icon ? (
          <div
            style={{
              color: "var(--icon-colot)",
              backgroundColor: "var(--bg-primary)",
              borderRadius: "50px",
              height: "26px",
              width: "26px",
              fontSize: "12px",
              lineHeight: "29px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {icon}
          </div>
        ) : null
      }
      sx={{
        backgroundColor: "var(--bg-dot) !important",
        color: "var(--icon-color) !important",
        fontSize: "10px !important",
        fontWeight: "bold !important",
        border: 0,
        borderRadius: "50px !important",
        padding: "1px 16px !important",
        outline: "none",
        lineHeight: "35px !important" ,
        letterSpacing: "2px !important",
        display: "flex",
        justifyContent: "space-around",
        fontFamily: "'Heebo', sans-serif",
        "&:hover": {
          backgroundColor: "var(--primary-hover-color) !important"
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomeButton;
