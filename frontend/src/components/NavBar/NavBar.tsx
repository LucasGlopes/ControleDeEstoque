import React from "react";
import './style.css'
import caixa from '../../imgs/caixa.png';
import { Grid } from "@mui/material";

const NavBar: React.FC = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
                backgroundColor: "rgb(240, 103, 40)",
                color: "white",
                height: '10%'
            }}
        >
                <div className="logo">
                    <h1>
                        Controle de Estoque
                    </h1>
                    <img 
                        src={caixa} 
                        alt="Alien inside spaceship"
                        style={{width: '4rem'}}     
                    />
                </div>

        </Grid>

    )
}

export default NavBar;