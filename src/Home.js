import React from 'react';
import {Layout} from './Layout';
import {LayoutSectionOne} from './LayoutSectionOne';
import {LayoutSectionTwo} from './LayoutSectionTwo';
import {LayoutFooter} from './LayoutFooter';

const Home= ()=> {

    return(
        <>
        <Layout/>
        <LayoutSectionOne/>
        <LayoutSectionTwo/>
        <LayoutFooter/>
        </>
    )
}

export default Home;