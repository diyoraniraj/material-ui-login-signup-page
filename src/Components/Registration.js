import React, { Fragment, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import CloseIcon from "@mui/icons-material/Close";
import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  IconButton,
  Snackbar,
  Card,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment } from "@material-ui/core";

const Registration = () => {
  const [open, setOpen] = React.useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname is required"),
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };
  return (
    <Fragment>
        <Box px={10} py={15}>
          <Grid container spacing={0}>
            <Card
              style={{ maxWidth: 1000, padding: "20px 5px", margin: "0 auto" }}
            >
              <Typography variant="h6" align="center" margin="dense">
                User-Registration Form
              </Typography>
              <Grid item xs={12}>
                <TextField
                  required
                  id="fullname"
                  name="fullname"
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  {...register("fullname")}
                  error={errors.fullname ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.fullname?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="username"
                  name="username"
                  label="Username"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  {...register("username")}
                  error={errors.username ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.username?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  {...register("email")}
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.email?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    // <-- This is where the toggle button is added.
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  margin="dense"
                  {...register("password")}
                  error={errors.password ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.password?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    // <-- This is where the toggle button is added.
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  {...register("confirmPassword")}
                  error={errors.confirmPassword ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.confirmPassword?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Controller
                      control={control}
                      name="acceptTerms"
                      defaultValue="false"
                      inputRef={register()}
                      render={({ field: { onChange } }) => (
                        <Checkbox
                          color="primary"
                          onChange={(e) => onChange(e.target.checked)}
                        />
                      )}
                    />
                  }
                  label={
                    <Typography
                      color={errors.acceptTerms ? "error" : "inherit"}
                    >
                      I have read and agree to the Terms *
                    </Typography>
                  }
                />
                <br />
                <Typography variant="inherit" color="textSecondary">
                  {errors.acceptTerms
                    ? "(" + errors.acceptTerms.message + ")"
                    : ""}
                </Typography>
              </Grid>
              
              <Box mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit(onSubmit)}
                  fullWidth
                >
                  Signup
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={2000}
                  message="User Registration Successfully !!!!"
                  action={action}
                  onClick={handleClick}
                />
                <Typography mt={2}>
                  if u have already Account ? <br />
                  click here to login
                </Typography>
              </Box>
            </Card>
          </Grid>
          <br />
        </Box>
    </Fragment>
  );
};

export default Registration;
