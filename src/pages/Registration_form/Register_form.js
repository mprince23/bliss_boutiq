// import {
//   TextField,
//   Button,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
//   Box,
//   Grid,
//   IconButton,
//   Typography,
//   useTheme,
//   Container,
//   FormHelperText,
// } from "@mui/material";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import React from "react";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Register_form = ({ edit }) => {
//   // const theme = useTheme();
//   // const [showPassword, setShowPassword] = React.useState(false);
//   // const handleClickShowPassword = () => setShowPassword(!showPassword);

//   // const notify = () => toast.success("Account created successfully 😃");
//   // const notifyError = (message) => toast.error(message);

//   // const formik = useFormik({
//   //   initialValues: {
//   //     user_name: "",
//   //     first_name: "",
//   //     last_name: "",
//   //     dob: "",
//   //     phone_number: "",
//   //     email: "",
//   //     password: "",
//   //     gender: "",
//   //   },
//   //   validationSchema: Yup.object({
//   //     first_name: Yup.string().required("First Name is required"),
//   //     last_name: Yup.string().required("Last Name is required"),
//   //     user_name: Yup.string().required("Username is required"),
//   //     gender: Yup.string().required("Gender is required"),
//   //     phone_number: Yup.string()
//   //       .matches(/^\+?\d{10,}$/, "Invalid phone number")
//   //       .required("Phone number is required"),
//   //     email: Yup.string().email("Invalid email address").required("Email is required"),
//   //     password: Yup.string()
//   //       .matches(
//   //         /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
//   //         "Password must be at least 8 characters long, include a number, an uppercase letter, and a special character"
//   //       )
//   //       .required("Password is required"),
//   //     dob: Yup.date().required("Date of Birth is required").nullable(),
//   //   }),
//   //   onSubmit: (values) => {
//   //     axios
//   //       .post(" https://blissboutiq-backend.onrender.com/api/user/register", values)
//   //       .then((response) => {
//   //         if (response.data.email) {
//   //           notify();
//   //         }
//   //       })
//   //       .catch((error) => {
//   //         notifyError("Error occurred. Please try again later.");
//   //       });
//   //   },
//   // });

//   const [formData, setFormData] = useState({
//     user_name: "",
//     first_name: "",
//     last_name: "",
//     dob: "",
//     phone_number: "",
//     email: "",
//     password: "",
//     gender: "",
//   });

//   const [errors, setErrors] = useState({
//     user_name: "",
//     first_name: "",
//     last_name: "",
//     dob: "",
//     phone_number: "",
//     email: "",
//     password: "",
//     gender: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: '',
//     }));
//   };

//   const validate = () => {
//     let valid = true;
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required.';
//       valid = false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required.';
//       valid = false;
//     } else if (!emailRegex.test(formData.email)) {
//       newErrors.email = 'Enter a valid email address.';
//       valid = false;
//     }

//     const contactRegex = /^\d{10}$/;
//     if (!formData.contact.trim()) {
//       newErrors.contact = 'Contact number is required.';
//       valid = false;
//     } else if (!contactRegex.test(formData.contact)) {
//       newErrors.contact = 'Enter a valid 10-digit contact number.';
//       valid = false;
//     }

//     if (!formData.comments.trim()) {
//       newErrors.comments = 'Comments are required.';
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       axios.post('https://blissboutiq-backend.onrender.com/api/user/register', formData)
//         .then(res => console.log(res))
//         .catch(err => console.log(err));
//       setFormData({
//         user_name: "",
//         first_name: "",
//         last_name: "",
//         dob: "",
//         phone_number: "",
//         email: "",
//         password: "",
//         gender: "",
//       })
//     }
//   };

//   return (
//     <>
//       {/* <ToastContainer /> */}
//       <Box>
//         {/* <Container maxWidth={`${!edit && "md"}`}> */}
//         <Box py={2} sx={{ px: { sm: "55px", xs: "20px" } }}>
//           <Box>
//             <Typography
//               variant="h4"
//               className="lato"
//               py={1}
//               mt={3}
//               sx={{ fontSize: { xs: "28px", md: "32px" }, fontWeight: "900" }}
//             >
//               {edit ? "MY ACCOUNT" : "CREATE ACCOUNT"}
//             </Typography>
//           </Box>
//           <Box pt={2}>
//             <Typography
//               fontWeight={500}
//               sx={{ fontSize: { xs: "12px", md: "18px" } }}
//             >
//               {edit
//                 ? ""
//                 : "Register now and start enjoying the benefits of a customer account right away."}
//             </Typography>
//           </Box>
//           <Box pt={1}>
//             <Typography
//               fontWeight={500}
//               sx={{ fontSize: { xs: "12px", md: "18px" } }}
//             >
//               Please complete all fields marked with an *.
//             </Typography>
//           </Box>
//           <Box my={3}>
//             <form onSubmit={handleSubmit} onReset={formik.handleReset}>
//               <FormControl
//                 sx={{
//                   width: "100% !important",
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "#99999",
//                       borderRadius: "unset",
//                     },

