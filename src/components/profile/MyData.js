import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Tab,
  useTheme,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import EditIcon from "@mui/icons-material/Edit";
import diamond from "../../assets/images/profile/mydata/diamond.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import tShirt from "../../assets/images/profile/mydata/watchlist.webp";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Register_form from "../../pages/Registration_form/Register_form";
const MyData = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [address, setAddress] = useState(false);
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const formik = useFormik({
    initialValues: {
      salutation: "Mr.",
      firstName: "",
      lastName: "",
      street: "",
      address: "",
      phoneNumber: "",
      postCode: "",
      city: "",
    },
    validationSchema: Yup.object({
      salutation: Yup.string().required("Required"),
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      street: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      phoneNumber: Yup.string()
        .matches(/^\+?\d{10,}$/, "Invalid phone number")
        .required("Required"),
      postCode: Yup.string().matches(/^[1-9][0-9]{6}$/, "Invalid PIN code"),
    }),
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  const myData = (
    <Grid container>
      <Grid item xs={12} md={6} mt={{ xs: "0px", md: "0px" }}>
        <Box
          sx={{
            padding: { xl: "50px 50px", xs: "15px 25px" },
            height: "400px",
            backgroundColor: theme.palette.liteGrayBack,
            marginInline: { xl: "50px", md: "20px" },
          }}
        >
          <Box className="lato" sx={{ fontWeight: "900", mb: "30px" }}>
            MY DATA
          </Box>
          <Box sx={{ my: "15px" }}>
            <Box mb={"10px"}>Mr. Heet Timbadiya</Box>
            <Box mb={"10px"}>heettimbadiya750@gmail.com</Box>
            <Box mb={"10px"}>+918140724110</Box>
            <Box mb={"10px"}>81.40.7241</Box>
            <Box>Password:********</Box>
          </Box>
          <Box>Customer number : 1177885241</Box>
          <Box
            sx={{ mt: "35px", fontSize: "17px", fontWeight: "900",cursor:"pointer" }}
            className="lato"
            onClick={()=> setEdit(true)}
          >
            <EditIcon sx={{ fontSize: "17px" }} />
            EDIT
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} mt={{ xs: "50px", md: "0px" }}>
        <Box
          sx={{
            padding: { xl: "30px 50px", xs: "15px 25px" },
            height: "400px",
            backgroundColor: theme.palette.liteGrayBack,
            marginInline: { xl: "50px", md: "20px" },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ mx: "auto" }}>
            <img
              src={diamond}
              alt="diamond"
              style={{ height: "100px", width: "100px" }}
            />
          </Box>
          <Box sx={{ mt: "30px" }}>
            Congratulations! You are a HUGO BOSS EXPERIENCE member and can
            benefit from our exclusive services.
          </Box>
          <Box
            sx={{
              mt: "30px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <ArrowForwardIosIcon
              sx={{ fontSize: { xs: "16px", md: "unset" } }}
            />
            Discover more
          </Box>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box
          sx={{
            backgroundColor: theme.palette.liteGrayBack,
            margin: { xs: "50px 0", xl: "50px" },
          }}
        >
          <Box sx={{ padding: "30px 0" }}>
            <Box sx={{ padding: "0  50px" }}>
              <Box
                className="lato"
                sx={{ fontSize: "18px", fontWeight: "900" }}
              >
                INVOICE ADDRESS
              </Box>
              <Box sx={{ mt: "15px", pb: "50px" }}>
                Here you can change your current addresses or add new ones.
              </Box>
            </Box>
            <hr style={{ borderColor: "rgb(0 0 0 / 3%)" }} />
            <Box
              sx={{
                mt: "35px",
                fontSize: "17px",
                fontWeight: "900",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => setAddress(true)}
              className="lato"
            >
              + ADD ADDRESS
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );

  const orderHistory = (
    <Grid container>
      <Grid item xs={12}>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab
                  label="ONLINE"
                  value="1"
                  className="lato"
                  sx={{
                    color: theme.palette.black,
                    backgroundColor: theme.palette.liteGrayBack,
                    fontWeight: "900",
                    "&.Mui-selected": {
                      color: theme.palette.liteGrayBack,
                      backgroundColor: theme.palette.black,
                    },
                  }}
                />
                <Tab
                  label="RETAIL"
                  value="2"
                  className="lato"
                  sx={{
                    color: theme.palette.black,
                    backgroundColor: theme.palette.liteGrayBack,
                    fontWeight: "900",
                    "&.Mui-selected": {
                      color: theme.palette.liteGrayBack,
                      backgroundColor: theme.palette.black,
                    },
                  }}
                />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ color: theme.palette.textGray }}>
              Item One
            </TabPanel>
            <TabPanel value="2" sx={{ color: theme.palette.textGray }}>
              Item Two
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
    </Grid>
  );

  const myWishlist = (
    <Grid container>
      <Grid item xs={12}>
        <Box
          sx={{
            borderBottom: `1px solid ${theme.palette.textLightGray}}`,
          }}
        >
          <Box
            sx={{
              padding: "15px 30px",
              fontWeight: "800",
            }}
            className="lato"
          >
            ITEM
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box>
          <Grid
            container
            sx={{
              justifyContent: "space-between",
              mt: "30px",
              alignItems: { xs: "center", md: "unset" },
            }}
          >
            <Grid
              item
              md={2}
              sm={6}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ height: "200px", width: "150px" }}>
                <img src={tShirt} alt="" />
              </Box>
            </Grid>

            <Grid
              item
              md={4}
              sm={6}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                // alignItems: "center",
                flexDirection: "column",
                mt: { xs: "15px", sm: "unset" },
              }}
            >
              <Box>
                <Box sx={{ fontWeight: "600" }} className="fs-14">
                  TWO-PACK OF SLIM-FIT T-SHIRTS IN STRETCH COTTON
                </Box>
                <Box className="fs-12">Item No: hbeu50325440_001</Box>
                <Box>
                  <FormControl
                    sx={{
                      width: { xs: "100%", sm: "150px" },
                      mt: "20px",
                    }}
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      sx={{
                        color: "black",
                        "&.Mui-focused": {
                          color: "black",
                        },
                      }}
                    >
                      Age
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Age"
                      // onChange={handleChange}
                      sx={{
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "unset",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "black",
                        },
                      }}
                    >
                      <MenuItem value={10}>XS</MenuItem>
                      <MenuItem value={30}>S</MenuItem>
                      <MenuItem value={20}>M</MenuItem>
                      <MenuItem value={20}>L</MenuItem>
                      <MenuItem value={20}>XL</MenuItem>
                      <MenuItem value={20}>XXL</MenuItem>
                      <MenuItem value={20}>XXXL</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>

              <Box display={{ md: "none", xs: "block" }} mt={"15px"}>
                <Box className="fs-12">Unit Price:</Box>
                <Box
                  sx={{
                    display: "flex",
                    mt: "20px",
                    textWrap: "nowrap",
                  }}
                >
                  <Box
                    sx={{ fontWeight: "600", fontSize: "18px" }}
                    className="fs-14"
                  >
                    ₹ 4.750,00
                  </Box>
                  <Box className="fs-14" sx={{ marginLeft: "5px" }}>
                    Price excl. VAT
                  </Box>
                </Box>
              </Box>

              <Box display={{ md: "none", xs: "block" }} mt={"15px"}>
                <Button
                  variant="outlined"
                  sx={{
                    color: theme.palette.liteGrayBack,
                    backgroundColor: theme.palette.black,
                    fontWeight: "900",
                    padding: "12px 20px",
                    textWrap: "nowrap",
                    width: { xs: "100%", sm: "unset" },
                    "&:hover": {
                      color: theme.palette.liteGrayBack,
                      backgroundColor: theme.palette.black,
                      borderColor: theme.palette.black,
                    },
                  }}
                  className="lato"
                >
                  ADD TO CART
                </Button>
              </Box>
            </Grid>

            <Grid
              item
              md={3}
              sm={6}
              display={{ md: "block", xs: "none" }}
              xs={12}
            >
              <Box>
                <Box className="fs-12">Unit Price:</Box>
                <Box
                  sx={{
                    display: "flex",
                    mt: "20px",
                    textWrap: "nowrap",
                  }}
                >
                  <Box
                    sx={{ fontWeight: "600", fontSize: "18px" }}
                    className="fs-14"
                  >
                    ₹ 4.750,00
                  </Box>
                  <Box className="fs-14" sx={{ marginLeft: "5px" }}>
                    Price excl. VAT
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              md={2}
              sm={6}
              display={{ md: "block", xs: "none" }}
              xs={12}
            >
              <Box>
                <Button
                  variant="outlined"
                  sx={{
                    color: theme.palette.liteGrayBack,
                    backgroundColor: theme.palette.black,
                    fontWeight: "900",
                    padding: "12px 20px",
                    textWrap: "nowrap",
                    "&:hover": {
                      color: theme.palette.liteGrayBack,
                      backgroundColor: theme.palette.black,
                      borderColor: theme.palette.black,
                    },
                  }}
                  className="lato"
                >
                  ADD TO CART
                </Button>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                mt: "30px",
              }}
            >
              <Grid container>
                {" "}
                <Grid item xs={12} sm={8} className="fs-14">
                  Articles on your wishlist can unfortunately not be reserved
                  for you.
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  sx={{
                    fontSize: "17px",
                    color: theme.palette.textLightGray,
                    fontWeight: "600",
                    textDecoration: "underline",
                    cursor: "pointer",
                    mt: { xs: "15px", sm: "unset" },
                    textAlign: { sm: "right" },
                    letterSpacing: "-0.8px",
                  }}
                >
                  ADD ALL TO CART
                </Grid>{" "}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );

  const myDataAddress = (
      <Box>
        <Typography
          variant="h4"
          sx={{ mb: 2, fontWeight: "700" }}
          className="lato"
        >
          Add Address
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Please complete all fields marked with an *.
        </Typography>
        <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
          <FormControl
            sx={{
              width: "100% !important",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#99999",
                  borderRadius: "unset",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#000",
                },
              },
              "& label.Mui-focused": {
                color: "#000",
                fontSize: "16px",
                fontWeight: "500",
                backgroundColor: "white",
              },
              "& label": {
                color: "#000000, opacity 45.0%",
                fontSize: "16px",
                fontWeight: "500",
                padding: "0 5px",
              },
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Salutation</InputLabel>
                  <Select
                    name="salutation"
                    value={formik.values.salutation}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.salutation &&
                      Boolean(formik.errors.salutation)
                    }
                  >
                    <MenuItem value="Mr.">Mr.</MenuItem>
                    <MenuItem value="Ms.">Ms.</MenuItem>
                    <MenuItem value="Mrs.">Mrs.</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item mg={6}></Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="* First Name"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="* Last Name"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>

              <Grid item xs={12} mt={"50px"}>
                <TextField
                  fullWidth
                  label="* Street"
                  name="street"
                  value={formik.values.street}
                  onChange={formik.handleChange}
                  error={formik.touched.street && Boolean(formik.errors.street)}
                  helperText={formik.touched.street && formik.errors.street}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Addtional address details"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="Postcode"
                  name="postCode"
                  value={formik.values.postCode}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.postCode && Boolean(formik.errors.postCode)
                  }
                  helperText={formik.touched.postCode && formik.errors.postCode}
                />
              </Grid>

              <Grid item xs={8}>
                <TextField
                  fullWidth
                  label="* City"
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="* Country"
                  name="phoneNumber"
                  value="India"
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phoneNumber"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.phoneNumber &&
                    Boolean(formik.errors.phoneNumber)
                  }
                  helperText={
                    formik.touched.phoneNumber && formik.errors.phoneNumber
                  }
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Button
                  type="submit"
                  variant="contained"
                  className="lato"
                  sx={{
                    textTransform: "unset",
                    border: "unset",
                    padding: "12px 48px",
                    fontSize: "16px",
                    fontWeight: "700",
                    borderRadius: "0px",
                    width: { xs: "100%", md: "unset" },
                    backgroundColor: theme.palette.liteGrayBack,
                    color: theme.palette.black,
                    "&:hover": {
                      backgroundColor: theme.palette.liteGrayBack,
                      color: theme.palette.common.black,
                    },
                  }}
                >
                  CANCEL
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "center",
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  className="lato"
                  sx={{
                    width: { xs: "100%", md: "unset" },
                    textTransform: "unset",
                    border: "1px solid black",
                    padding: "12px 48px",
                    fontSize: "16px",
                    fontWeight: "700",
                    borderRadius: "0px",
                    backgroundColor: "#000000",
                    color: theme.palette.common.white,
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: "#FFFFFF",
                      color: theme.palette.common.black,
                    },
                  }}
                >
                  SAVE
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </form>
      </Box>
  );

  const editForm = (<Register_form edit={true} />)

  const offer = <Box>this page is not created</Box>;

  const leftSide = [
    { name: "OVERVIEW", icon: null },
    {
      name: "MY DATA",
      icon: <i class="fa-regular fa-user"></i>,
      description: "Personal data, address and payment methods",
      onclk: myData,
    },
    {
      name: "ORDER HISTORY",
      icon: <WorkHistoryOutlinedIcon />,
      onclk: orderHistory,
      description: "Review your past orders",
    },
    {
      name: "MY WISHLIST",
      icon: <FavoriteBorderOutlinedIcon />,
      onclk: myWishlist,
      description: "Save your favorite items",
    },
    {
      name: "OFFERS AND PROMOCODES",
      icon: <CardGiftcardOutlinedIcon />,
      description: "Join our loyalty program to receive discounts",
      onclk: offer,
    },
    { name: "LOG OUT", icon: <LogoutIcon /> },
  ];
  const [rightSide, setRightSide] = useState(myData);
  const [header, setHeader] = useState({
    name: "MY DATA",
    icon: <i class="fa-regular fa-user"></i>,
    description: "Personal data, address and payment methods",
  });

  return (
    <>
      {/* <Box pt={"130px"}>
        <Box bgcolor={theme.palette.liteGrayBack}>
          <Container maxWidth="xl">
            <Grid container>
              <Grid item xs={12}>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: { xs: "column", sm: "unset" },
                      py: { xs: "30px", sm: "unset" },
                    }}
                  >
                    <Box
                      sx={{
                        height: "170px",
                        width: "170px",
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
                      <Box
                        sx={{
                          "& > .MuiSvgIcon-root": {
                            fontSize: "70px !important",
                          },
                        }}
                      >
                        {header.icon}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        marginLeft: { sm: "80px" },
                        mt: { xs: "20px", sm: "unset" },
                      }}
                    >
                      <Box
                        className="lato"
                        sx={{
                          fontWeight: "900",
                          width: "100%",
                          fontSize: { xs: "30px", sm: "40px" },
                        }}
                      >
                        {header.name}
                      </Box>
                      <Box
                        sx={{
                          color: theme.palette.black,
                          mt: "10px",
                          width: "250px",
                        }}
                      >
                        {header.description}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box mt="30px">
          <Container maxWidth="xl">
            <Grid container>
              <Grid
                item
                lg={4}
                xs={12}
                sx={{
                  mb: { md: "50px", lg: "unset" },
                  height: "350px",
                }}
              >
                <Grid container height={"100%"}>
                  <Grid item xs={12} md={6} lg={12} width={"100%"}>
                    {leftSide.map((item, index) => (
                      <Box
                        key={index}
                        {...(item.name === "OVERVIEW"
                          ? { onClick: () => navigate("/profile") }
                          : {
                              onClick: () => {
                                setRightSide(item.onclk);
                                setHeader(item);
                              },
                            })}
                        sx={{
                          color: theme.palette.black,
                          fontSize: "17px",
                          fontWeight: "600",
                          borderBottom: "1px solid #CCCCCC",
                          marginRight: { lg: "50px", sm: "20px" },
                          padding: "11px 10px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          cursor: "pointer",
                          transition: ".3s",
                          "&:hover": {
                            backgroundColor: "#CCCCCC",
                          },
                        }}
                        className="lato"
                      >
                        <Box>{item.name}</Box>
                        <Box>{item.icon}</Box>
                      </Box>
                    ))}
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={0}
                    sx={{
                      display: { lg: "none", md: "unset", xs: "none" },
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        backgroundColor: theme.palette.black,
                        color: theme.palette.textLightGray,
                        padding: "35px 30px",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure error pariatur possimus similique quo eligendi
                      ratione quam cumque tempore suscipit nam ducimus
                      doloremque voluptas sint obcaecati, eum, excepturi facere
                      alias ea. Quis, vel in officiis esse, eum culpa cum illum
                      doloremque molestiae nam eaque ratione! Nemo esse repellat
                      commodi reprehenderit.
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item lg={8} xs={12}>
                {rightSide}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box> */}

      <Box pt={"130px"}>
        <Box bgcolor={theme.palette.liteGrayBack}>
          <Container maxWidth="xl">
            <Grid container>
              <Grid item xs={12}>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: { xs: "column", sm: "unset" },
                      py: { xs: "30px", sm: "unset" },
                    }}
                  >
                    <Box
                      sx={{
                        height: "170px",
                        width: "170px",
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
                      <Box
                        sx={{
                          "& > .MuiSvgIcon-root": {
                            fontSize: "70px !important",
                          },
                        }}
                      >
                        {header.icon}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        marginLeft: { sm: "80px" },
                        mt: { xs: "20px", sm: "unset" },
                      }}
                    >
                      <Box
                        className="lato"
                        sx={{
                          fontWeight: "900",
                          width: "100%",
                          fontSize: { xs: "30px", sm: "40px" },
                        }}
                      >
                        {header.name}
                      </Box>
                      <Box
                        sx={{
                          color: theme.palette.black,
                          mt: "10px",
                          width: "250px",
                        }}
                      >
                        {header.description}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box mt="30px">
          <Container maxWidth="xl">
            <Grid container>
              <Grid
                item
                lg={4}
                xs={12}
                sx={{
                  mb: { md: "50px", lg: "unset" },
                  height: "350px",
                }}
              >
                <Grid container height={"100%"}>
                  <Grid item xs={12} md={6} lg={12} width={"100%"}>
                    {leftSide.map((item, index) => (
                      <Box
                        key={index}
                        {...(item.name === "OVERVIEW"
                          ? { onClick: () => navigate("/profile") }
                          : {
                              onClick: () => {
                                setRightSide(item.onclk);
                                setHeader(item);
                                setAddress(false);
                                setEdit(false)
                              },
                            })}
                        sx={{
                          color: theme.palette.black,
                          fontSize: "17px",
                          fontWeight: "600",
                          borderBottom: "1px solid #CCCCCC",
                          marginRight: { lg: "50px", sm: "20px" },
                          padding: "11px 10px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          cursor: "pointer",
                          transition: ".3s",
                          "&:hover": {
                            backgroundColor: "#CCCCCC",
                          },
                        }}
                        className="lato"
                      >
                        <Box>{item.name}</Box>
                        <Box>{item.icon}</Box>
                      </Box>
                    ))}
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={0}
                    sx={{
                      display: { lg: "none", md: "unset", xs: "none" },
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        backgroundColor: theme.palette.black,
                        color: theme.palette.textLightGray,
                        padding: "35px 30px",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure error pariatur possimus similique quo eligendi
                      ratione quam cumque tempore suscipit nam ducimus
                      doloremque voluptas sint obcaecati, eum, excepturi facere
                      alias ea. Quis, vel in officiis esse, eum culpa cum illum
                      doloremque molestiae nam eaque ratione! Nemo esse repellat
                      commodi reprehenderit.
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item lg={8} xs={12}>
                {address ? (
                  myDataAddress
                ) : edit ? (editForm) : (
                  <>
                    {header.name === "MY DATA" && myData}
                    {header.name === "ORDER HISTORY" && orderHistory}
                    {header.name === "MY WISHLIST" && myWishlist}
                    {header.name === "OFFERS AND PROMOCODES" && offer}
                  </>
                )}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};
export default MyData;
