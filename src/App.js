import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import BlogEdit from "./components/blog/BlogEdit";
import BlogDetail from "./components/blog/BlogDetail";
import BlogCreate from "./components/blog/BlogCreate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/blogs/*" >
          <Route index element={<Home />}/>
          <Route path="create" element={<BlogCreate />} />
          <Route path=":id" element={<BlogDetail />} />
          <Route path="edit/:id" element={<BlogEdit />} />
        </Route>
        <Route path="/aboutme" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
