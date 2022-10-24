import React, {  memo, useRef } from 'react'
import { useParams } from 'react-router-dom';

const BlogDetail = ({ blogs, handlePostComment }) => {
    const { id } = useParams();
    const blog = blogs.find(x => x.id === Number(id));

    const { title, author, image, content, comments } = blog;
    document.title = title;

    const commentRef = useRef();

    return (
        <div>
            <h3>{title}</h3>
            <p>Author: <em>{author}</em></p> <hr />
            <img className='w-100' src={image} alt={image} />
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
                        ref={commentRef}
                    ></textarea> <br />
                    <input
                        type="button"
                        value="Post comment"
                        className="btn btn-secondary"
                        onClick={() => {
                            let comment_id = 1
                            if (comments.length > 0){
                                comment_id = comments[comments.length - 1].id + 1;
                            }
                            const new_comment = {
                                id: comment_id,
                                content: commentRef.current.value
                            }
                            const new_comments = [...comments, new_comment];
                            handlePostComment(id, new_comments);
                            commentRef.current.value = "";
                        }}
                    />
                </form>
            </div>
        </div>
    );
}

export default memo(BlogDetail);