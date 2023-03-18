import React from 'react'
import { Link,useMatch, useResolvedPath } from "react-router-dom"


const Navbar = () => {
  
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Contacts</Link>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
          <CustomLink  to="/contacts">List of contacts</CustomLink>
          <CustomLink  to="/add-contact">Add Contact</CustomLink>
          </ul>
    </div>
  </div>
</nav>
    </>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className="nav-item">
      <Link className={isActive ? "nav-link active" : "nav-link"} to={to}>{children}</Link>
    </li>
  );
}

export default Navbar