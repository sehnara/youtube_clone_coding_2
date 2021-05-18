import React from 'react';
import List from './list';

const Lists = (props) => {
    return(
        <ul>
        {
            props.videos.map(video=>{
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

