import React, {Component} from 'react';

import AuthorCard from './AuthorCard';
import SearchBar from './SearchBar';
import BookRow from './BookRow';


class BookList extends Component{
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      books: this.props.books,

      //this is new ? its for the search feature
      filteredBooks: this.props.books
    }
this.filterBooks = this.filterBooks.bind(this);
    }

filterBooks(query) {
  query = query.toLowerCase()
  let filteredBooks = this.state.books.filter(books => {
    return `${books.title} ${books.authors}`.toLowerCase().includes(query);
  });
  this.setState({filteredBooks})
      }


      render() {
        //this is new ?
        const bookks = this.state.filteredBooks;
        const bookRows =bookks.map(book =>
            <BookRow key={book.title} book={book} />);


        return (
          <div className="books">
            <h3>Books</h3>

       <SearchBar changeHandler={this.filterBooks} />
            <div className="row">
              <table className='mt-3 table'>

                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Authors</th>
                    <th>Color</th>
                  </tr>
                </thead>
                <tbody>
                  {bookRows}
                </tbody>
              </table>


            </div>
          </div>
        );
      }


}





export default BookList;
