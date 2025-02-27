import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostById } from '../store/slices/postsSlice';
import LoadingSpinner from './LoadingSpinner';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

function PostDetail() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentPost, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostById(postId));
  }, [dispatch, postId]);

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (status === 'failed') {
    return (
      <div className="error-container">
        <h3>Error</h3>
        <p>{error}</p>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    );
  }

  if (!currentPost) {
    return null;
  }

  return (
    <div className="post-detail">
      <button className="back-button" onClick={() => navigate('/')}>
        <ArrowLeftIcon className="back-icon" />
        Back to Posts
      </button>

      <article className="post-content">
        <h1>{currentPost.title}</h1>
        <p className="post-body">{currentPost.body}</p>
        <div className="post-meta">
          <span>Posted by User {currentPost.userId}</span>
        </div>
      </article>

      <section className="comments-section">
        <h2>Comments</h2>
        <div className="comments-list">
          {currentPost.comments?.map((comment) => (
            <div key={comment.id} className="comment">
              <h4>{comment.name}</h4>
              <p>{comment.body}</p>
              <span className="comment-email">{comment.email}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default PostDetail;