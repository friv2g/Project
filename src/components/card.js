import React, {Component} from 'react';

import input from './input';

class Card extends Component {
    render() {
        return (
            <div className="card">
                { input('color') }
                { input('noun') }
            </div>
        );
    }
}

export default Card;