import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JoinPage from "./components/pages/JoinPage";
import reset from "styled-reset";
import PostUploadPage from "./components/pages/PostUploadPage";
import ComponentNav from "./test/ComponentNav";
import Home from "./components/pages/home/Home";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * { font-family: 'Spoqa Han Sans Neo', 'sans-serif'; }
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ComponentNav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/postuploadpage" element={<PostUploadPage/>} />
        <Route path="/joinpage" element={<JoinPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
