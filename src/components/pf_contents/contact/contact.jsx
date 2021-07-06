import React from 'react';
import styles from './contact.module.css';

const Contact = () => {

    return (
        <div className={styles.section}>
        <div className={styles.main}>CONTACT</div>
        <div className={styles.p}>여기까지 읽어주셔서 감사합니다. 더 성실하게, 더 최선을 다하겠습니다</div>
        <div className={styles.box}>
            <div className={styles.name}>LEE IN SU</div>
            <ul className={styles.ul}>
                <li>
                  <span className={styles.span}>POSITION:</span>
                  <span>Frondend Developer</span>
                </li>
                <li>
                  <span className={styles.span}>EMAIL:</span>
                  <span>epoch@kakao.com</span>
                </li>
                <li>
                  <span className={styles.span}>PHONE:</span>
                  <span>010-2417-1388</span>
                </li>
            </ul>
        </div>
        </div>
    )
}

export default Contact;