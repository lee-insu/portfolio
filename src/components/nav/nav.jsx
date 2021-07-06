import React from 'react';
import styles from './nav.module.css';

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.bar}>
            <div className={styles.logo}>Lee Insu</div>
            <ul className={styles.ul}>
                <li>SUMMARY</li>
                <li>PROJECT</li>
                <li>STACK</li>
                <li>EDUCATION</li>
                <li>DOCUMENT</li>
                <li>CONTACT</li>
            </ul>
            </div>
            <div className={styles.download}>이력서</div>
        </nav>
        
    
    );
}

export default Nav;