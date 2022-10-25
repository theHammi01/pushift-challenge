
import fetchwrapper from '/utils/fetchwrapper.js';

export default async function fetchPosts(url){
   
   let dataRes= await fetchwrapper.get(url)
   let data = await dataRes.data.map((D)=> { return {
      id: D.id,
      author: D.author,
      title: D.title,
      link: D.full_link,
      thumbnail: D.thumbnail,
      comm: D.num_comments,
      score: D.score,
      time: D.created_utc,
   }});

   console.log(dataRes);
   return data;

};