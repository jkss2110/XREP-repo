import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';

const TabContent = (props) => {

    return (
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col fluid="true">
                        <Tab.Content>
                            <Tab.Pane eventKey="first" >
                                <div className="d-inline p-2">{props.xml.xmlContent}</div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <div className="d-inline p-2">{props.xml.xmlContent}</div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third" >
                                <div>
                                    XML
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <div>
                                    Attribute
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth" >
                                <div>
                                    Reference
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="sixth">
                                <div>
                                    Text
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="seventh">
                                <div>
                                    Version History
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    <Col md={3} className="xrepTabSelect">
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Properties</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Edit</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">XML</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">Attribute</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth">Reference</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="sixth">Text</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="seventh">Version History</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );
}
export default TabContent;