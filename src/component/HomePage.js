import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomePage() {
    return (
        <div className="jumbotron xrepJumboTron">
            <Container fluid="true">
                <Row fluid="true">
                    <Col md={4} className="xrepHomeLayerst">
                        <h5>LAYER CUST is the current Layer Strategy</h5>
                    </Col>
                    <Col md={7}>
                        <Button variant="link">Learn more</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomePage;