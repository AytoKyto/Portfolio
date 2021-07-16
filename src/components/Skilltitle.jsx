import React from 'react'
import { createUseStyles } from 'react-jss'

const Propos = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.wrap}>
            <p className={classes.text}>{props.skill}</p>
            <p className={classes.text}>{props.niv}</p>
        </div>
    )
}

const useStyles = createUseStyles({
    wrap: {
        margin: '1vw',
    },
    text: {
        fontWeight: 'bold',
        fontSize: '1vw',
        margin: '-0.1vw',
    },
})
export default Propos;