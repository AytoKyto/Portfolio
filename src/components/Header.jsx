import React from 'react'
import { createUseStyles } from 'react-jss'
import Headerbox from './Headerbox';


const Header = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.bigWrapper}>
                <div className={classes.wrapperText}>
                    <p className={classes.text}>Dévellopper par Mathis Fleury</p>
                    <p className={classes.textBr}>PORTFOLIO ____ DEV-WEB<br />2021</p>
                    <p className={classes.text}>Design par Mathis FLEURY<br />et Jéremy GIARDELLA</p>
                </div>
                <div className={classes.wrapperTitle}>
                    <p className={classes.titleCesi}>CESI ALTERNANCE</p>
                    <p className={classes.titleM}>MATHIS</p>
                    <p className={classes.titleF}>FLEURY</p>
                </div>
            </div>
            <Headerbox />
        </>
    )
}

const useStyles = createUseStyles({
    bigWrapper: {
        backgroundColor: '#EE0202',
        width: '97vw',
        height: '101vh',
        marginTop: '-2vh',
        padding: '1.5vw',
    },
    wrapperText: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    textBr: {
        textAlign: 'center',
    },
    titleCesi: {
        textAlign: 'center',
        marginBottom: '-10vh',
        marginTop: '20vh',
        fontSize: '1vw',
        '&:hover': {
            fontWeight: '700',
        }
    },
    titleM: {
        fontSize: '15vw',
        fontWeight: '700',
        marginLeft: '25vw',
        marginBottom: '-4vw',
        marginTop: '3vw',
    },
    titleF: {
        fontSize: '15vw',
        fontWeight: '700',
        marginLeft: '10vw',
        marginTop: '-5vw',
    },
})
export default Header;