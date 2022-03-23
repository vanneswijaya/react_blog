import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    loading,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();

  const handleClick = (e) => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <h3>Written by {blog.author}</h3>
          <p>{blog.body}</p>
          <button onClick={handleClick} className="delete">
            DELETE
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
