import React, { useCallback, useEffect, useState } from 'react';
import styles from "./app.module.css";
import Details from './components/details/details';
import Lists from './components/lists/lists';
import Input from './components/search/input';

function App({youtube}){
  // [state sector]
  const [videos, setVideos] = useState([]); 
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo =(video)=>{
    setSelectedVideo(video);
  }
  
  // [METHOD]
  // 1) Get API Method
  useEffect(()=>youtube
                  .mostPopular()
                  .then(videos => {
                    setVideos(videos)}),[youtube]);  
  
  // 2) after searching, get API
  const onSearch = useCallback(input=>{
    setSelectedVideo(null);
    youtube
      .search(input)
      .then(videos => setVideos(videos));
  },[youtube]); 
  
  // useCallback을 쓰면 메모리에 잡히기 때문에, 유의해서 써야한다. 
  // search하면 videos props가 싹 바뀌기 떄문에, 
  // memo 함수하더라도 input header가 계속 rerender되는 문제가 있다. 
  // 이 때 useCallback쓴다.

    // [return sector]
  return (
    <div className={styles.app}>
      <Input onSearch = {onSearch}/>      
      <section className={styles.content}>
        {selectedVideo &&<div className={styles.detail}>
          <Details video = {selectedVideo}/>
        </div>}
        <div className={styles.list}>
          <Lists 
            videos = {videos} 
            onVideoClick = {selectVideo}
            display = {selectedVideo? 'list' : 'grid'}
          />  
        </div>        
      </section>
    </div>
  );
} 

export default App;
