import React, { useState } from 'react';

import './card.scss';

function Card(props) {

    return (
        <div className="Card">
            {props.name}
        </div>
    );
}

export default Card;
