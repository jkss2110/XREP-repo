import React from 'react';
import TreeTable from './common/TreeTable';
import TabContent from './common/TabContent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class HomeContent extends React.Component {
    state = {
        xmlContent: ""
    }
    onSelectNode = (node) => {
        this.setState({ xmlContent: node.content });
    }
    render() {
        return (
            <Container fluid="true">
                <Row fluid="true">
                    <Col md={4}>
                        <TreeTable oSelectedNode={this.onSelectNode} />
                    </Col>
                    <Col>
                        <TabContent xml={this.state} />
                    </Col>
                </Row>
            </Container>
        );
    }
};