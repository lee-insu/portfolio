import React from 'react';
import styles from './summary.module.css';

const Summary = () => {
    return (
        <div className={styles.section}>
        <div className={styles.main}>SUMMARY</div>
        <p className={styles.p}>상상했던 아이디어를 실현하기 위해 개발을 배우기 시작했습니다.<br/>
            4가지의 프로젝트를 기획, 구축하고 사후 관리를 하면서 <br/> 
            react, firebase, mysql 등 필요한 기술과 문제를 스스로 해결하는 노하우를 배웠습니다.  
         </p>
         </div>
     )

}

export default Summary;