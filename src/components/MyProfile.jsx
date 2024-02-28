import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Button} from 'react-bootstrap';  
import BookService from './BookService';
import PropTypes from 'prop-types';


const MyProfile = ({currentUser, books, returnBook, setBooks}) => {
   

  const extendBook = (bookId, copyId) => {
    const filteredBooksById = books.filter(book => bookId === book.id)      //iterate to find the boook with  current Id
    const bookCurrentId = filteredBooksById[0]
    //console.log(bookCurrentId); //return object with current book
      if (bookCurrentId) {
        const filteredCopy = bookCurrentId.copies.filter(copy => copyId=== copy.id); //iterate for borrower === null 
       // console.log(availableCopies);  //return array of object with available copy (borrower = null)   
       const currentDate = new Date();
       const dueDate = new Date(currentDate.setDate(currentDate.getDate() + 25));
       const extendDate = new Date(dueDate.setDate(dueDate.getDate() + 20)); //extend Date
       //console.log(extendDate);
       const updatedExtendDate = {...filteredCopy[0], dueDate: extendDate.toDateString()} 
        //console.log(updatedCopy);  //update 1 copYYYY!!!! and add borrower
        const updatedCopies = bookCurrentId.copies.map(copy => {  //iterate and compare current book and update an array of copiESSSSS!!!
          if(copy.id === updatedExtendDate.id) { // compare the copy of current book and id of copy which extend
            return updatedExtendDate
          } else {
            return copy;
          }
        })
        //console.log(updatedCopies);
      const updatedBook = {...bookCurrentId, copies: updatedCopies} //update an array of Current BOOK
      //console.log(updatedBook);
       BookService
        .update(bookId, updatedBook)
        .then(
          setBooks(books.map(book => {
            if(book.id === bookId) {
              return updatedBook
            }else {
              return book
            }
          }))
        )
      }
  }

  const myCopies = books.filter(book => book.copies.some(copy => copy.borrower === currentUser.id))
  //console.log(myCopies);
  
  return(
    <div className='bg'>
      <Container className="containerStyleProfile">
        <img  src='https://mdbootstrap.com/img/new/slides/041.webp'  className="mountains" />
        <h2>{currentUser.name} </h2>
        <h4>{currentUser.email}</h4>
        <Button className="buttonBookList" variant="success">Book List</Button>
          <Container className="bookContainer">
              <table>
                 <thead>
                   <tr>
                     <th scope="col">Book name:</th>
                     <th scope="col">Borrow date</th>
                     <th scope="col">Due date:</th>
                   </tr>
                 </thead>
                 <tbody>
                    {myCopies.map((book) =>
                      book.copies.map((copy) => (
                        copy.borrower === currentUser.id && (
                          <tr key={copy.id}>
                            <td>{book.title}</td>
                            <td>{copy.borrowedDate}</td>
                            <td>{copy.dueDate}</td>
                            <td >
                              <Button id="button" variant="success" onClick={() => returnBook(book.id)}className="buttonStyle">Return book</Button>
                            </td>
                            <td>
                              <Button id="button" variant="success" onClick={() => extendBook(book.id, copy.id)} className="buttonStyle">Extend book</Button>
                            </td>
                          </tr>
                        )
                      ))
                    )}
                </tbody>
               </table>
          </Container>
      </Container>
  </div>

  )                  
}
MyProfile.propTypes = {
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    // Add more properties as needed
  }).isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      copies: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          borrower: PropTypes.string,
          borrowedDate: PropTypes.string,
          dueDate: PropTypes.string,
          // Add more properties as needed
        })
      ).isRequired,
      // Add more properties as needed
    })
  ).isRequired,
  returnBook: PropTypes.func.isRequired,
  setBooks: PropTypes.func.isRequired,
};
export default MyProfile