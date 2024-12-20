import React from "react";
import {
  Typography,
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
  useTheme,
} from "@basetoolkit/ui";

const CustomeTimeline = ({ title, icon, children }) => {
  const theme = useTheme();
  return (
    <Timeline
      style={{
        padding: "0",
        alignItems: "flex-start",
      }}
    >
      {/* Item Header */}
      <TimelineItem
        style={{
          alignItems: "center",
          textTransform: "capitalize",
        }}
      >
        <TimelineSeparator>
          <TimelineConnector style={{background:theme.palette.divider}} />
          <TimelineDot
            style={{
              // color: "var(--icon-color)",
              // backgroundColor: "var(--bg-dot)",
              fontSize: "20px",
              padding: "20px",
            }}
            variant="filled"
            color="primary"
          >
            {icon}
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent style={{ marginLeft: 25 }}>
          <Typography
            variant="h6"
            style={{ fontFamily: "'Heebo', sans-serif" }}
          >
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {children}
    </Timeline>
  );
};

export default CustomeTimeline;
