import React from 'react';
import styles from './summary.module.css';

const Summary = () => {
    return (
        <div className={styles.section}>
        <div className={styles.main}>SUMMARY</div>
        <p className={styles.p}>상상했던 아이디어를 실현하기 위해 개발을 배우기 시작했습니다.<br/>
            개발이라는 도구를 통해 문제와 오류를 끊임없이 고민하고 분석하며 성장하고 있습니다.
         </p>
         </div>
     )

}

export default Summary;