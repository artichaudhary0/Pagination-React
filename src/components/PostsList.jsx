import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchPosts, setSearchTerm, setCurrentPage, setFilter, clearFilters } from '../store/slices/postsSlice';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Pagination from './Pagination';
import LoadingSpinner from './LoadingSpinner';

function PostsList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    items,
    status,
    error,
    searchTerm,
    currentPage,
    totalPosts,
    postsPerPage,
    filters
  } = useSelector((state) => state.posts);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    dispatch(fetchPosts({ page: currentPage, limit: postsPerPage }));
  }, [dispatch, currentPage, postsPerPage]);

  useEffect(() => {
    // Update document theme
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleUserFilter = (userId) => {
    dispatch(setFilter({ userId }));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`);
  };

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (status === 'failed') {
    return (
      <div className="error-container">
        <h3>Error</h3>
        <p>{error}</p>
        <button onClick={() => dispatch(fetchPosts({ page: 1, limit: postsPerPage }))}>
          Try Again
        </button>
      </div>
    );
  }

  const filteredPosts = items.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.body.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesUser = !filters.userId || post.userId === filters.userId;
    return matchesSearch && matchesUser;
  });

  return (
    <div className="posts-container">
      <div className="controls">
        <div className="search-bar">
          <MagnifyingGlassIcon className="search-icon" />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={handleSearch}
          />
          {searchTerm && (
            <button className="clear-search" onClick={() => dispatch(setSearchTerm(''))}>
              <XMarkIcon className="clear-icon" />
            </button>
          )}
        </div>
        
        <div className="filters">
          <select
            value={filters.userId || ''}
            onChange={(e) => handleUserFilter(e.target.value ? Number(e.target.value) : null)}
          >
            <option value="">All Users</option>
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>User {i + 1}</option>
            ))}
          </select>
          
          {(filters.userId || searchTerm) && (
            <button className="clear-filters" onClick={handleClearFilters}>
              Clear Filters
            </button>
          )}
        </div>
      </div>

      <div className="posts-grid">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="post-card"
            onClick={() => handlePostClick(post.id)}
          >
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}...</p>
            <div className="post-meta">
              <span>User {post.userId}</span>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        onPageChange={(page) => dispatch(setCurrentPage(page))}
      />
    </div>
  );
}

export default PostsList;