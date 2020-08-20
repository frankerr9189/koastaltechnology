import React from 'react';
import {GlobalStyle} from "./Styles/GlobalStyle";
import {seaBlue, darker, light} from "./Styles/colors";
import styled from 'styled-components';
import {Title} from "./Styles/title";

export const SectionArea = styled.div`
height: 750px;
margin: 0px 0px 0px 0px;
font-size: 20px;
background-image: url("img/section2.png");
background-position: center;
background-size: cover;
filter: contrast(90%);
@media (max-width: 700px){
  width: 100%    }
`;


export const TextStyle = styled(Title)`
padding-top: 100px;
padding-left: 800px;
padding-bottom: 5px;
font-size: 30px;
color: ${seaBlue};
text-shadow: 1px 1px 2px #380503;
@media (max-width: 700px){
  padding-left: 100px;
  font-size: 25px;
   }
`;

export const TextStyleTwo = styled(Title)`
padding-top: 5px;
padding-left: 800px;
padding-bottom: 10px;
font-size: 25px;
color: black;
@media (max-width: 700px){
  padding-left: 100px;
  font-size: 15px;
   }
`;

export function LayoutSectionTwo() {

  function newTextContainer(){
    return (
      <>
      <TextStyle>
      Complete online, contact free, ordering app.  Our online ordering app will work on all your customers platforms!
      </TextStyle>
      <TextStyleTwo>

      </TextStyleTwo>
      <TextStyleTwo>
        Koastal-Technology is a forward thinking company, using all the latest and greatest technology in the market. With over 15 years of experience in application development, Koast-Technology has everything you need at the best prices.
      </TextStyleTwo>
      <TextStyleTwo>


      </TextStyleTwo>
      <TextStyleTwo>
        Our online ordering application is designed responsively so that it will work no a laptop, tablet or smartphone.
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