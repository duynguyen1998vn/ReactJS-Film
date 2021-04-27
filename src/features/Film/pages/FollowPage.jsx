import React from 'react';
import Header from 'components/header/Header';
import ListFollow from '../components/ListFollow';
import Footer from 'components/footer/Footer';
import ImageRandom from 'components/body/ImageRandom';


function FollowPage() {
    return (
        <div>
            <Header/>
            <ImageRandom/>
            <ListFollow/>
            <Footer/>
        </div>
    );
}

export default FollowPage;