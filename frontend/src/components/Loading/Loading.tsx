import React from 'react';
import { Grid } from '@mui/material';
import LoadingSpin from "react-loading-spin";

const Loading: React.FC = () => {
    return (
        <Grid 
            container 
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ 
              height: "100%",
              width: "100%",
              backgroundColor: '#fff',
        }}>
            <LoadingSpin 
                width="0.938rem"
                size="12.5rem"
                primaryColor="rgb(240, 103, 40)"
                secondaryColor="#B7BCAF"
                numberOfRotationsInAnimation={2}
            />
            <h1 style={{ fontFamily: 'Roboto', color: 'rgb(240, 103, 40)'}}>Carregando...</h1>
        </Grid>
    )
}

export default Loading;