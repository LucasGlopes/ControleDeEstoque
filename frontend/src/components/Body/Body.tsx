import React, { useEffect, useState } from "react";
import { Grid } from '@mui/material'
import FunctionsBar from "../FunctionsBar/FunctionsBar";
import Stock from "../Stock/Stock";
import api from "../../services/api";
import Swal from "sweetalert2";


const Body: React.FC = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems();
    }, []);
    
    const getItems = async () => {
        try{
            const { data } = await api.get("/items");
            setItems(data);
        }
        catch{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo Deu Errado!',
                showCloseButton: true,
            });
        }
    }

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
            <FunctionsBar getItems={getItems}/>            
            <Stock items={items} getItems={getItems}/>

        </Grid>
    )
}

export default Body;