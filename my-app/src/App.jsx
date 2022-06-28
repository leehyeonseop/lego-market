import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/sign" element={<div>현섭님한테 보내줘 </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
