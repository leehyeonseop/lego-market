import React, { useState } from 'react'
import TopNav from '../TopNav'
import styled from 'styled-components'
import ProfileImage from '../ui/ProfileImage'
import ImageSelect from '../ui/ImageSelect'
import Textarea from '../ui/Textarea'

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjQwZjM0MTZjYTFiNjNmODY1NzgwMCIsImV4cCI6MTY2MjE5MzE5NiwiaWF0IjoxNjU3MDA5MTk2fQ.R09vFTYCOzolwJZvJn6kz2dMQl3X-dc61roeus5pXSY"

const Wrapper = styled.div`
    padding: 20px 16px;
    display: flex;
`

const StyledProfileImage = styled(ProfileImage)`
    margin-right: 13px;
`

const StyledImageSelect = styled(ImageSelect)`
    position: fixed;
    bottom: 16px;
    right: 16px;
`

function PostUploadPage() {

    const [imgSrc, setImgSrc] = useState('')
    const [content, setContent] = useState('')

    const post = async () => {
        const url = "https://mandarin.api.weniv.co.kr/post"
        const response = await fetch(url, {
            method : "POST",
            header : {
                "Authorization" : "Bearer {token}"
                ,
                "Content-type" : "application/json"
            }
        })

        const json = await response.json()
        console.log(json)
    }


    const onChange = (e) => {

        setContent(e.target.value)
    
        if(e.target.value.length > 200) {
            alert('최대 200자까지 입력 가능합니다.')
            setContent(content.slice(0,200))
        }
    }

    return (
        <div>
            <TopNav onClick={post}/>
            <Wrapper>
                <StyledImageSelect setImgSrc={setImgSrc}/>
                <StyledProfileImage width='42px'/>
                <div>
                    <Textarea
                        value={content} 
                        onChange={onChange} placeholder="게시글 입력하기 ..."
                    />
                    <ul>
                        <li>
                            <img src={imgSrc} width='110px' alt="" />
                        </li>
                    </ul>
                </div>
            </Wrapper>
        </div>
    )
}

export default PostUploadPage