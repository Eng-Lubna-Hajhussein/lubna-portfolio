import Sidebar from "components/shared/Sidebar";
import Navbar from "components/shared/Navbar";
import Resume from "pages/resume/Resume";
import Contact from "pages/contact/Contact";
import { Container, Grid, Box } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "components/shared/Footer";
import Home from "pages/home/Home";
import Portfolio from "pages/portfolio/Portfolio";

function App() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3.5} lg={3}>
          <Sidebar />
        </Grid>
        <Grid item xs>
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
                <Route path="/lubna-portfolio" element={<Home/>} />
                <Route path="/lubna-portfolio/resume" element={<Resume />} />
                <Route path="/lubna-portfolio/contact" element={<Contact />} />
                <Route path="/lubna-portfolio/portfolio" element={<Portfolio/>} />
              </Routes>
            </Box>
          </BrowserRouter>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
