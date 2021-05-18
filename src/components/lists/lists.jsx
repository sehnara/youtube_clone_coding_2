import React from 'react';
import List from '../list/list';
import styles from './lists.module.css';

const Lists = (props) => {
    return(
        <ul className={styles.videos}>
        {
            props.videos.map(video=>{
                console.log(video.snippet.thumbnails.high.url)
                 return <List
                    key = {video.id}
                    video = {video}
                />
            })
        }
    </ul>
    );
};

export default Lists;

