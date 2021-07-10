import React from 'react';
import styles from './header.module.css';

const Header = () => {

    return (
      <div className={styles.header}>
        <div className={styles.h1}>다채로운 개발자</div>
        <div className={styles.h2}>이인수입니다</div>
        <img className={styles.img} src="static/img/me.png" alt=""/>
        
        
        
      </div>
    );
}

export default Header;