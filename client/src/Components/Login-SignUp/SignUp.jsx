import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    width: '50%',
    border: `1px solid ${theme.palette.grey[300]}`,
    padding: theme.spacing(2),
  },
  formControl: {
    marginBottom: theme.spacing(2),
  },
  socialButton: {
    textTransform: 'none',
    margin: theme.spacing(1),
  },
  image: {
    width: '90%',
    height: '90%',
    objectFit: 'cover',
  },
  '@media (max-width: 600px)': {
    image: {
      width: '100%',
    },
  },
}));

export default function SignupForm() {
  const classes = useStyles();

  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item xs={12} md={6}>
        <div style={{ position: 'relative', width :"90%" ,height:"100%" }}>
          <img src="https://img.freepik.com/free-photo/motocross-rider-action-motocross-sport-moto-sport_654080-147.jpg?w=1060&t=st=1677963026~exp=1677963626~hmac=3daef2bfe5d0ccbc5ced4aab8f392c5d1ff0e429d95b7fd8658ddefb2e4f11da" alt="E-commerce" className={classes.image} />
          <div style={{ position: 'absolute', top: -20, left: 20, padding: '1rem', zIndex: 1 }}>
            <h3 style={{color:"#04171d" ,lineHeight:"26px" ,textAlign:"center" ,fontFamily:"cursive"}}>
              Welcome to our online store <br /> Sign up with your email <br /> and explore <br /> your dream vehicle today🏎️
            </h3>
          </div>
        </div>
      </Grid>

      <Grid item xs={12} md={6} container direction="column">
        <Typography variant="h5" align="center" gutterBottom>
          Sign Up
        </Typography>

        <TextField
          id="username"
          label="Username"
          variant="outlined"
          className={classes.formControl}
          fullWidth
        />

        <TextField
          id="email"
          label="Email Address"
          variant="outlined"
          className={classes.formControl}
          fullWidth
        />

        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          className={classes.formControl}
          fullWidth
        />

        <TextField
          id="confirm-password"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          className={classes.formControl}
          fullWidth
        />

        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="I agree to the terms and conditions."
          className={classes.formControl}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
        >
          Sign Up
        </Button>

        <Grid container justify="center">
          <Grid item>
            <Link href="#" variant="body2">
              Already have an account? Log in
            </Link>
          </Grid>
        </Grid>

        <Typography variant="body2" align="center" gutterBottom>
          Or sign up with social media
        </Typography>

        <Grid container justify="center">
          <Button
            variant="outlined"
            color="primary"
            className={classes.socialButton}
          >
            Sign up with Facebook
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            className={classes.socialButton}
          >
            Sign up with Google
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
