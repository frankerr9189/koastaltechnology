import React from 'react';
import {GlobalStyle} from "./Styles/GlobalStyle";
import {seaBlue, darker, light} from "./Styles/colors";
import styled from 'styled-components';
import {Title} from "./Styles/title";

export const SectionArea = styled.div`
padding: 20px;
margin: 0px 0px 0px 0px;
font-size: 20px;
background-color: ${seaBlue};
`;
export const TextStyle = styled(Title)`
padding: 2px;
text-align: center;
font-size: 10px;
color: white;
`;

export function LayoutFooter() {
    
    return (
      <>
      <GlobalStyle/>
      <SectionArea>
        <TextStyle>
      Copyright © 2020 Koastal Technology, LLC. All Rights Reserved.
      </TextStyle>
      </SectionArea>

     </>
    );
  };