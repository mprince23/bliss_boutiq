import React, {useState} from "react";
import {
    Box,
    Typography,
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
    TextField,
    Paper,
} from "@mui/material";
import {useNavigate} from "react-router-dom";

const PaymentPage = ({setActiveStep}) => {
    const [paymentMethod, setPaymentMethod] = useState(""); // State for selected payment method
    const [cardDetails, setCardDetails] = useState({
        cardNumber: "",
        expiry: "",
        cvv: "",
    });
    const navigate = useNavigate();
    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleCardDetailsChange = (e) => {
        const {name, value} = e.target;
        setCardDetails({...cardDetails, [name]: value});
    };

    const handlePayment = () => {
        if (paymentMethod === "card") {
            if (!cardDetails.cardNumber || !cardDetails.expiry || !cardDetails.cvv) {
                alert("Please fill in all card details.");
                return;
            }
            console.log("Processing card payment...", cardDetails);
        } else if (paymentMethod === "upi") {
            console.log("Processing UPI payment...");
        } else if (paymentMethod === "net_banking") {
            console.log("Processing net banking payment...");
        } else if (paymentMethod === "cod") {
            alert("Order placed successfully with Cash on Delivery.");
            console.log("Order confirmed with Cash on Delivery.");
            navigate("/");
        } else {
            alert("Please select a payment method.");
        }
    };

    return (
        <Box
            sx={{
                maxWidth: "600px",
                margin: "0 auto",
                padding: "20px",
                backgroundColor: "#f9f9f9",
                borderRadius: 4,
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                mt: 5
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    mb: 4,
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#333",
                }}
            >
                Payment Page
            </Typography>

            <Paper
                sx={{
                    padding: 3,
                    marginBottom: 4,
                    borderRadius: 4,
                    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Typography variant="h6" sx={{mb: 2, fontWeight: 600}}>
                    Select Payment Method:
                </Typography>
                <RadioGroup
                    value={paymentMethod}
                    onChange={handlePaymentMethodChange}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                    }}
                >
                    <FormControlLabel
                        value="card"
                        control={<Radio/>}
                        label="Credit/Debit Card"
                        sx={{
                            backgroundColor: "#fff",
                            borderRadius: 2,
                            padding: 1,
                            "&:hover": {
                                backgroundColor: "#f0f0f0",
                            },
                        }}
                    />
                    <FormControlLabel
                        value="upi"
                        control={<Radio/>}
                        label="UPI"
                        sx={{
                            backgroundColor: "#fff",
                            borderRadius: 2,
                            padding: 1,
                            "&:hover": {
                                backgroundColor: "#f0f0f0",
                            },
                        }}
                    />
                    <FormControlLabel
                        value="net_banking"
                        control={<Radio/>}
                        label="Net Banking"
                        sx={{
                            backgroundColor: "#fff",
                            borderRadius: 2,
                            padding: 1,
                            "&:hover": {
                                backgroundColor: "#f0f0f0",
                            },
                        }}
                    />
                    <FormControlLabel
                        value="cod"
                        control={<Radio/>}
                        label="Cash on Delivery (COD)"
                        sx={{
                            backgroundColor: "#fff",
                            borderRadius: 2,
                            padding: 1,
                            "&:hover": {
                                backgroundColor: "#f0f0f0",
                            },
                        }}
                    />
                </RadioGroup>
            </Paper>

            {paymentMethod === "card" && (
                <Box
                    sx={{
                        mb: 4,
                        padding: 3,
                        borderRadius: 4,
                        backgroundColor: "#fff",
                        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <Typography variant="h6" sx={{mb: 2, fontWeight: 600}}>
                        Enter Card Details:
                    </Typography>
                    <TextField
                        fullWidth
                        label="Card Number"
                        name="cardNumber"
                        value={cardDetails.cardNumber}
                        onChange={handleCardDetailsChange}
                        sx={{mb: 2}}
                    />
                    <TextField
                        fullWidth
                        label="Expiry Date (MM/YY)"
                        name="expiry"
                        value={cardDetails.expiry}
                        onChange={handleCardDetailsChange}
                        sx={{mb: 2}}
                    />
                    <TextField
                        fullWidth
                        label="CVV"
                        name="cvv"
                        value={cardDetails.cvv}
                        onChange={handleCardDetailsChange}
                        sx={{mb: 2}}
                    />
                </Box>
            )}

            {paymentMethod === "upi" && (
                <Box
                    sx={{
                        mb: 4,
                        padding: 3,
                        borderRadius: 4,
                        backgroundColor: "#fff",
                        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <Typography variant="h6" sx={{mb: 2, fontWeight: 600}}>
                        Enter UPI ID:
                    </Typography>
                    <TextField fullWidth label="UPI ID" placeholder="example@upi"/>
                </Box>
            )}

            {paymentMethod === "net_banking" && (
                <Box
                    sx={{
                        mb: 4,
                        padding: 3,
                        borderRadius: 4,
                        backgroundColor: "#fff",
                        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <Typography variant="h6" sx={{mb: 2, fontWeight: 600}}>
                        Select Your Bank:
                    </Typography>
                    <TextField fullWidth label="Bank Name" placeholder="Enter bank name"/>
                </Box>
            )}
 
            <Box sx={{textAlign: "center"}}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handlePayment}
                    sx={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        borderRadius: 4,
                        bgcolor: "#000",
                        ":hover": {
                            bgcolor: "#000",
                        }
                    }}
                    // onClick={() => setActiveStep((prev) => prev + 1)}
                >
                    Pay Now
                </Button>
            </Box>
        </Box>
    );
};

export default PaymentPage;
