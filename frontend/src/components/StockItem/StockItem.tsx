import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";
import './style.css'
import api from "../../services/api";

interface StockItemProps {
    _id: string;
    name: string;
    price: number;
    quantity: number
    getItems: () => void;
}

const StockItem: React.FC<StockItemProps> = (props) => {
    const deleteItem = async () => {
        try {
            await api.delete("/items/" + props._id);
            props.getItems();
        }
        catch {
            console.log('deu ruim');
        }
    }

    return (

        <div className="container">
            <h1>{props.name}</h1>
            <h2>{props.quantity}</h2>
            <h2>R$ {props.price}</h2>
            <div className="buttons">
                <Button variant="outlined" sx={{marginBottom: '3px'}}>Editar</Button>
                <Button variant="outlined" color="error" onClick={deleteItem}>Deletar</Button>

            </div>
        </div>
    )
}

export default StockItem;