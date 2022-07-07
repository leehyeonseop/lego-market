import React, { useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import styled from "styled-components";
import AppFooter from '../../AppFooter';
import HomeHeader from './HomeHeader';
import HomeMain from './HomeMain';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const url = "https://mandarin.api.weniv.co.kr";
  const reqPath = "/post/feed";
  const headers = {
    "Authorization" : `Bearer ${state}`,
    "Content-type" : "application/json"
  }

  console.log(url+reqPath, headers);

  useEffect(()=>{
    (async () => {
      const res = await axios.get(url + reqPath, {headers}
        
      );
      console.log(res);
    })();
  })
  return (
    <>
      {/* 임시 버튼 */}
      <button onClick={()=>navigate(-1)}>뒤로가기</button>  
      <div className='mainWrapper center'>
        <HomeHeader />
        <HomeMain />
        <AppFooter />
      </div>
    </>
)
};

export default Home;
