import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BackTable from '../components/Home/BackTable';
import { useSnackbar } from 'notistack';

function CreateBooks() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBooks = () => {
    // Retrieve token from localStorage
    const token = localStorage.getItem("token");

    // Prepare the data to send
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('publishYear', publishYear);
    if (image) formData.append('image', image);

    // Send the request
    axios.post('https://as1backend.onrender.com/books', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        enqueueSnackbar("Book created successfully");
        navigate('/home');
      })
      .catch((error) => {
        console.error(error);
        enqueueSnackbar("An error occurred while creating the book", { variant: 'error' });
      });
  };

  return (
    <div className='p-4'>
      <BackTable />
      <h1 className='my-4'>Create Book</h1>
      <div className='my-4'>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className='form-control'
        />
      </div>
      <div className='my-4'>
        <label>Author</label>
        <input
          type="text"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          className='form-control'
        />
      </div>
      <div className='my-4'>
        <label>Publish Year</label>
        <input
          type="number"
          value={publishYear}
          onChange={e => setPublishYear(e.target.value)}
          className='form-control'
        />
      </div>
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Image</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}  // We use the first file only
          className='border-2 border-gray-500 px-4 py-2 w-full'
        />
      </div>
      <button className='btn btn-primary mt-3' onClick={handleSaveBooks}>
        Save
      </button>
    </div>
  );
}

export default CreateBooks;