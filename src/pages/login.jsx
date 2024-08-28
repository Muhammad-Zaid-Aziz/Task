import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Login = () => {
  return (
    <>
      <Box sx={{ width: "500px" }}>
        <Typography
          sx={{
            fontSize: "24px",
            color: "blue",
            fontWeight: "600",
            fontFamily: "Monospace",
          }}
        >
          SignIn
        </Typography>
        <Box>
          <Typography> Email</Typography>
          <input type="email" />
        </Box>
        <Box>
          <Typography>Password</Typography>
          <input />
        </Box>
        <Button variant="contained" sx={{ mt: "10px" }}>
          Login
        </Button>
      </Box>
    </>
  );
};

export default Login;
