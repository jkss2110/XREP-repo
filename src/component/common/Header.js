import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import SubList from './SubList';

function Header() {
    const [subMenu, setSubMenu] = useState({ open: false, linkName: "" });
    function getSubList(sList) {
        var oList = { key: [], value: [] };
        switch (sList) {
            case "Layerst": oList = {
                key: [1.1, 1.2],
                value: ["Switch Layer Strategy", "Maintain Layer Strategy"]
            };
                break;
            case 'File': oList = {
                key: [2.1, 2.2, 2.3, 2.4, 2.5, 2.6],
                value: ["Edit", "Save", "Activate", "Logical Delete", "Cleanup", "Upload Binary"]
            };
                break;
            default: oList = { key: [], value: [] };
        }
        return oList;
    }
    function handleLink(oSubMenu, sLinkName) {
        setSubMenu({
            open: !oSubMenu.open,
            linkName: sLinkName
        });
    }
    return (
        <>
            <Navbar bg="dark" variant="dark" className="justify-content-between">
                <Navbar.Brand href="#">
                    XREP Browser
            </Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search" size="lg" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar>
            <Navbar bg="light" variant="light">
                <Nav className="mr-auto">
                    <Nav.Link href="#" onClick={() => handleLink(subMenu, "Layerst")}>Layer Strategy</Nav.Link>
                    <Nav.Link href="#" onClick={() => handleLink(subMenu, "File")}>File</Nav.Link>
                    <Nav.Link href="#">Load Generate</Nav.Link>
                    <Nav.Link href="#">Form Generate</Nav.Link>
                </Nav>
            </Navbar>
            <SubList open={subMenu.open} onDisplay={getSubList(subMenu.linkName)} linkName={subMenu.linkName} />
        </>
    );
}

export default Header;