import styled, { css } from 'styled-components'

import { IProps } from '.'

export const StyledButton = styled.button<IProps>`
    cursor: pointer;

    padding: 12px 16px;

    border: none;
    border-radius: 8px;
    background-color: #EEE;
    
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    color: #000;

    transition: background-color 0.2s ease-out;

    &:hover {
        background-color: #DDD;
    }

    &:focus {
        outline: none;
    }

    ${props => props.fullWidth &&
        css`width: 100%;`
    }

    ${props => props.primary &&
        css`
            color: #fff;
            background-color: #E97979;

            &:hover {
                background-color: #DB6D6D;
            }
        `
    }
`