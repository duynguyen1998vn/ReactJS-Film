import React,{useEffect, useState} from 'react';
import {
    Card, CardImg, CardTitle,
    CardSubtitle, CardBody, Col,Spinner 
} from 'reactstrap';
import { Container, Row } from 'reactstrap';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
import  '../styles/listfilm.css';
import FollowAPI from 'api/FollowAPI';



const ListFollow = () => {

    const user =JSON.parse(localStorage.getItem('USER'));

    const [list,setList] = useState([]);
    const [buttonFollow,setButtonFollow] = useState({
        text:'UnFollow',
        color:'red',
    }); 

    const saveNumberEpisode = (numberEpisode) => {
        localStorage.setItem('NumberEpisode',numberEpisode);
    }

    
    const handleUnFollow = (idFilm) => {
        const unFollowAPI =  async () => {
            const response = await FollowAPI.unFollow(user.id,idFilm);
            
            if(response.status === 200) window.location.href = '/follow';
            else alert('API Fail')
        }
        unFollowAPI();
    }

    useEffect(() => {
        const fetchListFollow = async () => {
            const response = await FollowAPI.getListFollow(user.id);
           setList(response.data);
        }
        fetchListFollow();
    },[]);

 
    return (
        <div>
            <Container className="justify-content-center" >
                <Row xs={1} sm={1} md={2} lg={3} xl={3} >
                    {(list != null) ? list.map(film => {
                        return (  
                            <Col>           
                                <Card id="card"  key={film.id}>
                                    <Link to={`/watch/${film.id}/1`} className='link-film' onClick={saveNumberEpisode(film.status)}>
                                        <CardImg src={film.image} alt="Link Anh Die Roi" className='card-image'/>
                                
                                        <CardBody className='card-body'>
                                            <CardTitle tag="h5" style={{color:'red'}}>
                                                {film.name}
                                            </CardTitle>
                                            <CardTitle tag="h5" style={{color:'green'}}>
                                                {film.category}
                                            </CardTitle>
                                            <CardSubtitle className='card-title' tag="h6" className="mb-2 text-muted">
                                                {film.status}
                                            </CardSubtitle>
                                        </CardBody>
                                    </Link>
                                    <Button className='btn-follow' 
                                        style={{backgroundColor:buttonFollow.color}} 
                                        onClick={() =>handleUnFollow(film.id)}>
                                        {buttonFollow.text}
                                    </Button>
                                </Card>                     
                            </Col>
                        )
                    }) : <Spinner color="danger"/>}

                </Row>
            </Container>

        </div>
    );
};


export default ListFollow;