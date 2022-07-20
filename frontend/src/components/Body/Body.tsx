import React from "react";
import { Grid } from '@mui/material'
import FunctionsBar from "../FunctionsBar/FunctionsBar";

const Body: React.FC = () => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
                width: '100vw',
                height: '90%',
            }}
        >
            <FunctionsBar />
        </Grid>
    )
}

export default Body;