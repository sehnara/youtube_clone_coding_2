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
      const response = this.youtube.get('videos',{
        params:{
          q : input,
          part : 'snippet',
          chart : 'search',
          maxResults : 26,
        }
      })
      return (await response).data.items;     
    }
}

export default Youtube;