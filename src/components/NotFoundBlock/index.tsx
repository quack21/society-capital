import React from 'react';
import styles from './NotFoundBlock.module.scss'

export const NotFoundBlock: React.FC = () => {
    return (
        <div className={styles.root}>
            <h1>
                <span>
                    Nothing Found :( 
                </span>
            </h1>
            <p> Unfortunately, this page is not available in our web-application</p>
        </div>
    )
}

export default NotFoundBlock;