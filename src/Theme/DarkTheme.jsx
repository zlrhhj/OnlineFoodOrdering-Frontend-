import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette:{
    mode: "dark",
    primary: {
      main:"#e91e63"
    },
    secondary:{
      main:"#5A20CB"
    },
    black:{
      main:"#0D0D0D" // Custom color (can be accessed via `theme.palette.black.main`)
    },
    background:{
      main:"#000000",
      default:"#0D0D0D", //page background
      paper:"#1D1D1D"    //components like card, Dialog
    },
    textColor: {
       main:"#111111",
    },
    // text:{
    //   primary:'#ffffff', //white text for dark mode
    //   secondary:'rgba(255,255,255,0.7)' //slightly faded text
    // }

  }
});