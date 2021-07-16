import React from 'react'
import { createUseStyles } from 'react-jss'

const Propos = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.wrap}>
            <h2 className={classes.title}>{props.name} - </h2>
            <img className={classes.imgTitle}
                src={props.imgUrl}
                alt={props.alt}
            />
        </div>
    )
}

const useStyles = createUseStyles({
    title: {
        color: '#EE0202',
        fontSize: '3vw',
        fontWeight: '700',
    },
    wrap: {
        display: 'flex',
        justifyContent: 'left',
    },
    imgTitle: {
        width: '4vw',
        marginLeft: '1vw',
    },
})
export default Propos;