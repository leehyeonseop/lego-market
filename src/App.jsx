// import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JoinPage from "./components/pages/JoinPage";
import PostUploadPage from "./components/pages/PostUploadPage";
import ComponentNav from "./test/ComponentNav";
import Home from "./components/pages/home/Home";
import Splash from "./components/pages/splash/Splash";
import GlobalStyle from "./styles/GlobalStyle"
import Search from "./components/pages/search/Search";
import Test from "./components/Test"
import LoginPage from "./components/pages/LoginPage";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ComponentNav />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/postuploadpage" element={<PostUploadPage/>} />
        <Route path="/joinpage" element={<JoinPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/search' element={<Search />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
