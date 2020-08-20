import React from 'react';
import {Navbar} from './Navar/Navbar';
import {GlobalStyle} from "./Styles/GlobalStyle";
import {seaBlue, darker, light} from "./Styles/colors";
import styled from 'styled-components';


const HomePageLayout1 = styled.div`
    background-color: ${darker};
    position: fixed;
    height: 700px;
    width: 100%;
`
const HomePageLayout2 = styled.div`
    background-color: ${light};
    top:700px;
    position: fixed;
    height: 700px;
    width: 100%;
`
const Footer = styled.div`
    background-color: ${seaBlue};
    top:1400px;
    position: fixed;
    height: 700px;
    width: 100%;
`

export function Layout() {
    
    return (
      <>
      <GlobalStyle/>
      <Navbar/>


     </>
    );
  };