//                     "&.Mui-focused fieldset": {
//                       borderColor: "#000",
//                     },
//                   },
//                   "& label.Mui-focused": {
//                     color: "#000",
//                     fontSize: "16px",
//                     fontWeight: "500",
//                     backgroundColor: "white",
//                   },
//                   "& label": {
//                     color: "#000000, opacity 45.0%",
//                     fontSize: "16px",
//                     fontWeight: "500",
//                     padding: "0 5px",
//                   },
//                 }}
//               >
//                 <Grid container spacing={2}>
//                   {/* <Grid item xs={12} md={6}>
//                     <FormControl
//                       fullWidth
//                       error={
//                         formik.touched.gender && Boolean(formik.errors.gender)
//                       }
//                     >
//                       <InputLabel>Salutation</InputLabel>
//                       <Select
//                         name="gender"
//                         value={formik.values.gender}
//                         onChange={formik.handleChange}
//                         helperText={
//                           formik.touched.gender && formik.errors.gender
//                         }
//                       >
//                         <MenuItem value="men">Mr.</MenuItem>
//                         <MenuItem value="women">Ms.</MenuItem>
//                       </Select>
//                       {formik.touched.gender && formik.errors.gender && (
//                         <FormHelperText>{formik.errors.gender}</FormHelperText>
//                       )}
//                     </FormControl>
//                   </Grid> */}
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       fullWidth
//                       label="User Name"
//                       name="user_name"
//                       value={formik.values.user_name}
//                       onChange={formik.handleChange}
//                       error={formik.touched.user_name && Boolean(formik.errors.user_name)}
//                       helperText={formik.touched.user_name && formik.errors.user_name}
//                     />
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       fullWidth
//                       label="First Name"
//                       name="first_name"
//                       value={formik.values.first_name}
//                       onChange={formik.handleChange}
//                       error={formik.touched.first_name && Boolean(formik.errors.first_name)}
//                       helperText={formik.touched.first_name && formik.errors.first_name}
//                     />
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       fullWidth
//                       label="Last Name"
//                       name="last_name"
//                       value={formik.values.last_name}
//                       onChange={formik.handleChange}
//                       error={formik.touched.last_name && Boolean(formik.errors.last_name)}
//                       helperText={formik.touched.last_name && formik.errors.last_name}
//                     />
//                   </Grid>

//                   <Grid item xs={12}>
//                     <Typography
//                       variant="body1"
//                       sx={{ mt: 2, fontWeight: "700" }}
//                       className="lato fs-14"
//                     >
//                       DATE OF BIRTH (OPTIONAL)
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       fullWidth
//                       label="Date of Birth"
//                       name="dob"
//                       type="date"
//                       value={formik.values.dob}
//                       onChange={formik.handleChange}
//                       error={formik.touched.dob && Boolean(formik.errors.dob)}
//                       helperText={formik.touched.dob && formik.errors.dob}
//                       InputLabelProps={{
//                         shrink: true,
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       fullWidth
//                       label="Phone Number"
//                       name="phone_number"
//                       value={formik.values.phone_number}
//                       onChange={formik.handleChange}
//                       error={formik.touched.phone_number && Boolean(formik.errors.phone_number)}
//                       helperText={formik.touched.phone_number && formik.errors.phone_number}
//                     />
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <FormControl fullWidth error={formik.touched.gender && Boolean(formik.errors.gender)}>
//                       <InputLabel>Gender</InputLabel>
//                       <Select
//                         name="gender"
//                         value={formik.values.gender}
//                         onChange={formik.handleChange}
//                       >
//                         <MenuItem value="Male">Male</MenuItem>
//                         <MenuItem value="Female">Female</MenuItem>
//                       </Select>
//                       {formik.touched.gender && formik.errors.gender && (
//                         <FormHelperText>{formik.errors.gender}</FormHelperText>
//                       )}
//                     </FormControl>
//                   </Grid>

