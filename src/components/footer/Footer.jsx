import React from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import './css/footer.css';
function Footer() {
    return (
        <div>
           <Container className="footer" >
                <Row className="row-footer">

                    <Col>
                    <a href='https://www.facebook.com/truongduy.nguyen.52090/' id='fb'>
                            <Button color="primary">Facebook</Button>
                        </a>
                   <Link to="/category/Action"><Button color="secondary" className="btnCategory">Action</Button></Link>
                   <Link to="/category/Comedy"><Button color="secondary" className="btnCategory">Comedy</Button></Link> 
                   <Link to="/category/Romance"><Button color="secondary" className="btnCategory">Romance</Button></Link> 
                   <Link to="/category/Drama"><Button color="secondary" className="btnCategory">Drama</Button></Link> 
                    </Col>
                </Row>
           </Container>
        </div>
    );
}

export default Footer;