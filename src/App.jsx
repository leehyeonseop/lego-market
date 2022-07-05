import {createGlobalStyle} from "styled-components"
import JoinPage from "./components/pages/JoinPage";
import TopNav from "./components/TopNav";
import reset from 'styled-reset'
import PostUploadPage from "./components/pages/PostUploadPage";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * { font-family: 'Spoqa Han Sans Neo', 'sans-serif'; }
`


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <PostUploadPage />
      {/* <JoinPage /> */}
    </div>
  );
}

export default App;