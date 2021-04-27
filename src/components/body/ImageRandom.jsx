import React, { useState, useEffect } from 'react';
import ListImageAPI from 'api/ListImageAPI';
import './css/ImageRandom.css';


const ImageRandom = () => {
    
    const [listImage, setListImage] = useState([]);
    const [image, setImage] = useState('https://love2d.net/wp-content/uploads/2017/11/Himouto-Umaru-chan-G.png');

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await ListImageAPI.getListImage();//API lay danh sach background
            setListImage(response.data);
        }
        fetchAPI();

    }, []);

    //Moi 3s doi backgroundImage
    useEffect(() => {
      const interval =  setInterval(() => {
            setImage(listImage[Math.trunc(Math.random() * listImage.length)]);
        }, 3000);
        return () => clearInterval(interval);
        
    }, [listImage]);

    return (
            <div className="box-image" style={{backgroundImage:`url(${image})`}}>
                
            </div>  
        );
}

export default ImageRandom;