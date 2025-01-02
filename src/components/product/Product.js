import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  Typography,
  FormControlLabel,
  Box,
  Drawer,
  List,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProductListing from "../Home/ProductListing";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";
const Product = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const [check, setCheck] = useState([]);
  const handleChange = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setCheck([...check, value]);
    } else {
      setCheck(check.filter((item) => item !== value));
    }
  };

  const drawer = (
    <Box id="accordingProduct">
      <Typography
        sx={{
          mt: 2,
          px: "16px",
          py: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #CCCCCC",
        }}
      >
        <Box>Filter & Sort</Box>
        <Box>
          <CloseIcon onClick={handleDrawerToggle} />
        </Box>
      </Typography>
      <Box sx={{ px: "20px" }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ my: "0px !important" }}
          >
            <Typography sx={{ p: "8px 0" }}>Category</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControlLabel
              sx={{
                display: "inline-block",
                "& span": {
                  fontSize: "14px",
                },
              }}
              control={
                <Checkbox
                  onChange={handleChange}
                  name="checkedA"
                  value="Tops (33)"
                  sx={{
                    color: "#000",
                    "&.Mui-checked": {
                      color: "#000",
                    },
                    "& .MuiSvgIcon-root": {
                      fontSize: 23,
                    },
                  }}
                />
              }
              label="Tops (33)"
            />
            <FormControlLabel
              sx={{
                display: "block",
                "& span": {
                  fontSize: "14px",
                },
              }}
              control={
                <Checkbox
                  onChange={handleChange}
                  name="checkedB"
                  value="Check me"
                  sx={{
                    color: "#000",
                    "&.Mui-checked": {
                      color: "#000",
                    },
                    "& .MuiSvgIcon-root": {
                      fontSize: 23,
                    },
                  }}
                />
              }
              label="Check me"
            />
            <FormControlLabel
              sx={{
                display: "block",
                "& span": {
                  fontSize: "14px",
                },
              }}
              control={
                <Checkbox
                  onChange={handleChange}
                  name="checkedC"
                  value="Check me2"
                  sx={{
                    color: "#000",
                    "&.Mui-checked": {
                      color: "#000",
                    },
                    "& .MuiSvgIcon-root": {
                      fontSize: 23,
                    },
                  }}
                />
              }
              label="Check me2"
            />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ my: "0px !important" }}
          >
            <Typography sx={{ p: "8px 0" }}>Category</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControlLabel
              sx={{
                display: "inline-block",
                "& span": {
                  fontSize: "14px",
                },
              }}
              control={
                <Checkbox
                  onChange={handleChange}
                  name="checkedA"
                  value="Tops (33)"
                  sx={{
                    color: "#000",
                    "&.Mui-checked": {
                      color: "#000",
                    },
                    "& .MuiSvgIcon-root": {
                      fontSize: 23,
                    },
                  }}
                />
              }
              label="Tops (33)"
            />
            <FormControlLabel
              sx={{
                display: "block",
                "& span": {
                  fontSize: "14px",
                },
              }}
              control={
                <Checkbox
                  onChange={handleChange}
                  name="checkedB"
                  value="Check me"
                  sx={{
                    color: "#000",
                    "&.Mui-checked": {
                      color: "#000",
                    },
                    "& .MuiSvgIcon-root": {
                      fontSize: 23,
                    },
                  }}
                />
              }
              label="Check me"
            />
            <FormControlLabel
              sx={{
                display: "block",
                "& span": {
                  fontSize: "14px",
                },
              }}
              control={
                <Checkbox
                  onChange={handleChange}
                  name="checkedC"
                  value="Check me2"
                  sx={{
                    color: "#000",
                    "&.Mui-checked": {
                      color: "#000",
                    },
                    "& .MuiSvgIcon-root": {
                      fontSize: 23,
                    },
                  }}
                />
              }
              label="Check me2"
            />
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );

  return (
    <>
      <Box
        id="accordingProduct"
        sx={{
          px: { lg: "60px", xs: "30px" },
          mt: "100px",
          display: { md: "flex" },
        }}
      >
        <Box
          sx={{
            width: { lg: "400px", md: "300px" },
            height: "100%",
            mb: "20px",
          }}
        >
          <Box>
            <Box
              sx={{
                padding: "8px 0",
                display: { xs: "flex", md: "none" },
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>102 Items</Box>
              <nav>
                <Drawer
                  anchor="bottom"
                  variant="temporary"
                  open={open}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true,
                  }}
                  sx={{
                    display: { xs: "block", xl: "none" },
                    "& .MuiDrawer-paper": {
                      boxSizing: "border-box",
                      width: "100%",
                      height: "100%",
                      // overflowX:"hidden"
                    },
                  }}
                >
                  {drawer}
                </Drawer>
              </nav>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TuneIcon
                    onClick={handleDrawerToggle}
                    sx={{ color: "gray", marginRight: "5px" }}
                  />
                </Box>
                <Box>Filter & Sort</Box>
              </Box>
            </Box>
            <Box sx={{ display: { md: "unset", xs: "none" } }}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{ my: "0px !important" }}
                >
                  <Typography sx={{ p: "8px 0" }}>Category</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormControlLabel
                    sx={{
                      display: "inline-block",
                      "& span": {
                        fontSize: "14px",
                      },
                    }}
                    control={
                      <Checkbox
                        onChange={handleChange}
                        name="checkedA"
                        value="Tops (33)"
                        sx={{
                          color: "#000",
                          "&.Mui-checked": {
                            color: "#000",
                          },
                          "& .MuiSvgIcon-root": {
                            fontSize: 23,
                          },
                        }}
                      />
                    }
                    label="Tops (33)"
                  />
                  <FormControlLabel
                    sx={{
                      display: "block",
                      "& span": {
                        fontSize: "14px",
                      },
                    }}
                    control={
                      <Checkbox
                        onChange={handleChange}
                        name="checkedB"
                        value="Check me"
                        sx={{
                          color: "#000",
                          "&.Mui-checked": {
                            color: "#000",
                          },
                          "& .MuiSvgIcon-root": {
                            fontSize: 23,
                          },
                        }}
                      />
                    }
                    label="Check me"
                  />
                  <FormControlLabel
                    sx={{
                      display: "block",
                      "& span": {
                        fontSize: "14px",
                      },
                    }}
                    control={
                      <Checkbox
                        onChange={handleChange}
                        name="checkedC"
                        value="Check me2"
                        sx={{
                          color: "#000",
                          "&.Mui-checked": {
                            color: "#000",
                          },
                          "& .MuiSvgIcon-root": {
                            fontSize: 23,
                          },
                        }}
                      />
                    }
                    label="Check me2"
                  />
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{ my: "0px !important" }}
                >
                  <Typography sx={{ p: "8px 0" }}>Category</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormControlLabel
                    sx={{
                      display: "inline-block",
                      "& span": {
                        fontSize: "14px",
                      },
                    }}
                    control={
                      <Checkbox
                        onChange={handleChange}
                        name="checkedA"
                        value="Tops (33)"
                        sx={{
                          color: "#000",
                          "&.Mui-checked": {
                            color: "#000",
                          },
                          "& .MuiSvgIcon-root": {
                            fontSize: 23,
                          },
                        }}
                      />
                    }
                    label="Tops (33)"
                  />
                  <FormControlLabel
                    sx={{
                      display: "block",
                      "& span": {
                        fontSize: "14px",
                      },
                    }}
                    control={
                      <Checkbox
                        onChange={handleChange}
                        name="checkedB"
                        value="Check me"
                        sx={{
                          color: "#000",
                          "&.Mui-checked": {
                            color: "#000",
                          },
                          "& .MuiSvgIcon-root": {
                            fontSize: 23,
                          },
                        }}
                      />
                    }
                    label="Check me"
                  />
                  <FormControlLabel
                    sx={{
                      display: "block",
                      "& span": {
                        fontSize: "14px",
                      },
                    }}
                    control={
                      <Checkbox
                        onChange={handleChange}
                        name="checkedC"
                        value="Check me2"
                        sx={{
                          color: "#000",
                          "&.Mui-checked": {
                            color: "#000",
                          },
                          "& .MuiSvgIcon-root": {
                            fontSize: 23,
                          },
                        }}
                      />
                    }
                    label="Check me2"
                  />
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: {
              lg: "calc(100% - 400px)",
              md: "calc(100% - 300px)",
              xs: "100%",
            },
          }}
        >
          <ProductListing />
        </Box>
      </Box>
    </>
  );
};

export default Product;
