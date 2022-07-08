import React from 'react'
import styled from 'styled-components'
import Button from './ui/Button'


const Wrapper = styled.div`
    height: 48px;
    box-sizing: border-box;
    border-bottom: 0.5px solid #DBDBDB;
    display: flex;
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
`

const Left = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: ${props => props.marginRight}px;
`

const Center = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
`

const Right = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
`


function TopNav2(props) {

    const {onClick, leftChild, centerChild, rightChild, marginRight} = props

    return (
        <Wrapper className={props.className}>
            <Left marginRight={marginRight}>{leftChild}</Left>
            <Center>{centerChild}</Center>
            <Right>{rightChild}</Right>
        </Wrapper>
        
    )
}

export default TopNav2