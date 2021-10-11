import React from 'react';
import Popup from './popup';

function index(props) {
    return (
        <Popup toggle={props.toggle} />
    );
}

export default index;
