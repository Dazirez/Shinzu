import React from "react";
import FigureCard from "./FigureCard";
import { Grid } from "@material-ui/core";

const Content = () => {
    
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
                <FigureCard
                    title="Zero Two"
                    subheader="$280"
                    imgSrc="https://static.myfigurecollection.net/pics/figure/large/675949.jpg"
                    description="Aniplex"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <FigureCard
                    title="James"
                    subheader="$280"
                    imgSrc="https://static.myfigurecollection.net/pics/figure/large/941780.jpg"
                    description="Aniplex"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <FigureCard
                    title="Jason"
                    subheader="$280"
                    imgSrc="https://static.myfigurecollection.net/pics/figure/large/157022.jpg"
                    description="Aniplex"
                />
            </Grid>
        </Grid>
    );
};

export default Content;
