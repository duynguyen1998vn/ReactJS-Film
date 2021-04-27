import React from 'react';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import WatchFilm from '../components/WatchFilm';



function WatchPage() {
    return (
        <div>
            <Header/>
            <WatchFilm/>
            <Footer/>
        </div>
    );
}

export default WatchPage;