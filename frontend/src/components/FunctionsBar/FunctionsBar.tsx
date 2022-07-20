import React from "react";
import { Grid } from '@mui/material'
import FunctionButton from "../FunctionButton/FunctionButton";
import { Link } from "react-router-dom";

const FunctionsBar: React.FC = () => {

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            sx={{
                width: '50%',
            }}
        >
            <FunctionButton title={"Ver Estoque"} />
            <FunctionButton title={"Novo Item"} />
            <FunctionButton title={"Nova Venda"} />

        </Grid>
    )
}

export default FunctionsBar;