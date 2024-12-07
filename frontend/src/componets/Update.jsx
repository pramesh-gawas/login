import { useState } from "react";
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid2,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { UpdateTaskById } from "./api";
import { useNavigate, Link, useLocation } from "react-router-dom";

export const Update = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});
  const Navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const receivedID = location.state;
    console.log(receivedID);
    console.log(event);

    const id = receivedID;
    const obj = {
      username,
      password,
      email,
    };

    if (!validate()) return;

    try {
      const { message, success } = await UpdateTaskById(id, obj);
      if (success?.status == false) {
        //success toast
        alert(message, "error");
      } else {
        //error toast
        alert(message, "success");
        Navigate("/list ");
      }
    } catch (err) {
      console.error("failed to create task ", err);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!username) {
      newErrors.username = "username is required";
    }
    if (!email) {
      newErrors.email = "email is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Update user
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={!!errors.username}
            helperText={errors.username}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Update User
          </Button>
          <Grid2 container>
            {/* <Grid2 item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid2> */}
            <Grid2>
              <Link to="/login" variant="body2">
                {"already have an account? Sign Up"}
              </Link>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </Container>
  );
};
