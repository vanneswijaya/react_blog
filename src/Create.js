import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const blogs = { title, body, author };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogs),
    }).then(() => {
      setLoading(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Create new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Enter body:</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        <label>Enter author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!loading && <button>Add Blog</button>}
        {loading && <button disabled>Uploading...</button>}
      </form>
    </div>
  );
};

export default Create;