//                   <Grid item xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Email"
//                       name="email"
//                       value={formik.values.email}
//                       onChange={formik.handleChange}
//                       error={formik.touched.email && Boolean(formik.errors.email)}
//                       helperText={formik.touched.email && formik.errors.email}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Box sx={{ position: "relative" }}>
//                       <TextField
//                         fullWidth
//                         label="Password"
//                         name="password"
//                         type={showPassword ? "text" : "password"}
//                         value={formik.values.password}
//                         onChange={formik.handleChange}
//                         error={formik.touched.password && Boolean(formik.errors.password)}
//                         helperText={formik.touched.password && formik.errors.password}
//                       />
//                       <IconButton onClick={handleClickShowPassword} sx={{ position: "absolute", right: 10, top: 10 }}>
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </Box>
//                   </Grid>
//                   {!edit && (
//                     <Grid xs={12} my={4} sx={{ padding: "0px 0px 0px 16px" }}>
//                       <Typography my={2} sx={{ fontSize: "15px" }}>
//                         The{" "}
//                         <b style={{ textDecoration: "underline" }}>
//                           {" "}
//                           Terms and Conditions
//                         </b>{" "}
//                         as well as the associated{" "}
//                         <b style={{ textDecoration: "underline" }}>
//                           Privacy Policy
//                         </b>{" "}
//                         are applicable for participation in HUGO BOSS
//                         EXPERIENCE.
//                       </Typography>
//                       <Typography sx={{ fontSize: "15px" }} my={2}>
//                         By clicking “create account”, I confirm that I have read
//                         and agree to the{" "}
//                         <b style={{ textDecoration: "underline" }}>
//                           {" "}
//                           Terms and Conditions{" "}
//                         </b>{" "}
//                         of HUGO BOSS AG for participation in HUGO BOSS
//                         EXPERIENCE.
//                       </Typography>
//                     </Grid>
//                   )}
//                   {edit ? (
//                     <>
//                       {" "}
//                       <Grid item xs={12} md={6}>
//                         <Button
//                           type="submit"
//                           variant="contained"
//                           className="lato"
//                           sx={{
//                             textTransform: "unset",
//                             border: "unset",
//                             padding: "12px 48px",
//                             fontSize: "16px",
//                             fontWeight: "700",
//                             borderRadius: "0px",
//                             width: { xs: "100%", md: "unset" },
//                             backgroundColor: theme.palette.liteGrayBack,
//                             color: theme.palette.black,
//                             "&:hover": {
//                               backgroundColor: theme.palette.liteGrayBack,
//                               color: theme.palette.common.black,
//                             },
//                           }}
//                           onClick={() => formik.handleReset()}
//                         >
//                           CANCEL
//                         </Button>
//                       </Grid>
//                       <Grid
//                         item
//                         xs={12}
//                         md={6}
//                         sx={{
//                           display: "flex",
//                           justifyContent: "right",
//                           alignItems: "center",
//                         }}
//                       >
//                         <Button
//                           type="submit"
//                           variant="contained"
//                           className="lato"
//                           sx={{
//                             width: { xs: "100%", md: "unset" },
//                             textTransform: "unset",
//                             border: "1px solid black",
//                             padding: "12px 48px",
//                             fontSize: "16px",
//                             fontWeight: "700",
//                             borderRadius: "0px",
//                             backgroundColor: "#000000",
//                             color: theme.palette.common.white,
//                             transition: "0.3s",
//                             "&:hover": {
//                               backgroundColor: "#FFFFFF",
//                               color: theme.palette.common.black,
//                             },
//                           }}
//                         >
//                           SAVE
//                         </Button>
//                       </Grid>
//                     </>
//                   ) : (
//                     <Grid
//                       item
//                       xs={12}
//                       sx={{
//                         width: "100%",
//                         display: "flex",
//                         justifyContent: "end",
//                         alignItems: "center",
//                       }}
//                     >
//                       <Button
//                         type="submit"
//                         variant="contained"
//                         className="lato"
//                         sx={{
//                           width: { xs: "100%", md: "unset" },
//                           textTransform: "unset",
//                           border: "1px solid black",
//                           padding: "12px 48px",
//                           fontSize: "16px",
//                           fontWeight: "700",
//                           borderRadius: "0px",
//                           backgroundColor: "#000000",
//                           color: theme.palette.common.white,
//                           transition: "0.3s",
//                           "&:hover": {
//                             backgroundColor: "#FFFFFF",
//                             color: theme.palette.common.black,
//                           },
//                         }}
//                       >
//                         CREATE ACCOUNT
//                       </Button>
//                     </Grid>
//                   )}
//                 </Grid>
//               </FormControl>
//             </form>
//           </Box>
//         </Box>
//         {/* </Container> */}
//       </Box>
//     </>
//   );
// };

