import React from "react";
import './style.css'

interface StockItemProps {
    id: string;
    name: string;
    price: number;
    quantity: number
}

const StockItem: React.FC<StockItemProps> = (props) => {
    return (

        <div className="container">
            <h1>{props.name}</h1>
            <h2>{props.quantity}</h2>
            <h2>R$ {props.price}</h2>
            <div>
                <h3>editar</h3>
                <h3>editar</h3>

            </div>
        </div>
    )
}

export default StockItem;