import resumeData from "utils/resumeData";
import CustomeTimeline from "components/sharedUI/timeline/CustomeTimeline";
import Header from "components/sharedUI/header/Header";
import {
  TimelineConnector,
  TimelineDot,
  TimelineSeparator,
  TimelineContent,
  TimelineItem,
  Grid,
  Typography,
  Box,
  useTheme,
  SvgIcon,
} from "@basetoolkit/ui";

const Resume = () => {
  const theme = useTheme();
  return (
    <Box style={{ padding: "30px 30px 60px 30px" }}>
      {/* Education & Experiences */}
      <Grid container m={0} p={0} style={{ marginTop: "10px" }}>
        <Header title="resume" />
        <Grid item xs={12} style={{ marginTop: "5px" }}>
          <Grid container m={0} p={0}>
            {/* Experiences */}
            <Grid item xs={12} md={6}>
              <CustomeTimeline
                title="working experiences"
                icon={
                  <SvgIcon
                    icon="work"
                    variant="filled"
                    color="black"
                    fontSize={22}
                  />
                }
              >
                {resumeData.experiences.map((experience, index) => (
                  <TimelineItem
                    style={{
                      alignItems: "center",
                      textTransform: "capitalize",
                    }}
                  >
                    <TimelineSeparator style={{ height: "100%" }}>
                      <TimelineConnector
                        style={{
                          top:
                            index !== resumeData.experiences.length - 1
                              ? 0
                              : -68,
                          background: theme.palette.divider,
                        }}
                      />
                      <TimelineDot
                        style={{
                          backgroundColor: "white",
                          fontSize: "20px",
                          padding: "3px",
                        }}
                        color="primary"
                        variant="outlined"
                      ></TimelineDot>
                    </TimelineSeparator>

                    <TimelineContent style={{ width: 350 }}>
                      <Typography
                        style={{
                          textTransform: "capitalize",
                          fontFamily: "'Heebo', sans-serif",
                          fontSize: "16.5px",
                          letterSpacing: "0.2px",
                          whiteSpace: "normal",
                          overflow: "visible",
                          wordWrap: "break-word",
                          overflowWrap: "break-word",
                          wordBreak: "break-word",
                          width: 350,
                        }}
                      >
                        {experience.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        style={{
                          textTransform: "capitalize",
                          fontFamily: "'Heebo', sans-serif",
                          fontSize: "12.5px",
                          letterSpacing: "0.2px",
                          color: "var(--link-color)",
                        }}
                      >
                        {experience.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{
                          textTransform: "capitalize",
                          fontSize: "12.5px",
                          letterSpacing: "0.2px",
                          marginTop: "6px",
                          color: "var(--link-color)",
                          whiteSpace: "normal",
                          overflow: "visible",
                          wordWrap: "break-word",
                          width: 350,
                        }}
                      >
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomeTimeline>
            </Grid>
            {/* Educations */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{ marginTop: { xs: "100px", md: "0" } }}
            >
              <CustomeTimeline
                title="Educations"
                icon={
                  <SvgIcon
                    icon="school"
                    variant="filled"
                    color="black"
                    fontSize={22}
                  />
                }
              >
                {resumeData.educations.map((education, index) => (
                  <TimelineItem
                    style={{
                      alignItems: "center",
                      textTransform: "capitalize",
                    }}
                  >
                    <TimelineSeparator style={{ height: "100%" }}>
                      <TimelineConnector
                        style={{
                          top:
                            index !== resumeData.educations.length - 1
                              ? 0
                              : -40,
                          background: theme.palette.divider,
                        }}
                      />
                      <TimelineDot
                        style={{
                          backgroundColor: "white",
                          fontSize: "20px",
                          padding: "3px",
                        }}
                        color="primary"
                        variant="outlined"
                      ></TimelineDot>
                    </TimelineSeparator>

                    <TimelineContent style={{ width: 350 }}>
                      <Typography
                        style={{
                          textTransform: "capitalize",
                          fontFamily: "'Heebo', sans-serif",
                          fontSize: "16.5px",
                          letterSpacing: "0.2px",
                        }}
                      >
                        {education.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        style={{
                          textTransform: "capitalize",
                          fontFamily: "'Heebo', sans-serif",
                          fontSize: "12.5px",
                          letterSpacing: "0.2px",
                          color: "var(--link-color)",
                        }}
                      >
                        {education.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{
                          textTransform: "capitalize",
                          fontSize: "12.5px",
                          letterSpacing: "0.2px",
                          marginTop: "6px",
                          color: "var(--link-color)",
                          whiteSpace: "normal",
                          overflow: "visible",
                          wordWrap: "break-word",
                          width: 350,
                        }}
                      >
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomeTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Resume;
