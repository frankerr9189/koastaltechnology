import React from 'react';
import {GlobalStyle} from "./Styles/GlobalStyle";
import {seaBlue, darker, light} from "./Styles/colors";
import styled from 'styled-components';
import {Title} from "./Styles/title";

export const SectionArea = styled.div`
height: 350px;
margin: 50px 0px 0px 0px;
font-size: 20px;
background-image: url("img/waveapp2.png");
background-position: center;
background-size: cover;
filter: contrast(70%);
`;


export const TextStyle = styled(Title)`
padding-top: 100px;
text-align: center;
padding-bottom: 5px;
font-size: 50px;
color: white;
text-shadow: 1px 1px 2px #380503;
`;

export const TextStyleTwo = styled(Title)`
padding-top: 5px;
text-align: center;
padding-bottom: 10px;
font-size: 25px;
color: white;
`;

export function FeaturesHeader() {

  function newTextContainer(){
    return (
      <>
      <TextStyle>
      Features
      </TextStyle>
      <TextStyleTwo>

      </TextStyleTwo>
      <TextStyleTwo>
Ording App Features Listed Below
      </TextStyleTwo>

      </>
    )
  };
    
    return (
      <>
      <GlobalStyle/>
      <SectionArea>
      {newTextContainer()}
      </SectionArea>

     </>
    );
  };