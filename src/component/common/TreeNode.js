import React from 'react';
import { FaChevronDown, FaChevronRight, FaFile, FaFolderOpen, FaFolder } from 'react-icons/fa';
import last from 'lodash/last';
import styled from 'styled-components';


const TreeNode = (props) => {
    const getPaddingLeft = (level, type) => {
        let paddingLeft = level * 10;
        if (type === 'file') paddingLeft += 10;
        return paddingLeft;
    }

    const StyledTreeNode = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px 8px;
        padding-left: ${props => getPaddingLeft(props.level, props.type)}px;
        margin-left: 0.5rem;
        &:hover {
            background: lightgray;
        }
        `;

    const NodeIcon = styled.div`
        font-size: 12px;
        margin-right: ${props => props.marginRight ? props.marginRight : 5}px;
        `;
    const { node, getChildren, level, onToggle, onNodeSelect } = props;
    const getNodeLevel = (node) => last(node.path.split('/'));
    return (
        <>
            <StyledTreeNode level={level} type={node.type}>
                <NodeIcon onClick={() => onToggle(node)}>
                    {node.type === 'folder' && node.isOpen === undefined && <FaChevronRight />}
                    {node.type === 'folder' && node.isOpen === false && <FaChevronRight />}
                    {node.type === 'folder' && node.isOpen === true && <FaChevronDown />}
                </NodeIcon >
                <NodeIcon marginRight={10}>
                    {node.type === 'file' && <FaFile />}
                    {node.type === 'folder' && node.isOpen === true && <FaFolderOpen />}
                    {node.type === 'folder' && node.isOpen === false && <FaFolder />}
                    {node.type === 'folder' && node.isOpen === undefined && <FaFolder />}
                </NodeIcon >
                <span role="button" onClick={() => onNodeSelect(node)}>
                    {getNodeLevel(node)}
                </span>
            </StyledTreeNode>
            {node.isOpen && getChildren(node).map(childNode => (
                <TreeNode key={childNode.path}
                    {...props}
                    node={childNode}
                    level={level + 1}
                />
            ))}
        </>
    );

}
export default TreeNode;