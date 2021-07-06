import React from 'react';
import styles from './edu.module.css';

const Edu = () => {
    return (
        <div className={styles.section}>
        <div className={styles.main}>EDUCATION</div>
        <p className={styles.p}>다양한 환경에서 다양한 경험과 도전을 했습니다. 비빔밥에 올려진 여러 고명들이 어울려 최고의 맛을 내듯,<br/> 다양한 경험이 최고의 결과물을 보여줄 것입니다.
        </p>
        <ul className={styles.ul}>
            <li className={styles.li}>
                <div className={styles.box}>
                    <div className={styles.imgBox}>
                         <div className={styles.head}>대외활동</div>
                        <img src="/static/img/활동.jpg" alt=""/>
                    </div>
                    <div className={styles.content}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>활동내역</th>
                                    <th>기간</th>
                                </tr>
                            </thead>
                            <tbody className={styles.tbody}>
                                <tr>
                                    <th>카카오챗봇 헤이서 제작</th>
                                    <th>2020.06</th>
                                </tr>
                                <tr>
                                    <th>크몽 SNS 카드뉴스 서비스 운영</th>
                                    <th>2019.08</th>
                                </tr>
                                <tr>
                                    <th>PB브랜드 오프라이스<br/>온라인 마케팅</th>
                                    <th>2018.04</th>
                                </tr>
                                <tr>
                                    <th>스타트업캠퍼스 프로젝트 기획</th>
                                    <th>2018.01</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </li>
            <li className={styles.li}>
                <div className={styles.box}>
                    <div className={styles.imgBox}>
                         <div className={styles.head}>수상내역</div>
                        <img src="/static/img/수상.jpg" alt=""/>
                    </div>
                    <div className={styles.content}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>수상내역</th>
                                    <th>날짜</th>
                                </tr>
                            </thead>
                            <tbody className={styles.tbody}>
                                <tr>
                                    <th>현대산업디자인대상전 특선</th>
                                    <th>2019.12</th>
                                </tr>
                                <tr>
                                    <th>서원대학교 온라인 홍보단 우수단원상</th>
                                    <th>2019.12</th>
                                </tr>
                                <tr>
                                    <th>이랜드리테일 디지털 마케팅 우수상</th>
                                    <th>2018.08</th>
                                </tr>
                                <tr>
                                    <th>뉴미디어협회 디지털 마케팅 우수상</th>
                                    <th>2018.08</th>
                                </tr>
                                <tr>
                                    <th>스타트업캠퍼스 OZ스타트업 우수상</th>
                                    <th>2018.03</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </li>
            <li className={styles.li}>
                <div className={styles.box}>
                    <div className={styles.imgBox}>
                         <div className={styles.head}>학력</div>
                        <img src="/static/img/grad.jpeg" alt=""/>
                    </div>
                    <div className={styles.content}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>학교</th>
                                    <th>기간</th>
                                </tr>
                            </thead>
                            <tbody className={styles.tbody}>
                                <tr>
                                    <th>서원대학교 디자인학과</th>
                                    <th>15.03 ~ 21.08</th>
                                </tr>
                                <tr>
                                    <th>쌍용고등학교</th>
                                    <th>12.03 ~ 15.02</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </li>
        </ul>
        </div>
    );
}

export default Edu;