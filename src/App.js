import React from 'react'
import { createUseStyles } from 'react-jss'
import Header from './components/Header';
import Propos from './components/Propos';

function App() {
    const classes = useStyles()
    return (
    <div className={classes.App}>
     <Header />
     <Propos />
    </div>
  );
}
const useStyles = createUseStyles({
  App: {
      margin: '0px',
      fontFamily: 'Montserrat',
      backgroundColor: '#E5E5E5',
  },
})
export default App;
