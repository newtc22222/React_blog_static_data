import React, { useState, useRef, memo } from 'react'
import { useNavigate } from 'react-router-dom';

const BlogCreate = ({ handleAdd }) => {
    const navigate = useNavigate()

    const [title, setTitle] = useState("");
    const authorRef = useRef();
    const imageRef = useRef();
    const descriptionRef = useRef();
    const contentRef = useRef();

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        document.title = e.target.value;
    }

    const makeBlogs = () => {
        const new_blog = {
            id: 0,
            title: title,
            description: descriptionRef.current.value,
            author: authorRef.current.value,
            image: imageRef.current.value,
            content: contentRef.current.value,
            comments: []
        };

        handleAdd(new_blog);
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

export default memo(BlogCreate);