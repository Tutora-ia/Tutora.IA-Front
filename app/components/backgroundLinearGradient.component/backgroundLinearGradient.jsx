import React from 'react';
import './backgroundLinearGradient.css'

export default function backgroundLinearGradient({children, heightBackground}) {

    return (
        <div className='mainBackgroundColor'>
            <div style={{ height: `${heightBackground}` }} className='mainBackground'>
                <div style={{ height: `${heightBackground}` }} className='mask'>
                    {children}
                </div>
            </div>
        </div>
    )
}