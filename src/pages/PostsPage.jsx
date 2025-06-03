import axios from "axios";
import { useEffect } from "react";

export default function PostsPage() {
  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div>
      <div className="container">
        <h1>Posts</h1>
      </div>
    </div>
  );
}
