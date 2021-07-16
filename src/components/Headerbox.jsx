import React from 'react'
import { createUseStyles } from 'react-jss'
import Textbox from '../img/textbox.svg';
import Github from '../img/github.svg';
import Behance from '../img/behance.svg';

const Headerbox = () => {
    const classes = useStyles()
    return (
        <div className={classes.bigWrapper}>
            <img src={Textbox} alt="titre" />
            <p className={classes.boxText}>J'ai 20 ans et je suis développeur web junior, diplômé d'un BAC+2 acquis à CESI.
            Je souhaite trouver une alternance en vue de ma troisième année au de formation.
            Je suis passionné par le développement front-end, tout particulièrement le
Javascript et les frameworks Vue et React, sur lesquels je souhaite monter en compétence.</p>
            <div className={classes.socialWrapper}>
                <img className={classes.social} src={Github} alt="Github" />
                <img className={classes.social} src={Behance} alt="Behance" />

            </div>
        </div>
    )
}

const useStyles = createUseStyles({
    bigWrapper: {
        backgroundColor: '#EE0202',
        width: '50vw',
        marginLeft: '25vw',
        marginRight: '25vw',
        marginTop: '-20vh',
        padding: '2vw',
        textAlign: 'center',
    },
    socialWrapper: {
        display: 'flex',
        justifyContent: 'center',
    },
    social: {
        margin: '1vw',
    },
})
export default Headerbox;