import React, { useEffect, useState } from 'react';

export const Nav = ({ title, links }) => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav class="navbar navbar-expand-sm navbar-light bg-secondary">
      <div className="container">
        <a class="navbar-brand" href="/">
          {/* <img src={Logo} alt="Logo" width="36" height="36" className="vertical-align-middle" /> */}
          <span className="">{title}</span>
        </a>
        <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
          {links.map((value, index) => (
            <a key={index} className="nav-link" href={value.link}>{value.title}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}
