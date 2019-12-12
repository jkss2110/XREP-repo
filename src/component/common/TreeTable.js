import React, { Component } from 'react';
import values from 'lodash/values';
import TreeNode from './TreeNode';
import { getTree } from '../../api/TreeDataApi';
import styled from 'styled-components';

export default class TreeTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: {}
        };
    }
    componentDidMount() {
        getTree().then(nodes => this.setState({ nodes: nodes }));
    }
    getRootNodes = () => {
        const { nodes } = this.state;
        return values(nodes).filter(nodes => nodes.isRoot === true);
    }
    getChildNodes = (node) => {
        const { nodes } = this.state;
        if (!node.children) return [];
        return node.children.map(path => nodes[path]);
    }
    onToggle = (node) => {
        const { nodes } = this.state;
        nodes[node.path].isOpen = !node.isOpen;
        this.setState({ nodes });
    }
    onNodeSelect = (node) => {
        const { oSelectedNode } = this.props;
        oSelectedNode(node);

    }
    render() {
        const rootNode = this.getRootNodes();
        const TreeDiv = styled.div`
        overflow: visible;
        box-shadow: 4px 6px 8px 0px dimgrey;
        margin-left: 1rem;
        `;
        return (
            <>
                <TreeDiv>
                    {rootNode.map(node => (
                        <TreeNode key={node.path}
                            node={node}
                            getChildren={this.getChildNodes}
                            onToggle={this.onToggle}
                            onNodeSelect={this.onNodeSelect}
                            level={0}
                        />
                    ))}
                </TreeDiv>
            </>
        );
    }

}

