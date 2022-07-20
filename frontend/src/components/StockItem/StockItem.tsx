import Button from "@mui/material/Button";
import React, { useState } from "react";
import './style.css'
import api from "../../services/api";
import UpdateItemModal from "../UpdateItemModal/UpdateItemModal";

interface StockItemProps {
    _id: string;
    name: string;
    price: number;
    quantity: number
    getItems: () => void;
}

const StockItem: React.FC<StockItemProps> = (props) => {
    const [isUpdateItemOpen, setIsUpdateItemOpen] = useState(false);
    
    const deleteItem = async () => {
        try {
            await api.delete(`/items/${props._id}`);
            props.getItems();
        }
        catch {
            console.log('deu ruim');
        }
    }

    return (
        <>
            <div className="container">
                <h1>{props.name}</h1>
                <h2>{props.quantity}</h2>
                <h2>R$ {props.price}</h2>
                <div className="buttons">
                    <Button variant="outlined" sx={{marginBottom: '3px'}} onClick={() => setIsUpdateItemOpen(true)}>Editar</Button>
                    <Button variant="outlined" color="error" onClick={deleteItem}>Deletar</Button>

                </div>
                
            </div>
                {isUpdateItemOpen && 
                    <UpdateItemModal 
                        setIsUpdateItemOpen={setIsUpdateItemOpen} 
                        getItems={props.getItems}
                        _id={props._id}
                        name={props.name}
                        price={props.price}
                        quantity={props.quantity}
                    />
                }
        
        </>
    )
}

export default StockItem;