import React, { useState, useEffect } from "react";
import { MoreHorizontal, Heart, MessageCircle, Send, Share2, Image, MapPin, BarChart2 } from "lucide-react";



const NewsfeedItem = ({ post, onLike, onComment }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState("");

  const handleCommentClick = () => {
    setShowCommentInput(!showCommentInput);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      onComment(post.id, commentText);
      setCommentText("");
      setShowCommentInput(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden mb-6">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 mr-4 flex-shrink-0 overflow-hidden rounded-full border-2 border-green-500">
            <img
              src="https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg"
              alt={post.user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-grow min-w-0">
            <h3 className="font-semibold text-lg text-gray-800 truncate">
              {post.user.name}
            </h3>
           <p className="text-xs text-gray-500">updated on {post.date}</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
            <MoreHorizontal size={20} />
          </button>
        </div>
        
        <div className="mt-4 text-base text-gray-700 leading-relaxed">
          {isExpanded ? post.content : `${post.content.slice(0, 200)}...`}
        </div>
        {post.content.length > 200 && (
          <button
            className="text-green-600 text-sm font-medium hover:text-green-700 mt-2 transition-colors duration-200"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show less" : "View more"}
          </button>
        )}

        {post.image && (
          <div className="mt-4 rounded-lg overflow-hidden">
            <img src={post.image} alt="Post content" className="w-full h-auto" />
          </div>
        )}

        <div className="flex items-center justify-between text-sm text-gray-500 mt-6 pt-4 border-t border-gray-100">
          <div className="flex space-x-4">
            <button
              className={`flex items-center space-x-1 ${
                post.liked
                  ? "text-red-500 hover:text-red-600"
                  : "hover:text-gray-700"
              } transition-colors duration-200`}
              onClick={() => onLike(post.id)}
            >
              <Heart
                size={18}
                className={`${post.liked ? "fill-current" : ""}`}
              />
              <span>{post.likes} {post.likes === 1 ? "Like" : "Likes"}</span>
            </button>
            <button
              className="flex items-center space-x-1 hover:text-gray-700 transition-colors duration-200"
              onClick={handleCommentClick}
            >
              <MessageCircle size={18} />
              <span>{post.comments.length} Comments</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-gray-700 transition-colors duration-200">
              <Share2 size={18} />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>

      {showCommentInput && (
        <div className="px-6 py-4 bg-gray-50">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a comment..."
              className="flex-grow p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            />
            <button
              onClick={handleCommentSubmit}
              className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {post.comments.length > 0 && (
        <div className="px-6 py-4 bg-gray-50 space-y-3">
          {post.comments.map((comment, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={comment.userAvatar || "https://via.placeholder.com/150"}
                  alt={comment.user}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow bg-white p-3 rounded-lg shadow-sm">
                <p className="font-semibold text-sm text-gray-800">{comment.user}</p>
                <p className="text-sm text-gray-700 mt-1">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};




export const Newsfeed = ({ className }) => {
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [isPostInputFocused, setIsPostInputFocused] = useState(false);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    setPosts(storedPosts);
  }, []);

  const savePosts = (updatedPosts) => {
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
  };

  const handleNewPost = () => {
    if (newPostContent.trim().length >= 3) {
      const newPost = {
        id: Date.now(),
        user: { name: "Yael" },
        date: new Date().toLocaleDateString(),
        content: newPostContent,
        likes: 0,
        liked: false,
        comments: []
      };
      savePosts([newPost, ...posts]);
      setNewPostContent('');
      setAlertMessage('');
      setIsPostInputFocused(false);
    } else {
      setAlertMessage('Post must be at least 3 characters long.');
      setTimeout(() => setAlertMessage(''), 3000); // Clear alert after 3 seconds
    }
  };

  const handleLike = (postId) => {
    const updatedPosts = posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.liked ? post.likes - 1 : post.likes + 1, liked: !post.liked }
        : post
    );
    savePosts(updatedPosts);
  };

  const handleComment = (postId, commentText) => {
    const updatedPosts = posts.map(post => 
      post.id === postId 
        ? { ...post, comments: [...post.comments, { user: "Yael", text: commentText }] }
        : post
    );
    savePosts(updatedPosts);
  };

  return (
    <div className={`${className} h-screen overflow-auto`}>
      <div className="px-4">
        <div className="mt-2 mb-4">
          <div className={`border border-gray-300 rounded-md transition-all duration-300 ${isPostInputFocused ? 'h-32' : 'h-12'}`}>
            <textarea
              className="w-full h-full p-2 resize-none focus:outline-none rounded-md"
              placeholder="What's on your mind?"
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              onFocus={() => setIsPostInputFocused(true)}
              onBlur={() => !newPostContent.trim() && setIsPostInputFocused(false)}
            />
          </div>
          {isPostInputFocused && (
            <div className="flex justify-between items-center mt-2">
              <div className="flex space-x-2">
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200">
                  <Image size={20} />
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200">
                  <MapPin size={20} />
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200">
                  <BarChart2 size={20} />
                </button>
              </div>
              <button
                className="bg-red-500 hover:bg-red-400 text-white rounded-md px-4 py-2 transition-colors duration-200"
                onClick={handleNewPost}
              >
                Post
              </button>
            </div>
          )}
          {alertMessage && (
            <div className="mt-2 text-red-500 text-sm">
              {alertMessage}
            </div>
          )}
        </div>

        <h2 className="font-semibold text-lg mb-4 text-gray-800">NEWSFEED</h2>
        {posts.map(post => (
          <NewsfeedItem
            key={post.id}
            post={post}
            onLike={handleLike}
            onComment={handleComment}
          />
        ))}
      </div>
    </div>
  );
};