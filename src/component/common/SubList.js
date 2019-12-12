import React, { Component } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import SwitchLayer from '../forms/SwitchLayer';
import MaintLayerst from '../forms/MaintLayerst';
class SubList extends Component {
    state = {};
    handleClick = (bState, e) => {
        this.setState({
            open: bState,
            form: e
        });
    };
    getForm = () => {
        //if (this.state.open) {
        switch (this.state.form) {
            case 1.1: return <SwitchLayer open={this.state.open} onHide={() => this.handleClick(false, 1.1)} />;
            case 1.2: return <MaintLayerst open={this.state.open} onHide={() => this.handleClick(false, 1.2)} />;
            default: return;
        }
        //}
        // return;
    };
    render() {
        return (
            <>
                <Collapse
                    {...this.props}
                    in={this.props.open}
                >
                    <div className="xrepSubMenu">
                        {this.props.onDisplay.value.map((sList, iIndex) => (
                            <span key={this.props.onDisplay.key[iIndex]} onClick={() => this.handleClick(!this.state.open, this.props.onDisplay.key[iIndex])}>{sList}</span>
                        ))}
                    </div>
                </Collapse>
                {this.getForm()}
            </>
        );
    }
}

export default SubList;