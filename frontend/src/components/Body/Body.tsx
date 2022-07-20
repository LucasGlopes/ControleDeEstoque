import React, { useEffect, useState } from "react";
import { Grid } from '@mui/material'
import FunctionsBar from "../FunctionsBar/FunctionsBar";
import Stock from "../Stock/Stock";
import api from "../../services/api";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";


const Body: React.FC = () => {
    const [items, setItems] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        getItems();
    }, []);
    
    const getItems = async () => {
        try{
            const { data } = await api.get("/items");
            setItems(data);
            setIsDataLoaded(true);
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
        <>
            {isDataLoaded ? 
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
                :
                <Loading />
            }
        </>
    )
}

export default Body;