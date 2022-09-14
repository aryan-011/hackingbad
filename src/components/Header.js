import React from 'react'
import { AppBar ,Container,makeStyles,Toolbar,Typography } from '@material-ui/core';
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


const Header = () => {
  
  const classes=useStyles();

  const navigate=useNavigate();

  return (
<<<<<<< Updated upstream
    <ThemeProvider theme={darkTheme}>
    {/* <AppBar color='transparent' position='static'>
=======
    < >
    <AppBar style={{ background: 'rgb(41 40 62)' }} position='static'>
>>>>>>> Stashed changes
        <Container>
        <Toolbar>
        <Typography onClick={()=>navigate('/')} 
        className={classes.title}
        variant="h6">Codevita Live</Typography>

        
            
          
        </Toolbar>
        </Container>
<<<<<<< Updated upstream
    </AppBar> */}
    </ThemeProvider>
=======
    </AppBar>
    </>
>>>>>>> Stashed changes
 
  )
}

export default Header