import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";

const CommentsSection = () => {
  const profileImages = [
    '/images/profile5.jpg',
    '/images/profile.jpg',
    '/images/profile6.jpg',
    '/images/profile2.jpg',
    '/images/profile3.jpg',
    '/images/profile4.jpg',
  ];

  const [comments, setComments] = useState([
    {
      profileImage: '/images/profile2.jpg',
      favoriteTopic: 'Gradients and Backgrounds',
      comment: 'Gradients add so much depth and elegance to a design! ',
      replies: ['Absolutely agree!'],
      liked: false,
    },
    {
      profileImage: '/images/profile3.jpg',
      favoriteTopic: 'Tailwind CSS',
      comment: 'Tailwind CSS makes styling so much faster and fun!',
      replies: ['So true, it saves a lot of time.'],
      liked: true,
    },
  ]);

  const [comment, setComment] = useState('');
  const [favoriteTopic, setFavoriteTopic] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleFavoriteTopicChange = (e) => {
    setFavoriteTopic(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() || favoriteTopic.trim()) {
      const randomImage = profileImages[Math.floor(Math.random() * profileImages.length)];

      const newComment = {
        profileImage: randomImage,
        favoriteTopic: favoriteTopic.trim(),
        comment: comment.trim(),
        replies: [],
        liked: false,
      };

      setComments([...comments, newComment]);
      setComment('');
      setFavoriteTopic('');
    }
  };

  const handleReply = (index) => {
    const reply = prompt('Enter your reply:');
    if (reply) {
      const updatedComments = [...comments];
      updatedComments[index].replies.push(reply);
      setComments(updatedComments);
    }
  };

  const handleLike = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].liked = !updatedComments[index].liked;
    setComments(updatedComments);
  };

  return (
    <div className="comment-section max-w-3xl mx-auto p-4 text-gray-800">
      <h1 className="text-5xl font-bold pb-7 text-center text-gray-800 ">Comment Section</h1>
          <h2 className='text-xl font-bold text-gray-800'>Favorite Topic</h2>
      <textarea
        value={favoriteTopic}
        onChange={handleFavoriteTopicChange}
        className="w-full p-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Add your favorite topic..."
        style={{ minHeight: '40px' }}
      ></textarea>
        <h2 className='text-xl font-bold text-gray-800 '>Comment</h2>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        className="w-full p-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
        placeholder="Write a comment..."
        style={{ minHeight: '80px' }}
      ></textarea>

<button
  type="submit"
  onClick={handleSubmit}
  className="mt-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white p-2 rounded font-bold 
  hover:scale-110 ease-in-out duration-100"
>
  Submit Comment
</button>


      <div className="comments-list mt-6 space-y-4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              className="comment p-3 bg-white rounded-lg shadow-sm flex items-start space-x-4"
            >
              <img
                src={comment.profileImage}
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />

              <div className="flex-grow text-white">
                <div className="mb-2">
                  <p className="text-sm font-semibold text-gray-500">Favorite Topic:</p>
                  <p className="text-md font-bold text-blue-500">{comment.favoriteTopic || 'N/A'}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500">Comment:</p>
                  <p className="text-black text-sm">{comment.comment || 'No comment provided.'}</p>
                </div>

                {comment.replies.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-sm font-semibold text-gray-500">Replies:</h3>
                    <div className="ml-4 space-y-2">
                      {comment.replies.map((reply, idx) => (
                        <div key={idx} className="p-2 bg-gray-100 rounded-lg text-black">
                          <p>{reply}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col items-center space-y-2">
                <button
                  onClick={() => handleLike(index)}
                  className={`p-2 rounded-full border ${
                    comment.liked ? 'text-red-500 border-red-500' : 'text-gray-400 border-gray-300'
                  } hover:text-red-500`}
                >
                  <FaHeart />
                </button>
                <button
                  onClick={() => handleReply(index)}
                  className="px-4 py-2 font-semibold bg-gradient-to-r from-pink-500 to-blue-500 text-white p-2 text-xs rounded hover:scale-110 ease-in-out duration-100"
                >
                  Reply
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentsSection;
