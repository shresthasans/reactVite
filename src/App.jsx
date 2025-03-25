// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/error/NotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AddBlog from "./pages/blog/AddBlog";
import BlogDetail from "./pages/blog/BlogDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/addblog" element={<AddBlog />} />
          <Route path="/blogdetail" element={<BlogDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
