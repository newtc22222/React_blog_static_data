import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import blogs from '../../models/blogs.models';

const BlogEdit = () => {
    const { id } = useParams();
    const blog = blogs.find(blog => blog.id === Number(id));

    // console.log(blog);

    const [title, setTitle] = useState(blog.title);
    const authorRef = useRef();
    const imageRef = useRef();
    const descriptionRef = useRef();
    const contentRef = useRef();

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        document.title = e.target.value;
    }

    return (
        <>
            <form className="px-4 py-3" action="/blogs">
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
                        value={blog.author}
                        ref={authorRef}
                        onChange={() => {}}
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
                        value={blog.image}
                        ref={imageRef}
                        onChange={() => {}}
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
                        value={blog.description}
                        onChange={() => {}}
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
                        value={blog.content}
                        ref={contentRef}
                        onChange={() => {}}
                    ></textarea>
                </div>
                <input type="submit" value="Done" className="btn btn-primary" />
            </form>
        </>
    )
}

export default BlogEdit