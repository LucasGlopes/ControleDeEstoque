import React, { useState } from "react";
import { Grid } from '@mui/material'
import FunctionButton from "../FunctionButton/FunctionButton";
import ItemModal from "../ItemModal/ItemModal";

interface FunctionsBarProps {
    getItems: () => void;
}

const FunctionsBar: React.FC<FunctionsBarProps> = (props) => {
    const [isAddItemOpen, setIsAddItemOpen] = useState(false);

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            sx={{
                width: '50%',
            }}
        >
            <FunctionButton title={"Adicionar Novo Item"} setIsModalOpen={setIsAddItemOpen}/>

            {isAddItemOpen && <ItemModal setIsAddItemOpen={setIsAddItemOpen} getItems={props.getItems}/>}
        </Grid>
    )
}

export default FunctionsBar;