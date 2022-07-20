import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import StockItem from '../StockItem/StockItem';
import './style.css';

interface StockItemProps {
    _id: string;
    name: string;
    price: number;
    quantity: number
}

interface StockProps {
    items: Array<StockItemProps>;
    getItems: () => void;
}

const Stock: React.FC<StockProps> = (props) => {

    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            align-items="center"
            sx={{
                width: '75%',
                height: '70%',
                border: '5px solid rgb(240, 103, 40)',
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
                        _id={item._id}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        getItems={props.getItems}
                    />
                ))}


            </div>

        </Grid>

    )
}

export default Stock;