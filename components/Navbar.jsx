
import Link from 'next/link';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import RedditIcon from '@mui/icons-material/Reddit';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import SaveIcon from '@mui/icons-material/Save';

import useQueryLink from '/context/queryLink';
import useThemeMode from '/context/themeMode.js';

export default function Home() {
   const themeMode = useThemeMode( (S)=> S.siteTheme.theme );
   const changeThemeMode = useThemeMode( (S)=> S.switch );

   const updateQueryLink = useQueryLink( (S)=> S.update );

   const [searchValue, setSearchValue] = useState('')
   
   function changeSub(sub) {
      updateQueryLink(`https://api.pushshift.io/reddit/search/submission/?subreddit=${sub}&sort=desc&size=10`)
   }

   function handleChange(e) {  
      setSearchValue(()=> e.target.value)
   }

   function changeTargetSub() {
      if (typeof searchValue === 'string' && searchValue !== '' ) {
         changeSub(searchValue.toLowerCase())
      }
   }
   const recommendedSubs = [ 'memes', 'pcgaming', 'ImaginarySliceOfLife', 'pics', ]
   function changeToRecommendedSub(target) {
      if (typeof target === 'string' && target !== '' ) {
         changeSub(target)
      }
   }
   function showSaved() {
      updateQueryLink('/api/posts')
   }

   return (
      <>
      <AppBar position="static" sx={{mt:3,}}>
         <Container maxWidth="xl">
         <Toolbar disableGutters>
            <RedditIcon sx={{ mr: 1 }} />
            <Typography
               variant="h5"
               noWrap
               component="a"
               href=""
               sx={{
                  mr: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.05rem',
                  color: 'inherit',
                  textDecoration: 'none',
               }}
            >
               REDDIT
            </Typography>
            <small>pushshift api challenge</small>
            <Box sx={{ml:'auto', cursor:'pointer',}}> 
               <span style={{fontWeight:600}} onClick={showSaved}>Saved posts<SaveIcon sx={{ ml: 1, mb: -1,}} /></span>
            </Box>
         </Toolbar>
         </Container>
      </AppBar>
         
      <Box sx={{display:'flex',}} >
         <Box
            sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: 1,
            py: 3,
            px: 1,
            textTransform: 'capitalize',
            fontWeight: 700,
            cursor: 'pointer'
            }} 
            onClick={changeThemeMode}
         >
            {themeMode === 'dark' ? 'light': 'dark'} mode
            <IconButton sx={{ ml: 1 }} color="inherit">
               {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
         </Box>
         <Box sx={{my:2, ml:'auto', }} >
            <TextField
               id="outlined-name"
               label="Enter Subreddit"
               value={searchValue}
               onChange={handleChange}
               />
            <Button variant="contained" onClick={changeTargetSub} sx={{p:2}}>FETCH</Button>
         </Box>
      </Box>

      <Box>
         <Stack direction="row" spacing={1} sx={{my:2}}>
            {recommendedSubs.map((D,i)=>(
               <Chip icon={<RedditIcon />} label={D} variant="outlined" key={'chip'+i} onClick={()=> changeToRecommendedSub(D) } sx={{p:1}} />
            ))}
         </Stack>
      </Box>
         
      </>

   )
}
