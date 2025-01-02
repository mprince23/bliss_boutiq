import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Collapse,
  ListItemButton,
  ListItem,
  Drawer,
  List,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../assets/images/header/Asset 2@4x.png";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink, useNavigate } from "react-router-dom";
import {
  fullMegamenu1,
  fullMegamenu2,
  fullMegamenu3,
  fullMegamenu4,
  fullMegamenu5,
  fullMegamenu6,
  fullMegamenu7,
  fullMegamenu8,
} from "../../../Megamenus";
const Header = () => {
  const drawerWidth = 300;
  const drawerWidth2 = 370;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState();
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileSubMenuOpen();
  };

  const menuItems = [
    {
      label: "New Arrivals",
      to: "/",
      subMenu: null,
    },
    {
      label: "Men",
      to: "/product",
      subMenu: fullMegamenu1,
    },
    { label: "Women ", to: "/product", subMenu: null },
    {
      label: "Kids",
      to: "/product",
      subMenu: fullMegamenu2,
    },
    {
      label: "Shoes & Accessories",
      to: "/",
      subMenu: fullMegamenu3,
    },
    { label: "Underwear", to: "/", subMenu: fullMegamenu4 },
    { label: "Pre-owned", to: "/", subMenu: fullMegamenu7 },
    { label: "Sale", to: "/", subMenu: fullMegamenu6 },
    { label: "About Bliss Boutiq", to: "/", subMenu: fullMegamenu8 },
  ];

  const handleSubMenuToggle = (index) => {
    setMobileSubMenuOpen((prevIndex) => (prevIndex === index ? null : index)); // Toggle submenu
  };

  const drawer = (
    <Box>
      <Typography
        sx={{
          mt: 2,
          px: "16px",
          textAlign: "end",
        }}
      >
        <Box>
          <CloseIcon onClick={handleDrawerToggle} />
        </Box>
      </Typography>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <Box sx={{ width: "100%" }}>
                <NavLink
                  to={item.to}
                  style={{ color: "unset" }}
                  onClick={
                    item.subMenu === null
                      ? () => setMobileMenuOpen(!mobileMenuOpen)
                      : null
                  }
                >
                  <Box
                    onClick={() => handleSubMenuToggle(index)}
                    sx={{
                      width: "100%",
                      color: "black",
                      display: "flex !important",
                      justifyContent: "space-between",
                      alignItems: "center",
                      "&:hover": {
                        color: "black",
                      },
                    }}
                  >
                    <Box sx={{ fontWeight: "500" }}>{item.label}</Box>
                    <Box>
                      {item.subMenu === null ? "" : <KeyboardArrowDownIcon />}
                    </Box>
                  </Box>
                </NavLink>

                <Collapse
                  in={index == mobileSubMenuOpen}
                  timeout="auto"
                  unmountOnExit
                  sx={{
                    width: "100vw",
                    zIndex: "modal",
                    display: item.subMenu === null ? "none" : "block",
                  }}
                >
                  <Box
                    sx={{
                      pb: 2,
                    }}
                  >
                    <>
                      <Typography
                        key={index}
                        onClick={handleDrawerToggle}
                        sx={{
                          py: "1px",
                          display: "block",
                          textDecoration: "none",
                          fontSize: "15px",
                        }}
                      >
                        {item.subMenu}
                      </Typography>
                    </>
                  </Box>
                </Collapse>
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "white",
          boxShadow: "0 2px 48px 0 rgba(0,0,0,.08)",
        }}
      >
        <Toolbar>
          <Box sx={{ width: "100%", px: "30px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "space-between", sm: "unset" },
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                      mr: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: { xs: "77.5px" },
                        width: { md: "186px", xs: "120px" },
                        cursor: "pointer",
                        py:"10px",
                      }}
                      onClick={() => navigate("/")}
                    >
                      <img
                        src={logo}
                        alt="Logo"
                        style={{ objectFit: "contain"}}
                      />
                    </Box>
                  </Typography>
                </Box>

                <nav>
                  <Drawer
                    anchor="right"
                    variant="temporary"
                    open={mobileMenuOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                      keepMounted: true,
                    }}
                    sx={{
                      display: { xs: "block", xl: "none" },
                      "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: { xs: drawerWidth, sm: drawerWidth2 },
                      },
                    }}
                  >
                    {drawer}
                  </Drawer>
                </nav>
                <Box
                  sx={{
                    display: { xs: "none", xl: "flex" },
                    alignItems: "center",
                  }}
                >
                  {menuItems.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        color: "black",
                        margin: "10px 10px 0px",
                        pb: "10px",
                        position: "relative",
                        fontSize: "16px",
                        transition: "0.4s",
                        fontWeight: "600",
                        cursor: "pointer",
                        textWrap: "nowrap",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          bottom: "0",
                          left: "0%",
                          height: "2px",
                          width: "0%",
                          backgroundColor: "black",
                          transition: ".4s",
                        },

                        "&:hover": {
                          "&::before": {
                            width: "100%",
                          },
                          "& .subMenu": {
                            opacity: item.subMenu === null ? "0" : "1",
                            visibility:
                              item.subMenu === null ? "hidden" : "visible",
                          },
                        },
                      }}
                    >
                      <NavLink
                        className="lato"
                        to={item.to}
                        style={{ color: "unset" }}
                      >
                        {item.label}
                      </NavLink>
                      <Box
                        className="subMenu"
                        sx={{
                          transition: ".3s",
                          backgroundColor: "white",
                          position: "fixed",
                          top: "70px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "100%",
                          borderRadius: "8px",
                          color: "black",
                          p: "0px 10px 25px",
                          visibility: "hidden",
                          opacity: "0",
                          display: "flex",
                          justifyContent: "start",
                          textWrap: "wrap",
                          backgroundColor: "white",
                        }}
                      >
                        {item.subMenu}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box
                sx={{
                  color: "black",
                  display: { xs: "flex" },
                  alignItems: "center",
                  fontWeight: "600",
                  letterSpacing: "-0.7px",
                }}
              >
                <Box
                  className="lato"
                  onClick={() => navigate("/contact")}
                  sx={{
                    padding: "10px",
                    display: { xs: "none", xl: "block" },
                    transition: "0.4s",
                    borderRadius: "15px",
                    cursor: "pointer",

                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Support
                </Box>
                <Box
                  className="lato"
                  sx={{
                    padding: "10px",
                    transition: "0.4s",
                    display: { xs: "none", xl: "block" },
                    borderRadius: "15px",
                    textWrap: "nowrap",
                    cursor: "pointer",

                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  For Business
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    marginInline: { xl: "30px", xs: "10px" },
                  }}
                >
                  <Box sx={{ fontSize: "22px", cursor: "pointer" }}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Box>
                  <Box
                    sx={{
                      marginInline: "15px",
                      fontSize: "22px",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/cart")}
                  >
                    <i className="fa-solid fa-cart-shopping"></i>
                  </Box>
                  <Box
                    sx={{ fontSize: "22px", cursor: "pointer" }}
                    onClick={() => navigate("/profile")}
                  >
                    <i className="fa-regular fa-user"></i>
                  </Box>
                </Box>
                <Box
                  sx={{
                    flexGrow: 0,
                    display: { xs: "block", xl: "none" },
                  }}
                >
                  <IconButton
                    size="large"
                    aria-label="menu"
                    onClick={handleDrawerToggle}
                    sx={{ color: "black", fontSize: "3px" }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
