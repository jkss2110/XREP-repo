import React, { Component } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class MaintLayerst extends Component {
    render() {
        return (
            <>
                <Collapse
                    {...this.props}
                    in={this.props.open}
                    className="xrepSwitchLayerst"
                >
                    <div>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Control placeholder="Layer Strategy" />
                                </Col>
                                <Col>
                                    <Button variant="success" onClick={this.props.onHide}>Show</Button>
                                    <Button className="xrepMaintLayerstBtn" variant="secondary" onClick={this.props.onHide}>Delete</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Collapse>
            </>
        );
    }
}
export default MaintLayerst;