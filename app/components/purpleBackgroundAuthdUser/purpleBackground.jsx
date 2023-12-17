import React from 'react'
import styles from './purpleBackground.css'

export default function PurpleBackground({ children }) {
    return(
        <div className="purpleBackground">
            { children }
        </div>
    )
}