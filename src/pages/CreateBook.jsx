import { useState } from 'react';
import BackButton from '../component/BackButton';
import Spinner from '../component/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const token = localStorage.getItem("token");

  const handleSaveBook = () => {
    const data = { title, author, publishYear };
    setLoading(true);
    axios.post('http://localhost:5550/books', data, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(() => {
      setLoading(false);
      enqueueSnackbar('Book Created successfully', { variant: 'success' });
      navigate('/home');
    })
    .catch((error) => {
      setLoading(false);
      enqueueSnackbar('Error', { variant: 'error' });
      console.log(error);
    });
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <BackButton />
      <h1 style={{ marginBottom: '20px' }}>Create Book</h1>
      {loading ? <Spinner /> : ''}
      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Title</label>
          <input 
            type='text' 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Author</label>
          <input 
            type='text' 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Publish Year</label>
          <input 
            type='number' 
            value={publishYear} 
            onChange={(e) => setPublishYear(e.target.value)} 
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <button 
          style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          onClick={handleSaveBook}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateBooks;
