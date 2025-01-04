import React, { useState } from "react";
import {
  Grid,
  Card,
  Typography,
  Box,
  IconButton,
  Button,
  Popover,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import Product1 from "../../assets/images/product/hbeu50481548_001_350.webp";
import Product2 from "../../assets/images/product/hbeu50527932_404_350.webp";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    image: Product1,
    hoverImage: Product2,
    saleText: "Sale -20%",
    title: "Water-Repellent Padded Jacket with Tonal Logo",
    originalPrice: "₹21,100.00",
    discountedPrice: "₹16,500.00",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "Brown", code: "#8B4513" },
      { name: "Navy", code: "#000080" },
      { name: "Blue", code: "#4682B4" },
      { name: "Purple", code: "#800080" },
    ],
  },
  {
    id: 2,
    image: Product2,
    hoverImage: Product1,
    saleText: "Sale -40%",
    title: "Double-Breasted Coat in a Wool Blend",
    originalPrice: "₹46,000.00",
    discountedPrice: "₹25,700.00",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "Brown", code: "#8B4513" },
      { name: "Gray", code: "#808080" },
      { name: "Beige", code: "#F5F5DC" },
      { name: "Green", code: "#008080" },
      { name: "Navy", code: "#000080" },
      { name: "Red", code: "#FF0000" },
      { name: "Orange", code: "#FFA500" },
    ],
  },
  {
    id: 3,
    image: Product1,
    hoverImage: Product2,
    saleText: "Sale -30%",
    title: "Cotton-Terry Hoodie with Logo Patch",
    originalPrice: "₹11,100.00",
    discountedPrice: "₹7,750.00",
    sizes: ["M", "L", "XL", "XXL", "XXXL"],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "Brown", code: "#8B4513" },
      { name: "Gray", code: "#808080" },
    ],
  },
  {
    id: 4,
    image: Product2,
    hoverImage: Product1,
    saleText: "Sale -40%",
    title: "Double-Breasted Coat in a Wool Blend",
    originalPrice: "₹46,000.00",
    discountedPrice: "₹25,700.00",
    sizes: ["M", "L", "XL"],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "Brown", code: "#8B4513" },
      { name: "Gray", code: "#808080" },
      { name: "Beige", code: "#F5F5DC" },
      { name: "Green", code: "#008080" },
      { name: "Navy", code: "#000080" },
      { name: "Blue", code: "#4682B4" },
      { name: "Purple", code: "#800080" },
      { name: "Red", code: "#FF0000" },
      { name: "Orange", code: "#FFA500" },
    ],
  },
];

