import React ,{useState, useEffect} from 'react';
import FollowAPI from 'api/FollowAPI';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
    Card, CardImg, CardTitle,
    CardSubtitle, CardBody, Col,Spinner 
} from 'reactstrap';
import { Container, Row } from 'reactstrap';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';




function Category(props) {
    const user = JSON.parse(localStorage.getItem('USER'));

    const listCategory = useSelector(state => state.list.film);
    const dispatch = useDispatch();

    const [buttonFollow,setButtonFollow] = useState({
        text:'Follow',
        color:'green'
    }); 

    const saveNumberEpisode = (numberEpisode) => {
        localStorage.setItem('NumberEpisode',numberEpisode);
    }


    useEffect(() =>{
        dispatch({
            type:'RESET_LIST_FILM',
        });

        dispatch({
            type:'CATEGORY',
            state:window.location.pathname.split('/')[2],
        });
    },[]);



 const follow = (idFilm) => {
        if(user === null ){
            alert('Please Login');
            window.location.href = '/login';
        }else{
            const follow = async () => {
                const response = await FollowAPI.saveFollow(user.id,idFilm);
                if(response.status === 200) {
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
                    {(listCategory != null) ? listCategory.map(film => {
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
                                        onClick={() =>follow(film.id)}>
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
}

export default Category;