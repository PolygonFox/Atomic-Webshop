import * as React from 'react'

import { StyledButton, StyledContainer, StyledInput } from './index.style'

export interface IProps {
    label: string,
    inputLabel: string,
    fullWidth?: boolean,
    amount: number,
    onClick: () => void,
    onChange: (amount: number) => void
}

const Button: React.FC<IProps> = (props) => {
    const [amount, setAmount] = React.useState(props.amount)

    React.useEffect(() => {
        setAmount(props.amount);
    }, [props.amount]);

    return (
        <StyledContainer>
            <StyledInput
                value={amount}
                onChange={(e) => {
                    const result = e.target.value.replace(/\D/g,'').substr(0, 3)
                    if (result.length) {
                        setAmount(parseInt(result))
                    } else {
                        setAmount(0)
                    }
                }}
                aria-label={props.inputLabel}
            />
            <StyledButton
                fullWidth={props.fullWidth}
                onClick={props.onClick}
            >
                {props.label}
            </StyledButton>
        </StyledContainer>
    )
}

Button.defaultProps = {
    fullWidth: false,
    amount: 1,
}

export default Button