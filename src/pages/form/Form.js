import React from "react";
import { Box, Tabs, Tab, Container } from "@mui/material";
import Login_form from "../login-form/Login_form";
import Register_form from "../Registration_form/Register_form";
import ActivateForm from "../activate_form/Activate_form";
import Login_form2 from "../login-form/Login_form2";

const Form = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <Container maxWidth="md">
        {/* Tabs */}
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{
            "& .MuiTab-root": {
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                textDecorationColor: "black",
                color: "#000",
              },
            },
            "& .Mui-selected": {
              textDecoration: "underline",
              textDecorationColor: "black",
              color: "#000",
            },
          }}
        >
          <Tab label="LOG IN" />
          <Tab label="REGISTER" />
          <Tab label="ACTIVATE" />
        </Tabs>
        <Box
          sx={{
            border: "1px solid #ccc",
          }}
        >
          {activeTab === 0 && (
            <>
              <Login_form2 />
            </>
          )}
          {activeTab === 1 && (
            <>
              <Register_form />
            </>
          )}
          {activeTab === 2 && (
            <>
              <ActivateForm />
            </>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default Form;
