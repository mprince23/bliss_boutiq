import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import handPickedImg1 from "../../assets/images/Home/handPickedForYou/handpicked1.png";
import handPickedImg2 from "../../assets/images/Home/handPickedForYou/handpicked2.png";
import handPickedImg3 from "../../assets/images/Home/handPickedForYou/handpicked3.png";
import handPickedImg4 from "../../assets/images/Home/handPickedForYou/handpicked4.png";
import handPickedImg5 from "../../assets/images/Home/handPickedForYou/handpicked5.png";
import handPickedImg6 from "../../assets/images/Home/handPickedForYou/handpicked6.png";
import handPickedImg7 from "../../assets/images/Home/handPickedForYou/handpicked7.png";
import handPickedImg8 from "../../assets/images/Home/handPickedForYou/handpicked8.png";
import handPickedImg9 from "../../assets/images/Home/handPickedForYou/handpicked9.png";
import handPickedImg10 from "../../assets/images/Home/handPickedForYou/handpicked10.png";
import handPickedImg11 from "../../assets/images/Home/handPickedForYou/handpicked11.png";
import handPickedImg12 from "../../assets/images/Home/handPickedForYou/handpicked12.png";
import handPickedImg13 from "../../assets/images/Home/handPickedForYou/handpicked13.png";
import handPickedImg14 from "../../assets/images/Home/handPickedForYou/handpicked14.png";
import handPickedImg15 from "../../assets/images/Home/handPickedForYou/handpicked15.png";

const HandPickedForYou = () => {
  const theme = useTheme();
  const categoryBox = [
    {
      img: handPickedImg1,
      title: "SLIM-FIT SHIRT IN EASY-IRON COTTON-BLEND POPLIN",
      price: "₹ 11.400,00",
    },
    {
      img: handPickedImg2,
      title: "SUEDE LOAFERS WITH LIGHTWEIGHT OUTSOLE",
      price: "₹ 18.900,00",
    },
    {
      img: handPickedImg3,
      title: "SLIM-FIT SHIRT IN EASY-IRON COTTON-BLEND POPLIN",
      price: "₹ 11.400,00",
    },
    {
      img: handPickedImg4,
      title: "POLISH SHOES",
      price: "₹ 18.900,00",
    },
    {
      img: handPickedImg5,
      title: "SLIM-FIT SHIRT IN EASY-IRON COTTON-BLEND POPLIN",
      price: "₹ 11.400,00",
    },
    {
      img: handPickedImg6,
      title: "SLIM-FIT SHIRT IN EASY-IRON COTTON-BLEND POPLIN",
      price: "₹ 11.400,00",
    },
    {
      img: handPickedImg7,
      title: "SLIM-FIT SHIRT IN EASY-IRON COTTON-BLEND POPLIN",
      price: "₹ 11.400,00",
    },
    {
      img: handPickedImg8,
      title: "SLIM-FIT SHIRT IN EASY-IRON COTTON-BLEND POPLIN",
      price: "₹ 11.400,00",
    },
    {
      img: handPickedImg9,
      title: "FINISHING TOUCHES",
      price: "₹ 11.400,00",
    },
    {
      img: handPickedImg10,
      title: "FINISHING TOUCHES",
      price: "₹ 11.400,00",
    },
    {
      img: handPickedImg11,
      title: "FINISHING TOUCHES",
      price: "₹ 11.400,00",
    },
    {
      img: handPickedImg12,
      title: "FINISHING TOUCHES",
      price: "₹ 11.400,00",
    },
    {
      img: handPickedImg13,
      title: "FINISHING TOUCHES",
      price: "₹ 11.400,00",
    },
    {
      img: handPickedImg14,
      title: "FINISHING TOUCHES",
      price: "₹ 11.400,00",
    },
    {
      img: handPickedImg15,
      title: "FINISHING TOUCHES",
      price: "₹ 11.400,00",
    },
  ];
  return (
    <>
      <Box sx={{ my: "70px" }}>
        <Container maxWidth="xl">
          <Box className="handpicked">
            <Box
              sx={{
                fontSize: { xs: "35px", md: "44px" },
                my: { sm: "40px", xs: "30px" },
                textAlign: "center",
              }}
              fontWeight={"800"}
              className="lato"
            >
              HAND-PICKED FOR YOU
            </Box>
            <Box>
              <Grid container sx={{ position: "relative" }}>
                <Swiper
                  navigation={{
                    nextEl: `.handpicked-next`,
                    prevEl: `.handpicked-prev`,
                  }}
                  spaceBetween={20}
                  slidesPerView={5}
                  modules={[Navigation, Pagination]}
                  className="mySwiper"
                  loop={false}
                  pagination={{
                    clickable: true,
                    renderBullet: (bulletIndex, className) => {
                      return `<span className="${className} custom-dot"><span className="dash"></span></span>`;
                    },
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                    },
                    810: {
                      slidesPerView: 3,
                    },
                    1100: {
                      slidesPerView: 4,
                    },
                    1220: {
                      slidesPerView: 5,
                    },
                  }}
                >
                  {categoryBox.map((item, index) => (
                    <SwiperSlide key={index}>
                      <Box
                        sx={{
                          position: "relative",
                          pb: "40px",
                          cursor: "pointer",
                        }}
                      >
                        <Box
                          sx={{
                            position: "relative",
                            height: { xs: "auto", sm: "380px" },
                          }}
                        >
                          <img
                            src={item.img}
                            alt=""
                            style={{ height: "100% !important" }}
                          />
                         
                        </Box>

                        <Box
                          sx={{
                            fontWeight: "700",
                            my: "10px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            fontSize: "16px",
                          }}
                        >
                          {item.title}
                        </Box>
                        <Box sx={{ fontWeight: "500" }}>{item.price}</Box>
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button
                  className="handpicked-prev"
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
                  className="handpicked-next"
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

export default HandPickedForYou;
