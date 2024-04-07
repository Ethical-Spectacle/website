import React from 'react';
import './animations/h-decoration-top.scss';
import './animations/h-decoration-bottom.scss';
import './animations/v-decoration-left.scss';
import './animations/v-decoration-right.scss';

function LineDecorations(props) {
    return (
        <>
            <span className='h-decoration-top'>
                <div class="fade-in-content"></div>
            </span>
            <span className='h-decoration-bottom'>
                <div class="fade-in-content"></div>
            </span>
            <span className='v-decoration-left'>
                <div class="fade-in-content"></div>
            </span>
            <span className='v-decoration-right'>
                <div class="fade-in-content"></div>
            </span>
        </>
    );
}

export default LineDecorations;