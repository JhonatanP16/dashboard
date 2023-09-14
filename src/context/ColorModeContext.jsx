import { ThemeProvider, createTheme } from "@mui/material";
import { createContext, useState } from "react";

export const ColorModeContext = createContext();

const ColorModeContextProvider = ({children}) =>{
    const [mode,setMode] = useState('light');
    const [primaryColor,setPrimaryColor] =  useState('#00A76F');
    let changeColor;
    switch(primaryColor){
      case '#00A76F':
        changeColor = {
            default:'#00a76f24',
            darkDefault:'#14272A',
        }
        break;
      case '#5F7CBA':
        changeColor = {
            default:'#E8EAF6',
            darkDefault:'#191F46',
        }
        break;
      case '#804BDF':
        changeColor = {
            default:'#EDE7F6',
            darkDefault:'#1A1D47',
        }
      break;
    }
    
    const toogleMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? "dark" : "light"))
    }

const theme = createTheme({
    palette:{
        mode,
        primary:{
            light: '#5F7CBA',
            main: primaryColor,
            contrastText:"#fff",
        },
        status: {
            red: "#fc424a",
            orange: "#fea73e",
            green: "#22c38f",
            blue:'#5F7CBA',
        },
        sidebar:{
            color:"#161C24",
        },
        
        ...(mode === "light"
        ? {
            background: {
                default: "#F3F4F9",
                paper: "#fff",
              },
            text: {
                primary: '#212B36',
                secondary: '#86929F',
                disabled: '#919EAB',
            },
            sidebaractive:{
                default: changeColor?.default,
                color:"#6DD881",
            },
        } : {
            background: {
                default: "#161C24",
                paper: "#1F252C",
              },
              
            text: {
                primary: '#fff',
                secondary: '#86929F',
                disabled: '#919EAB',
            },
            sidebaractive:{
                default:changeColor?.darkDefault,
                color:"#6DD881",
            },
        })
    },

});

    return(
        <ColorModeContext.Provider value={{toogleMode,mode,setPrimaryColor,primaryColor}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default ColorModeContextProvider;