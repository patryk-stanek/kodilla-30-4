import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router';

const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none'
}

const childStyle = {
    margin: '0 10px'
}

const Navigation = (props) => (
    <div>
        <nav>
            <div>
                <ul style={divStyle}>
                    <li style={childStyle}><Link to='/'>Home</Link></li>
                    <li style={childStyle}><Link to='/posts'>Posts</Link></li>
                    <li style={childStyle}><Link to='/about'>About</Link></li>
                </ul>
            </div>
        </nav>
        <div>
            {props.children}
        </div>
    </div>
);

export default Navigation;