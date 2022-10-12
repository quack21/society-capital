import React from 'react';
import styles from './Profile.module.scss'
import dash from '../../images/dashPic.png'
import invest from '../../images/investPic.png'
import prof from '../../images/profPic.png'
import props from '../../images/propsPic.png'
import dashA from '../../images/dashPicA.png'
import investA from '../../images/investPicA.png'
import profA from '../../images/profPicA.png'
import propsA from '../../images/propsPicA.png'
import { useState } from 'react';
import Dashboard from '../Dashboard/index'
import Analyze from '../AnalyzeBlock/index'
import MyProperties from '../MyProperties';



export const Profile = () => {
    const [id, setId] = useState<string>('0')

    function byId(i: string){
        if (i === '0') {
            return (                         
                <Dashboard />
            )
        }
        if (i === '1') {
            return (
                <MyProperties />
            )
        }
        if (i === '4') {
            return (
                <Analyze />
            )
        }

    }
    return (
        <div className={styles.profileWrap}>
            <div className={styles.profileContainer}>
                <div className={styles.profileMenuContainer}>
                    <div className={styles.menuContent}>
                            <div id='zero' className={id === '0' ? styles.active : styles.default} onClick={event => setId('0')}><img src={id === '0' ? dashA : dash} alt="alt" height="17" width="17"></img><h4>Dashboard</h4></div>
                            <div id='one' className={id === '1' ? styles.active : styles.default} onClick={event => setId('1')}><img src={id === '1' ? propsA : props} alt="alt" height="17" width="17"></img><h4>My Properties</h4></div>
                            <div id='two' className={id === '2' ? styles.active : styles.default} onClick={event => setId('2')}><img src={id === '2' ? investA : invest} alt="alt" height="17" width="17"></img><h4>Investment Properties</h4></div>
                            <div id='three' className={id === '3' ? styles.active : styles.default} onClick={event => setId('3')}><img src={id === '3' ? profA : prof} alt="alt" height="17" width="17"></img><h4>My Professionals</h4></div>
                            <div id='four' className={id === '4' ? styles.active : styles.default} onClick={event => setId('4')}><img src={id === '4' ? profA : prof} alt="alt" height="17" width="17"></img><h4>Analyze</h4></div>
                    </div>
                </div>
                <div className={styles.profileCurrentContainer}>
                    <div className={styles.currentContent}>
                        {byId(id)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;