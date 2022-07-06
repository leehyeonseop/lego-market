import {createGlobalStyle} from "styled-components"
import JoinPage from "./components/pages/JoinPage";
import TopNav from "./components/TopNav";
import reset from 'styled-reset'
import PostUploadPage from "./components/pages/PostUploadPage";
import LoginPage from "./components/pages/LoginPage";
import { useEffect } from "react";
import ProfileUpdatePage from "./components/pages/ProfileUpdatePage";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * { font-family: 'Spoqa Han Sans Neo', 'sans-serif'; }
`


function App() {

  return (
    <div className="App">
      <GlobalStyle />
      {/* <LoginPage /> */}
      {/* <PostUploadPage /> */}
      {/* <JoinPage /> */}
      <ProfileUpdatePage />
    </div>
  );
}

export default App;