const ProductListing = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [colorSelections, setColorSelections] = useState({});
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleOpen = (event, productId) => {
    setAnchorEl({ element: event.currentTarget, productId });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColorSelect = (colorName, productId) => {
    setColorSelections((prev) => ({
      ...prev,
      [productId]: colorName,
    }));
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "color-popup" : undefined;

  const handleMouseEnter = (productId) => {
    setHoveredProduct(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  return (
    <Box sx={{ mt: "50px", px: { xs: "0px", md: "30px" } }}>
      <Grid container spacing={{ xs: 0.2, sm: 2, md: 3 }}>
        {products.map((product) => {
          const selectedColor = colorSelections[product.id] || "Black";
          const selectedColorCode = product.colors.find(
            (color) => color.name === selectedColor
          )?.code;

          return (
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={4}
              xl={3}
              key={product.id}
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={handleMouseLeave}
            >
              <Card
                sx={{
                  position: "relative",
                  borderRadius: "0px",
                  overflow: "visible",
                  boxShadow: "none",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    "&:hover .size-box": {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={product.image}
                    alt="Product"
                    sx={{
                      width: "100%",
                      height: "100%",
                      transition: "opacity 0.3s ease",
                    }}
                  />
                  <Box
                    onClick={() => navigate("/singleProduct")}
                    component="img"
                    src={product.hoverImage}
                    alt="Product Hover"
                    sx={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      opacity: hoveredProduct === product.id ? 1 : 0,
                      transition: "opacity 0.3s ease",
                      cursor: "pointer",
                    }}
                  />
                  <Box
                    className="size-box"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      padding: { xs: "8px", sm: "10px", md: "15px" },
                      textAlign: "start",
                      opacity: 0,
                      transform: "translateY(20px)",
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        mb: { xs: 1, sm: 1.5 },
                        fontSize: { xs: "8px", sm: "12px", md: "14px" },
                        mx: 1,
                      }}
                    >
                      <strong>Quick Shop</strong> (Select Your Size)
                    </Typography>
                    <Grid
                      container
                      spacing={{ xs: 1, sm: 2 }}
                      justifyContent="start"
                      alignItems="center"
                    >
                      {product.sizes.map((size) => (
                        <Grid item xs={3} sm={2.3} md={3} lg={2.3} key={size}>
                          <Box
                            sx={{
                              width: "100%",
                              height: { xs: "30px", sm: "35px", md: "40px" },
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                              fontSize: { xs: "12px", sm: "14px", md: "14px" },
                              fontWeight: "500",
                              "&:hover": {
                                textDecorationLine: "underline",
                                fontWeight: "800",
                              },
                            }}
                          >
                            {size}
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: { xs: "auto", sm: "15px" },
                      bottom: { xs: "-10px", sm: "auto" },
                      right: "15px",
                      background: "white",
                      border: "1px solid #eee",
                      borderRadius: "50%",
                      padding: "8px",
                      "&:hover": {
                        background: "rgba(255, 255, 255, 0.8)",
                      },
                    }}
                  >
                    <FavoriteBorderIcon
                      sx={{
                        color: "black",
                        fontWeight: "100",
                        fontSize: { xs: 16, sm: 26 },
                      }}
                    />
                  </IconButton>
                  <Typography
                    variant="body2"
                    sx={{
                      position: "absolute",
                      top: { xs: "4px", sm: "15px" },
                      left: { xs: "4px", sm: "-12px" },
                      background: "black",
                      color: "white",
                      padding: { xs: "4px 12px", sm: "2px 24px" },
                      fontSize: { xs: "8px", sm: "12px", md: "14px" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    {product.saleText}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    padding: "10px 15px 10px 0",
                    mt: { xs: 1, sm: 0 },
                    ml: { xs: 1, sm: 0 },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "black",
                      mb: 1,
                      fontSize: { xs: "12px", sm: "14px" },
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      textTransform: "uppercase",
                    }}
                  >
                    {product.title}
                  </Typography>
                  <Box
                    sx={{
                      display: { xs: "block", sm: "flex" },
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        textDecoration: "line-through",
                        color: "#000",
                        fontSize: { xs: "14px", sm: "16px" },
                        fontWeight: "600",
                      }}
                    >
                      {product.originalPrice}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#b51f29",
                        fontWeight: "bold",
                        fontSize: { xs: "16px", sm: "18px" },
                        fontWeight: "600",
                      }}
                    >
                      {product.discountedPrice}
                    </Typography>
                  </Box>
                  <Button
                    onClick={(event) => handleOpen(event, product.id)}
                    sx={{
                      color: "#000",
                      bgcolor: "#FFF",
                      my: 2,
                      border: "0.5px solid #000",
                      borderRadius: "0px",
                      textTransform: "capitalize",
                    }}
                  >
                    <Box
                      sx={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        backgroundColor: selectedColorCode,
                        display: "inline-block",
                        marginRight: 1,
                        border: "1px solid #ddd",
                      }}
                    ></Box>
                    +{product.colors.length - 1} Colors
                  </Button>
                </Box>
                <Popover
                  id={id}
                  open={open && anchorEl?.productId === product.id}
                  anchorEl={anchorEl?.element}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                >
                  <Typography variant="body1" sx={{ p: "10px 0 0 20px" }}>
                    Color: <strong>{selectedColor}</strong>
                  </Typography>
                  <Box
                    sx={{
                      padding: 2,
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, 40px)",
                      gap: 1,
                      maxWidth: 300,
                    }}
                  >
                    {product.colors.map((color) => (
                      <Box
                        key={color.name}
                        onClick={() =>
                          handleColorSelect(color.name, product.id)
                        }
                        sx={{
                          width: 30,
                          height: 30,
                          borderRadius: "50%",
                          backgroundColor: color.code,
                          border:
                            selectedColor === color.name
                              ? "1.5px solid #000"
                              : "1px solid #ddd",
                          cursor: "pointer",
                        }}
                        title={color.name}
                      />
                    ))}
                  </Box>
                </Popover>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProductListing;
