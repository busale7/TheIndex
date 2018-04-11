import React from 'react';
import {Switch, Route, Redirect,Link} from 'react-router-dom';

function BookRow(props) {
  const book = props.book
  return (
    <tr>
      <td>{book.title}</td> // to write JavaScript in JSX we need to use curley bracets
      <td>{book.authors && book.authors.map(author => <Link to={'authors/'+author.id}> {author.name} </Link>)}</td>
      <td>
        <button className="btn" style={{backgroundColor: book.color}}/>
      </td>
    </tr>
  );
}

export default BookRow;
