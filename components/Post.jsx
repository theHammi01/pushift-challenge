import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import fetchwrapper from '/utils/fetchwrapper.js';
import useTimeSince from '/hooks/useTimeSince.js';

export default function Post({data}) {

   const timeSince = useTimeSince(data.time)

   async function favPost() {
      fetchwrapper.post('/api/posts', data)
         .then(res => console.log(res,))
         .catch(err => console.log(err,))
   }
   return (
      <Card sx={{ display: 'flex', width: '380', my:'2rem', boxShadow: 3 }}>
         <CardMedia
            component="img"
            sx={{ width: 151,}}
            image={data.thumb}
            alt="Live from space album cover"
            onError={e => { e.target.src = "/placeholder.png"; }}
            />
         <Box sx={{ display: 'flex', flexDirection: 'column', width:'100%' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
            <a href={data.link} target='_blank' rel='noreferrer'>
               <Typography component="div" variant="h6">
                  {data.title.slice(0,28)+'..'}
               </Typography>
               <Typography variant="subtitle1" color="text.secondary" component="div">
                  posted by: {data.user}
                  <div><small>{timeSince}</small></div>
               </Typography>
               <ButtonGroup color="secondary" disabled aria-label="medium secondary button group" sx={{mt:1}}>
                  <Button><ChatBubbleIcon sx={{mr:1}} />{data.comm}</Button>
                  <Button><ThumbUpIcon sx={{mr:1}} />{data.score}</Button>
               </ButtonGroup>
            </a> 
            </CardContent>
         </Box>
         <Box sx={{ mt:'auto', padding:'0 1rem 1rem 0' }}>
            <Fab aria-label="like" color={'primary'} size="small" onClick={favPost} >
               <FavoriteIcon/>
            </Fab>
         </Box>
      </Card>
   );
}