import React from 'react';

const input = ({title, value, name}, onChange) => {
    return (
        <div key = {name} className="input">
            <input name = {name}value={value} onChange={onChange}/>
            <label>{title}</label>
        </div>
    )
}

export default input;