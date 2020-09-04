import styled, { css } from 'styled-components'

import { IProps } from '.'

export default styled.button<{ primary: boolean, fullWidth: boolean }>`
    cursor: pointer;

    padding: 12px 16px;

    color: #000;
    border: none;
    border-radius: 8px;
    background-color: #EEE;
    transition: background-color 0.2s ease-out;
    
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;

    &:hover {
        background-color: #DDD;
    }

    &:focus {
        outline: none;
    }

    ${(props) => props.fullWidth
        && css`width: 100%;`
    }

    ${(props) => props.primary
        && css`
            color: #fff;
            background-color: #E97979;

            &:hover {
                background-color: #DB6D6D;
            }
        `
    }
`
