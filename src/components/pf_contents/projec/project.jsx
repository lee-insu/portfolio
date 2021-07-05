import React from 'react';
import styles from './project.module.css';

const Project = () => {

    return (
        <>
        <div>project</div>
        <p>시작이 절반이라는 말이 있습니다. 저즌 시작보다 마무리라는 나머지 절반을 채우는 방법이 더 중요하다고 생각합니다.
            한 번 목표한 작업물은 끝까지 마무리합니다.
        </p>

        <table>
            <thead>
                <tr>
                    <th>프로젝트</th>
                    <th>소개</th>
                    <th>개발 기간</th>
                    <th>추가 정보</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>개발한 프로젝트명</th>
                    <td>
                        <div>서비스명 간단한 개요</div>
                        <div>#연관 키워드</div>
                        <div>
                            <span className={styles.tech}>JAVASCRIPT ES6</span>
                            <span className={styles.tech}>REACT</span>
                            <span className={styles.tech}>HTML</span>
                            <span className={styles.tech}>POST CSS</span>
                            <span className={styles.tech}>FIREBASE</span>
                            <span className={styles.tech}></span>
                        </div>
                    </td>
                    <td>
                        <div>(~M/M)</div>
                        <div>개발완료</div>
                        <div>프론트엔드 개발</div>
                    </td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default Project;