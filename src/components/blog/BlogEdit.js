import React, { useState, useRef, memo } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const BlogEdit = ({ handleEdit, blogs }) => {
    const { id } = useParams();
    const navigate = useNavigate()

    const blog = blogs.find(blog => blog.id === Number(id));
    console.log(blog);

    const [title, setTitle] = useState(blog.title);
    const authorRef = useRef(blog.author);
    const imageRef = useRef(blog.image);
    const descriptionRef = useRef(blog.description);
    const contentRef = useRef(blog.content);

    document.title = title;

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        document.title = e.target.value;
    }

    const makeBlogs = () => {
        const new_blog = {
            id: Number(id),
            title: title,
            description: descriptionRef.current.value,
            author: authorRef.current.value,
            image: imageRef.current.value,
            content: contentRef.current.value,
            comments: []
        };

        handleEdit(new_blog);
        navigate("/");
    }

    return (
        <>
            <form className="px-4 py-3" action="">
                <div className="mb-3">
                    <label 
                        htmlFor="title" 
                        className="form-label"
                    >Title</label>
                    <input 
                        id="title"
                        type="text" 
                        className="form-control" 
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="mb-3">
                    <label 
                        htmlFor="author" 
                        className="form-label"
                    >Author</label>
                    <input 
                        id="author"
                        type="text" 
                        className="form-control"
                        defaultValue={blog.author} 
                        ref={authorRef}
                    />
                </div>
                <div className="mb-3">
                    <label 
                        htmlFor="image" 
                        className="form-label"
                    >Image Link</label>
                    <input 
                        id="image"
                        type="text" 
                        className="form-control"
                        defaultValue={blog.image} 
                        ref={imageRef}
                    />
                </div>
                <div className="mb-3">
                    <label 
                        htmlFor="description" 
                        className="form-label"
                    >Short description</label>
                    <textarea 
                        id="description"
                        className="form-control" 
                        rows="3" 
                        name="content"
                        defaultValue={blog.description}
                        ref={descriptionRef}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label 
                        htmlFor="content" 
                        className="form-label"
                    >Content</label>
                    <textarea 
                        id="content"
                        className="form-control" 
                        rows="3" 
                        name="content"
                        defaultValue={blog.content}
                        ref={contentRef}
                    ></textarea>
                </div>
                <input 
                    type="button" 
                    value="Done" 
                    className="btn btn-primary" 
                    onClick={makeBlogs}
                />
            </form>
        </>
    )
}

export default memo(BlogEdit);