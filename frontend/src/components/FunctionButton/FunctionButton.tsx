import React from 'react';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

interface FunctionButtonProps {
  title: string;
  setIsModalOpen: (itemModalState: boolean) => void;
}

const StyledButton = styled(Button)`
  color: #fff;
  &:focus {
    background-color: green;
  }
`;

const FunctionButton: React.FC<FunctionButtonProps> = (props) => {
    const { title, setIsModalOpen } = props;

    return (
        <StyledButton
          variant="contained"
          size="large"
          onClick={() => {
            setIsModalOpen(true)
          }}
        >
          {title}
        </StyledButton>
    )
}

export default FunctionButton;