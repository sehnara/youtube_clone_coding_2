import React from 'react';
import styles from './list.module.css';

const List = ({video:{snippet}}) => { // ** deconstructing  
    return(
        <li className={styles.container}>    
            <div className={styles.video}>
                <img className={styles.thumbnails} src={snippet.thumbnails.high.url} alt="video-thumbnails"></img>
                <div className={styles.info}>
                    <p className={styles.title}> {snippet.title}</p>
                    <p className={styles.channel}> {snippet.channelTitle}</p>            
                </div>
            </div>        
        </li>
    );
};

export default List;