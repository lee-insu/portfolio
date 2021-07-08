import React from 'react';
import styles from './stack.module.css';

const Stack = () => {

    return (
        <div className={styles.section}>
        <div className={styles.main}>STACKS</div>
        <p className={styles.p}>만들고자 하는 서비스에 대해 필요한 기술들을 빠르게 익히고 구현합니다.<br/> 할 수 있는 기술들을 계속해서 넓히고 있습니다.</p>

        <table className={styles.table}>
            <thead>
                <tr className={styles.trHead}>
                    <th>기술 구분</th>
                    <th></th>
                    <th>활용 수준</th>
                </tr>
            </thead>
            <tbody>
                <tr className={styles.tr}>
                    <td className={styles.stack}>JavaScript</td>
                    <td className={styles.logo}><img src="/static/img/js.png" alt=""/></td>
                    <td className={styles.explain}>
                    <p>HTTP 통신의 요청과 응답에 대해 이해하고 있으며, JavaScript es6을 활용하고 있습니다. <br/>또한, Dom을 조작하는 방법과 동기와 비동기에 대한 이해, Promise, async/await을 통한 비동기 처리, <br/>fetch api를 통한 비동기 HTTP 요청을 활용할 수 있습니다. 그 외에도 호이스팅, 이벤트 버블링, 스코프의 개념을 이해하고 있습니다.
                        </p>
                    </td>
                </tr>
                <tr className={styles.tr}>
                    <td className={styles.stack}>React</td>
                    <td className={styles.logo}><img src="/static/img/react.png" alt=""/></td>
                    <td className={styles.explain}>
                        <p>VDOM의 이해와 리엑트의 기본 개념인 Component와 props, State와 생명주기에 대해 이해하고 있습니다.<br/> React Hook을 이해하고 활용해 개발을 진행하고 있습니다.</p>
                    </td>
                </tr>
                <tr className={styles.tr}>
                    <td className={styles.stack}>Python</td>
                    <td className={styles.logo}><img src="/static/img/python.png" alt=""/></td>
                    <td className={styles.explain}>
                        <p>파이썬의 기본 문법과 데이터를 다루기 위해 JSON/XML와 같은 데이터 포맷에 대한 이해, Open API를 활용한 데이터 추출이 가능합니다.<br/>또한, beautiful soup와 selenium을 활용한 웹 크롤링을 할 수 있습니다.</p>
                    </td>
                </tr>
                <tr className={styles.tr}>
                    <td className={styles.stack}>Flask</td>
                    <td className={styles.logo}>
                        <img src="/static/img/flask.png" alt=""/>
                    </td>
                    <td className={styles.explain}>
                        <p>MVC패턴에 대해 이해하고 있으며 이 모델을 활용하려 했고 데이터베이스의 연결과 CRUD를 구현할 수 있습니다.</p>
                    </td>
                </tr>
                <tr className={styles.tr}>
                    <td className={styles.stack}>MySql</td>
                    <td className={styles.logo}><img src="/static/img/mysql.png" alt=""/></td>
                    <td className={styles.explain}>
                        <p>SQL의 문법과 쿼리 문장에 대해 이해하고 크롤링과 MYSQL의 연계, 벡엔드와 MYSQL를 연결해 데이터를 저장할 수 있습니다.</p>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    );
}

export default Stack;