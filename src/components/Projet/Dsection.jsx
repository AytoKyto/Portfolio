import React from 'react'
import { createUseStyles } from 'react-jss'
import Dtitle from './Dtitle';

const Dsection = (props) => {
    const classes = useStyles(props)
    return (
        <div className={classes.wrap}>
            <div className={classes.wrapText}>
                <Dtitle lone='PORTFOLIO' ltwo='2021'/>
            </div>
            <div className={classes.wrapImg}>

            </div>
        </div>
    )
}

const useStyles = createUseStyles({
    wrap: {
        border: '1px solid #FF0000',
        height: '50vh',
        width: '99.9vw',
        display: 'flex',
        justifyContent: 'center',
    },
    wrapText: {
        border: '1px solid #FF0000',
        width: '40vw',
        height: '50vh',
    },
    wrapImg: {
        border: '1px solid #FF0000',
        width: '60vw',
        height: '50vh',
    }
})
export default Dsection;