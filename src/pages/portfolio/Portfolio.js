import {
  Grid,
  Typography,
  Box,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import Header from "components/sharedUI/header/Header";
import rmsImg from "assets/RMS.png";
import adaptiveOnlineExamImg from "assets/adaptiveOnlineExam.png";
import reactUI1 from "assets/react_ui_1.png";
import reactUI2 from "assets/react_ui_2.png";
import healersImg from "assets/healers.png";
import addressSubsystemImg from "assets/address_subsystem.png";

const Portfolio = () => {
  return (
    <Box style={{ padding: "30px 30px 60px 30px" }}>
      <Grid container style={{ marginTop: "10px" }}>
        <Header title="portfolio" />
        <Grid item xs={12} style={{ marginTop: "50px" }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={12}>
              <Box
                sx={{
                  maxWidth: "100%",
                  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.13)",
                  borderRadius: "10px",
                }}
              >
                <CardMedia
                  component="img"
                  width="100%"
                  sx={{
                    borderRadius: "10px 10px 0px 0px",
                    backgroundSize: "100% 100% !important",
                    "&": {
                      backgroundSize: "100% 100% !important",
                    },
                  }}
                  height="100%"
                  image={rmsImg}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ fontWeight: "800" }}
                    component="div"
                  >
                    RMS (Restaurant Management System)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Full-stack web-app based on systems management concept where we give any restaurant the service to manage their restaurant through our website and customize their design the way they want.
                  </Typography>
                </CardContent>
                <CardActions
                  style={{
                    fontSize: "12.5px",
                  }}
                >
                  <Link
                    to="https://youtu.be/SLO_CSWkFaA?si=2qFtUqGEwDQ8ZYHk"
                    style={{
                      textDecoration: "none",
                      color: "var(--secindary-color)",
                    }}
                  >
                    <Typography
                      sx={{
                        padding: "6px 8px",
                        "&:hover": {
                          color: "var(--icon-color)",
                          cursor: "pointer",
                          backgroundColor: "var(--bg-dot)",
                          borderRadius: "6px",
                        },
                      }}
                    >
                      Demo
                    </Typography>
                  </Link>
                  <Link
                    to="https://github.com/Eng-Lubna-Hajhussein/RMS"
                    style={{
                      textDecoration: "none",
                      color: "var(--secindary-color)",
                    }}
                  >
                    <Typography
                      sx={{
                        padding: "6px 8px",
                        "&:hover": {
                          color: "var(--icon-color)",
                          cursor: "pointer",
                          backgroundColor: "var(--bg-dot)",
                          borderRadius: "6px",
                        },
                      }}
                    >
                      Source Code
                    </Typography>
                  </Link>
                </CardActions>
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box
                sx={{
                  maxWidth: "100%",
                  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.13)",
                  borderRadius: "10px",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ borderRadius: "10px 10px 0px 0px" }}
                  height="100%"
                  image={adaptiveOnlineExamImg}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ fontWeight: "800" }}
                    component="div"
                  >
                    Adaptive Online Exam
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The National Aeronautics and Space Administration is an
                    independent agency. I love redesigning the NASA website.
                    This's page build by Wordpress
                  </Typography>
                </CardContent>
                <CardActions
                  style={{
                    fontSize: "12.5px",
                  }}
                >
                  <Link
                    to={"https://youtu.be/kCaT7wNWaqM?si=KpiK3F6rQI963r6E"}
                    style={{
                      textDecoration: "none",
                      color: "var(--secindary-color)",
                    }}
                  >
                    <Typography
                      sx={{
                        padding: "6px 8px",
                        "&:hover": {
                          color: "var(--icon-color)",
                          cursor: "pointer",
                          backgroundColor: "var(--bg-dot)",
                          borderRadius: "6px",
                        },
                      }}
                    >
                      Demo
                    </Typography>
                  </Link>
                  <Link
                    to="https://github.com/Eng-Lubna-Hajhussein/AdaptiveOnlineExam"
                    style={{
                      textDecoration: "none",
                      color: "var(--secindary-color)",
                    }}
                  >
                    <Typography
                      sx={{
                        padding: "6px 8px",
                        "&:hover": {
                          color: "var(--icon-color)",
                          cursor: "pointer",
                          backgroundColor: "var(--bg-dot)",
                          borderRadius: "6px",
                        },
                      }}
                    >
                      Source Code
                    </Typography>
                  </Link>
                </CardActions>
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box
                sx={{
                  maxWidth: "100%",
                  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.13)",
                  borderRadius: "10px",
                }}
              >
                <CardMedia
                  component="img"
                  height="100%"
                  sx={{ borderRadius: "10px 10px 0px 0px" }}
                  image={reactUI1}
                />
                <CardMedia component="img" height="100%" image={reactUI2} />

                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ fontWeight: "800" }}
                    component="div"
                  >
                    React_UI
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The purpose of this project is to great a reusable React_UI
                    components from scratch (similar to the idea of material UI)
                  </Typography>
                </CardContent>
                <CardActions
                  style={{
                    fontSize: "12.5px",
                  }}
                >
                  <Link
                    to="https://youtu.be/vZsVShUbkIY?si=_Qiuz6Txwd29Fym6"
                    style={{
                      textDecoration: "none",
                      color: "var(--secindary-color)",
                    }}
                  >
                    <Typography
                      sx={{
                        padding: "6px 8px",
                        "&:hover": {
                          color: "var(--icon-color)",
                          cursor: "pointer",
                          backgroundColor: "var(--bg-dot)",
                          borderRadius: "6px",
                        },
                      }}
                    >
                      Demo
                    </Typography>
                  </Link>
                  <Link
                    to="https://github.com/Eng-Lubna-Hajhussein/React_UI"
                    style={{
                      textDecoration: "none",
                      color: "var(--secindary-color)",
                    }}
                  >
                    <Typography
                      sx={{
                        padding: "6px 8px",
                        "&:hover": {
                          color: "var(--icon-color)",
                          cursor: "pointer",
                          backgroundColor: "var(--bg-dot)",
                          borderRadius: "6px",
                        },
                      }}
                    >
                      Source Code
                    </Typography>
                  </Link>
                </CardActions>
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box
                sx={{
                  maxWidth: "100%",
                  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.13)",
                  borderRadius: "10px",
                }}
              >
                <CardMedia
                  component="img"
                  height="100%"
                  image={healersImg}
                  sx={{ borderRadius: "10px 10px 0px 0px" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ fontWeight: "800" }}
                    component="div"
                  >
                    Healers
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Full-stack web-app that helps patients who had operations to
                    communicate with donors
                  </Typography>
                </CardContent>
                <CardActions
                  style={{
                    fontSize: "12.5px",
                  }}
                >
                  <Link
                    to="https://youtu.be/BnGMy-5x2Yw?si=RXQsLy3LwuihL3hI"
                    style={{
                      textDecoration: "none",
                      color: "var(--secindary-color)",
                    }}
                  >
                    <Typography
                      sx={{
                        padding: "6px 8px",
                        "&:hover": {
                          color: "var(--icon-color)",
                          cursor: "pointer",
                          backgroundColor: "var(--bg-dot)",
                          borderRadius: "6px",
                        },
                      }}
                    >
                      Demo
                    </Typography>
                  </Link>
                  <Link
                    to="https://github.com/Lubna-Hajhussein/Healers"
                    style={{
                      textDecoration: "none",
                      color: "var(--secindary-color)",
                    }}
                  >
                    <Typography
                      sx={{
                        padding: "6px 8px",
                        "&:hover": {
                          color: "var(--icon-color)",
                          cursor: "pointer",
                          backgroundColor: "var(--bg-dot)",
                          borderRadius: "6px",
                        },
                      }}
                    >
                      Source Code
                    </Typography>
                  </Link>
                </CardActions>
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box
                sx={{
                  maxWidth: "100%",
                  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.13)",
                  borderRadius: "10px",
                }}
              >
                <CardMedia
                  component="img"
                  height="100%"
                  image={addressSubsystemImg}
                  sx={{ borderRadius: "10px 10px 0px 0px" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ fontWeight: "800" }}
                    component="div"
                  >
                    Address Subsystem
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Reusable address subsystem (similar logic to delivery
                    address subsystem in RMS project)
                  </Typography>
                </CardContent>
                <CardActions
                  style={{
                    fontSize: "12.5px",
                  }}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "var(--secindary-color)",
                    }}
                  >
                    <Typography
                      sx={{
                        padding: "6px 8px",
                        "&:hover": {
                          color: "var(--icon-color)",
                          cursor: "pointer",
                          backgroundColor: "var(--bg-dot)",
                          borderRadius: "6px",
                        },
                      }}
                    >
                      Demo
                    </Typography>
                  </Link>
                  <Link
                    to="https://github.com/Eng-Lubna-Hajhussein/Address_Subsystem"
                    style={{
                      textDecoration: "none",
                      color: "var(--secindary-color)",
                    }}
                  >
                    <Typography
                      sx={{
                        padding: "6px 8px",
                        "&:hover": {
                          color: "var(--icon-color)",
                          cursor: "pointer",
                          backgroundColor: "var(--bg-dot)",
                          borderRadius: "6px",
                        },
                      }}
                    >
                      Source Code
                    </Typography>
                  </Link>
                </CardActions>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
