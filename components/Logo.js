import React from 'react'
import styles from '../styles/Logo.module.css'

function Logo() {
    return (
        <div className={styles.logo}>
            <img src="/images/windbnb.png" alt="windbnb"/>
            <p>Windbnb</p>
        </div>
    )
}

export default Logo