// export default Register_form;


import React, {useState} from "react";
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
    FormHelperText,
} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axiosInstance from "../../Instance";
import toast, {Toaster} from "react-hot-toast";

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const formik = useFormik({
        initialValues: {
            user_name: "",
            first_name: "",
            last_name: "",
            dob: "",
            phone_number: "",
            email: "",
            password: "",
            gender: "",
        },
        validationSchema: Yup.object({
            user_name: Yup.string().required("Username is required"),
            first_name: Yup.string().required("First Name is required"),
            last_name: Yup.string().required("Last Name is required"),
            dob: Yup.date().required("Date of Birth is required").nullable(),
            phone_number: Yup.string()
                .matches(/^\d{10}$/, "Invalid phone number")
                .required("Phone number is required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            password: Yup.string()
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
                    "Password must include at least 8 characters, an uppercase letter, and a special character"
                )
                .required("Password is required"),
            gender: Yup.string().required("Gender is required"),
        }),
        onSubmit: async (values) => {
            console.log("Form values being submitted:", values);

            axiosInstance.post("/api/user/register", values)
                .then((response) => {
                    toast.success('Account created successfully!')
                })
                .catch((err) => {
                    console.error("Error response:");
                    toast.error('Error occurred: ', err.response?.data || err.message)
                });

        },
    });

    return (
        <Box>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Box py={2} sx={{px: {sm: "55px", xs: "20px"}}}>
                <Typography
                    variant="h4"
                    py={1}
                    mt={3}
                    sx={{fontSize: {xs: "28px", md: "32px"}, fontWeight: "900"}}
                >
                    CREATE ACCOUNT
                </Typography>
                <Box my={3}>
                    <form onSubmit={formik.handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="User Name"
                                    name="user_name"
                                    value={formik.values.user_name}
                                    onChange={formik.handleChange}
                                    error={formik.touched.user_name && Boolean(formik.errors.user_name)}
                                    helperText={formik.touched.user_name && formik.errors.user_name}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    name="first_name"
                                    value={formik.values.first_name}
                                    onChange={formik.handleChange}
                                    error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                                    helperText={formik.touched.first_name && formik.errors.first_name}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Last Name"
                                    name="last_name"
                                    value={formik.values.last_name}
                                    onChange={formik.handleChange}
                                    error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                                    helperText={formik.touched.last_name && formik.errors.last_name}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Date of Birth"
                                    name="dob"
                                    type="date"
                                    value={formik.values.dob}
                                    onChange={formik.handleChange}
                                    error={formik.touched.dob && Boolean(formik.errors.dob)}
                                    helperText={formik.touched.dob && formik.errors.dob}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    name="phone_number"
                                    value={formik.values.phone_number}
                                    onChange={formik.handleChange}
                                    error={formik.touched.phone_number && Boolean(formik.errors.phone_number)}
                                    helperText={formik.touched.phone_number && formik.errors.phone_number}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl
                                    fullWidth
                                    error={formik.touched.gender && Boolean(formik.errors.gender)}
                                >
                                    <InputLabel>Gender</InputLabel>
                                    <Select
                                        name="gender"
                                        value={formik.values.gender}
                                        onChange={formik.handleChange}
                                    >
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                    </Select>
                                    {formik.touched.gender && formik.errors.gender && (
                                        <FormHelperText>{formik.errors.gender}</FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{position: "relative"}}>
                                    <TextField
                                        fullWidth
                                        label="Password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                        helperText={formik.touched.password && formik.errors.password}
                                    />
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        sx={{position: "absolute", right: 10, top: 10}}
                                    >
                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </Box>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sx={{
                                    display: "flex",
                                    justifyContent: "end",
                                }}
                            >
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        textTransform: "unset",
                                        border: "1px solid black",
                                        padding: {
                                            xs: "12px 30px",
                                            sm: "12px 60px",
                                            md: "12px 88px",
                                        },
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
                                    Create Account
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default RegisterForm;
