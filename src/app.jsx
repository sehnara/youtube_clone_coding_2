import React, { useEffect, useState } from 'react';
import './app.css';
import Lists from './components/lists/lists';

function App(){
  const [videos, setVideos] = useState([]);

  // 1. Get API Method
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
  
  return (
    <Lists
      videos = {videos}
    />
  );
} 

export default App;
