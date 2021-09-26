import React from 'react';
import PropTypes from 'prop-types';

import './Task.scss'

Task.propTypes = {

};

function Task(props) {
    return (
        <li className="task-item">
            <img src="https://64.media.tumblr.com/d8a2f214a661bf7ab59eaae3534aef61/828d227d23aeb43d-96/s1280x1920/87f6e646b9b9795989d90958eb9b232336d16c4d.jpg"
                alt="nhutluandev" />
            Title: Luanvn-dev
        </li>
    );
}

export default Task;