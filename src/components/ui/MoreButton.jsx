import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background-color: white;
    padding: 0px;
    border: none;
    cursor: pointer;
    height: 24px;
`


function MoreButton() {
    return (
        <Button>
            <img src={process.env.PUBLIC_URL + '/icons/icon-more-vertical.png'} alt="더보기버튼" />
        </Button>
    )

}

export default MoreButton