import {createGlobalStyle} from "styled-components"


import reset from 'styled-reset'

import { useEffect } from "react";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import PostUploadPage from "./pages/PostUploadPage";
import TopNav2 from "./components/TopNav2";
import Button from "./components/ui/Button";
import BackButton from "./components/ui/BackButton";
import MoreButton from "./components/ui/MoreButton";
import styled from "styled-components";
import Search from "./components/ui/Search";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * { font-family: 'Spoqa Han Sans Neo', 'sans-serif'; }
`

const StyledTopNav = styled(TopNav2)`
  padding: 8px 16px;
  
`





function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <StyledTopNav
        marginRight={20} 
        leftChild={<BackButton />}
        centerChild={<Search placeholder={"계정 검색"}/>} 
        rightChild={<MoreButton />}
      />
      {/* <LoginPage /> */}
      {/* <PostUploadPage /> */}
      {/* <JoinPage /> */}
      {/* <ProfileUpdatePage /> */}
    </div>
  );
}

export default App;