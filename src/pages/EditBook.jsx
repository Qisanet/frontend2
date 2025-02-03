import { useState, useEffect } from 'react'; 
import BackButton from '../component/BackButton';
import Spinner from '../component/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const token = localStorage.getItem("token");

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5550/books/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      setAuthor(response.data.author);
      setPublishYear(response.data.publishYear);
      setTitle(response.data.title);
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
      alert('An error happened. Please check the console');
      console.log(error);
    });
  }, [id]);
  
  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios.put(`http://localhost:5550/books/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(() => {
      setLoading(false);
      enqueueSnackbar('Book Edited successfully', { variant: 'success' });
      navigate('/home');
    })
    .catch((error) => {
      setLoading(false);
      enqueueSnackbar('Error', { variant: 'error' });
      console.log(error);
    });
  };

  return (
    <div style={{ padding: '16px' }}>
      <BackButton />
      <h1 style={{ fontSize: '24px', margin: '16px 0' }}>Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div style={{ display: 'flex', flexDirection: 'column', border: '2px solid #38bdf8', borderRadius: '12px', width: '600px', padding: '16px', margin: 'auto' }}>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontSize: '20px', marginRight: '16px', color: '#6b7280' }}>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ border: '2px solid #6b7280', padding: '6px 12px', width: '90%' }} // Smaller padding
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontSize: '20px', marginRight: '16px', color: '#6b7280' }}>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            style={{ border: '2px solid #6b7280', padding: '6px 12px', width: '90%' }} // Smaller padding
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontSize: '20px', marginRight: '16px', color: '#6b7280' }}>Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            style={{ border: '2px solid #6b7280', padding: '6px 12px', width: '90%' }} // Smaller padding
          />
        </div>
        <button
          style={{ padding: '8px 16px', backgroundColor: '#38bdf8', margin: '32px 0' }}
          onClick={handleEditBook}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditBook;
