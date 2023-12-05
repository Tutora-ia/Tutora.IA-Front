import React from 'react';
import './backgroundLinearGradient.css'

export default function backgroundLinearGradient({mainContent, sectionContent}) {

    return (
        <>
            <div className='mainBackground'>
                <div className='mask'>
                    {mainContent}
                </div>
            </div>
            <div className='background'>
                    {sectionContent}
            </div>
        </>
    )
}