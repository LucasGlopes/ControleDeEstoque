import React from "react";
import './style.css'
import caixa from '../../imgs/caixa.png';

const NavBar: React.FC = () => {
    return (
        <div className="navBarContainer">
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
        </div>
    )
}

export default NavBar;