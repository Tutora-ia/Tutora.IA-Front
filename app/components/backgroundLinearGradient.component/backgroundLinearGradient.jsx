import React from 'react';
import './backgroundLinearGradient.css'

export default function backgroundLinearGradient({mainContent, sectionContent, displaySectionContent}) {

    return (
        <>
            <div className='mainBackground'>
                <div className='mask'>
                    {mainContent}
                </div>
            </div>
            <div className='background' style= {displaySectionContent}>
                    {sectionContent}
            </div>
        </>
    )
}