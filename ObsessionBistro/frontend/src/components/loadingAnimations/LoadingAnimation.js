import React from 'react';
import "./LoadingAnimation.css"


function LoadingAnimation(props) {
    return (

        <div className="body-loading">
            <p>We are preparing the menu</p>
            <div className='pizza'>
                <div className='slice'></div>
                <div className='slice'></div>
                <div className='slice'></div>
                <div className='slice'></div>
                <div className='slice'></div>
                <div className='slice'></div>
                <div className='slice'></div>
                <div className='slice'></div>
                <div className='slice'></div>
                <div className='slice'></div>
                <div className='slice'></div>
                <div className='slice'></div>
                <div className='slice'></div>
            </div>
        </div>
    );
}

export default LoadingAnimation;