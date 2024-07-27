import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1586FE",
      // main: purple[500],
    },
    secondary: {
      main: "#666f73",
      // main: green[500],
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        // variant : "outlined"
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "8px 50px",
        },
      },
    },

    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
    // MuiTypography : {

    //   defaultProps : {
    //     fontFamily: "Raleway Arial",
    //     fontSize: 12,
    //   }
    // }
  },

  typography: {
        body1 : {
        // fontFamily: "Raleway Arial",
        // fontSize: 50,
        // color : "red",
        // color : "#0D0000",
        color : "#0B1134CC",
       },
    }, 
});
theme.shadows[1] = "0px 5px 22px lightgray"
