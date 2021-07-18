import React from 'react'
import { createUseStyles } from 'react-jss'
import Title from '../Titre';
import Dsection from './Dsection';
import Design from '../../img/design.svg';

const Projet = () => {
    const classes = useStyles()
    
    return (
        <div className={classes.bigWrapper}>
           <Title name='DESIGN' imgUrl={Design} alt='projet' direction='center' />
           <Dsection />
        </div>
    )
}

const useStyles = createUseStyles({
    titre: {
       marginLeft: '10vw',
       marginRight: 'auto',
    },
})
export default Projet;