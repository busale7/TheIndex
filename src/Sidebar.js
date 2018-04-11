import React from 'react';
import {NavLink} from 'react-router-dom';

function Sidebar(props) {
  return (
    <sidebar>
      <img src="/theindex.svg" className="logo" />
      <section>
        <h4 className="menu-item">
          <NavLink exact to="/authors">AUTHORS</NavLink>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <NavLink exact to="/books">Books</NavLink>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
