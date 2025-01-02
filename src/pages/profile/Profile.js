import React from "react";
import { Box, Container, Grid, useTheme } from "@mui/material";
import profileBackgroundImage from "../../assets/images/profile/profilebackground.webp";
import LogoutIcon from "@mui/icons-material/Logout";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const mainData = [
    {
      icon: <i className="fa-regular fa-user"></i>,
      title: "MY DATA",
      description: "Personal data, address and payment methods",
      navigate: "myData",
    },
    {
      icon: <WorkHistoryOutlinedIcon sx={{ fontSize: "90px" }} />,
      title: "ORDER HISTORY",
      description: "Review your past orders",
      navigate: "orderHistory",
    },
    {
      icon: <FavoriteBorderOutlinedIcon sx={{ fontSize: "90px" }} />,
      title: "MY WISHLIST",
      description: "Save your favorite items",
      navigate: "myWishilist",
    },
    {
      icon: <CardGiftcardOutlinedIcon sx={{ fontSize: "90px" }} />,
      title: "OFFERS AND PROMOCODES",
      description: "Join our loyalty program to receive discounts",
      navigate: "offer",
    },
  ];
  return (
    <>
      <Box py={"80px"} bgcolor={"bl##1d1d1d00"}>
        <Container maxWidth="xl">
          <Grid container justifyContent={"center"}>
            <Grid itex xs={12}>
              <Box
                className="lato"
                sx={{
                  color: theme.palette.black,
                  fontWeight: "900",
                  fontSize: "17px",
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  py: "15px",
                  cursor: "pointer",
                }}
              >
                <Box pb="5px">LOG OUT</Box>
                <Box>
                  <LogoutIcon
                    sx={{
                      color: theme.palette.textGray,
                      marginLeft: "5px",
                      fontSize: "20px",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  backgroundImage: `url(${profileBackgroundImage})`,
                  height: { md: "550px", xs: "500px" },
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Box
                    className="lato"
                    sx={{
                      fontSize: { md: "70px", xs: "40px" },
                      color: theme.palette.white,
                      fontWeight: "900",
                    }}
                  >
                    MY ACCOUNT
                  </Box>
                  <Box
                    className="lato"
                    sx={{
                      fontSize: { md: "25px", xs: "20px" },
                      color: theme.palette.white,
                      fontWeight: "900",
                      textAlign: "center",
                    }}
                  >
                    WELCOME HEET
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} xl={11}>
              <Box sx={{ width: "100%", mt: "-60px", zIndex: "3" }}>
                <Grid container>
                  {mainData.map((data, index) => (
                    <Grid
                      key={index}
                      item
                      xs={12}
                      sm={6}
                      md={3}
                      onClick={() => navigate(`/${data.navigate}`)}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "column",
                        mt: "20px",
                      }}
                    >
                      <Box
                        sx={{
                          height: "200px",
                          width: "200px",
                          borderRadius: "50%",
                          backgroundColor: "white",
                          outline: "6px solid white",
                          transition: ".4s",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          boxShadow:
                            "0 2px 4px 0 rgba(0, 0, 0, .2), 0 5px 13px 0 rgba(0, 0, 0, .19)",
                          "&:hover": { backgroundColor: "#CCCCCC" },
                          fontSize: "90px",
                          cursor: "pointer",
                        }}
                      >
                        {data.icon}
                      </Box>
                      <Box sx={{ mt: "15px" }}>
                        <Box
                          className="lato"
                          sx={{
                            fontWeight: "bold",
                            textAlign: "center",
                            width: "100%",
                          }}
                        >
                          {data.title}
                        </Box>
                        <Box
                          sx={{
                            color: theme.palette.textGray,
                            textAlign: "center",
                            mt: "10px",
                            width: "250px",
                          }}
                        >
                          {data.description}
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Profile;
