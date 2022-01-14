import React from 'react';
import MainContent from '../MainContent';
import Navbar from '../Navbar';
import { ContentStyle } from './styles';

const ContentPage = () => {
    return ( 
        <ContentStyle>
            <Navbar />
            <MainContent />
        </ContentStyle>
     );
}
 
export default ContentPage;