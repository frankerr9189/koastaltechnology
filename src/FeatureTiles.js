import React, {useState} from 'react';
import {GlobalStyle} from "./Styles/GlobalStyle";
import {seaBlue, darker, light} from "./Styles/colors";
import styled from 'styled-components';
import {Title} from "./Styles/title";
import {featureList} from "./Data";
import {ListGrid, FeatureItem} from "./ListGrid";

export const SectionArea = styled.div`
height: 750px;
width: 100%;
margin: 0px 0px 0px 0px;
font-size: 20px;
background-image: url("img/section2.png");
background-position: center;
background-size: cover;
filter: contrast(70%);
@media (max-width: 700px){
  height: 1050px;
   }
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
export const TextLabel = styled(Title)`
position: absolute;
background-color: rgba(255, 255, 255, .75);
padding: 5px;
`;

export const Dialog = styled.div`
    width: 500px;
    background-color: white;
    position: fixed;
    top: 75px;
    z-index: 5;
    height: 300px;
    left: calc(50% - 250px);
    display: flex;
    flex-direction: column;
`;
const DialogShadow = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0px;
    background-color: black;
    opacity: 0.7;
    z-index: 4;
`;

const DialogBanner = styled.div`
min-height: 200px;
margin-bottom: 20px;
background-image: url("img/section2.png");
background-position: center;
background-size: cover;
`;

const DialogBannerName = styled(TextLabel)`
    font-size: 30px;
    padding: 5px 40px;
    `;
export function FeatureTiles({featList, setFeatList}) {


   function featureListTile(){
     return(
       <>
    <ListGrid>
    {featureList.map((list, lindex) => (
      <FeatureItem key={lindex} onClick={()=>{
        setFeatList(list);
      }}>
        <TextLabel>
    {list.name}
    </TextLabel>
    </FeatureItem>
          ))}
 </ListGrid>
 </>
     );
   };

    return (
      <>
      <GlobalStyle/>
      <SectionArea>
        {featureListTile()}
  </SectionArea>

     </>
    );
  };