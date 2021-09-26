import React from 'react';
import PropTypes from 'prop-types';

import './Column.scss'

import Task from 'components/Task/Task';

Column.propTypes = {

};

function Column(props) {
    return (
        <div className="column">
            <header>Brainstorm</header>
            <ul className="task-list">
                <Task />
                <li className="task-item">Add what you like to work on below</li>
                <li className="task-item">Add what you like to work on below</li>
                <li className="task-item">Add what you like to work on below</li>
                <li className="task-item">Add what you like to work on below</li>
                <li className="task-item">Add what you like to work on below</li>
            </ul>
            <footer>
                Add another card +
            </footer>
        </div>
    );
}

export default Column;