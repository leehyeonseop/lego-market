import React from 'react'
import styled from 'styled-components'

const StyledTextarea = styled.textarea.attrs({
    cols : '100',
    rows : '10'
})`
    border: none;
    outline: none;
    resize: none;
`

function Textarea(props) {

    const {placeholder, onChange, value} = props

    return <StyledTextarea onChange={onChange} placeholder={placeholder} value={value}/>

}

export default Textarea