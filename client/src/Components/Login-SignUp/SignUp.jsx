import React ,{useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  TextField,
  Button,
  // Link,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';




import { signUpAction } from '../../Redux/Action/Action.js';
import { Reducer, useDispatch } from 'react-redux';

import store from '../../Redux/store';
import { useSelector } from 'react-redux';

import signupReducer from '../../Redux/Reducer/Reducer';
import { Link } from 'react-router-dom';
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
    backgroundColor: 'primary',
    color:"primary"
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

const dispatch = useDispatch();




const [signUp,setSignUp]= useState({
  username:"",
  email:"",
  password:"",
  confirmPassword:"",
})

const handleSignUpChange =(e)=>{
  e.preventDefault();
  setSignUp({
    ...signUp,
    [e.target.name] : e.target.value
  })
}

const handleSubmitButton = () => {




  if (!signUp.username.trim()) {
    // username is empty or contains only whitespace
    alert('Please enter a valid username');
    return;
  }

  if (!signUp.email.trim() || !/\S+@\S+\.\S+/.test(signUp.email)) {
    // email is empty or invalid
    alert('Please enter a valid email');
    return;
  }

  if (!signUp.password.trim() || signUp.password.length < 6) {
    // password is empty or less than 6 characters
    alert('Please enter a valid password (at least 6 characters)');
    return;
  }

  if (signUp.password !== signUp.confirmPassword) {
    // password and confirm password do not match
    alert('Password and confirm password do not match');
    return;
  }

  // all edge cases passed, form can be submitted
  alert('Registered SuccessFully');
  // console.log(signUp)

  dispatch(signUpAction(signUp))


  // console.log(users)

};








  const classes = useStyles();

  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item xs={12} md={6}>
        <div style={{ position: 'relative', width :"90%" ,height:"100%" }}>
          <img src="https://img.freepik.com/free-photo/motocross-rider-action-motocross-sport-moto-sport_654080-147.jpg?w=1060&t=st=1677963026~exp=1677963626~hmac=3daef2bfe5d0ccbc5ced4aab8f392c5d1ff0e429d95b7fd8658ddefb2e4f11da" alt="E-commerce" className={classes.image} />
          <div style={{ position: 'absolute', top: -20, left: 20, padding: '1rem', zIndex: 1 }}>
            <h3 style={{color:"#04171d" ,lineHeight:"26px" ,textAlign:"center" ,fontFamily:"cursive"}}>
              Welcome to our online store <br /> Sign up with your email <br /> and explore <br /> your dream vehicle today???????
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
          onChange={handleSignUpChange}
          name="username"
          value={signUp.username}
        />

        <TextField
          id="email"
          label="Email Address"
          variant="outlined"
          className={classes.formControl}
          fullWidth
          onChange={handleSignUpChange}
          name="email"
          value={signUp.email}
        />

        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          className={classes.formControl}
          fullWidth
          onChange={handleSignUpChange}
          name="password"
          value={signUp.password}
        />

        <TextField
          id="confirm-password"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          className={classes.formControl}
          fullWidth
          onChange={handleSignUpChange}
          name="confirmPassword"
          value={signUp.confirmPassword}
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
          onClick={handleSubmitButton}
        >
          Sign Up
        </Button>

        <Grid container justify="center">
          <Grid item>
            <h4>Already have an account ?    <Link to="/login">Login</Link>         </h4>
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
