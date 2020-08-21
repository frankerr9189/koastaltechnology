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
padding-top: 10px;
text-align: left;
padding-bottom: 10px;
font-size: 25px;
color: black;
@media (max-width: 700px){
    padding: 5px;
    font-size: 20px;

}
`;
export const TextStyle4 = styled(Title)`
padding-top: 10px;
text-align: center;
padding-bottom: 10px;
color: white;
font-size: 25px;
@media (max-width: 700px){
    padding-left: 5px;
    font-size: 20px;
}
`;
export const SectionAreatwo = styled.div`
height: 450px;
margin: 0px 0px 0px 0px;
font-size: 20px;
background-image: url("img/section2.png");
background-position: center;
background-size: cover;
filter: contrast(90%);
`;

export const ListGrid = styled.div`
    padding-top: 50px;
    padding-left: 300px;
    padding-right: 300px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    @media (max-width: 700px){
        padding-left: 50px;
    }
`

export const FeatureItem = styled(Title)`
height: 300px;
width: 400px;
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
    font-size: 15px;
    padding: 10px;
}
 `
 const DialogBannerName = styled(TextLabel)`
    font-size: 30px;
    padding: 5px 40px;
    `;

const ContactUs= ()=> {

    function PricingHeader(){
        return(
            <>
      <TextStyle>
      Contact Us
      </TextStyle>
      <TextStyleTwo>

      </TextStyleTwo>
      <TextStyleTwo>
Contact us any day, any time.
      </TextStyleTwo>
            </>
        )
    }

    function PricingMiddle(){
        return(
            <>
            <ListGrid>
                <FeatureItem>
                <TextStyle4>
Let Us Help You!
            </TextStyle4>
                    <TextStyle3>
                        <ul>
                            <li>
                                Email: sales@Koastal-Technology.com
                            </li>
                            <li>
                                Phone: 609-XXX-XXXX
                            </li>
                            <li>
                            <a className="nav-link" href="/">Sign Up For More Info!</a>
                            </li>
                        </ul>
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

export default ContactUs;