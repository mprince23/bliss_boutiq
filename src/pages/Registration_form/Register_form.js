import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
  Grid,
  IconButton,
  Typography,
  useTheme,
  Container,
  FormHelperText,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register_form = ({ edit }) => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const navigate = useNavigate();
  const notify = () => toast.success("account created successfully 😃");
  const notifyError = (message) => toast.error(message);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      day: "",
      month: "",
      year: "",
      contact: "",
      email: "",
      password: "",
      gender: "",
      user_name: "",
    },

    validationSchema: Yup.object({
      gender: Yup.string().required("Required"),
      first_name: Yup.string().required("Required"),
      last_name: Yup.string().required("Required"),
      user_name: Yup.string().required("Required"),
      day: Yup.number().min(1, "Invalid day").max(31, "Invalid day"),
      month: Yup.string(),
      year: Yup.number()
        .min(1900, "Invalid year")
        .max(new Date().getFullYear(), "Invalid year"),
      contact: Yup.string()
        .matches(/^\+?\d{10,}$/, "Invalid phone number")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$")
        .required("Required"),
    }),

    onSubmit: (values, action) => {
      axios
        .post("https://blissbotique-backend.onrender.com/api/register", values)
        .then((response) => {
          action.resetForm();
          navigate("/");
          if (response.data.email) {
            notify();
          }
        })
        .catch((error) => {
          const status = error.response ? error.response.status : 500;
          switch (status) {
            case 400:
              notifyError("Bad request. Please check your input.");
              break;
            case 401:
              notifyError("Unauthorized. Please check your credentials.");
              break;
            case 403:
              notifyError(
                "Forbidden. You don't have permission to perform this action."
              );
              break;
            case 404:
              notifyError(
                "Not found. The requested resource could not be found."
              );
              break;
            case 500:
              notifyError("Internal server error. Please try again later.");
              break;
            default:
              notifyError("An unknown error occurred. Please try again.");
              break;
          }
        });
    },
  });

  return (
    <>
      <ToastContainer />
      <Box mt={5} pt={5}>
        <Container maxWidth={`${!edit && "md"}`}>
          <Box p={2}>
            <Box>
              <Typography
                variant="h4"
                className="lato"
                py={1}
                mt={3}
                sx={{ fontSize: { xs: "28px", md: "32px" }, fontWeight: "900" }}
              >
                {edit ? "MY ACCOUNT" : "CREATE ACCOUNT"}
              </Typography>
            </Box>
            <Box pt={2}>
              <Typography
                fontWeight={500}
                sx={{ fontSize: { xs: "12px", md: "18px" } }}
              >
                {edit
                  ? ""
                  : "Register now and start enjoying the benefits of a customer account right away."}
              </Typography>
            </Box>
            <Box pt={1}>
              <Typography
                fontWeight={500}
                sx={{ fontSize: { xs: "12px", md: "18px" } }}
              >
                Please complete all fields marked with an *.
              </Typography>
            </Box>
            <Box my={3}>
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
                      <FormControl
                        fullWidth
                        error={
                          formik.touched.gender && Boolean(formik.errors.gender)
                        }
                      >
                        <InputLabel>Salutation</InputLabel>
                        <Select
                          name="gender"
                          value={formik.values.gender}
                          onChange={formik.handleChange}
                          helperText={
                            formik.touched.gender && formik.errors.gender
                          }
                        >
                          <MenuItem value="men">Mr.</MenuItem>
                          <MenuItem value="women">Ms.</MenuItem>
                        </Select>
                        {formik.touched.gender && formik.errors.gender && (
                          <FormHelperText>
                            {formik.errors.gender}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="User Name"
                        name="user_name"
                        value={formik.values.user_name}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.user_name &&
                          Boolean(formik.errors.user_name)
                        }
                        helperText={
                          formik.touched.user_name && formik.errors.user_name
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        name="first_name"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.first_name &&
                          Boolean(formik.errors.first_name)
                        }
                        helperText={
                          formik.touched.first_name && formik.errors.first_name
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        name="last_name"
                        value={formik.values.last_name}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.last_name &&
                          Boolean(formik.errors.last_name)
                        }
                        helperText={
                          formik.touched.last_name && formik.errors.last_name
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="body1"
                        sx={{ mt: 2, fontWeight: "700" }}
                        className="lato fs-14"
                      >
                        DATE OF BIRTH (OPTIONAL)
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <FormControl fullWidth>
                        <InputLabel>Day</InputLabel>
                        <Select
                          name="day"
                          value={formik.values.day}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.day && Boolean(formik.errors.day)
                          }
                        >
                          {Array.from({ length: 31 }, (_, i) => (
                            <MenuItem key={i + 1} value={i + 1}>
                              {i + 1}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                      <FormControl fullWidth>
                        <InputLabel>Month</InputLabel>
                        <Select
                          name="month"
                          value={formik.values.month}
                          onChange={formik.handleChange}
                        >
                          {[
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December",
                          ].map((month, index) => (
                            <MenuItem key={month} value={month}>
                              {month}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                      <FormControl fullWidth>
                        <InputLabel>Year</InputLabel>
                        <Select
                          name="year"
                          value={formik.values.year}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.year && Boolean(formik.errors.year)
                          }
                        >
                          {Array.from(
                            { length: new Date().getFullYear() - 1900 + 1 },
                            (_, i) => (
                              <MenuItem key={1900 + i} value={1900 + i}>
                                {1900 + i}
                              </MenuItem>
                            )
                          )}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="contact"
                        value={formik.values.contact}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.contact &&
                          Boolean(formik.errors.contact)
                        }
                        helperText={
                          formik.touched.contact && formik.errors.contact
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ position: "relative" }}>
                        <TextField
                          fullWidth
                          label="Password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.password &&
                            Boolean(formik.errors.password)
                          }
                          helperText={
                            formik.touched.password && formik.errors.password
                          }
                        />
                        <IconButton
                          onClick={handleClickShowPassword}
                          sx={{ position: "absolute", right: 10, top: 10 }}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </Box>
                    </Grid>
                    {!edit && (
                      <Grid xs={12} my={4} sx={{ padding: "0px 0px 0px 16px" }}>
                        <Typography my={2} sx={{ fontSize: "15px" }}>
                          The{" "}
                          <b style={{ textDecoration: "underline" }}>
                            {" "}
                            Terms and Conditions
                          </b>{" "}
                          as well as the associated{" "}
                          <b style={{ textDecoration: "underline" }}>
                            Privacy Policy
                          </b>{" "}
                          are applicable for participation in HUGO BOSS
                          EXPERIENCE.
                        </Typography>
                        <Typography sx={{ fontSize: "15px" }} my={2}>
                          By clicking “create account”, I confirm that I have
                          read and agree to the{" "}
                          <b style={{ textDecoration: "underline" }}>
                            {" "}
                            Terms and Conditions{" "}
                          </b>{" "}
                          of HUGO BOSS AG for participation in HUGO BOSS
                          EXPERIENCE.
                        </Typography>
                      </Grid>
                    )}
                    {edit ? (
                      <>
                        {" "}
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
                            onClick={() => formik.handleReset()}
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
                      </>
                    ) : (
                      <Grid
                        item
                        xs={12}
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "end",
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
                          CREATE ACCOUNT
                        </Button>
                      </Grid>
                    )}
                  </Grid>
                </FormControl>
              </form>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Register_form;
