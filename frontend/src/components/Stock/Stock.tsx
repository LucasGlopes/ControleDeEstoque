import React, { useEffect } from 'react';
import api from '../../services/api';

const Stock: React.FC = () => {

    useEffect(() => {
        getItems();
      }, []);
    
    const getItems = async () => {
        try{
            const { data } = await api.get("/items");
            console.log(data)

        }
        catch{
            console.log('deu ruim')
        }
    }


    return (
        <div style={{backgroundColor: 'red', width: '70%', height: '70%'}}>
            oi
        </div>
    )
}

export default Stock;