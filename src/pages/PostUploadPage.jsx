import React, { useState } from 'react'
import TopNav from '../components/TopNav'
import styled from 'styled-components'
import ProfileImage from '../components/ui/ProfileImage'
import ImageSelect from '../components/ui/ImageSelect'
import Textarea from '../components/ui/Textarea'

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

const Image = styled.img`
    height: 228px;
    border: 0.5px solid #DBDBDB;
    border-radius: 10px;
`



function PostUploadPage() {

    const [imgSrc, setImgSrc] = useState([])
    const [content, setContent] = useState('')

    const mainUrl = "https://mandarin.api.weniv.co.kr/"

    const post = async () => {

        const token = localStorage.getItem("token")
        console.log('token : ',token)

        const url = "https://mandarin.api.weniv.co.kr/post"

        const reqData = {
            "post": {
                        "content": content,
                        "image": imgSrc.join(),
                }
        }

        const response = await fetch(url, {
            method : "POST",
            headers : {
                "Authorization" : `Bearer ${token}`,
                "Content-type" : "application/json"
            },
            body : JSON.stringify(reqData)
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
            <TopNav onClick={post} content='업로드'/>
            <Wrapper>
                <StyledImageSelect setImgSrc={setImgSrc} multiple={true}/>
                <StyledProfileImage width='42px' imgSrc={[]}/>
                <div>
                    <Textarea
                        value={content} 
                        onChange={onChange} placeholder="게시글 입력하기 ..."
                    />
                    <ul>
                        {imgSrc.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Image src={mainUrl+item}/>
                                </li>
                            )
                        })}
                    </ul>
                    
                </div>
            </Wrapper>
        </div>
    )
}

export default PostUploadPage