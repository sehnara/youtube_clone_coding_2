import React, { useEffect, useState } from 'react';
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
                    setVideos(videos)}),[]);  
  
  // 2) after searching, get API
  const onSearch = input=>{
    setSelectedVideo(null);
    youtube
      .search(input)
      .then(videos => setVideos(videos));
  };
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
