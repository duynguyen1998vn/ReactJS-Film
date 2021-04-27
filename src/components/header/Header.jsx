import React from 'react';
import SearchBox from './SearchBox';
import Menu from './Menu';
import { Container, Row, Col } from 'reactstrap';
import './css/header.css';

function Header() {
 
    return (
        <Container fluid className="header">
            <Row  xs={1} sm={1} md={1} lg={2} xl={2}>
                <Col>
                    <Menu/>  
                </Col>
                
                <Col>
                    <SearchBox/>
                </Col>       
            </Row>
        </Container>
    )
}

export default Header;