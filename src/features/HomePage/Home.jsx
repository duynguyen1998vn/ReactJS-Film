import React from 'react';
import Header from 'components/header/Header';
import ListFilm from 'features/Film/components/ListFilm';
import Footer from 'components/footer/Footer';
import ImageRandom from 'components/body/ImageRandom';



function Home() {
    return (
        <div>
            <Header/>
            <ImageRandom/>
            <ListFilm/>
            <Footer/>
        </div>
    );
}

export default Home;