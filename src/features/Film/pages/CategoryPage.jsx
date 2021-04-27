import React from 'react';
import Header from 'components/header/Header';
import ImageRandom from 'components/body/ImageRandom';
import Category from '../components/Category';
import Footer from 'components/footer/Footer';


function CategoryPage() {
    return (
        <div>
            <Header/>
            <ImageRandom/>
            <Category/>
            <Footer/>
        </div>
    );
}

export default CategoryPage;