import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BlogCard from '../components/blog/BlogCard';
// import BlogEdit from '../components/blog/BlogEdit';

const blogs = require('../models/blogs.models');

const Home = () => {
    document.title = "Home Page"
    const [blogList, setBlogList] = useState(blogs);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure to delete this blog?")) {
            setBlogList(blogList.filter(blog => blog.id !== id));
        }
    }

    return (
        <div className='container'>
            <Link to="/blogs/create" className='btn btn-primary mt-2'>Add new blog</Link>
            {blogList.map((blog) => {
                return (
                    <div key={blog.id}>
                        <BlogCard
                            handle={() => handleDelete(blog.id)}
                            {...blog} />
                    </div>
                );
            })}
        </div>
    )
}

export default Home