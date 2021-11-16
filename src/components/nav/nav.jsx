import React from 'react';
import styles from './nav.module.css';
import {Link} from 'react-scroll';

const Nav = () => {
    

    return (
        <nav className={styles.nav}>
            <div className={styles.bar}>
            <div className={styles.logo}><Link activeClass="active" to="home" spy={true} smooth={true}>Lee Insu</Link></div>
            <ul className={styles.ul}>
                <li><Link  to="summary" spy={true} smooth={true}>SUMMARY</Link></li>
                <li><Link  to="project" spy={true} smooth={true}>PROJECT</Link></li>
                <li><Link  to="stack" spy={true} smooth={true}>STACKS</Link></li>
                <li><Link  to="edu" spy={true} smooth={true}>EDUCATION</Link></li>
                <li><Link  to="docu" spy={true} smooth={true}>DOCUMENT</Link></li>
                <li><Link  to="contact" spy={true} smooth={true}>CONTACT</Link></li>
            </ul>
            </div>
            <div className={styles.download}><a href="https://drive.google.com/file/d/1YHWHEvZ2zZsOyZzMJG3BBAwuW7yY8k6o/view?usp=sharing">이력서</a></div>
        </nav>
        
    
    );
}

export default Nav;