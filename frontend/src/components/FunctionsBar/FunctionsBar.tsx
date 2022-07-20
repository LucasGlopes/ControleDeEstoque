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
                // backgroundColor: 'bluse',
            }}
        >
            <Link to='/estoque' style={{ textDecoration: 'none' }}>
                <FunctionButton title={"Ver Estoque"} />
            </Link>  
            <FunctionButton title={"Novo Item"} />
            <FunctionButton title={"Nova Venda"} />
            <Link to='/historicoDeVendas' style={{ textDecoration: 'none' }}>
                <FunctionButton title={"Histórico de Vendas"} />
            </Link>

        </Grid>
    )
}

export default FunctionsBar;