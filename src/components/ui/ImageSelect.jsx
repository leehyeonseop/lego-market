import React, { useState } from 'react'
import styled from 'styled-components'

const Input = styled.input.attrs({
    type : "file",
    id : "file",
})`
    display: none;
`

function ImageSelect(props) {
    console.log('렌더링')
    
    const {setImgSrc, multiple} = props

    console.log('multiple : ', multiple)

    async function getImageUrl(e) {

        const url = multiple ? "https://mandarin.api.weniv.co.kr/image/uploadfiles" : "https://mandarin.api.weniv.co.kr/image/uploadfile"


        const files = [...e.target.files]

        const formData = new FormData();
        for(let i of files) {
            console.log(i)
            formData.append("image",i)
        }
    
        const response = await fetch(url, {
            method : "POST",
            body : formData
        })
    
        const json = await response.json()

        let filenameList = []

        if(multiple) {
            for(let i of json) {
                filenameList.push(i.filename)
            }
        } else if (multiple === undefined) {
            filenameList.push(json.filename)
        }
        
        console.log(filenameList)
    
        setImgSrc(filenameList)
    
    }

    return (
        <div className={props.className}>
            <label htmlFor="file" >
                <img src="/images/프로필설정버튼.png" alt="프로필설정버튼" style={{cursor:"pointer"}}/>
            </label>
            <Input onChange={getImageUrl} multiple={multiple}/>
        </div>
    )
}

export default ImageSelect
