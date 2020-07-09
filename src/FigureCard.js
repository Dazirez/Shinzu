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
    root: {
        minWidth: 275,
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const FigureCard = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const { title, subheader, description, imgSrc, weburl } = props;
    return (
        <Card className={classes.root}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <ShoppingCartIcon />
                    </IconButton>
                }
                title={title}
                subheader={subheader}
            />
            <CardMedia style={{ height: "400px" }} image={imgSrc} />
            <CardContent>
                <Typography variant="body2" component="p">
                    {description}
                </Typography>
            </CardContent>
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
