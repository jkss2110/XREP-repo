import React, { Component } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class SwitchLayer extends Component {
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
                                    <Button variant="success" onClick={this.props.onHide}>Switch</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Collapse>
            </>
        );
    }
}

export default SwitchLayer;