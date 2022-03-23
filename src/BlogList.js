import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h3>{title}</h3>
      {blogs.map((blog) => (
        <Link to={`blogs/${blog.id}`}>
          <div className="blog-preview" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.author}</p>
            {/* <button onClick={() => handleDelete(blog.id)}>Delete</button> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
