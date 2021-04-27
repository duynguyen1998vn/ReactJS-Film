import React,{useEffect, useState} from 'react';
import {
    Card, CardImg, CardTitle,
    CardSubtitle, CardBody, Col,Spinner 
} from 'reactstrap';
import { Container, Row } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Pagination, PaginationItem, PaginationLink,Button} from 'reactstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import ListFilmAPI from 'api/ListFilmAPI';
import  '../styles/listfilm.css';
import FollowAPI from 'api/FollowAPI';

// Render so Button Chuyen Trang Film 1page/6film
const getPagination = (numberEpisode) => {
    let pagination = [];
    for(let i =1 ;i<= numberEpisode ;i++){
        pagination.push(
            <PaginationItem>
                <PaginationLink href= {`/home/page=${i}`} >{i}</PaginationLink>
            </PaginationItem>)
    }
    return pagination;
}


const ListFilm = () => {

    const user =JSON.parse(localStorage.getItem('USER'));
    
    const myList = useSelector(state => state.list.film);
    const dispatch = useDispatch();

    const [buttonFollow,setButtonFollow] = useState({
        text:'Follow',
        color:'green'
    }); 

    
    const saveNumberEpisode = (numberEpisode) => {
        localStorage.setItem('NumberEpisode',numberEpisode);
    }

    //Lay Danh Sach Film Tu API luu vao redux
    useEffect(() => {
        const fetchListFilm = async () => {
            const response = await ListFilmAPI.getListFilm();
            dispatch({
                state:response,
                type:'POST_FROM_API_TO_STORE',
            })
        }
        fetchListFilm();
    },[]);

    //function khi click button follow
    const follow = (idFilm) => {
        if(user === null ){
            alert('Please Login');
            window.location.href = '/login';
        }else{
            const follow = async () => {
                const response = await FollowAPI.saveFollow(user.id,idFilm);
               
                if(response.status === 200) {
                    console.log('oke okeoke');
                    alert('Success');
                  /*  setButtonFollow({
                        text:'UnFollow',
                        color:'red'
                    });*/
                }else alert('Fail API');
            }
            follow();
        }
    }
   
    return (
        <div>
            <Container className="justify-content-center" >
                <Row xs={1} sm={1} md={2} lg={3} xl={3} >
                    {(myList != null) ? myList.map(film => {
                        return (  
                            <Col>           
                                <Card id="card"  key={film.id}>
                                    <Link to={`/watch/${film.id}/1`} className='link-film' onClick={saveNumberEpisode(film.status)}>
                                        <CardImg src={film.image} alt="#" className='card-image'/>
                                
                                        <CardBody className='card-body'>
                                            <CardTitle tag="h5" style={{color:'red'}}>{film.name}</CardTitle>
                                            <CardTitle tag="h5" style={{color:'green'}}>{film.category}</CardTitle>
                                            <CardSubtitle className='card-title' tag="h6" className="mb-2 text-muted">
                                                {film.status}
                                            </CardSubtitle>
                                        </CardBody>
                                    </Link>
                                    <Button className='btn-follow' style={{backgroundColor:buttonFollow.color}} onClick={() =>follow(film.id)}>{buttonFollow.text}</Button>
                                </Card>                     
                            </Col>
                        )
                    }) : <Spinner color="danger" />}

                </Row>
            </Container>

            <Pagination size="lg" aria-label="Page navigation example" style={{justifyContent:'center'}}>   
                <PaginationItem>
                    {myList!==undefined ? getPagination( Math.ceil(myList.length/6)) : <Spinner color="danger" />}
                </PaginationItem>
            </Pagination>
        </div>
    );
};


export default ListFilm;