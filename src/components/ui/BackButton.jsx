import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background-color: white;
    padding: 0px;
    border: none;
    cursor: pointer;
    height: 22px;
`

function BackButton() {
    return (
        <Button>
            <img src={process.env.PUBLIC_URL + '/icons/icon-arrow-left.png'} alt="뒤로가기버튼" />
        </Button>
    )
}

export default BackButton