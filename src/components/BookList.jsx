import { useState } from 'react';
import '../Styles/BookList.css';
import {Container} from 'react-bootstrap';  


const BookList = ({books, addBook}) => {
  
  const [searchQuery, setSearchQuery] = useState("");
 
  
  
  const handleSearchQuery = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
  };
  const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()));
  return(
    
<div className='backgroundImage'>
  <div className='searchBook'>
  <input  value={searchQuery} placeholder="search books" type="text" onChange={handleSearchQuery}/>
  </div>

  <Container className='booksContainer' >
    { 
        filteredBooks.map((book) => (
        <Container key={book.id} className="bookCardStyle">
          <img src={book.url} className='bookImage'/>
          <div className='bookName'>
            <h8 >{book.title}</h8>
            <h8>{book.author}</h8>
          </div>
          <div className='buttonAdd'>
            <button onClick={() => addBook(book.id)} className='px-4 py-2 bg-gray-800 text-black text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'>Add to cart</button>
          </div>
        </Container>
      ) 
    )}
  </Container>
</div>
  )}
  
export default BookList

