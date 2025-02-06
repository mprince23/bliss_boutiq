import React from 'react';
import Box from "@mui/material/Box";
import {
    Button, Divider,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography
} from "@mui/material";
import img from '../../assets/images/cart/cartimg-1.webp'

function OrderProduct({handleComplete}) {
    const rows = [
        {name: 'Frozen yoghurt', calories: 159, fat: 6.0, image: img},
        {name: 'Ice cream sandwich', calories: 237, fat: 9.0, image: img}
    ];

    return (
        <Box mt={4}>
            <Grid container spacing={2}>
                {/* Product Table - Adjusts to screen size */}
                <Grid item xs={12} md={8}>
                    <Box>
                        <TableContainer component={Paper} sx={{boxShadow: 3}}>
                            <Table sx={{minWidth: 650}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Image</TableCell>
                                        <TableCell align="right">Product Name</TableCell>
                                        <TableCell align="right">Quantity</TableCell>
                                        <TableCell align="right">Price</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell>
                                                <Box>
                                                    <Typography component={'img'} src={row.image} alt="product"
                                                                sx={{width: "40px", borderRadius: "4px"}}/>
                                                </Box>
                                            </TableCell>
                                            <TableCell align="right">{row.name}</TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Grid>

                {/* Price Overview - Adjusts to screen size */}
                <Grid item xs={12} md={4}>
                    <Box sx={{
                        backgroundColor: "white", padding: "20px", borderRadius: "4px", boxShadow: 3,
                    }}>
                        <Typography
                            sx={{
                                fontSize: "16px", fontWeight: "600", borderBottom: "1px solid #E4E4E4", pb: 2,
                            }}
                        >
                            Overview
                        </Typography>
                        <Box display={"flex"} justifyContent={"space-between"} py={2}>
                            <Typography sx={{fontSize: "18px"}}>Price</Typography>
                            <Typography> ₹5</Typography>
                        </Box>
                        <Box display={"flex"} justifyContent={"space-between"} pt={0}>
                            <Typography sx={{fontSize: "18px"}}>Standard delivery</Typography>
                            <Typography pb={2}>₹100</Typography>
                        </Box>

                        <Box pb={2} sx={{borderBottom: "1px solid #E4E4E4"}}>
                            <Typography sx={{fontSize: "18px"}}>Got a promotion code?</Typography>
                            <Box sx={{display: "flex", alignItems: "center", width: "100%"}}>
                                <TextField
                                    variant="outlined"
                                    placeholder="Enter code"
                                    sx={{
                                        borderRadius: "0px",
                                        flexGrow: 1,
                                        "& .MuiOutlinedInput-root": {
                                            borderTopRightRadius: 0,
                                            borderBottomRightRadius: 0,
                                            borderTopLeftRadius: 0,
                                            borderBottomLeftRadius: 0,
                                        },
                                    }}
                                />
                                <Button
                                    sx={{
                                        borderRadius: "0px", padding: "15.5px 50px", color: "white", bgcolor: "#000",
                                        ":hover": {bgcolor: "#000"},
                                    }}
                                >
                                    Apply
                                </Button>
                            </Box>
                        </Box>

                        <Box display={"flex"} justifyContent={"space-between"} py={1}>
                            <Typography>Total Price</Typography>
                            <Typography>₹105</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            {/* Go to Payment Button */}
            <Box>
                <Button
                    sx={{
                        width: "100%", margin: "20px 0px", textTransform: "unset", border: "1px solid black",
                        padding: "16px 18px", fontSize: "16px", fontWeight: "500", borderRadius: "0px", color: "#000",
                        '&:hover': {
                            backgroundColor: "#000", color: "white",
                        }
                    }}
                    onClick={() => handleComplete()}
                >
                    Go To Payment
                </Button>
            </Box>
        </Box>
    );
}

export default OrderProduct;
