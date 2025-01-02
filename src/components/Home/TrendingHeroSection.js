import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import trending1 from "../../assets/images/Home/trendingHeroSection/trending1.png";
import restrending1 from "../../assets/images/Home/resTrending/restrending1.png";

const TrendingHeroSection = ({
  img,
  resImg,
  title,
  heading,
  btnText,
  align,
  textColor,
}) => {
  return (
    <Box sx={{my: "70px"}}>
      <Box
        sx={{
          height: { md: "871px", xs: "550px" },
          backgroundImage: {
            sm: `url(${img})`,
            xs: `url(${resImg})`,
          },
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: { xs: "end", sm: "center" },
          width: "100%",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: { sm: align, xs: "center" } }}>
            <Box sx={{ color: textColor }} className="lato">
              <Box
                sx={{
                  fontWeight: "900",
                  fontSize: { md: "23px" },
                  letterSpacing: "1.3px",
                }}
              >
                {title}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { sm: align, xs: "center" },
                  mb: "40px",
                }}
              >
                <Typography
                  className="lato"
                  sx={{
                    fontSize: {
                      md: "80px",
                      sm: "50px",
                      xs: "40px",
                    },
                    marginTop: "10px",
                    fontWeight: "900",
                    width: { md: "700px", xs: "100%" },
                    lineHeight: "1.2",
                  }}
                  component={"div"}
                >
                  {heading}
                </Typography>
              </Box>
              <button
                style={{
                  border: "none",
                  marginBottom: "30px",
                  cursor:"pointer"
                }}
              >
                <Typography
                  sx={{
                    fontSize: { sm: "23px", xs: "18px" },
                    fontWeight: "700",
                    padding: { sm: "11px 25px", xs: "8px 18px" },
                    letterSpacing: "1.5px",
                  }}
                >
                  {btnText}
                </Typography>
                {/* <i
                    className="fa-solid fa-arrow-right-long"
                    style={{
                      fontSize: "20px",
                    }}
                  ></i> */}
              </button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default TrendingHeroSection;
