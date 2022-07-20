import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import api from '../../services/api';
import './style.css'

interface UpdateItemModalProps {
    setIsUpdateItemOpen: (updateItemState: boolean) => void;
    getItems: () => void;
    _id: string;
    name: string;
    price: number;
    quantity: number
}

const UpdateItemModal: React.FC<UpdateItemModalProps> = (props) => {
    const [itemName, setItemName] = useState(props.name);
    const [itemQuantity, setItemQuantity] = useState(props.quantity);
    const [itemPrice, setItemPrice] = useState(props.price);


    const updateItem = async () => {
        const item = {
            name: itemName,
            quantity: itemQuantity,
            price: itemPrice
        }

        try{
            await api.post(`/items/update/${props._id}`, item);
            await props.getItems();
            props.setIsUpdateItemOpen(false);

        }
        catch {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo Deu Errado! Tente Novamente!',
                showCloseButton: true,
            });
        }
    }

    const closeModal = () => {
        props.setIsUpdateItemOpen(false);
    }

    return (
        <div className='overlayUpdate'>
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
                <h1>Editar Item</h1>
                <TextField
                    required
                    id="name"
                    label="Nome"
                    defaultValue={props.name}
                    onChange={(e) => setItemName(e.target.value)}

                />
                <TextField
                    required
                    id="quantity"
                    label="Quantidade"
                    type="number"
                    defaultValue={props.quantity}
                    onChange={(e) => setItemQuantity(parseInt(e.target.value))}

                />
                <TextField
                    required
                    id="price"
                    label="Preço"
                    type="number"
                    defaultValue={props.price}
                    onChange={(e) => setItemPrice(parseFloat(e.target.value))}

                />
                <div className='buttonContainerUpdate'>
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
                        onClick={updateItem}
                    >
                        Atualizar
                    </Button>

                </div>


            </Grid>

        </div>
    )
}

export default UpdateItemModal;