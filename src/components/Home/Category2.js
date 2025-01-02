import React from "react";
import { Box, Container, Grid, ListItemIcon, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import category2Img1 from "../../assets/images/Home/category2/categoryImg1.png";
import category2Img2 from "../../assets/images/Home/category2/categoryImg2.png";
import category2Img3 from "../../assets/images/Home/category2/categoryImg3.png";
import category2Img4 from "../../assets/images/Home/category2/categoryImg4.png";
import category2Img5 from "../../assets/images/Home/category2/categoryImg5.png";
import category2Img6 from "../../assets/images/Home/category2/categoryImg6.png";
import category2Img7 from "../../assets/images/Home/category2/categoryImg7.png";

const Category2 = () => {
  const theme = useTheme();
  const categoryBox = [
    {
      img: category2Img1,
      title: "LASTING IMPRESSIONS",
      desc: "Stand out in special occasion ensembles that complement any event of the season.",
    },
    {
      img: category2Img2,
      title: "REFINED SUITS",
      desc: "",
    },
    {
      img: category2Img3,
      title: "AIRY SHIRTS",
      desc: "",
    },
    {
      img: category2Img4,
      title: "POLISH BLAZERS",
      desc: "",
    },
    {
      img: category2Img5,
      title: "TAILORED TROUSERS",
      desc: "",
    },
    {
      img: category2Img6,
      title: "DRESS SHOES",
      desc: "",
    },
    {
      img: category2Img7,
      title: "FINISHING TOUCHES",
      desc: "",
    },
  ];
  return (
    <>
      <Box sx={{my: "70px"}}>
        <Container maxWidth="xl">
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                fontSize: { xs: "45px", md: "54px" },
                width: { xs: "260px", sm: "600px" },
                my: { xs: "60px", sm: "40px" },
              }}
              fontWeight={"800"}
              className="lato"
            >
              CELEBRATE IN STYLE
            </Box>
            <Box className="category2">
              <Grid container>
                <Swiper
                  navigation={{
                    nextEl: `.category2-next`,
                    prevEl: `.category2-prev`,
                  }}
                  spaceBetween={20}
                  slidesPerView={4}
                  modules={[Navigation]}
                  className="mySwiper"
                  loop={false}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    480: {
                      slidesPerView: 2,
                    },
                    900: {
                      slidesPerView: 3,
                    },
                    1300: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  {categoryBox.map((item) => (
                    <SwiperSlide key={item.title}>
                      <Box sx={{ position: "relative" }}>
                        <Box
                          sx={{
                            position: "relative",
                            height: { sm: "585px", xs: "auto" },
                          }}
                        >
                          <img
                            src={item.img}
                            alt=""
                            style={{ height: "100% !important" }}
                          />
                          <Box
                            sx={{
                              position: "absolute",
                              bottom: {sm:"0px",xs: "4px"},
                              left: 0,
                              right: 0,
                              height: "50%",
                              background:
                                "linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))",
                            }}
                          ></Box>
                        </Box>
                        <Box
                          sx={{
                            padding: { xs: "10px", sm: "35px" },
                            position: "absolute",
                            bottom: "0px",
                          }}
                        >
                          <Box
                            className="lato"
                            sx={{
                              color: theme.palette.common.white,
                              fontSize: { xs: "25px", sm: "32px" },
                              mb: { xs: "10px", sm: "20px" },
                              width: "130px",
                              fontWeight: "800",
                              letterSpacing: "1.5px",
                            }}
                          >
                            {item.title}
                          </Box>
                          <Box
                            sx={{
                              color: theme.palette.common.white,
                              fontSize: "14px",
                              lineHeight: "1.6",
                              letterSpacing: "0.8px",
                            }}
                          >
                            {item.desc}
                          </Box>
                        </Box>
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button
                  className="category2-prev"
                  style={{
                    padding: "16px 18px",
                    backgroundColor: "black",
                    border: "none",
                  }}
                >
                  <i
                    className="fa-solid fa-arrow-left-long"
                    style={{
                      fontSize: "20px",
                      color: theme.palette.common.white,
                    }}
                  ></i>
                </button>
                <button
                  className="category2-next"
                  style={{
                    padding: "16px 18px",
                    backgroundColor: "black",
                    border: "none",
                  }}
                >
                  <i
                    className="fa-solid fa-arrow-right-long"
                    style={{
                      fontSize: "20px",
                      color: theme.palette.common.white,
                    }}
                  ></i>
                </button>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Category2;
