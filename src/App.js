import Sidebar from "components/shared/Sidebar";
import Navbar from "components/shared/Navbar";
import Resume from "pages/resume/Resume";
import Contact from "pages/contact/Contact";
import {
  Container,
  Grid,
  Box,
  ThemeProvider,
  createTheme,
} from "@basetoolkit/ui";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "components/shared/Footer";
import Home from "pages/home/Home";
import Portfolio from "pages/portfolio/Portfolio";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#217bd4",
    },
    primary: {
      main: "#ffc500",
    },
    error: {
      main: "red",
    },
  },
});

function App() {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} lg={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={9} lg={9}>
            <BrowserRouter>
              <Navbar />
              <Box
                style={{
                  backgroundColor: "var(--bg-primary)",
                  margin: "10px 0",
                  borderRadius: "6px",
                  boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.13)",
                }}
              >
                <Routes>
                  <Route path="/lubna-portfolio" exact element={<Home />} />
                  <Route
                    path="/lubna-portfolio/resume"
                    exact
                    element={<Resume />}
                  />
                  <Route
                    path="/lubna-portfolio/contact"
                    exact
                    element={<Contact />}
                  />
                  <Route
                    path="/lubna-portfolio/portfolio"
                    exact
                    element={<Portfolio />}
                  />
                </Routes>
              </Box>
            </BrowserRouter>
            <Footer />
          </Grid>
        </Grid>
      </ThemeProvider>
    </Container>
  );
}

export default App;
