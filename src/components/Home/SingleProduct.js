import img6 from "../../assets/images/Home/SingleProduct/pro-6.webp";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import axiosInstance from "../../Instance";

function SingleProduct() {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [qty, setQty] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get(`/api/product/${id}`);
        setProductData(response.data);
      } catch (error) {
        console.error("Error fetching product data", error);
      }
    };

    fetchProduct();
  }, [id]);


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  const handleChange1 = (event) => {
    setQty(event.target.value);
  };

  if (!productData) {
    return <Typography>Loading...</Typography>;
  }
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
                  {productData.product_images.map((productImage, index) => (
                    <Grid item md={6} key={index}>
                      <img src={productImage} alt={productImage} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
            <Grid xs={12} sx={{ display: { xs: "block", md: "none" } }}>
              <Swiper
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
                {productData.product_images.map((productImage, index) => (
                  <SwiperSlide key={index}>
                    <Box sx={{ objectFit: "contain" }}>
                      <img
                        src={productImage}
                        alt="Product"
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "0",
                        }}
                      />
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
                        {productData?.category}
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
                        {productData?.sub_category}
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
                        {productData?.title}
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
                      {productData?.brand}
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
                    {productData?.title}
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
                    ₹ {parseFloat(productData?.price.discounted_price).toFixed(2)}
                    <Typography
                      component="span"
                      sx={{
                        fontSize: "14px",
                        color: theme.palette.textGray,
                        padding: "0px 0px 0px 5px",
                        fontWeight: "400",
                      }}
                    >
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
                    {/* Iterate through size_options array and display each size dynamically */}
                    {productData?.size_options?.map((option, index) => (
                      <Box
                        key={index}
                        sx={{
                          border: "1px solid #cccccc",
                          display: "inline-flex",
                          flexWrap: "wrap",
                          padding: { md: "20px 30px", xs: "15px 32px" },
                          margin: "0px 10px 10px 0px",
                          fontSize: "13px",
                          fontWeight: "600",
                          transition: "0.3s",
                          color: option.stock > 0 ? "black" : "#721c24",
                          "&:hover": {
                            border: "1px solid #000000",
                          },
                          justifyContent: "center",
                          width: "calc(50% - 10px)",
                        }}
                      >
                        {/* Display the size */}
                        {option.size} ({option.stock} in stock)
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box mt={5} display={{ md: "flex", xs: "block" }}>
                  <FormControl sx={{ width: "250px" }}>
                    <InputLabel>Qty</InputLabel>
                    <Select value={qty} label="Qty" onChange={handleChange1}>
                      {[1, 2, 3, 4, 5, 6].map((quantity) => (
                        <MenuItem key={quantity} value={quantity}>
                          {quantity}
                        </MenuItem>
                      ))}
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
                <Box mt={3} bgcolor={theme.palette.liteGrayBack} display={"flex"} justifyContent={"space-between"} sx={{ padding: "5px" }}>
                  <Typography sx={{ fontSize: "16px", fontWeight: "bold", display: "flex", alignItems: "center", }} >
                    MAKE YOUR LOOK PERFECT
                  </Typography>
                  <Typography display={"flex"}>
                    <Box sx={{ width: "32px", height: "52px", margin: "0px 0px 0px 16px", display: "flex", alignItems: "center", }}>
                      <img
                        src={productData?.product_images[0]}
                        alt="Product Image"
                      />
                    </Box>
                  </Typography>
                </Box>

                <Box mt={3}>
                  <Accordion sx={{ fontWeight: "bold", fontSize: "16px", boxShadow: 'none' }} expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                    <AccordionSummary sx={{ px: 0 }} expandIcon={<ExpandMoreIcon />}>DETAILS</AccordionSummary>
                    <AccordionDetails>
                      <Typography className="lato" >{productData?.description}</Typography>
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
                      {productData?.instruction?.map((instruction, index) => (
                        <Typography
                          key={index}
                          sx={{ paddingTop: index === 0 ? "20px" : "5px", fontSize: "16px" }}
                        >
                          {instruction}
                        </Typography>
                      ))}
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
                      {productData?.other_info}
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
