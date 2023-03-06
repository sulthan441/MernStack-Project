import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    TextField,
    Button,
    Grid,
    Card,
    CardHeader,
    CardContent,
    CardActions,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import store from '../../Redux/store';
import signupReducer from '../../Redux/Reducer/Reducer';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100vh',
        backgroundImage: "url('https://images.unsplash.com/photo-1485965120184-e220f721d03e')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // fontFamily: "'Karantina', cursive, 'Philosopher', sans-serif, 'Source Sans Pro', sans-serif, 'Trochut', cursive, 'Ubuntu', sans-serif",
    }
    ,
    card: {
        width: 350,
        backgroundColor: 'rgb(255 244 245 / 85%)',
        padding: "20px",
        borderRadius: "7px",
        marginRight: theme.spacing(2),
        // color:"white"
    },
    inputField: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    submitButton: {
        height: "45px",
        width: '100%',
        marginTop: theme.spacing(0),
    },
    divider: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        '&::before': {
            content: '""',
            flexGrow: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            height: 1,
            marginRight: theme.spacing(1),
        },
        '&::after': {
            content: '""',
            flexGrow: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            height: 1,
            marginLeft: theme.spacing(1),
        }
    },


    button: {
        margin: theme.spacing(1),
        backgroundColor: '#1877f2',
        color: 'white',
        '&:hover': {
            backgroundColor: '#115293',
        },
        marginTop: theme.spacing(5),
        padding: "14px"
    },
    googleButton: {
        margin: theme.spacing(1),
        backgroundColor: '#db4437',
        color: 'white',
        '&:hover': {
            backgroundColor: '#c7362c',
        },
        marginTop: theme.spacing(5)
    }

}));

const Login = () => {


    // const storeData = store.getState();
    // console.log(storeData)

    const user = useSelector(state=>state.users)
    console.log(user)
    const classes = useStyles();

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e)=>{
        setLogin({
            ...login,
            [e.target.name ] :e.target.value
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(login)
    };

    return (
        <div className={classes.root}>


            <div className={classes.loginQuote} style={{ textAlign: "center", marginLeft: "5%" }}>
                <div style={{ textAlign: "left", float: "left" }}>
                    <h1 style={{ color: "white", marginRight: "40%", margin: "2rem 0", fontSize: "55px", fontFamily: "Helvetica, sans-serif", marginTop: "20px" }}>
                        Your ultimate <span style={{ color: "rgb(251 40 119)" }}>shopping</span> <br /> <span style={{ color: "rgb(251 40 119)" }}>destination</span> awaits 🚲<br />
                    </h1>
                    <h4 style={{ color: "rgb(851 80 119)", marginTop: "-25px" }}>Login to discover your dream vehicle!</h4>

                </div>
            </div>




            <Card className={classes.card}>
                <form onSubmit={handleSubmit}>
                    <CardHeader title={<h3 style={{ margin: "0" }} >Login to ShopZen</h3>} />
                    <CardContent>
                        <TextField
                            className={classes.inputField}
                            label=" Enter email adress"
                            variant="outlined"
                            // value={login.email}
                            name="email"
                            onChange={handleChange}
                        />
                        <TextField
                            className={classes.inputField}
                            label=" Enter password"
                            variant="outlined"
                            type="password"
                            // value={login.password}
                            name="password"
                            onChange={handleChange}
                        />
                    </CardContent>
                    <CardActions>
                        <Button
                            className={classes.submitButton}
                            variant="contained"
                            color="secondary"
                            type="submit"
                        >
                            Login
                        </Button>
                    </CardActions>
                </form>
               <p style={{ fontSize: "12px", marginRight: "65%" ,fontWeight:"600" }}>New here ?<span style={{ color: "crimson", cursor: "pointer" }}>  <Link to="/signup">SignUp</Link>  </span></p>
            

                <div className={classes.divider}>
                    <span>Or login with</span>
                </div>
                <div style={{ justifyContent: "space-between", display: "flex" }}>
                    <Button className={classes.googleButton} fullWidth>
                        Google
                    </Button>
                    <Button className={classes.button} fullWidth>
                        Facebook and 
                    </Button>
                </div>
            </Card>
        </div>
    )
}



export default Login;
