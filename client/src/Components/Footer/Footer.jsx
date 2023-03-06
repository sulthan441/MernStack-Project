import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Container,
    Grid,
    Link,
    List,
    ListItem,
    ListItemText,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: '#26282b',
      color: '#fff',
      padding: theme.spacing(4),
    },
    listItemText: {
      color: '#fff',
    },
  }));
  

const Footer = () => {
    const classes = useStyles();

    return (
        <Box className={classes.footer}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" gutterBottom>
                            car&bike
                        </Typography>
                  
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="subtitle1" gutterBottom>
                            About Us
                        </Typography>
                        <List component="nav" aria-label="about us">
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="New Cars" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Used Cars" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="New Bikes" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Sell Your Car" />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="subtitle1" gutterBottom>
                            Terms and Conditions
                        </Typography>
                        <List component="nav" aria-label="terms and conditions">
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Privacy Policy" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Investor Relations" />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2}>
                        <Typography variant="subtitle1" gutterBottom>
                            Popular Car Brands
                        </Typography>
                        <List component="nav" aria-label="popular car brands">
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Maruti Suzuki" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Hyundai" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Tata" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Volkswagen" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Honda" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Mahindra" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="kia" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Kia" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="MG" />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2}>
                        <Typography variant="subtitle1" gutterBottom>
                            Popular Car Models
                        </Typography>
                        <List component="nav" aria-label="popular car models">
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Mahindra XUV 700" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Kia Seltos" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Mahindra Thar" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Tata Nexon" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Kia Sonet" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Tata Punch" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="MG Hector" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Honda City" />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2}>
                        <Typography variant="subtitle1" gutterBottom>
                            Popular Bike Brands
                        </Typography>
                        <List component="nav" aria-label="popular bike brands">
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Royal Enfield" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Honda" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="KTM" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Bajaj" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Yamaha" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="TVS" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Hero" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Kawasaki" />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2}>
                        <Typography variant="subtitle1" gutterBottom>
                            Popular Bike Models
                        </Typography>
                        <List component="nav" aria-label="popular bike models">
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Royal Enfield Classic 350" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Yamaha MT-15" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Yamaha MT-15" />
                            </ListItem>


                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Yamaha MT-15" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Bajaj Pulsar 220" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="KTM RC 200" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText classes={{ primary: classes.listItemText }} primary="Hero Splendor Plus" />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="subtitle1" gutterBottom>
                            Keep in Touch
                        </Typography>
                        <List component="nav" aria-label="keep in touch">
                            <ListItem button>
                                <Link href="#" color="inherit">
                                    <ListItemText classes={{ primary: classes.listItemText }} primary="Facebook" />
                                </Link>
                            </ListItem>
                            <ListItem button>
                                <Link href="#" color="inherit">
                                    <ListItemText classes={{ primary: classes.listItemText }} primary="Twitter" />
                                </Link>
                            </ListItem>
                            <ListItem button>
                                <Link href="#" color="inherit">
                                    <ListItemText classes={{ primary: classes.listItemText }} primary="Instagram" />
                                </Link>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
                <Box mt={3} textAlign="center">
                    <Typography variant="body2" gutterBottom>
                        © {new Date().getFullYear()} car&bike. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};
export default Footer;

