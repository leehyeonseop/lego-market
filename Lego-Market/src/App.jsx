import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle";
import JoinMembership from "./pages/joinmembership/JoinMembership";
import FollowCard from "./pages/follow/FollowCard";
import Chatroom from "./pages/chatroom/Chatroom";
import PostComment from "./components/ui/PostComment";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<JoinMembership />} />
        <Route path="/sign" element={<div>현섭님한테 보내줘 </div>} />
        <Route path="/followers" element={<FollowCard />} />
        <Route path="/chatroom" element={<Chatroom />} />
        <Route path="/comment" element={<PostComment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
