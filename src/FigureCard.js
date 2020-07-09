import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import { IconButton, CardMedia } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const useStyles = makeStyles({

});

const FigureCard = (props) => {
    const classes = useStyles();
    const { title, subheader, imgSrc, weburl } = props;
    return (
        <Card className={classes.root}>
            <CardMedia style={{ height: "300px" }} image={imgSrc} />
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <ShoppingCartIcon />
                    </IconButton>
                }
                title={title}
                subheader={subheader}
            />

            <CardActions>
                <Button size="small">
                    <a className={classes.link} target="_blank" href={weburl}>
                        Buy Now
                    </a>
                </Button>
            </CardActions>
        </Card>
    );
};

export default FigureCard;
