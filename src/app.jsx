import React, { useCallback, useEffect, useState } from 'react';
import styles from "./app.module.css";
import Lists from './components/lists/lists';
import Input from './components/search/input';

function App({youtube}){
  // [state sector]
  const [videos, setVideos] = useState([]); 

  // [METHOD]
  // 1) Get API Method
  useEffect(()=>youtube
                  .mostPopular()
                  .then(videos => setVideos(videos)),[]);  
  
  // 2) after searching, get API
  const onSearch = input=>youtube
                            .search(input)
                            .then(videos => setVideos(videos));  
  // [return sector]
  return (
    <div className={styles.app}>
      <Input 
        onSearch = {onSearch}
      />
      <Lists
        videos = {videos}
      />
    </div>
  );
} 

export default App;
