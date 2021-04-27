import React, { useEffect, useState } from 'react';
import ListFilmAPI from 'api/ListFilmAPI';
import ReactHtmlParser from 'react-html-parser'
import { Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import '../styles/watchfilm.css';

//Thanh Chon Tap Film
const getPagination = (idFilm,numberEpisode) => {
    let pagination = [];
    for(let i =1 ;i<= numberEpisode ;i++){
        pagination.push(
            <PaginationItem>
                <PaginationLink href ={`/watch/${idFilm}/${i}`} >{i}</PaginationLink>
            </PaginationItem>)
    }

    return pagination;
}


function WatchFilm(props) {
    const [video, setVideo] = useState('');
    const pathName = window.location.pathname.split('/');
   
    const idFilm =pathName[2];
    const episodeCurrrent = pathName[3];

    const numberEpisode = parseInt(localStorage.getItem('NumberEpisode').split('/')[0]);

    useEffect(() => {

        const fetch = async () => {
            const repos = await ListFilmAPI.getFilm(idFilm,episodeCurrrent);
            setVideo(repos.data.src);
        }
        fetch();
    },[]);


    return (            
            <div className="box-video">
                    <br></br>
                {ReactHtmlParser(video)}
                <div className="box-episode">
                    <Pagination size="md" aria-label="Page navigation example" style={{justifyContent:'center'}}>   
                             {getPagination(idFilm,numberEpisode)}
                    </Pagination>
                </div>
            </div>   
    )
    

}

export default WatchFilm;