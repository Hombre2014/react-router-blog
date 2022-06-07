import { useParams, Link } from 'react-router-dom';

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find(post => (post.id).toString() === id);
  return (
    <main className="PostPage">
      <article className="post">
        {post &&
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
            <Link to="/">Back to posts</Link>
          </>
        }
        {!post &&
          <>
            <h2>Post not found</h2>
            <p>Well, that's disappointing.</p>
            <Link to="/">Back to posts</Link>
          </>
        }
      </article>
    </main>
  )
}

export default PostPage;
