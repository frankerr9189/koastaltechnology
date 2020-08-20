import React from 'react';
import {Layout} from './Layout';
import {LayoutFooter} from './LayoutFooter';
import styled from 'styled-components';
import {Title} from "./Styles/title";
import {TextLabel} from "./FeatureTiles";
import {seaBlue, darker, light} from "./Styles/colors";

export const SectionArea = styled.div`
height: 350px;
margin: 50px 0px 0px 0px;
font-size: 20px;
background-image: url("img/waveapp2.png");
background-position: center;
background-size: cover;
filter: contrast(90%);
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
color: black;
`;

export const TextStyle3 = styled(Title)`
padding-top: 65px;
text-align: left;
padding-bottom: 10px;
font-size: 25px;
color: black;
@media (max-width: 700px){
    font-size: 15px;
     }
`;

export const SectionAreatwo = styled.div`
height: 550px;
margin: 0px 0px 0px 0px;
font-size: 20px;
background-image: url("img/section2.png");
background-position: center;
background-size: cover;
filter: contrast(90%);
`;

export const ListGrid = styled.div`
    padding: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
`

export const FeatureItem = styled(Title)`
height: 300px;
padding: 50px;
font-size: 30px;
color: black;
background-color: ${seaBlue};
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
    font-size: 25px;
    padding: 20px;
     }
 `
 const DialogBannerName = styled(TextLabel)`
    font-size: 30px;
    padding: 5px 40px;
    `;

const Pricing= ()=> {

    function PricingHeader(){
        return(
            <>
      <TextStyle>
      Pricing
      </TextStyle>
      <TextStyleTwo>

      </TextStyleTwo>
      <TextStyleTwo>
      Pricing Options Below
      </TextStyleTwo>
            </>
        )
    }

    function PricingMiddle(){
        return(
            <>
            <ListGrid>
                <FeatureItem>
            <DialogBannerName>
                    Free Setup
            </DialogBannerName>
            <TextStyle3>
You read that correct! We are here to make your job easier. There is no start up cost to use our applications.
                    </TextStyle3>
            </FeatureItem>
                <FeatureItem>
                    <DialogBannerName>
                    Custom
                    </DialogBannerName>
                    <TextStyle3>
                    We offer customized modules if you need something that we don't have. Please contact us at sales@Koastal-Technology.com. We are here for you.
                    </TextStyle3>
                </FeatureItem>
            </ListGrid>
            </>
        )
    }

    return(
        <>
        <Layout/>
        <SectionArea>
            {PricingHeader()}
        </SectionArea>
        <SectionAreatwo>
            {PricingMiddle()}
        </SectionAreatwo>
    
        <LayoutFooter/>
        </>
    )
}

export default Pricing;