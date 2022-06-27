import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/sign" element={<div>현섭님한테 보내줘 </div>} />
    </Routes>
  );
}

export default App;
