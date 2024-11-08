import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Use useNavigate instead of useHistory
import { createPost, updatePost, getPostById } from '../API'; // Import API functions

function ModifyPost() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: ''
  });
  const [isEdit, setIsEdit] = useState(false);
  const { id } = useParams(); // Get post ID from URL params (if editing)
  const navigate = useNavigate(); // Use navigate instead of history

  // If editing, fetch the post data
  useEffect(() => {
    if (id) {
      setIsEdit(true);
      getPostById(id)
        .then((postData) => {
          setFormData(postData);
        })
        .catch((err) => console.error('Error fetching post for edit:', err));
    }
  }, [id]);

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission (create or edit post)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      updatePost(id, formData)
        .then(() => {
          navigate('/'); // Use navigate to redirect
        })
        .catch((err) => console.error('Error updating post:', err));
    } else {
      createPost(formData)
        .then(() => {
          navigate('/'); // Use navigate to redirect
        })
        .catch((err) => console.error('Error creating post:', err));
    }
  };

  return (
    <div className="container">
      <h1>{isEdit ? 'Edit Blog' : 'New Blog'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Content"
          required
          rows="10"
        />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author"
          required
        />
        <button type="submit">{isEdit ? 'Update' : 'Submit'}</button>
      </form>
    </div>
  );
}

export default ModifyPost;
