import * as React from 'react'

import { StyledButton } from './index.style'

export interface IProps {
    label: string,
    primary?: boolean,
    fullWidth?: boolean,
    onClick: () => void
}

const Button: React.FC<IProps> = ({ label, primary = false, fullWidth = false, onClick }) => {
    return (
        <StyledButton
            primary={primary}
            fullWidth={fullWidth}
            onClick={onClick}
        >
            {label}
        </StyledButton>
    )
}

export default Button