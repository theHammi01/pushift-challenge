
import { createTheme } from '@mui/material/styles';
import { red, deepOrange, blue } from '@mui/material/colors';

const theme = createTheme({
   palette: {
      mode: 'light',
      primary: {
         main: deepOrange.A400,
      },
      secondary: {
         main: blue.A400,
      },
      error: {
         main: red.A400,
      },
   },
})

export default theme;