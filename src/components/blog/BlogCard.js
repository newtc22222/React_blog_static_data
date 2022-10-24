import React, { memo } from 'react'
import { Link } from 'react-router-dom';

const BlogCard = ({ handleDelete, ...props }) => {
    const { id, title, image, description, author } = props;

    return (
        <div className="row no-gutters bg-light position-relative mt-2">
            <div className="col-md-6 mb-md-0 p-md-4">
                <img src={image} className="w-100" alt="..." />
            </div>
            <div className="col-md-6 position-static p-4 pl-md-0">
                <p className='text-white text-center bg-dark'><b>Blog {id}</b></p>
                <h5 className="mt-0">{title}</h5>
                <p><small className='text-muted'>Author: {author}</small></p>
                <p>{description}</p>
                <Link to={"/blogs/" + id} className="btn btn-primary">Read more</Link>
                <Link to={"/blogs/edit/" + id} className="btn btn-secondary mx-2">Edit</Link>
                <button
                    type="button"
                    className="btn btn-danger ml-2"
                    onClick={handleDelete}
                >Delete</button>
            </div>
        </div>
    );
}

export default memo(BlogCard);