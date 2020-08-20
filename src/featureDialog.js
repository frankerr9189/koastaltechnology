import React from 'react';
import styled from 'styled-components';
import {Title} from "./Styles/title";
import {TextLabel} from "./FeatureTiles";

export const Dialog = styled.div`
    width: 500px;
    background-color: white;
    position: fixed;
    top: 75px;
    radius: 7px;
    z-index: 5;
    height: 300px;
    left: calc(50% - 250px);
    display: flex;
    flex-direction: column;
    @media (max-width: 700px){
        width: 350px;
        left: calc(50% - 150px);
         }
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
height: 100px;
background-image: url("img/section2.png");
background-position: center;
background-size: cover;
`;

const DialogBannerName = styled(TextLabel)`
    font-size: 30px;
    padding: 5px 40px;
    color: black;
    `;

export const TextStyle = styled(Title)`
padding-top: 50px;
text-align: center;
padding-bottom: 25px;
font-size: 20px;
color: black;
`;

export function FeatureDialog({featList, setFeatList}){
    function close() {
        setFeatList();
    }

    if (!featList) return null;
    return featList ?(
    <>
    <DialogShadow onClick={close}/>
    <Dialog>
        <DialogBanner/>
        <DialogBannerName>
        {featList.name}
        </DialogBannerName>
        <TextStyle>
        {featList.desciption}
        </TextStyle>
    </Dialog>
    </>
    ): null;
}