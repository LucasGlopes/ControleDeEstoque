import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import api from '../../services/api';
import './style.css'

interface ItemModalProps {
    setIsAddItemOpen: (addItemState: boolean) => void;
    getItems: () => void;
}

const ItemModal: React.FC<ItemModalProps> = (props) => {
    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity] = useState(0);
    const [itemPrice, setItemPrice] = useState(0);


    const addItem = async () => {
        const item = {
            name: itemName,
            quantity: itemQuantity,
            price: itemPrice
        }

        console.log(item)

        try{
            await api.post("/items/add", item);
            await props.getItems();
            props.setIsAddItemOpen(false);

        }
        catch {
            console.log('deu ruim')
        }
    }

    const closeModal = () => {
        props.setIsAddItemOpen(false);
    }

    return (
        <div className='overlay'>
            <Grid
                container
                direction="column"
                justifyContent="space-between"
                align-items="flex-end"
                sx={{
                    width: "30rem",
                    height: "30rem",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    padding: '20px'
                }}
            >
                <h1>Novo Item</h1>
                <TextField
                    required
                    id="name"
                    label="Nome"
                    defaultValue=""
                    onChange={(e) => setItemName(e.target.value)}

                />
                <TextField
                    required
                    id="quantity"
                    label="Quantidade"
                    type="number"
                    onChange={(e) => setItemQuantity(parseInt(e.target.value))}

                />
                <TextField
                    required
                    id="price"
                    label="Preço"
                    type="number"
                    onChange={(e) => setItemPrice(parseFloat(e.target.value))}

                />
                <div className='buttonContainer'>
                    <Button 
                        variant="contained" 
                        color="error"
                        onClick={closeModal}
                    >
                        Cancelar
                    </Button>
                    <Button 
                        variant="contained" 
                        color="success"
                        onClick={addItem}
                    >
                        Adicionar
                    </Button>

                </div>


            </Grid>

        </div>
    )
}

export default ItemModal;