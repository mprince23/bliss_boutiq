import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login_form2 = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <div>
      <Box>
        {/* <Container maxWidth="xl"> */}
        <Grid container justifyContent="center">
          <Grid
            item
            md={12}
            sx={{
              width: "100%",
              padding: "54px",
            }}
          >
            <Box>
              <Typography
                className="lato"
                sx={{
                  fontSize: { xs: "20px", sm: "24px", md: "32px" },
                  fontWeight: "800",
                  marginBottom: 2,
                }}
              >
                Log in to HUGO BOSS EXPERIENCE
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <Typography
                component="p"
                sx={{
                  fontSize: { xs: "14px", sm: "16px" },
                  marginBottom: 2,
                }}
              >
                Login and enjoy member-only benefits and promotions with HUGO
                BOSS EXPERIENCE.
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontSize: { xs: "14px", sm: "16px" },
                }}
              >
                Please complete all fields marked with an *.
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Email" name="email" />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ position: "relative" }}>
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                  />
                  <IconButton
                    onClick={handleClickShowPassword}
                    sx={{ position: "absolute", right: 10, top: 10 }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox />
                    Remember me
                  </Typography>
                  <Typography sx={{ textDecoration: "underline" }}>
                    Forgot your password?
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="flex-end" my={3}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      textTransform: "unset",
                      border: "1px solid black",
                      padding: "12px 88px",
                      fontSize: "16px",
                      fontWeight: "500",
                      borderRadius: "0px",
                      backgroundColor: "#000000",
                      "&:hover": {
                        backgroundColor: "#FFFFFF",
                        color: "#000000",
                      },
                    }}
                  >
                    LOGIN
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* </Container> */}
      </Box>
    </div>
  );
};

export default Login_form2;
