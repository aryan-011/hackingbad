import React from 'react'
import { AppBar ,Container,createTheme,makeStyles,ThemeProvider,Toolbar,Typography } from '@material-ui/core';
import{ useNavigate} from "react-router-dom"; 

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const Header = () => {
  
  const classes=useStyles();

  const navigate=useNavigate();

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
        <Container>
        <Toolbar>
        <Typography onClick={()=>navigate('/')} 
        className={classes.title}
        variant="h6">Crypto Chroma</Typography>

        
            
          
        </Toolbar>
        </Container>
    </AppBar>
    </ThemeProvider>
 
  )
}

export default Header