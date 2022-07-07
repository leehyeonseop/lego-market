import React, { useRef, useState } from "react";
import Input from "../ui/Input";
import styled from "styled-components";
const FileLabel = styled.label`
  display: inline-block;
  position: relative;
  background-color: #dbdbdb;
  cursor: pointer;
  width: 322px;
  height: 204px;
  border-radius: 10px;
`;
const IMG = styled.img`
  position: absolute;
  bottom: 12px;
  right: 12px;
`;
const InputFile = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;
const LabelDiv = styled.div`
        font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #767676;
    margin-bottom: 10px;
    display: block;
`
const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const AddProduct = () => {
    const url = "https://mandarin.api.weniv.co.kr";

    async function imageUpload(file){
        const formData = new FormData();
        formData.append('image', file);
        const response = await fetch(url+"/image/uploadfile",{
            method:"POST",
            body:formData
        })
        console.log(response)
        const json = await response.json()
        console.log(json)
        return url+"/"+json.filename
    }
    async function handleGetImageUrl(e) {
        console.log(e.target.files)
        const file = e.target.files[0]
        const imgSrc = await imageUpload(file)
        document.querySelector("#aa").src = imgSrc
        
    }


  return (
    <Section>
        <button>클릭</button>
      <div class="filebox">
        <LabelDiv>이미지 등록</LabelDiv>
        <FileLabel for="ex-file"  onChange={handleGetImageUrl}>
            <img id="aa"></img>
          <IMG src="./images/img-button.png" />
        </FileLabel>
        <InputFile type="file" id="ex-file" accept='image/*' onChange={handleGetImageUrl}></InputFile>
      </div>

      <Input
        label="상품명"
        type="text"
        placeholder="2~15자 이내여야 합니다."
        marginBottom={16}
      />
      <Input
        label="가격"
        type="number"
        placeholder="숫자만 입력 가능합니다."
        marginBottom={16}
      />
      <Input
        label="판매 링크"
        type="text"
        placeholder="URL을 입력해 주세요."
        marginBottom={16}
      />
    </Section>
  );
};

export default AddProduct;
