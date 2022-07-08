import React from 'react'
import styled from 'styled-components'

const Input = styled.input.attrs({
    type : 'text',
})`
    border: none;
    border-radius: 32px;
    background: #F2F2F2;
    padding: 7px 16px;
    box-sizing: border-box;
    width: 100%;
    height: 32px;
    font-family: none;
    font-size: 14px;

    ::placeholder {
        color: #C4C4C4;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
    }
    :focus {
        outline: none;
    }
`

function Search(props) {
    return <Input placeholder={props.placeholder}/>
}

export default Search