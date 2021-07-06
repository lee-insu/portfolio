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
                        <p>섫명 와차아ㅏㅏㅏ아찿아아앙차아</p>
                    </td>
                </tr>
                <tr className={styles.tr}>
                    <td className={styles.stack}>React</td>
                    <td className={styles.logo}><img src="/static/img/react.png" alt=""/></td>
                    <td className={styles.explain}>
                        <p>섫명 와차아ㅏㅏㅏ아찿아아앙차아</p>
                    </td>
                </tr>
                <tr className={styles.tr}>
                    <td className={styles.stack}>Python</td>
                    <td className={styles.logo}><img src="/static/img/python.png" alt=""/></td>
                    <td className={styles.explain}>
                        <p>섫명 와차아ㅏㅏㅏ아찿아아앙차아</p>
                    </td>
                </tr>
                <tr className={styles.tr}>
                    <td className={styles.stack}>Flask</td>
                    <td className={styles.logo}>
                        <img src="/static/img/flask.png" alt=""/>
                    </td>
                    <td className={styles.explain}>
                        <p>섫명 와차아ㅏㅏㅏ아찿아아앙차아</p>
                    </td>
                </tr>
                <tr className={styles.tr}>
                    <td className={styles.stack}>MySql</td>
                    <td className={styles.logo}><img src="/static/img/mysql.png" alt=""/></td>
                    <td className={styles.explain}>
                        <p>섫명 와차아ㅏㅏㅏ아찿아아앙차아</p>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    );
}

export default Stack;