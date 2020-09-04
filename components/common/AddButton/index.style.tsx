import styled, { css } from 'styled-components'

export const StyledContainer = styled.div`
    display: flex;
    outline: none;
`

export const StyledInput = styled.input`
    border: 0;
    text-align: center;

    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;

    width: 72px;
    border-radius: 8px 0 0 8px;

    &:focus {
        outline: none;
    }
`

export const StyledButton = styled.button<{ fullWidth: boolean }>`

    border: none;
    border-radius: 0 8px 8px 0;
    padding: 12px 16px;

    cursor: pointer;

    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    color: #fff;

    background-color: #E97979;
    transition: background-color 0.2s ease-out;

    &:hover {
        background-color: #DB6D6D;
    }

    &:focus {
        outline: none;
    }

    ${(props) => props.fullWidth
        && css`width: 100%;`
    }
`
