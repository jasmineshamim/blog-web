import React from 'react';
import CommentSection from './CommentSection';

const BlogPost = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Post Title</h1>
      <p className="mb-8">This is the blog post content...</p>

       <CommentSection />
    </div>
  );
};

export default BlogPost;
