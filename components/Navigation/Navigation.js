import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router';

import styles from './Navigation.css';

const Navigation = (props) => (
    <div>
        <nav>
            <ul className={styles['nav-list']}>
                <li className={styles['nav-item']}><Link to='/home'>Home</Link></li>
                <li className={styles['nav-item']}><Link to='/'>Posts</Link></li>
                <li className={styles['nav-item']}><Link to='/about'>About</Link></li>
            </ul>
        </nav>
        <div>
            {props.children}
        </div>
    </div>
);

export default Navigation;