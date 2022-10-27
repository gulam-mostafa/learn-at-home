import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import RightSide from '../RightSide/RightSide';
import "./Main.css"

const Main = () => {
    return (
        <div>
            <Container  className='mt-3 topicsSide'>
                <Row>
                    <Col lg='9'>
                    <div className='right-up'><RightSide></RightSide></div>
                    <Outlet></Outlet>
                    </Col>

                    <Col lg='3' className='pt-2 pl-5 bg-inf rightSideUp'
                >
                    <RightSide></RightSide>
                 
                    </Col>

                </Row>
                
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;