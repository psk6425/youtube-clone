import React from 'react';
import styles from './guide.module.css';



const Guide = (props) => {
    return (
      <ul className={styles.asideBtns}>
        <li className={styles.asideBtn}>
        <img className={styles.homeImg} src="/images/home.png" alt="homeImg" />
        <span>홈</span>
        </li>
        <li className={styles.asideBtn}>
        <img className={styles.compassImg} src="/images/compass.png" alt="compassImg" />
        <span>탐색</span>
        </li>
        <li className={styles.asideBtn}>
        <img className={styles.subscribeImg} src="/images/subscribe.png" alt="subscribeImg" />
        <span>구독</span>
        </li>
        <li className={styles.asideBtn}>
        <img className={styles.folderImg} src="/images/folder.png" alt="folderImg" />
        <span>보관함</span>
        </li>
      </ul>
    )
};

export default Guide;
