import Header from "./components/Header";
import React from "react";
import { Route,Routes } from "react-router-dom";
import Auth from "./components/Auth";
import MyBlog from "./components/MyBlog";
import Profile from "./components/Profile";
import CreateBlog from "./components/CreateBlog";
import Followers from "./components/Followers";
import { useSelector } from "react-redux";
import Blogs from "./components/Home";


function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn);
  return <React.Fragment>
    <header>
      <Header />
    </header>
    <main>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/add" element={<CreateBlog />} />
        <Route path="/myBlogs" element={<MyBlog />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/followers/:id" element={<Followers />} />
      </Routes>
    </main>
  </React.Fragment>
}

export default App;
