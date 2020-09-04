import * as React from 'react'

import { StyledButton } from './index.style'

export interface IProps {
    label: string,
    primary?: boolean
}

const Button: React.FC<IProps> = ({ label, primary = false }) => {
    return <StyledButton primary={primary}>{label}</StyledButton>
}

export default Button