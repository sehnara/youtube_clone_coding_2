import React from 'react';
import styles from './list.module.css';

const List = ({video, video:{snippet}, onVideoClick, display}) => { // ** deconstructing  

    const handleClick =()=>onVideoClick(video);
    const displayType = display === 'list'? styles.list: styles.grid;
    return(
        <li
            className={`${styles.container} ${displayType}`}
            onClick = {handleClick}    
        >    
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