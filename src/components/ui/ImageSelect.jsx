import React, { useState } from 'react'
import styled from 'styled-components'

const Input = styled.input.attrs({
    type : "file",
    id : "file",
})`
    display: none;
`

function ImageSelect(props) {
    
    const {setImgSrc} = props

    async function getImageUrl(e) {

        console.log('하이')
        const url = "https://mandarin.api.weniv.co.kr/image/uploadfile"
    
        const file = e.target.files[0]
        const formData = new FormData();
        formData.append("image",file)
    
        const response = await fetch(url, {
            method : "POST",
            body : formData
        })
    
        const json = await response.json()
        const filename = json.filename;
    
        const imgURL = "https://mandarin.api.weniv.co.kr/" + filename
    
        console.log(imgURL)
    
        setImgSrc(imgURL)
    
    }

    return (
        <div className={props.className}>
            <label htmlFor="file" >
                <img src="/images/프로필설정버튼.png" alt="프로필설정버튼" style={{cursor:"pointer"}}/>
            </label>
            <Input onChange={getImageUrl}/>
        </div>
    )
}

export default ImageSelect
