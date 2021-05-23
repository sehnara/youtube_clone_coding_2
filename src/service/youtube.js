import axios from 'axios';
class Youtube{
    constructor(key){
        this.youtube = axios.create({
          baseURL: 'https://youtube.googleapis.com/youtube/v3',
          params :{key:key},

        })
    }

    mostPopular = async () =>{
      const response = this.youtube.get('videos',{
        params:{
          part : 'snippet',
          chart : 'mostPopular',
          maxResults : 26,
        }
      });
      return (await response).data.items;     
    }

    search = async (input)=>{
      const response = this.youtube.get('search',{
        params:{
          q : input,
          part : 'snippet',
          type : 'video',
          maxResults : 26,
        }
      })
      return (await response).data.items.map(item =>({...item, id :item.id.videoId}));     
    }
}

export default Youtube;