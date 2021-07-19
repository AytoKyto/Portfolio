import React from 'react'
import { createUseStyles } from 'react-jss'

const Dtilte = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.wrap}>
            <p className={classes.pOne}>{props.lone}<span className={classes.pTwo}><br />{props.ltwo}</span></p>
        </div>
    )
}

const useStyles = createUseStyles({
    wrap: {

    },
})
export default Dtilte;