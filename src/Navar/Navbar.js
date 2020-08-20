import React from 'react';
import styled from 'styled-components';
import {seaBlue} from "../Styles/colors";
import {Title} from "../Styles/title";
import {Link} from 'react-router-dom';
import {bootstrap} from 'bootstrap';

//import {signout, isAuthenticated} from "../auth";


const Logo = styled(Title)`
font-size: 25px;
color: ${seaBlue};
text-shadow: 1px 1px 4px #380503;
`

export function Navbar() {
    return (
        <nav className="navbar navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/"><Logo>Koastal-Technology</Logo></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
      <a className="nav-link" href="/features">Features</a>
      <a className="nav-link" href="/pricing">Pricing</a>
      <a className="nav-link" href="/about">About</a>
      <a className="nav-link" href="/contactus">Contact Us</a>
    </div>
  </div>
</nav>
    );
}

