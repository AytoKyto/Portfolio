import React from 'react'
import { createUseStyles } from 'react-jss'
import Header from './components/Header';
import Propos from './components/Propos';
import Projet from './components/Projet/Projet';
import Akura from './img/akura.svg';

function App() {
    const classes = useStyles()
    return (
    <div className={classes.App}>
     <Header />
     <Propos />
     <img className={classes.akuraSvg} src={Akura} alt="akura" />
     <Projet />
    </div>
  );
}
const useStyles = createUseStyles({
  App: {
      margin: '0px',
      fontFamily: 'Montserrat',
      backgroundColor: '#E5E5E5',
  },
  akuraSvg: {
    width: '100vw',
  }
})
export default App;
