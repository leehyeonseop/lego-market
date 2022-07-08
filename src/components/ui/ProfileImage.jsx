import React from 'react'
import styled from 'styled-components'
// import ImageSelect from './ImageSelect'

const Wrapper = styled.div`
    /* margin: 0 auto; */
    border-radius: 50%;
    margin-top: ${props => props.marginTop}px;
    margin-bottom: ${props => props.marginBottom}px;
`

const Image = styled.img`
    border-radius: 50%;
`


function ProfileImage(props) {

    const {className, imgSrc, marginBottom, marginTop ,width} = props

    console.log('imgSrc length: ', imgSrc.length)
    
    const mainUrl = "https://mandarin.api.weniv.co.kr/"

    return (
        <Wrapper
            className={className} 
            marginTop={marginTop} 
            marginBottom={marginBottom}
        >
            <Image
            width={width} 
            src={imgSrc.length === 0 ? "/images/초기프로필.png" : mainUrl+imgSrc[0]} 
            alt="프로필사진" />
        </Wrapper>
    )
}

ProfileImage.defaultProps = {
    imgSrc : ""
}

export default ProfileImage
