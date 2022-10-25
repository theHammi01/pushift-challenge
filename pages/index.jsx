
import { useState, useEffect } from "react";

import Container from '@mui/material/Container';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import fetchPosts from "/utils/fetchPosts";
import Post from '/components/Post';
import Navbar from '/components/Navbar';

import useQueryLink from '/context/queryLink';

export default function Index() {

   const queryLink = useQueryLink( (S)=> S.queryLink.link );
   
   const [posts, setPosts] = useState([])

   useEffect(() => {
      ( async ()=> {
         const postData= await fetchPosts(queryLink)
         setPosts( ()=> postData )
      })()
   }, [queryLink])
   
   return (
      <Container maxWidth="sm">
         <Navbar/>
         
         {!posts.length && <Box sx={{display:'flex', mt:'10vh'}} >
            <CircularProgress sx={{mx:'auto'}} />
         </Box>}

         {posts.map( (D, i)=> (
            <Post key={'post'+i} data= {{
                  id: D.id, 
                  user: D.author, 
                  title: D.title, 
                  link: D.link,
                  thumb: D.thumbnail,
                  comm: D.comm,
                  score: D.score,
                  time: D.time,
               }} 
            >{D.title}</Post>
         ))}

         <br/> <br/>

      </Container>
   );
}