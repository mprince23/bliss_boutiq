import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import img1 from "../../assets/images/product/CategorySection/1.jpeg";
import img2 from "../../assets/images/product/CategorySection/2.jpeg";
import img3 from "../../assets/images/product/CategorySection/3.jpeg";
import img4 from "../../assets/images/product/CategorySection/4.jpeg";

const categories = [
  {
    label: "Clothing",
    imgSrc: img1,
  },
  {
    label: "Shoes",
    imgSrc: img2,
  },
  {
    label: "Accessories",
    imgSrc: img3,
  },
  {
    label: "New In",
    imgSrc: img4,
  },
];

const CategorySection = () => {
  return (
    <Box sx={{ bgcolor: "#f9f9f9", py: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "50px" }}>
        {categories.map((category, index) => (
          <Box textAlign="center" key={index}>
            <Typography
              component={"img"}
              src={category.imgSrc}
              alt={category.label}
              sx={{
                width: 80,
                height: 80,
                margin: "0 auto",
                bgcolor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "50%",
                objectFit: "contain",
              }}
            />
            <Typography
              sx={{ mt: 1, fontWeight: "500", fontSize: "14px", color: "#666" }}
            >
              {category.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CategorySection;
