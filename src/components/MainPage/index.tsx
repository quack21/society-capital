import styles from './MainPage.module.scss'

const MainPage: React.FC = () => {
    return (
      <div className={styles.pageWrap}>
        <div className={styles.backgroundGroup}>
          <div className={styles.one}></div>
          <div className={styles.two}></div>
          <div className={styles.three}></div>
        </div>
      </div>
    );
  }
  
  export default MainPage;