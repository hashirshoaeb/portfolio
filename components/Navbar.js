import React, { useEffect, useState } from 'react';

export const Nav = ({ title, links }) => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-secondary">
      <div className="container">
        <a className="navbar-brand" href="/">
          {/* <img src={Logo} alt="Logo" width="36" height="36" className="vertical-align-middle" /> */}
          <span className="">{title}</span>
        </a>
        <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
          {links.map((value, index) => (
            <a key={index} className="nav-link" href={value.link}>{value.title}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}
