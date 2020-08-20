import React, {useState} from 'react';
import {Layout} from './Layout';
import {LayoutFooter} from './LayoutFooter';
import styled from 'styled-components';
import {Title} from "./Styles/title";
import {seaBlue, darker, light} from "./Styles/colors";
import {FeaturesHeader} from "./FeaturesHelp";
import {FeatureTiles} from "./FeatureTiles";
import {FeatureDialog} from "./featureDialog";
import {useFeatList} from "./listHook";

export const TextStyle = styled(Title)`
padding-top: 100px;
padding-left: 270px;
padding-bottom: 5px;
font-size: 45px;
color: ${seaBlue};
text-shadow: 1px 1px 2px #380503;
`;

const Features= ({})=> {
    const [featList, setFeatList] = useState('');

    return(
        <>
        <Layout/>
        <FeatureDialog featList={featList} setFeatList={setFeatList}/>
        <FeaturesHeader/>
        <FeatureTiles setFeatList={setFeatList}></FeatureTiles>
        <LayoutFooter/>
        </>
    )
};

export default Features;