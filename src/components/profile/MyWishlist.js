import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, useTheme } from '@mui/material'
import React from 'react'
import tShirt from "../../assets/images/profile/mydata/watchlist.webp";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from 'react-router-dom';
const MyWishlist = () => {
    const theme= useTheme()
    const navigate= useNavigate()
  return (
    <>
      <Box mt={"100px"}>
        <Container maxWidth="xl">
          <Grid container justifyContent={"center"}>
            <Grid item xs={12}>
              <Box sx={{display:"flex",alignItems:"center",fontWeight:"600",justifyContent:"right",cursor:"pointer"}} onClick={()=> navigate("/profile")}>
                <ChevronLeftIcon />
                <Box>Back</Box>
              </Box>
            </Grid>

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

            <Grid
              item
              xs={12}
              lg={11}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
                            //   onChange={handleChange}
                            sx={{
                              "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "unset",
                              },
                              "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                {
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
                        Articles on your wishlist can unfortunately not be
                        reserved for you.
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
        </Container>
      </Box>
    </>
  );
}

export default MyWishlist
