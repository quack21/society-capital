import React from 'react';
import styles from './Dashboard.module.scss'
import dash from '../../images/dashPic.png'
import invest from '../../images/investPic.png'
import prof from '../../images/profPic.png'
import props from '../../images/propsPic.png'

export const Dashboard: React.FC = () => {
    const amountProps: string = '0'
    const netWorth: string = '$0'
    const totalFMV: string = '$0'
    const mortgage: string = '$0'

    return (
        <div className={styles.dashWrap}>
            <div className={styles.dashContainer}>
                <div className={styles.dashContent}>
                    <div className={styles.props}>
                        <img src={props} width='36' height='36' alt='icon'></img>
                        <h3>{amountProps}</h3>
                        <h4>My Properties</h4>
                    </div>
                    <div className={styles.netw}>
                        <img src={invest} width='36' height='36' alt='icon'></img>
                        <h3>{netWorth}</h3>
                        <h4>Net Worth</h4>
                    </div>
                    <div className={styles.fmv}>
                        <img src={dash} width='36' height='36' alt='icon'></img>
                        <h3>{totalFMV}</h3>
                        <h4>Total FMV</h4>
                    </div>
                    <div className={styles.mort}>
                        <img src={prof} width='36' height='36' alt='icon'></img>
                        <h3>{mortgage}</h3>
                        <h4>Total Mortgage Amount</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;