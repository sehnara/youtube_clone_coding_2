import React from 'react';

const List = (props) => {
    return(
        <li>{props.video.snippet.title}</li>
    );
};

export default List;