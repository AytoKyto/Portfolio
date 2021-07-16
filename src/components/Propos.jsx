import React from 'react'
import { createUseStyles } from 'react-jss'
import Img from '../img/propos.png';
import Comp from '../img/competences.svg';
import Title from './Titre';
import Skill from './Skilltitle';

const Propos = () => {
    const classes = useStyles()
    return (
        <div className={classes.bigWrapper}>
            <div className={classes.wrapperImg}>
                <img className={classes.imgPropos} src={Img} alt="visage" />
            </div>
            <div className={classes.wrapperText}>
                <Title name="COMPETENCES" imgUrl={Comp} alt='test' />
                <p className={classes.lilTitre}>Réalisation de sites web</p>
                <div className={classes.bigWrapperSkill}>
                    <div className={classes.wrapperSkill}>
                        <Skill skill="HTML - CSS" niv='Aquis' />
                        <Skill skill="REACT.JS" niv='Débutant' />
                    </div>
                    <div className={classes.wrapperSkill}>
                        <Skill skill="JAVASCRIPT" niv='Débutant' />
                        <Skill skill="WORDPRESS" niv='Acquis' />
                    </div>
                    <div className={classes.wrapperSkill}>
                        <Skill skill="REACT NATIVE" niv='Débutant' />
                        <Skill skill="VUE.JS/NUXT.JS" niv='Débutant' />
                    </div>
                </div>
                <p className={classes.lilTitreTwo}>Design</p>
                <div className={classes.bigWrapperSkill}>
                    <div className={classes.wrapperSkill}>
                        <Skill skill="ADOBE XD" niv='Intermédiaire' />
                        <Skill skill="PHOTOSHOP" niv='Acquis' />
                    </div>
                    <div className={classes.wrapperSkill}>
                        <Skill skill="ILLUSTRATOR" niv='Acquis' />
                        <Skill skill="FIGMA" niv='Débutant' />
                    </div>
                </div>
                <p className={classes.lilTitreTwo}>Compétences transversales</p>
                <div className={classes.bigWrapperSkill}>
                    <div className={classes.wrapperSkill}>
                        <Skill skill="GIT" niv='Débutant' />
                        <Skill skill="ANGLAIS" niv='Scolaire' />
                    </div>
                    <div className={classes.wrapperSkill}>
                        <Skill skill="GESTION DE PROJET" niv='Débutant' />
                    </div>
                </div>
            </div>
        </div>
    )
}

const useStyles = createUseStyles({
    bigWrapper: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '3vw',
        paddingBottom: '10vw',
    },
    lilTitre: {
        fontSize: '1.5vw',
        fontWeight: 'bold',
        marginTop: '-2.5vw',
    },
    lilTitreTwo: {
        fontSize: '1.5vw',
        fontWeight: 'bold',
    },
    imgPropos: {
        width: '25vw',
        marginTop: '20vh',
    },
    wrapperText: {
        width: '40vw',
        padding: '2vw',
    },
    wrapperSkill: {
        display: 'flex',
        flexDirection: 'column',
    },
    bigWrapperSkill: {
        display: 'flex',
        justifyContent: 'left',
    }
})
export default Propos;