// import React, { useRef, useState } from "react";
// import productImg1 from "../../assets/images/Home/Listing/productImg1.png";
// import productImg2 from "../../assets/images/Home/Listing/productImg2.png";
// import productImg3 from "../../assets/images/Home/Listing/productImg3.png";
// import productImg4 from "../../assets/images/Home/Listing/productImg4.png";
// import {
//   Box,
//   Container,
//   Grid,
//   Radio,
//   RadioGroup,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade, Navigation, Pagination } from "swiper/modules";
// import "../../../node_modules/swiper/swiper-bundle.min.css";
// import StarIcon from "@mui/icons-material/Star";
// import { useNavigate } from "react-router-dom";

// const ProductListing = () => {
//   // const swiperRefs = [useRef(null)];
//   const theme = useTheme();
//   const navigate = useNavigate();
//   const [selectedColor, setSelectedColor] = useState("");

//   const handleColorChange = (event) => {
//     setSelectedColor(event.target.value);
//   };

//   // const handleNext = (index) => {
//   //   if (swiperRefs[index].current && swiperRefs[index].current.swiper) {
//   //     swiperRefs[index].current.swiper.slideNext();
//   //   }
//   // };

//   // const handlePrev = (index) => {
//   //   if (swiperRefs[index].current && swiperRefs[index].current.swiper) {
//   //     swiperRefs[index].current.swiper.slidePrev();
//   //   }
//   // };

//   const singleProductImg = [productImg1, productImg2, productImg3, productImg4];
//   const colors = [
//     { value: "#D3B7A2", label: "Red" },
//     { value: "#000", label: "Green" },
//     { value: "#EBE6EC", label: "Blue" },
//     { value: "#BF7F7F", label: "Yellow" },
//   ];

//   return (
//     <>
//       <Box>
//         <Container maxWidth="xl">
//           <Box className="Listing" onClick={() => navigate("/singleProduct")}>
//             <Grid container spacing={3}>
//               {[0, 1, 2,3,4,5,6].map((index) => (
//                 <Grid item xs={12} sm={6} md={4} key={index}>
//                   <Box className="product-container">
//                     <Box sx={{ position: "relative" }}>
//                       <Swiper
//                         // ref={swiperRefs[index]}
//                         fadeEffect={{ crossFade: true }}
//                         effect={"fade"}
//                         navigation={{
//                           nextEl: `.swiper-button-next-${index}`,
//                           prevEl: `.swiper-button-prev-${index}`,
//                         }}
//                         modules={[EffectFade, Navigation, Pagination]}
//                         // className="mySwiper"
//                         loop={false}
//                         pagination={{
//                           clickable: true,
//                           renderBullet: (bulletIndex, className) => {
//                             return `<span class="${className} custom-dot"><span class="dash"></span></span>`;
//                           },
//                         }}
//                       >
//                         {singleProductImg.map((item, imgIndex) => (
//                           <SwiperSlide key={imgIndex}>
//                             <Box>
//                               <Box sx={{ objectFit: "contain" }}>
//                                 <img
//                                   src={item}
//                                   alt="Product"
//                                   style={{
//                                     width: "100%",
//                                     height: "auto",
//                                     borderRadius: "0",
//                                   }}
//                                 />
//                               </Box>
//                             </Box>
//                           </SwiperSlide>
//                         ))}
//                       </Swiper>
//                       <button className="best-seller-button">
//                         Best Seller
//                       </button>
//                       <button
//                         className={`ListingSlider-prev navigation-button swiper-button-prev-${index}`}
//                         // onClick={() => handlePrev(index)}
//                       >
//                         <i className="fa-solid fa-chevron-left"></i>
//                       </button>
//                       <button
//                         className={`ListingSlider-next navigation-button swiper-button-next-${index}`}
//                         // onClick={() => handleNext(index)}
//                       >
//                         <i className="fa-solid fa-chevron-right"></i>
//                       </button>
//                     </Box>
//                   </Box>
//                   <Box
//                     sx={{
//                       fontSize: "13px",
//                       my: "10px",
//                       cursor: "pointer",
//                       display: "inline-block",
//                       color: theme.palette.textGray,
//                       "&:hover": {
//                         color: theme.palette.common.black,
//                         fontWeight: "500",
//                         textDecoration: "underline",
//                       },
//                     }}
//                   >
//                     Solid Tonal Medium Swim Shorts
//                   </Box>
//                   <Box sx={{ fontSize: "14px" }}>
//                     <del style={{ color: theme.palette.textGray }}>$65.00</del>
//                     <Typography
//                       component={"span"}
//                       sx={{ mx: "6px", fontSize: "15px" }}
//                     >
//                       $52.30
//                     </Typography>
//                     <Typography
//                       component={"span"}
//                       sx={{ color: theme.palette.textGray, fontSize: "15px" }}
//                     >
//                       20% off
//                     </Typography>
//                   </Box>
//                   <Box sx={{ mt: "10px" }}>
//                     <RadioGroup
//                       row
//                       value={selectedColor}
//                       onChange={handleColorChange}
//                       aria-label="color selection"
//                       name="color-selection"
//                     >
//                       {colors.map((color, colorIndex) => (
//                         <Radio
//                           key={colorIndex}
//                           className="radioBtn"
//                           value={color.value}
//                           checked={selectedColor === color.value}
//                           style={{
//                             color: color.value,
//                             padding: "0",
//                             marginRight: "10px",
//                             // backgroundColor: color.value,
//                           }}
//                         />
//                       ))}
//                     </RadioGroup>
//                   </Box>
//                   <Box sx={{ mt: "6px" }}>
//                     <Typography component={"span"} sx={{ mx: "1px" }}>
//                       <StarIcon fontSize="16px" />
//                     </Typography>
//                     <Typography component={"span"} sx={{ mx: "1px" }}>
//                       <StarIcon fontSize="16px" />
//                     </Typography>
//                     <Typography component={"span"} sx={{ mx: "1px" }}>
//                       <StarIcon fontSize="16px" />
//                     </Typography>
//                     <Typography component={"span"} sx={{ mx: "1px" }}>
//                       <StarIcon fontSize="16px" />
//                     </Typography>
//                     <Typography component={"span"} sx={{ mx: "1px" }}>
//                       <StarIcon fontSize="16px" />
//                     </Typography>
//                   </Box>
//                 </Grid>
//               ))}
//             </Grid>
//           </Box>
//         </Container>
//       </Box>
//     </>
//   );
// };

