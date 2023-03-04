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

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '100vh',
        backgroundImage: "url('https://images.unsplash.com/photo-1485965120184-e220f721d03e')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
       
    },
    card: {
        width: 350,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: "20px",
        borderRadius: "7px",
        marginRight: theme.spacing(2),
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
        },
    },

    button: {
        margin: theme.spacing(1),
        backgroundColor: '#1877f2',
        color: 'white',
        '&:hover': {
            backgroundColor: '#115293',
        },
    },
    googleButton: {
        margin: theme.spacing(1),
        backgroundColor: '#db4437',
        color: 'white',
        '&:hover': {
            backgroundColor: '#c7362c',
        }
    }

}));

const Login = () => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);
    };

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <form onSubmit={handleSubmit}>
                    <CardHeader  title="Login to ShopZen" style={{ fontWeight: 'bolder' }} />
                    <CardContent>
                        <TextField
                            className={classes.inputField}
                            label=" Enter email adress"
                            variant="outlined"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <TextField
                            className={classes.inputField}
                            label=" Enter password"
                            variant="outlined"
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </CardContent>
                    <CardActions>
                        <Button
                            className={classes.submitButton}
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Login
                        </Button>
                    </CardActions>
                </form>
                <p style={{ fontSize: "10px", marginRight: "50%" }}>Do you have an account ? <span style={{ color: "red", cursor: "pointer" }}> </span></p>

                <div className={classes.divider}>
                    <span>Or login with</span>                  
                </div>
                <div style={{ justifyContent: "space-between", display: "flex" }}>
                    <Button className={classes.googleButton} fullWidth>
                        Google
                    </Button>
                    <Button className={classes.button} fullWidth>
                        Facebook
                    </Button>
                </div>
            </Card>
        </div>
    )
}



export default Login;
