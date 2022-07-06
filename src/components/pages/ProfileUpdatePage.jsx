import React from 'react'
import TopNav from '../TopNav'
import styled from 'styled-components'
import ProfileImage from '../ui/ProfileImage'
import ImageSelect from '../ui/ImageSelect'

const Wrapper = styled.div`
    padding: 30px 34px;
`

function ProfileUpdatePage() {
    return (
        <div>
            <TopNav content="저장"/>      
            <Wrapper>
                <ProfileImage />
                <ImageSelect />
            </Wrapper>
        </div>  
    )
}

export default ProfileUpdatePage