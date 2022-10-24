import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import BlogEdit from "./components/blog/BlogEdit";
import BlogDetail from "./components/blog/BlogDetail";
import BlogCreate from "./components/blog/BlogCreate";
import { useCallback, useState } from "react";

const blogs = require('./models/blogs.models');

function App() {
  const [blogList, setBlogList] = useState(blogs);

  // console.log(blogList);

  const handleAddBlog = useCallback((blog) => {
    console.log(blog);
    const blog_id_new = blogList[blogList.length - 1].id + 1;
    blog.id = blog_id_new;
    setBlogList(prev => {
      return [
        ...prev,
        blog
      ]
    })
  }, [blogList]);  

  const handleEditBlog = useCallback((edit_blog) => {
    console.log(edit_blog);
    setBlogList(prev => {
      const new_blogList = prev.map(blog => {
        if(blog.id === edit_blog.id){
          return edit_blog;
        }
        return blog;
      });
      return new_blogList;
    })
  }, []); 

  const handlePostComment = useCallback((blog_id, comments) => {
    setBlogList(prev => {
      const new_blogList = prev.map(blog => {
        if (blog.id === Number(blog_id)) {
          return { ...blog, comments };
        }
        return blog;
      });
      return new_blogList;
    })
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home blogs={blogList} />} />
        <Route path="/blogs/*" >
          <Route index element={<Home blogs={blogList} />} />
          <Route path="create" element={<BlogCreate handleAdd={handleAddBlog}/>} />
          <Route
            path=":id"
            element={<BlogDetail
              blogs={blogList}
              handlePostComment={handlePostComment} />} />
          <Route 
            path="edit/:id" 
            element={<BlogEdit 
              blogs={blogList}
              handleEdit={handleEditBlog}/>} />
        </Route>
        <Route path="/aboutme" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
