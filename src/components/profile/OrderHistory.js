import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Container, Grid, Tab, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Placed',
  'Order Confirmed',
  'Shipped',
  'Out Of Delivery',
  'Delivered',
];

const OrderHistory = () => {
  const [value, setValue] = useState("1");
  const theme = useTheme()
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box mt="100px">
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "600",
                  justifyContent: "right",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/my-account")}
              >
                <ChevronLeftIcon />
                <Box>Back</Box>
              </Box>
            </Grid>
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
                  <Box sx={{ width: '100%', my: 5 }}>
                    <Stepper
                      alternativeLabel
                      sx={{
                        padding: { xs: "8px", md: "16px" },
                        borderRadius: "8px",
                        "& .MuiStepConnector-line": {
                          borderColor: "#000",
                        },
                        color: "#000",
                        "& .MuiStepIcon-root": {},
                        "& .MuiStepIcon-active": {
                          color: "#eee", 
                        },
                      }}
                    >
                      {steps.map((label) => (
                        <Step key={label}>
                          <StepLabel
                            sx={{
                              color: "#000",
                              "& .MuiStepLabel-label": {
                                fontSize: { xs: "14px", md: "18px" },
                              }
                            }}
                          >
                            {label}
                          </StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </Box>

                  <TabPanel value="1" sx={{ color: theme.palette.textGray }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' },py:3 ,borderBottom:'1px solid #000' }}>
                      <Box sx={{ width: { xs: '100%', sm: '150px' } }}>
                        <img src="https://res.cloudinary.com/damw499ud/image/upload/v1737631832/Product-images/vcjoe7ekr1vmv21uly8w.webp" width={'100%'} height={'100%'} />
                      </Box>
                      <Box sx={{ ml: { xs: 0, sm: 14 } }}>
                        <Typography className="lato" sx={{ color: '#000', mt: 2, fontSize: 22, fontWeight: 600 }}>
                          Water-repellent padded jacket with tonal logo
                        </Typography>
                        <Typography sx={{ color: '#000', mt: 2, fontSize: 22, fontWeight: 500 }}> Price: ₹1000.00</Typography>
                        <Typography sx={{ color: '#000', mt: 2, fontSize: 20, fontWeight: 500 }}> Color: Black</Typography>
                        <Typography sx={{ color: '#000', mt: 2, fontSize: 20, fontWeight: 500 }}> Size: M</Typography>
                      </Box>
                    </Box>
                  </TabPanel>
                  <TabPanel value="2" sx={{ color: theme.palette.textGray }}>
                    Item Two
                  </TabPanel>
                </TabContext>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default OrderHistory;
