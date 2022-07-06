import React from "react";
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import AppFooter from '../../AppFooter';
import HomeHeader from './HomeHeader';
import HomeMain from './HomeMain';

const Home = () => {
  const navigate = useNavigate();
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
