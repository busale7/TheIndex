import {decorate, observable, computed} from 'mobx';
import axios from 'axios';
/*
*What are its observable properties? authors,query and loading
*What kinds of methods does it have? fetching authors from APi and returning
*authors by id.
* Does it have any computed properties? yes filteredAuthors
*/
class AuthorStore {
  constructor() {
    this.authors = [];
    this.query = "";
    this.loading = true;
  }

  fetchAuthors() {
    return axios.get('https://the-index-api.herokuapp.com/api/authors/')
            .then(res => res.data)
            .then(authors => {
              this.authors = authors;
              this.loading = false;
            })
            .catch(err => console.error(err));
  }

  get filteredAuthors() {
    if (this.authors) {
      return this.authors.filter(author => {
        return `${author.first_name} ${author.last_name}`
        .toLowerCase()
        .includes(this.query);
      });
    }

    return [];
  }

  getAuthorById(id) {
    return this.authors.find(author => author.id == id);
  }
}

decorate(AuthorStore, {
  authors: observable,
  query: observable,
  loading: observable,
  filteredAuthors: computed
})

const authorStore =  new AuthorStore()
authorStore.fetchAuthors();

export default authorStore;
