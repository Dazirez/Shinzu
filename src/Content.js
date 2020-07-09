import React from "react";
import FigureCard from "./FigureCard";
import { Grid } from "@material-ui/core";
import figureList from "./constants";
const Content = () => {
    const getFigureCard = (figureCardObj) => {
        return (
            <Grid item xs={12} sm={3}>
                <FigureCard {...figureCardObj} />;
            </Grid>
        );
    };

    return (
        <Grid container spacing={4}>
            {figureList.map((figureCardObj) => getFigureCard(figureCardObj))}
        </Grid>
    );
};

export default Content;
