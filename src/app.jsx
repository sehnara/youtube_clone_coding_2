import React, { useCallback, useEffect, useState } from 'react';
import styles from "./app.module.css";
import Lists from './components/lists/lists';
import Input from './components/search/input';

function App(){
  // [state sector]
  const [videos, setVideos] = useState([]);

  // [METHOD]
  // 1) Get API Method
  useEffect(()=>{    
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=26&key=AIzaSyDGgWM2b6ovCQZJ77_AlhP5MKVWKr2gGEw", requestOptions)
    .then(response => response.json()) // text() => json()로 바꿔줬다.
    .then(result =>setVideos(result.items))
    .catch(error => console.log('error', error));
  },[]);  
  
  // 2) after searching, get API
  const onSearch = useCallback(input=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyDGgWM2b6ovCQZJ77_AlhP5MKVWKr2gGEw&part=snippet&maxResults=25&q=${input}&type=video&key=AIzaSyDGgWM2b6ovCQZJ77_AlhP5MKVWKr2gGEw`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map((item)=>({...item, id:item.id.videoId}))) //key가 two childern뜨는 문제 해결하기 위해, id값만 따로 설정해준다.
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  },[videos])
  
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
