import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQueryMatch,
  SvgIcon,
  Avatar,
} from "@basetoolkit/ui";
import { Link, NavLink } from "react-router-dom";
import resumeData from "utils/resumeData";
import CustomeButton from "components/sharedUI/button/CustomeButton";

const Navbar = () => {
  const theme = useTheme();
  const isExtraSmallAndDown = useMediaQueryMatch(theme.breakpoints.down("xs"));
  const pages = ["resume", "portfolio", "contact"];
  const { socials } = resumeData;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }} className="container-shadow">
      <AppBar
        position="static"
        borderRadius={2}
        px={0}
        mx={0}
        style={{ overflow: "hidden" }}
      >
        <Toolbar style={{ padding: 0 }} bgcolor="white">
          {/* Homepage Icon */}
          <Box sx={{ mr: 2 }}>
            <NavLink to="/lubna-portfolio">
              <IconButton
                style={{
                  backgroundColor: "var(--bg-dot)",
                  height: "100px",
                  width: "70px",
                  fontSize: "20.5px",
                  borderRadius: 0,
                }}
              >
                <SvgIcon icon="home" variant="filled" color="black" />
              </IconButton>
            </NavLink>
          </Box>

          {/* Pages */}
          <Box
            sx={{
              flexGrow: 5,
              // display: { xs: "none", md: "flex" },
              fontFamily: "'Heebo', sans-serif",
            }}
            display={isExtraSmallAndDown ? "none" : "flex"}
          >
            {pages.map((page, index) => (
              <NavLink
                to={`/lubna-portfolio/${page}`}
                className={"header-link"}
                key={index}
                style={{ fontSize: "12.5px", marginLeft: "20px" }}
              >
                {page}
              </NavLink>
            ))}
          </Box>

          <Box flexGrow={isExtraSmallAndDown ? 12 : 5} />
          {/* Icons */}
          {Object.keys(socials).map((key, index) => (
            <a
              href={socials[key].link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--icon-color)",
                marginRight: 10,
                marginLeft: 10,
              }}
            >
              <Avatar
                bgcolor="white"
                variant="rounded"
                aria-label="recipe"
                boxShadow={3}
                sx={{
                  p: "5px",
                }}
              >
                {socials[key]?.img}
              </Avatar>
            </a>
          ))}

          <Box sx={{ flexGrow: 0.5 }} />

          {/* Hire Me Button */}
          <Link
            to="mailto:hajhussein.lubna@gmail.com"
            style={{ textDecoration: "none" }}
          >
            <CustomeButton
              text="HIRE ME"
              icon={<SvgIcon icon="send" variant="filled" fontSize={14} />}
            />
          </Link>
          <Box sx={{ flexGrow: 0.5 }} />

          {/* Menu */}
          <IconButton
            size="large"
            aria-label="open drawer"
            sx={{ mr: 2, display: isExtraSmallAndDown ? "flex" : "none" }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <SvgIcon icon="menu" color="black" />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            style={{ marginTop: 15 }}
          >
            {pages.map((page, index) => (
              <NavLink
                to={`/lubna-portfolio/${page}`}
                className={"header-link"}
                style={{
                  fontSize: "12.5px",
                  margin: "20px 0 20px 0",
                }}
                key={index}
                onClick={handleClose}
              >
                <MenuItem style={{ display: "flex", flexDirection: "column" }}>
                  {page}
                </MenuItem>
              </NavLink>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
