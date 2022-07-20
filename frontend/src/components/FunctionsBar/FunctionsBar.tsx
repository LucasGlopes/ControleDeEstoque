import React from "react";
import { Button, Grid } from '@mui/material'
import FunctionButton from "../FunctionButton/FunctionButton";

const FunctionsBar: React.FC = () => {

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            sx={{
                width: '50%',
                // backgroundColor: 'bluse',
            }}
        >
            <FunctionButton title={"Ver Estoque"} />
            <FunctionButton title={"Novo Item"} />
            <FunctionButton title={"Nova Venda"} />
            <FunctionButton title={"Histórico de Vendas"} />

        </Grid>
    )
}

export default FunctionsBar;