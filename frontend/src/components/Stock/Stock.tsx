import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import StockItem from '../StockItem/StockItem';
import './style.css';

interface StockItemProps {
    id: string;
    name: string;
    price: number;
    quantity: number
}

interface StockProps {
    items: Array<StockItemProps>;
}

const Stock: React.FC<StockProps> = (props) => {

    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            align-items="center"
            sx={{
                width: '70%',
                height: '70%',
                border: '5px solid #1A1918',
                borderRadius: '10px',
            }}
        >
            <div className="stockHeader">
                <h1>Item</h1>
                <h2>Quantidade</h2>
                <h2>Preço</h2>
                <h2>Opções</h2>
            </div>
            <div className='stockBody'>
                {props.items.slice(0).reverse().map((item: StockItemProps) => (
                    <StockItem 
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                    />
                ))}


            </div>

        </Grid>

    )
}

export default Stock;