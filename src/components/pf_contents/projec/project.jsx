import React from 'react';
import styles from './project.module.css';

const Project = () => {

    return (
        <div className={styles.section}>
        <div className={styles.main}>PROJECT</div>
        <p className={styles.p}>시작이 절반이라는 말이 있습니다. 저즌 시작보다 마무리라는 나머지 절반을 <br/>채우는 방법이 더 중요하다고 생각합니다.
            한 번 목표한 작업물은 끝까지 마무리합니다.
        </p>

        <table className={styles.table}>
            <thead>
                <tr className={styles.trHead}>
                    <th>프로젝트</th>
                    <th>소개</th>
                    <th>개발 기간</th>
                    <th>추가 정보</th>
                </tr>
            </thead>
            <tbody>
            <tr className={styles.tr}>
                    <th>헤이앱</th>
                    <td>
                        <div className={styles.service}>디자인 UIUX를 분석하는 블로그형 커뮤니티 사이트, 게시물 관리하는 어드민 페이지 제작</div>
                        <div className={styles.keywords}>#게시판 &nbsp; #CRUD &nbsp;#상태관리 </div>
                        <div className={styles.techList}>
                            <span className={styles.react}>REACT</span>
                            <span className={styles.redux}>REDUX</span>
                            <span className={styles.js}>JAVASCRIPT ES6</span>
                            <span className={styles.firebase}>FIREBASE</span>
                            <span className={styles.postcss}>POSTCSS</span>
                            <span className={styles.tech}>HTML</span>
                        
                        </div>
                    </td>
                    <td>
                        <div className={styles.during}>09.03~11.02</div>
                        <div className={styles.state}>개발완료</div>
                        <div className={styles.position}>프론트엔드, 백엔드, 데이터베이스 (1인)</div>
                    </td>
                    <th>
                        <a className={styles.link} href="https://github.com/lee-insu/salary">GITHUB</a><br/>
                        <a className={styles.link} href="https://nostalgic-bose-5d7e0a.netlify.app">SITE</a><br/>
                        <a className={styles.link} href="https://github.com/lee-insu/salary-admin">GITHUB</a><br/>
                        <a className={styles.link} href="https://hopeful-kare-cc0c2c.netlify.app/">SITE</a>
                    </th>
                </tr>
            <tr className={styles.tr}>
                    <th>코인 앵무새</th>
                    <td>
                        <div className={styles.service}>코인을 무작위로 뽑아주는 앵무새와 정보를 알려주는 crud를 구현한 커뮤니티 사이트</div>
                        <div className={styles.keywords}>#자유게시판 &nbsp; #CRUD &nbsp;#랜덤코인뽑기 </div>
                        <div className={styles.techList}>
                            <span className={styles.react}>REACT</span>
                            <span className={styles.redux}>REDUX</span>
                            <span className={styles.js}>JAVASCRIPT ES6</span>
                            <span className={styles.firebase}>FIREBASE</span>
                            <span className={styles.postcss}>POSTCSS</span>
                            <span className={styles.tech}>HTML</span>
                        
                        </div>
                    </td>
                    <td>
                        <div className={styles.during}>07.20~09.01</div>
                        <div className={styles.state}>개발완료</div>
                        <div className={styles.position}>프론트엔드, 백엔드, 데이터베이스 (1인)</div>
                    </td>
                    <th>
                        <a className={styles.link} href="https://github.com/lee-insu/coin_parrot">GITHUB</a><br/>
                        <a className={styles.link} href="https://goofy-jepsen-710f83.netlify.app">SITE</a>
                    </th>
                </tr>
                <tr className={styles.tr}>
                    <th>OH CO!</th>
                    <td>
                        <div className={styles.service}>지금 온도에 따라 어울리는 코디를 추천해주는 서비스</div>
                        <div className={styles.keywords}>#OpenWeather API &nbsp; #Geolocation API &nbsp;#오늘의 날씨 </div>
                        <div className={styles.techList}>
                            <span className={styles.react}>REACT</span>
                            <span className={styles.js}>JAVASCRIPT ES6</span>
                            <span className={styles.firebase}>FIREBASE</span>
                            <span className={styles.postcss}>POSTCSS</span>
                            <span className={styles.tech}>HTML</span>
                        </div>
                    </td>
                    <td>
                        <div className={styles.during}>05.18 ~ 06.22</div>
                        <div className={styles.state}>개발완료</div>
                        <div className={styles.position}>프론트엔드, 백엔드, 데이터베이스 (1인)</div>
                    </td>
                    <th>
                        <a className={styles.link} href="https://github.com/lee-insu/clothes-list-react">GITHUB</a><br/>
                        <a className={styles.link} href="https://ohco.kr/">SITE</a>
                    </th>
                </tr>
                <tr className={styles.tr}>
                    <th>오늘의 기분</th>
                    <td>
                        <div className={styles.service}>사진을 통해 오늘의 기분을 알려주는 서비스</div>
                        <div className={styles.keywords}>#Teachable Machine API &nbsp; #CRUD &nbsp;#Python &nbsp;#달력 &nbsp;#기분 테스트</div>
                        <div className={styles.techList}>
                            <span className={styles.js}>JAVASCRIPT ES6</span>
                            <span className={styles.flask}>FLASK</span>
                            <span className={styles.mysql}>MYSQL</span>
                            <span className={styles.aws}>AWS EC2</span>
                            <span className={styles.tech}>CSS</span>
                            <span className={styles.tech}>HTML</span>
                        
                        </div>
                    </td>
                    <td>
                        <div className={styles.during}>02.18 ~ 03.11</div>
                        <div className={styles.state}>개발완료</div>
                        <div className={styles.position}>프론트엔드, 백엔드, 데이터베이스 (1인)</div>
                    </td>
                    <th>
                        <a className={styles.link} href="https://github.com/lee-insu/today-feeling">GITHUB</a><br/>
                        <a className={styles.link} href="http://3.36.85.153:5000/">SITE</a>
                    </th>
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default Project;