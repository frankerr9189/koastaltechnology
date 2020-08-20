import React from 'react';
import styled from 'styled-components';
import {Title} from "./Styles/title";

export const ListGrid = styled.div`
    padding: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    @media (max-width: 700px){
        grid-template-columns: 1fr 1fr;
         }
`

export const FeatureItem = styled(Title)`
height: 200px;
padding: 20px;
font-size: 30px;
color: black;
background-image: url("img/shark.jpeg");
background-position: center;
background-size: cover;
filter: contrast(80%);
border-radius: 7px;
margin-top: 5px;
transition-property: box-shadow margin-top filter;
transition-duration: .2s;
box-shadow: 0px 0px 4px 0px grey;
&:hover {
    cursor: pointer;
    filter: contrast(100%);
    margin-top: 0px;
    margin-bottom: 5px;
    box-shadow: 0px 5px 15px 0px grey;
}
@media (max-width: 700px){
    font-size: 20px;
}
 `