import React from 'react';
import {Layout} from './Layout';
import {LayoutFooter} from './LayoutFooter';
import styled from 'styled-components';
import {Title} from "./Styles/title";
import {seaBlue, darker, light} from "./Styles/colors";

export const SectionArea = styled.div`
height: 350px;
margin: 50px 0px 0px 0px;
font-size: 20px;
background-image: url("img/waveapp2.png");
background-position: center;
background-size: cover;
filter: contrast(90%);
@media (max-width: 700px){
    width: 100%    }
`;
export const SectionAreatwo = styled.div`
height: 550px;
margin: 0px 0px 0px 0px;
font-size: 20px;
background-image: url("img/section2.png");
background-position: center;
background-size: cover;
filter: contrast(90%);
@media (max-width: 700px){
    width: 100%    }
`;
export const SectionAreathree = styled.div`
height: 550px;
margin: 0px 0px 0px 0px;
font-size: 20px;
background-image: url("img/section3.jpg");
background-position: center;
background-size: cover;
filter: contrast(90%);
@media (max-width: 700px){
    width: 100%    }
`;

export const TextStyle = styled(Title)`
padding-top: 100px;
text-align: center;
padding-bottom: 5px;
font-size: 50px;
color: white;
text-shadow: 1px 1px 2px #380503;
@media (max-width: 700px){
    padding: 50px;
    font-size: 35px;
     }
`;

export const TextStyle2 = styled(Title)`
padding-top: 100px;
text-align: center;
padding-bottom: 5px;
font-size: 50px;
color: ${seaBlue};
text-shadow: 1px 1px 2px #380503;
@media (max-width: 700px){
    padding: 50px;
    font-size: 35px;
     }
`;

export const TextStyleTwo = styled(Title)`
padding-top: 5px;
text-align: center;
padding-bottom: 10px;
font-size: 25px;
color: black;
@media (max-width: 700px){
    padding: 20px;
    font-size: 25px;
     }
`;

export const TextStyleMiddle = styled(Title)`
padding-top: 50px;
padding-right:250px;
padding-left: 250px;
text-align: center;
padding-bottom: 10px;
font-size: 25px;
color: black;
@media (max-width: 700px){
    padding: 20px;
    font-size: 25px;
     }
`;
export const TextStyleMiddle2 = styled(Title)`
padding-top: 10px;
text-align: center;
padding-right:250px;
padding-left: 250px;
padding-bottom: 10px;
font-size: 25px;
color: black;
@media (max-width: 700px){
    padding: 50px;
    font-size: 20px;
     }
`;
const About= ()=> {

    function AboutHeader(){
        return(
            <>
            <TextStyle>
      About Us
      </TextStyle>
      <TextStyleTwo>

      </TextStyleTwo>
      <TextStyleTwo>
We are here to help you...
      </TextStyleTwo>
            </>
        )
    }

    function AboutMiddle(){
        return(
            <>
             <>
             <TextStyle2>
                 A Company You Can Trust!
             </TextStyle2>
      <TextStyleMiddle>
Our focus is on bringing quality, productive and helpful products to our costumers. We intend to provide these service with little to no effort from you.
      </TextStyleMiddle>
      
      <TextStyleMiddle>
Our platform will help you with your bottom line by allowing you to reach customers you never reached before.
      </TextStyleMiddle>
            </>
            </>
        )
    }

    function AboutThird(){
        return(
            <>
             <>
             <TextStyle>
                 Made In The United States of America!
             </TextStyle>
      <TextStyleMiddle>
Our applications are made right here in the United States.  
</TextStyleMiddle>
      
      <TextStyleMiddle>
Our entire company is US-based. From our Sales Department to our entire Tech Team, we are proud to be sourced here in the United States.
      </TextStyleMiddle>
            </>
            </>
        )
    }

    return(
        <>
        <Layout/>
        <SectionArea>
            {AboutHeader()}
        </SectionArea>
        <SectionAreatwo>
            {AboutMiddle()}
        </SectionAreatwo>
        <SectionAreathree>
            {AboutThird()}
        </SectionAreathree>
        <LayoutFooter/>
        </>
    )
}

export default About;