import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import React, { useRef, useState } from "react";
import img1 from "../../assets/images/Home/SingleProduct/pro-1.webp";
import img2 from "../../assets/images/Home/SingleProduct/pro-2.webp";
import img3 from "../../assets/images/Home/SingleProduct/pro-3.webp";
import img4 from "../../assets/images/Home/SingleProduct/pro-4.webp";
import img5 from "../../assets/images/Home/SingleProduct/pro-5.webp";
import img6 from "../../assets/images/Home/SingleProduct/pro-6.webp";
import mini1 from "../../assets/images/Home/SingleProduct/miniImg-1.jpg";
import mini2 from "../../assets/images/Home/SingleProduct/miniImg-2.jpg";
import mini3 from "../../assets/images/Home/SingleProduct/miniImg-3.jpg";
import mini4 from "../../assets/images/Home/SingleProduct/miniImg-4.jpg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function SingleProduct() {
  const swiperRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const theme = useTheme();
  const [qty, setQty] = useState("");

  const handleChange1 = (event) => {
    setQty(event.target.value);
  };

  const singleProductImg = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
  ];
  return (
    <>
      <Box my={5}>
        <Box className="List">
          <Grid container sx={{ height: { md: "1250px", xs: "100%" } }}>
            <Grid
              item
              md={7}
              sx={{
                height: "100%",
                overflow: "auto",
                display: { xs: "none", md: "block" },
              }}
            >
              <Box>
                <Grid container>
                  {singleProductImg.map((item, index) => (
                    <Grid item md={6} key={index}>
                      <img src={item.img} alt={item.img} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
            <Grid xs={12} sx={{ display: { xs: "block", md: "none" } }}>
              <Swiper
                ref={swiperRef}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                modules={[Pagination]}
                className="mySwiper"
                loop={true}
                pagination={{
                  clickable: true,
                  renderBullet: (index, className) => {
                    return `<span className="${className} custom-dot"><span className="dash"></span></span>`;
                  },
                }}
              >
                {singleProductImg.map((item,index) => (
                  <SwiperSlide key={index}>
                    <Box>
                      <Box sx={{ objectFit: "contain" }}>
                        <img
                          src={item.img}
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
            </Grid>
            <Grid item md={5} sx={{ height: { xs: "100%", md: "100vh" } }}>
              <Box
                sx={{
                  padding: {
                    md: "35px 74px 20px",
                    xs: "25px 34px 10px",
                  },
                }}
              >
                <Box
                  display={{ lg: "flex", md: "block", xs: "none" }}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Box display={"flex"}>
                    <Box>
                      <Typography
                        component="a"
                        sx={{
                          cursor: "pointer",
                          padding: "0px 0px 2px 0px",
                          borderBottom: "1px solid black",
                          fontSize: "14px",
                        }}
                      >
                        Men
                      </Typography>
                      <Typography component="span" sx={{ padding: "0px 10px" }}>
                        /
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        component="a"
                        sx={{
                          cursor: "pointer",
                          padding: "0px 0px 2px 0px",
                          borderBottom: "1px solid black",
                          fontSize: "14px",
                        }}
                      >
                        Clothing
                      </Typography>
                      <Typography component="span" sx={{ padding: "0px 10px" }}>
                        /
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        component="a"
                        sx={{
                          cursor: "pointer",
                          padding: "0px 0px 2px 0px",
                          borderBottom: "1px solid black",
                          fontSize: "14px",
                        }}
                      >
                        Shirts
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      variant="h3"
                      className="lato"
                      sx={{
                        fontWeight: "900",
                        fontSize: { lg: "45px", md: "30px" },
                        marginTop: { xl: "0px", md: "20px", lg: "0px" },
                      }}
                    >
                      BOSS
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    variant="h3"
                    className="lato"
                    sx={{
                      fontWeight: "800",
                      fontSize: { md: "26px", lg: "35px", xs: "22px" },
                      marginTop: { md: "32px", xs: "0px" },
                    }}
                  >
                    SLIM-FIT DRESS SHIRT IN EASY-IRON STRETCH COTTON
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "18px",
                      fontWeight: "700",
                      marginTop: "22px",
                    }}
                  >
                    ₹ 10.300,00
                    <Typography
                      component="span"
                      sx={{
                        fontSize: "14px",
                        color: theme.palette.textGray,
                        padding: "0px 0px 0px 5px",
                        fontWeight: "400",
                      }}
                    >
                      {" "}
                      Price excl. VAT
                    </Typography>
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    className="lato"
                    sx={{
                      display: "inline-block",
                      fontSize: "14px",
                      fontWeight: "600",
                      marginTop: "22px",
                      backgroundColor: theme.palette.common.black,
                      color: theme.palette.common.white,
                      padding: "8px",
                    }}
                  >
                    SLIM FIT
                  </Typography>
                </Box>
                <Box display={{ md: "flex", xs: "none" }}>
                  <Box
                    sx={{
                      width: "76px",
                      height: "116px",
                      margin: "32px 15px 0px 15px",
                    }}
                    textAlign={"center"}
                  >
                    <img src={img6} alt="Product color 1" />
                    <Typography
                      sx={{
                        fontSize: "12px",
                        display: "inline-block",
                        borderBottom: "1px solid black",
                      }}
                    >
                      Black
                    </Typography>
                  </Box>
                  <Box
                    sx={{ width: "76px", height: "116px", marginTop: "32px" }}
                    textAlign={"center"}
                  >
                    <img src={img6} alt="Product color 2" />
                    <Typography
                      sx={{
                        fontSize: "12px",
                        display: "inline-block",
                        borderBottom: "1px solid black",
                      }}
                    >
                      Black
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ marginTop: { md: "55px", xs: "35px" } }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "13px",
                      color: theme.palette.textGray,
                    }}
                  >
                    <Typography variant="span">Select Size</Typography>
                    <Typography
                      variant="span"
                      sx={{ borderBottom: "1px solid black" }}
                    >
                      Find My Size
                    </Typography>
                  </Box>
                  <Box mt={2}>
                    <Box
                      sx={{
                        border: "1px solid #cccccc",
                        display: "inline-block",
                        padding: { md: "20px 64px", xs: "15px 32px" },
                        margin: "0px 10px 10px 0px",
                        fontSize: "13px",
                        fontWeight: "600",
                        transition: "0.3s",
                        "&:hover": {
                          border: "1px solid #000000",
                        },
                      }}
                    >
                      XS
                    </Box>
                    <Box
                      sx={{
                        border: "1px solid #cccccc",
                        display: "inline-block",
                        padding: { md: "20px 64px", xs: "15px 32px" },
                        margin: "0px 10px 10px 0px",
                        fontSize: "13px",
                        fontWeight: "600",
                        transition: "0.3s",
                        "&:hover": {
                          border: "1px solid #000000",
                        },
                      }}
                    >
                      XS
                    </Box>
                  </Box>
                </Box>
                <Box mt={5} display={{ md: "flex", xs: "block" }}>
                  <FormControl
                    sx={{
                      width: "250px",
                      padding: { xs: "12px 0px", md: "0px" },
                      margin: { xs: "0px 0px 0px 0px", md: "0px 10px 0px 0px" },
                    }}
                  >
                    <InputLabel>Qty</InputLabel>
                    <Select value={qty} label="Qty" onChange={handleChange1}>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={6}>6</MenuItem>
                    </Select>
                  </FormControl>
                  <button
                    className="lato"
                    style={{
                      width: "100%",
                      border: "none",
                      backgroundColor: theme.palette.common.black,
                      color: theme.palette.common.white,
                      fontSize: "16px",
                      fontWeight: "bold",
                      padding: "16px 0px 16px 0px",
                    }}
                  >
                    ADD TO CART
                  </button>
                </Box>
                <Box
                  mt={3}
                  bgcolor={theme.palette.liteGrayBack}
                  display={"flex"}
                  justifyContent={"space-between"}
                  sx={{ padding: "5px" }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    MAKE YOUR LOOK PERFECT
                  </Typography>
                  <Typography display={"flex"}>
                    <Box
                      sx={{
                        width: "32px",
                        height: "52px",
                        margin: "0px 0px 0px 16px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img src={mini2} alt={mini2} />
                    </Box>
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Accordion
                    sx={{ boxShadow: "none" }}
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                  >
                    <AccordionSummary
                      className="lato"
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                      sx={{
                        fontWeight: "bold",
                        borderBottom: "1px solid #CECECE",
                      }}
                    >
                      DETAILS
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        variant="p"
                        sx={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: theme.palette.textLightGray,
                        }}
                      >
                        STYLE H-HANK-TUX1-DC-224 - 50480093
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          paddingTop: "15px",
                        }}
                      >
                        ___ An elegant long-sleeved shirt by BOSS Menswear with
                        double cuffs. Treated with an easy-iron finish that
                        offers softness against the skin, this slim-fitting
                        shirt is crafted in Austrian-made stretch-cotton poplin
                        for natural comfort with a breathable feel. The white
                        colourway is created using an eco-friendly process that
                        delivers enhanced colour brilliance wash after wash.
                      </Typography>
                      <Typography
                        sx={{
                          paddingTop: "15px",
                        }}
                      >
                        Slim fit
                      </Typography>
                      <Typography>Kent collar</Typography>
                      <Typography>Double cuffs</Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    sx={{ boxShadow: "none" }}
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      className="lato"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "16px",
                        borderBottom: "1px solid #CECECE",
                      }}
                    >
                      MATERIAL INFORMATION & CARE INSTRUCTIONS
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="p">100% Cotton</Typography>
                      <Typography sx={{ paddingTop: "20px", fontSize: "16px" }}>
                        <i
                          style={{ padding: "0px 10px 0px 0px" }}
                          className="fa-solid fa-box"
                        ></i>
                        40°C coloured wash
                      </Typography>
                      <Typography sx={{ paddingTop: "5px", fontSize: "16px" }}>
                        <i
                          style={{ padding: "0px 10px 0px 0px" }}
                          className="fa-regular fa-circle-xmark"
                        ></i>
                        Do Not Bleach
                      </Typography>
                      <Typography sx={{ paddingTop: "5px", fontSize: "16px" }}>
                        <i
                          style={{ padding: "0px 10px 0px 0px" }}
                          className="fa-solid fa-rectangle-xmark"
                        ></i>
                        Do Not Tumble Dry{" "}
                      </Typography>
                      <Typography sx={{ paddingTop: "5px", fontSize: "16px" }}>
                        <i
                          style={{ padding: "0px 10px 0px 0px" }}
                          className="fa-solid fa-mask-ventilator"
                        ></i>
                        Iron Medium Heat{" "}
                      </Typography>
                      <Typography sx={{ paddingTop: "5px", fontSize: "16px" }}>
                        <i
                          style={{ padding: "0px 10px 0px 0px" }}
                          className="fa-solid fa-square-parking"
                        ></i>
                        Chemical dry cleaning P
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    sx={{ boxShadow: "none" }}
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      className="lato"
                      id="panel3-header"
                      sx={{
                        fontWeight: "bold",
                        borderBottom: "1px solid #CECECE",
                      }}
                    >
                      SIZE AND FIT
                    </AccordionSummary>
                    <AccordionDetails>
                      The model wears a size 40 and is 188 cm tall with a, 96 cm
                      chest, 83 cm waist and 94 cm hips.
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default SingleProduct;
