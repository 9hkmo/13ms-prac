import "./App.css";
import { MainLayout } from "./components/MainLayout";
import { Community } from "./pages/Community";
import { CommunityPost } from "./pages/CommunityPost";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { Notice } from "./pages/notice";
import { Post } from "./pages/Post";
import { Posting } from "./pages/Posting";
import { Result } from "./pages/Result";
import { SignUp } from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/result" element={<Result />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/community" element={<Community />} />
            <Route path="/community/:id" element={<CommunityPost />} />
            <Route path="/posting" element={<Posting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
