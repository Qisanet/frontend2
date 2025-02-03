import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #666', borderRadius: '4px' }}>No</th>
          <th style={{ border: '1px solid #666', borderRadius: '4px' }}>Title</th>
          <th style={{ border: '1px solid #666', borderRadius: '4px' }}>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} style={{ height: '40px' }}>
            <td style={{ border: '1px solid #444', borderRadius: '4px' }}>{index + 1}</td>
            <td style={{ border: '1px solid #444', borderRadius: '4px' }}>{book.title}</td>
            <td style={{ border: '1px solid #444', borderRadius: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle style={{ fontSize: '20px', color: 'green' }} />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit style={{ fontSize: '20px', color: 'orange' }} />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete style={{ fontSize: '20px', color: 'red' }} />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
