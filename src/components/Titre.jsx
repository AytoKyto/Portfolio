import React from 'react'
import { createUseStyles } from 'react-jss'

const Propos = (props) => {
    const classes = useStyles(props)
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
        justifyContent: props => props.direction,
        alignItems: 'baseline'
    },
    imgTitle: {
        height: '4vh',
        marginLeft: '1vw',
    },
})
export default Propos;