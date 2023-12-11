import React from 'react';
import './backgroundWithPurpleCircles.css'


export default function backgroundWithPurpleCircles({ children, heightContainer }) {

    return(
        <div style={{ height: `${heightContainer}` }} className='background'>
            <div className='circle'></div>
            <div className='circle2'></div>
            { children }
        </div>
    )
}