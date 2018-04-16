import {decorate, observable, computed} from 'mobx';
import axios from 'axios';

//What properties will this store class be keeping track of?
//books and query
class BookStore {
  constructor (){
    this.books=[];
    this.query = "";
    this.loading =true;
  }
  fetchBooks() {
    return axios.get('https://the-index-api.herokuapp.com/api/books/')
            .then(res => res.data)
            .then(books => {
              this.books = books;
              console.log(books)
              this.loading = false;
            })
            .catch(err => console.error(err));
  }

  get filteredBooks() {
    if (this.books) {
      return this.books.filter(book => {
        return `${book.title}`
        .toLowerCase()
        .includes(this.query);
      });
    }

    return [];
  }


}
decorate(BookStore, {
  authors:observable,
  query:observable,
  loading:observable,
  filteredBooks:computed

})


const bookStore =  new BookStore()
bookStore.fetchBooks();


export default bookStore;
