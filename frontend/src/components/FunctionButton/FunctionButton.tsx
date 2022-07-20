import React from 'react';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

interface FunctionButtonProps {
    title: string;
}

const StyledButton = styled(Button)`
  color: #fff;
  &:focus {
    background-color: green;
  }
`;

const FunctionButton: React.FC<FunctionButtonProps> = (props) => {
    const { title } = props;

    return (
        <StyledButton
                variant="contained"
                size="large"
            >
                {title}
        </StyledButton>
    )
}

export default FunctionButton;