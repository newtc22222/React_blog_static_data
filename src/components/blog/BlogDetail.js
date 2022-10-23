import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import blogs from '../../models/blogs.models';

const BlogDetail = () => {
    const { id } = useParams();
    const blog = blogs.find(x => x.id === Number(id));

    const { title, author, image, content, comments } = blog;
    document.title = title;

    const commentRef = useRef();
    const [commentList, setCommentList] = useState(comments);

    const handlePostComment = () => {
        setCommentList([
            ...commentList,
            commentRef.current
        ]);
    }

    return (
        <div>
            <h3>{title}</h3>
            <p>Author: <em>{author}</em></p> <hr />
            <img src={image} alt={image} />
            <pre>{content}</pre>
            <hr />
            <div className='container'>
                <h5 className='text-primary'>Reader's opinions</h5>
                <ul>
                    {comments.map((comment) => (<li key={comment.id}><pre>{comment.content}</pre></li>))}
                </ul>
            </div>
            <hr />
            <div className="form-floating">
                <form>
                    <label htmlFor="floatingTextarea" className="text-primary"><h5>Leave your comment here!</h5></label> <br />
                    <textarea
                        className="form-control"
                        placeholder="What do you think?"
                        id="floatingTextarea"
                        name="comment"
                        ref={commentRef}
                    ></textarea> <br />
                    <input
                        type="button"
                        value="Post comment"
                        className="btn btn-secondary"
                        onClick={handlePostComment}
                    />
                </form>
            </div>
        </div>
    );
}

export default BlogDetail