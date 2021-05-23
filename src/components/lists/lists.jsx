import React from 'react';
import List from '../list/list';
import styles from './lists.module.css';

const Lists = ({videos, onVideoClick, display}) => {
    return(
        <ul className={styles.videos}>
        {
            videos.map(video=>{
                 return <List
                    key = {video.id} // 필요한 key빼고 나머지는 뭉텅이로 list.jsx에 보내는 거!!! GOOD
                    video = {video}

                    onVideoClick = {onVideoClick}
                    display = {display}
                />
            })
        }
    </ul>
    );
};

export default Lists;

