import React from 'react';
import styles from './Analyze.module.scss'

export const Analyze: React.FC = () => {
    const [url, changeUrl] = React.useState<string>('')
    const [pp, changePp] = React.useState<string>('')
    const [rb, changeRb] = React.useState<string>('')

    return (
        <div className={styles.ground}>
            <div className={styles.left}>
                <div className={styles.form}>
                    <div className={styles.text}>
                            <h4>Analyze!</h4>
                    </div>
                    <div className={styles.inputArea}>
                        <div className={styles.desc}>Zillow-URL</div>
                        <input onChange={event => changeUrl(event.target.value)} value={url} placeholder='zillow-url'></input>
                    </div>
                    <div className={styles.inputArea}>
                        <div className={styles.desc}>Purchase Price</div>
                        <input onChange={event => changePp(event.target.value)} value={pp} placeholder='purchase price'></input>
                    </div>
                    <div className={styles.inputArea}>
                        <div className={styles.desc}>Renovation Budget</div>
                        <input onChange={event => changeRb(event.target.value)} value={rb} placeholder='renovation budget'></input>
                    </div>
                    <div className={styles.buttonArea}>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.map}>
                    Text about Analyze
                </div>
            </div>
        </div>
    )
}

export default Analyze;