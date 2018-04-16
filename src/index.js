import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

  import authorStore from './stores/AuthorStore';
  import BookStore from './stores/BookStore';

  import App from './App';
//How is the App component receiving the store? through calling <BrowserRouter />
//then <App /> will call the classes , authorStore and bookStore
  ReactDOM.render((
    <BrowserRouter>
      <App authorStore={authorStore}
          bookStore={BookStore}
      />

    </BrowserRouter>
  ), document.getElementById('root'));
  registerServiceWorker();
