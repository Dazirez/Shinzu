import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Container, Typography, Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    icon: {},
    heroContent: {
        height: "400px",
        backgroundImage: `url(https://wallpapercave.com/wp/wp1812736.jpg)`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        marginBottom: "25px",
    },
    heroButtons: {},
}));

const Featured = () => {
    const classes = useStyles();
    return (
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    gutterBottom>
                    Buy and Sell
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color="textSecondary"
                    paragraph>
                    Authentic Figures
                </Typography>
                <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary">
                                Browse
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="secondary">
                                List an Item
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default Featured;
