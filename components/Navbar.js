import React from 'react'
import Logo from './Logo'
import SearchBox from './SearchBox'
import styles from '../styles/Navbar.module.css'

function Navbar() {
    return (
        <div className={styles.navContainer}>
            <nav>
                <Logo />
                <SearchBox />
            </nav>
        </div>
    )
}

export default Navbar
