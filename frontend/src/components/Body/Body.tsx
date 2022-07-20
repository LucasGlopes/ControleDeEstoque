import React from "react";
import { Grid } from '@mui/material'
import FunctionsBar from "../FunctionsBar/FunctionsBar";
import { Route, Routes } from "react-router-dom";
import Stock from "../Stock/Stock";
import SalesHistory from "../SalesHistory/SalesHistory";
import Home from "../Home/Home";

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
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/estoque' element={<Stock/>} />
                <Route path='/historicoDeVendas' element={<SalesHistory/>} />
            </Routes>


        </Grid>
    )
}

export default Body;