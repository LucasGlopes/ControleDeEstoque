import React from "react";
import { Grid } from '@mui/material'
import FunctionsBar from "../FunctionsBar/FunctionsBar";
import Stock from "../Stock/Stock";

const Body: React.FC = () => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="space-around"
            alignItems="center"
            sx={{
                width: '100vw',
                height: '90%',
            }}
        >
            <FunctionsBar />
            <Stock />

        </Grid>
    )
}

export default Body;