import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <a href="/" className="navbar-brand">
          Redux Contact List
        </a>
        <div>
          <a className="btn btn-light ml-auto" href="/create">
            Create Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
