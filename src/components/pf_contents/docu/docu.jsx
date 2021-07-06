import React from 'react';
import styles from './docu.module.css';
const Docu = () => {

    return (
        <div className={styles.section}>
        <div className={styles.main}>DOCUMENT</div>
        <p className={styles.p}>저는 이 세 가지를 항상 명심합니다. 끊임 없는 도전, 문제를 대하는 태도, 인내심입니다.<br/>
        이러한 마음가짐이 오랜 시간 지속되면 엄청난 자산이 될 것이라 믿습니다. <br/>그동안 제가 노력해온 다양한 
        문서를 아래에서 볼 수 있습니다. </p>

        <ul className={styles.ul}>
        <li className={styles.li}>
                <div className={styles.box}>
                    <div className={styles.imgBox}>
                         <div className={styles.head}>개발 분야</div>
                        <img src="/static/img/활동.jpg" alt=""/>
                    </div>
                    <div className={styles.content}>
                        <table className={styles.table}>
                            <tbody className={styles.tbody}>
                                <tr>
                                    <th><a href="https://github.com/lee-insu">GITHUB</a></th>
                                </tr>
                                <tr>
                                    <th><a href="https://velog.io/@lamda">기술 블로그</a></th>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </li>
            <li className={styles.li}>
                <div className={styles.box}>
                    <div className={styles.imgBox}>
                         <div className={styles.head}>비개발 분야</div>
                        <img src="/static/img/활동.jpg" alt=""/>
                    </div>
                    <div className={styles.content}>
                        <table className={styles.table}>
                            <tbody className={styles.detbody}>
                                <tr>
                                    <th><a href="https://drive.google.com/file/d/1lSCMGpQtGXZ_DiOokZPbYaoYN2DlYjJH/view?usp=sharing">PB브랜드 <br/>온라인 마케팅 보고서</a></th>
                                    <th><a href="https://brunch.co.kr/@carpediem7760/3">리디웹툰 기획</a></th>
                                </tr>
                                <tr>
                                    <th><a href="https://brunch.co.kr/magazine/heyseo">카카오톡 챗봇 기획</a></th>
                                    <th><a href="https://drive.google.com/file/d/11hT8jBx8jDUp0QiE0TlTBnosfJ3Br4y1/view?usp=sharing">카카오콕 기획</a></th>
                                </tr>
                                <tr>
                                    <th><a href="https://xd.adobe.com/view/588cc4fd-5020-45e9-9ef5-1845f287960c-0ddf/?fullscreen">킥보드 통합서비스 UI</a></th>
                                </tr>
                                

                            </tbody>
                        </table>
                    </div>
                </div>
            </li>
   
        </ul>
        </div>
    )
}

export default Docu;