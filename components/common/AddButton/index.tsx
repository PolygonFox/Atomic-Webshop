import * as React from 'react'

import { StyledButton, StyledContainer, StyledInput } from './index.style'

export interface IProps {
  label: string,
  inputLabel: string,
  fullWidth?: boolean,
  value: number,
  onClick: () => void,
  onChange: (value: number) => void
}

const Button: React.FC<IProps> = ({
  value,
  label,
  inputLabel,
  fullWidth,
  onChange,
  onClick,
}) => (
  <StyledContainer>
    <StyledInput
      value={value}
      onChange={(e) => {
          const result = e.target.value.replace(/\D/g, '').substr(0, 3)
          if (result.length) {
            onChange(Number(result))
          } else {
            onChange(0)
          }
        }}
      aria-label={inputLabel}
    />
    <StyledButton
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  </StyledContainer>
  )

Button.defaultProps = {
  fullWidth: false,
  value: 1,
}

export default Button
