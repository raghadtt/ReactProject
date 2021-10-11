import React, { useState } from 'react';
import './card.scss';

function Card(props) {

    return (
        <div className="card">
            {props.name}
        </div>
    );
}

export default Card;
