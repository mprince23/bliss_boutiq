import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import img1 from "../../assets/images/cart/cartimg-1.webp";
import paypal from "../../assets/images/cart/paypal.svg";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReplayIcon from "@mui/icons-material/Replay";
import paymentimg1 from "../../assets/images/cart/amex.svg";
import paymentimg2 from "../../assets/images/cart/paypal.svg";
import paymentimg3 from "../../assets/images/cart/mc.svg";
import paymentimg4 from "../../assets/images/cart/visa.svg";

const CartPage = () => {
  const theme = useTheme();
  return (
    <>
      <Box bgcolor={theme.palette.liteGrayBack}>
        <Container maxWidth="">
          <Box sx={{ margin: "32px 0px 20px", padding: "0px 0px 0px 16px" }}>
            <Typography
              variant="h2"
              className="lato"
              pt={2}
              sx={{
                fontSize: "20px",
                fontWeight: "500",
                color: theme.palette.lightBlack,
              }}
            >
              Your Shopping Bag
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <Box sx={{ backgroundColor: "white" }} px={2}>
                <Box sx={{ margin: "0px 0px 20px 0px", padding: "20px 0px" }}>
                  <Button
                    sx={{
                      textTransform: "unset",
                      border: "1px solid black",
                      padding: "16px 18px",
                      fontSize: "16px",
                      fontWeight: "500",
                      borderRadius: "0px",
                      color: theme.palette.common.black,
                      "&:hover": {
                        backgroundColor: "#000000",
                        color: theme.palette.common.white,
                      },
                    }}
                  >
                    Continue Shopping
                  </Button>
                </Box>
                <Box
                  display={{ xs: "block", sm: "flex" }}
                  sx={{ paddingBottom: "20px", marginBottom: "20px" }}
                >
                  <Box
                    sx={{
                      height: "260px",
                      width: "195px",
                      margin: "0px 20px 0px 0px",
                    }}
                  >
                    <img src={img1} alt={img1} />
                  </Box>
                  <Box pt={{ xs: 2, sm: 0 }}>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        marginBottom: "4px",
                        color: theme.palette.lightBlack,
                      }}
                    >
                      Logo Tape T-Shirt
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        marginBottom: "4px",
                        color: theme.palette.lightBlack,
                      }}
                    >
                      €49.90
                    </Typography>
                    <Box mt={2} sx={{ fontSize: "14 px", color: "#666666" }}>
                      <Typography>Colour: Ck Black</Typography>
                      <Typography>Size: XL</Typography>
                      <Typography>Quantity: 1</Typography>
                    </Box>
                    <Box mt={3} display={"flex"}>
                      <Box>
                        <Button
                          sx={{
                            textTransform: "unset",
                            border: "1px solid black",
                            padding: "5px 10px",
                            fontSize: "16px",
                            fontWeight: "500",
                            borderRadius: "0px",
                            color: theme.palette.common.black,
                            "&:hover": {
                              backgroundColor: "#000000",
                              color: theme.palette.common.white,
                            },
                          }}
                        >
                          Edit
                        </Button>
                      </Box>
                      <Box mx={2}>
                        {" "}
                        <Button
                          sx={{
                            textTransform: "unset",
                            border: "1px solid black",
                            padding: "5px 10px",
                            fontSize: "16px",
                            fontWeight: "500",
                            borderRadius: "0px",
                            color: theme.palette.common.black,
                            "&:hover": {
                              backgroundColor: "#000000",
                              color: theme.palette.common.white,
                            },
                          }}
                        >
                          Remove
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} sx={{ padding: "16px 0px" }}>
              <Box sx={{ backgroundColor: "white" }} px={2}>
                {/* <Box display={"flex"} justifyContent={"end"}>
                  <Button
                    sx={{
                      margin: "20px 0px",
                      textTransform: "unset",
                      border: "1px solid black",
                      padding: "16px 18px",
                      fontSize: "16px",
                      fontWeight: "500",
                      borderRadius: "0px",
                      backgroundColor: theme.palette.common.black,
                      color: theme.palette.common.white,
                      "&:hover": {
                        backgroundColor: theme.palette.common.white,
                        color: theme.palette.common.black,
                      },
                    }}
                  >
                    Continue Shopping
                  </Button>
                </Box> */}
                <Box pt={2}>
                  <Typography
                    pb={2}
                    sx={{
                      fontSize: "16px",
                      fontWeight: "600",
                      borderBottom: "1px solid #E4E4E4",
                    }}
                  >
                    Overview
                  </Typography>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"} py={2}>
                  <Typography
                    sx={{ color: theme.palette.lightBlack, fontSize: "18px" }}
                  >
                    Subtotal
                  </Typography>
                  <Typography>€49.90</Typography>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"} pt={0}>
                  <Typography
                    sx={{ color: theme.palette.lightBlack, fontSize: "18px" }}
                  >
                    Standard delivery
                  </Typography>
                  <Typography>€5.95</Typography>
                </Box>
                <Box>
                  <Typography
                    pb={2}
                    sx={{ color: theme.palette.lightBlack, fontSize: "12px" }}
                  >
                    within 5 - 6 working days
                  </Typography>
                </Box>
                <Box pb={2} sx={{ borderBottom: "1px solid #E4E4E4" }}>
                  <Box pb={1}>
                    <Typography sx={{ fontSize: "18px" }}>
                      Got a promotion code?
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <TextField
                      variant="outlined"
                      placeholder="Enter code"
                      sx={{
                        borderRadius: "0px",
                        flexGrow: 1,
                        "& .MuiOutlinedInput-root": {
                          borderTopRightRadius: 0,
                          borderBottomRightRadius: 0,
                          borderTopLeftRadius: 0,
                          borderBottomLeftRadius: 0,
                        },
                      }}
                    />
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: "0px",
                        padding: "15.5px 50px",
                        backgroundColor: theme.palette.common.black,
                        color: "white",
                        "&:hover": {
                          backgroundColor: theme.palette.gray,
                        },
                      }}
                    >
                      Apply
                    </Button>
                  </Box>
                  <Box mt={1}>
                    <Typography>
                      Promotion codes cannot be used in combination with other
                      promotions or promotion codes
                    </Typography>
                  </Box>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"} py={2}>
                  <Typography
                    sx={{ color: theme.palette.lightBlack, fontSize: "16px" }}
                  >
                    Total (1 Item) inc. VAT
                  </Typography>
                  <Typography>€55.85 </Typography>
                </Box>
                <Box>
                  <Button
                    sx={{
                      width: "100%",
                      margin: "20px 0px",
                      textTransform: "unset",
                      border: "1px solid black",
                      padding: "16px 18px",
                      fontSize: "16px",
                      fontWeight: "500",
                      borderRadius: "0px",
                      backgroundColor: theme.palette.common.black,
                      color: theme.palette.common.white,
                      "&:hover": {
                        backgroundColor: theme.palette.common.white,
                        color: theme.palette.common.black,
                      },
                    }}
                  >
                    Proceed To Checkout
                  </Button>
                </Box>
                <Box pb={2}>
                  <Button
                    sx={{
                      width: "100%",
                      textTransform: "unset",
                      border: "1px solid black",
                      padding: "16px 18px",
                      fontSize: "16px",
                      fontWeight: "500",
                      borderRadius: "0px",
                      color: theme.palette.common.black,
                      "&:hover": {
                        backgroundColor: theme.palette.lightGray,
                      },
                    }}
                  >
                    Checkout With
                  </Button>
                </Box>
                <Box sx={{ padding: "20px" }}>
                  <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
                    <Grid
                      item
                      xs={12}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <LocalShippingIcon sx={{ marginRight: "8px" }} />
                      <Typography>
                        Free delivery on all orders over €75
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <ReplayIcon sx={{ marginRight: "8px" }} />
                      <Typography>
                        60-day free returns. For returns, a fee of 4,95 EUR
                        applies.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider sx={{ marginBottom: "10px" }} />
                  <Typography variant="body2" sx={{ marginBottom: "10px" }}>
                    Accepted Payment Methods
                  </Typography>
                  <Box sx={{ display: "flex" }}>
                    <img
                      src={paymentimg1}
                      alt="American Express"
                      style={{
                        height: "34px",
                        width: "44px",
                        objectFit: "contain",
                      }}
                    />
                    <img
                      src={paymentimg2}
                      alt="MasterCard"
                      style={{
                        height: "34px",
                        width: "44px",
                        objectFit: "contain",
                      }}
                    />
                    <img
                      src={paymentimg3}
                      alt="PayPal"
                      style={{
                        height: "34px",
                        width: "44px",
                        objectFit: "contain",
                      }}
                    />
                    <img
                      src={paymentimg4}
                      alt="Visa"
                      style={{
                        height: "34px",
                        width: "44px",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default CartPage;
