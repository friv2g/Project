import React from 'react';

const header = (title = 'Bottega Madlibs', description = 'um...um..um..um..um..um..um..um..um..um..um..um..') => {
    return (
        <div className="header">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default header;