// export default ProductListing;

import React, { useState } from "react";
import productImg1 from "../../assets/images/Home/Listing/productImg1.png";
import productImg2 from "../../assets/images/Home/Listing/productImg2.png";
import productImg3 from "../../assets/images/Home/Listing/productImg3.png";
import productImg4 from "../../assets/images/Home/Listing/productImg4.png";
import {
  Box,
  Container,
  Grid,
  Radio,
  RadioGroup,
  Typography,
  useTheme,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

const ProductListing = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const singleProductImg = [productImg1, productImg2, productImg3, productImg4];
  const colors = [
    { value: "#D3B7A2", label: "Red" },
    { value: "#000", label: "Green" },
    { value: "#EBE6EC", label: "Blue" },
    { value: "#BF7F7F", label: "Yellow" },
  ];

  const handleNavigationButtonClick = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <Box className="Listing" onClick={() => navigate("/singleProduct")}>
            <Grid container spacing={3}>
              {[0, 1, 2].map((index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box className="product-container">
                    <Box sx={{ position: "relative" }}>
                      <Swiper
                        fadeEffect={{ crossFade: true }}
                        effect={"fade"}
                        navigation={{
                          nextEl: `.swiper-button-next-${index}`,
                          prevEl: `.swiper-button-prev-${index}`,
                        }}
                        modules={[EffectFade, Navigation, Pagination]}
                        loop={true}
                        pagination={{
                          clickable: true,
                          renderBullet: (bulletIndex, className) => {
                            return `<span class="${className} custom-dot"><span class="dash"></span></span>`;
                          },
                        }}
                      >
                        {singleProductImg.map((item, imgIndex) => (
                          <SwiperSlide key={imgIndex}>
                            <Box>
                              <Box sx={{ objectFit: "contain" }}>
                                <img
                                  src={item}
                                  alt="Product"
                                  style={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: "0",
                                  }}
                                />
                              </Box>
                            </Box>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      <button className="best-seller-button">
                        Best Seller
                      </button>
                      <button
                        className={`ListingSlider-prev navigation-button swiper-button-prev-${index}`}
                        onClick={(event) => {
                          handleNavigationButtonClick(event);
                        }}
                      >
                        <i className="fa-solid fa-chevron-left"></i>
                      </button>
                      <button
                        className={`ListingSlider-next navigation-button swiper-button-next-${index}`}
                        onClick={(event) => {
                          handleNavigationButtonClick(event);
                        }}
                      >
                        <i className="fa-solid fa-chevron-right"></i>
                      </button>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      fontSize: "13px",
                      my: "10px",
                      cursor: "pointer",
                      display: "inline-block",
                      color: theme.palette.textGray,
                      "&:hover": {
                        color: theme.palette.common.black,
                        fontWeight: "500",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Solid Tonal Medium Swim Shorts
                  </Box>
                  <Box sx={{ fontSize: "14px" }}>
                    <del style={{ color: theme.palette.textGray }}>$65.00</del>
                    <Typography
                      component={"span"}
                      sx={{ mx: "6px", fontSize: "15px" }}
                    >
                      $52.30
                    </Typography>
                    <Typography
                      component={"span"}
                      sx={{ color: theme.palette.textGray, fontSize: "15px" }}
                    >
                      20% off
                    </Typography>
                  </Box>
                  <Box sx={{ mt: "10px" }}>
                    <RadioGroup
                      row
                      value={selectedColor}
                      onChange={handleColorChange}
                      aria-label="color selection"
                      name="color-selection"
                    >
                      {colors.map((color, colorIndex) => (
                        <Radio
                          key={colorIndex}
                          className="radioBtn"
                          value={color.value}
                          checked={selectedColor === color.value}
                          style={{
                            color: color.value,
                            padding: "0",
                            marginRight: "10px",
                          }}
                        />
                      ))}
                    </RadioGroup>
                  </Box>
                  <Box sx={{ mt: "6px" }}>
                    <Typography component={"span"} sx={{ mx: "1px" }}>
                      <StarIcon fontSize="16px" />
                    </Typography>
                    <Typography component={"span"} sx={{ mx: "1px" }}>
                      <StarIcon fontSize="16px" />
                    </Typography>
                    <Typography component={"span"} sx={{ mx: "1px" }}>
                      <StarIcon fontSize="16px" />
                    </Typography>
                    <Typography component={"span"} sx={{ mx: "1px" }}>
                      <StarIcon fontSize="16px" />
                    </Typography>
                    <Typography component={"span"} sx={{ mx: "1px" }}>
                      <StarIcon fontSize="16px" />
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ProductListing;
