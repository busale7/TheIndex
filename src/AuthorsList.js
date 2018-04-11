import React, {Component} from 'react';

import AuthorCard from './AuthorCard';
import SearchBar from './SearchBar';

class AuthorsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authors: this.props.authors,
      //this is new ? its for the search feature
      filteredAuthors: this.props.authors
    }

    this.filterAuthors = this.filterAuthors.bind(this);
  }
//this is new for what ? its for the search feature
  filterAuthors(query) {
    query = query.toLowerCase()
    let filteredAuthors = this.state.authors.filter(author => {
      return `${author.first_name} ${author.last_name}`.toLowerCase().includes(query);
    });
    this.setState({filteredAuthors})
  }

  render() {
    //this is new ?
    const authors = this.state.filteredAuthors.map(author => (
      <AuthorCard key={author.first_name + author.last_name}
        author={author} />
      ));

    return (
      <div className="authors">
        <h3>Authors</h3>
        //search bar
        <SearchBar changeHandler={this.filterAuthors} />
        <div className="row">
          {authors}
        </div>
      </div>
    );
  }
}

export default AuthorsList;
