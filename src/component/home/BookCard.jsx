import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import BookSingleCard from './BookSingleCard';

const BooksCard = ({ books }) => {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
      gap: '20px', 
      padding: '20px' 
    }}>
      {books.map((item) => (
        <div key={item._id} style={{
          border: '1px solid #ddd',
          borderRadius: '10px',
          padding: '15px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
          textAlign: 'center'
        }}>
          <BookSingleCard book={item} />
        </div>
      ))}
    </div>
  );
};

export default BooksCard;
