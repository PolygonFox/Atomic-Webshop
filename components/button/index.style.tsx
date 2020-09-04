import styled, { css } from 'styled-components'

import { IProps } from '.'

export const StyledButton = styled.button`
    background: #ccc;

    ${props => props.primary &&
        css`
            color: white;
            background: black;
        `
    };
`