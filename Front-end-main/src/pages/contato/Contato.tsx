import React from "react";
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Button, Grid, Typography, Avatar } from '@material-ui/core';
import './Contato.css';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(30),
        height: theme.spacing(30),
    },
}));

function Contato() {


    const classes = useStyles();

    return (

        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid container className="backgroundContato" item xs={12}>
                    <Box paddingX={20} >
                        <Typography variant="h2" gutterBottom color="textPrimary" component="h2" align="center" className="tituloContato">Sobre Nós</Typography>
                        <Typography variant="body1" gutterBottom color="textPrimary" component="p" align="center" className="textoContato">
                            A MuSkin nasceu através da necessidade de encontrar Lojas e artesanatos que reunissem tecidos e materiais orgânicos; sustentáveis. O Objetivo da Muskin é facilitar e incentivar  esse encontro tão importante de lojas sustentáveis com clientes adeptos ao consumo consciente e aqueles que queiram entrar à esse meio.
                            Além de facilitar esse encontro, a Muskin incentiva a ajuda do planeta em dobro! Já que além de consumirem moda sustentável, 10% de toda compra do site é voltada a doações para insituições parceiras.
                        </Typography>
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" className="subtituloContato">Este Ecommerce foi desenvolvido por: </Typography>
                    </Box>
                </Grid>

                <Grid xs={12} className="contato">
                </Grid>

                <Grid direction="row" alignItems="center" justifyContent="center" container item xs={12}>


                    <div className={classes.root}>
                        <Avatar alt="Dri" src="https://i.imgur.com/y49Lzsd.jpg" className={classes.large} />
                        <label className = 'avatares'>Dri</label> 
                    </div>



                    <div className={classes.root}>
                        <Avatar alt="André" src="https://i.imgur.com/HrtnvGQ.jpg" className={classes.large} />
                        <label className = 'avatares'>André</label> 
                    </div>



                    <div className={classes.root}>
                        <Avatar alt="Angel" src="https://i.imgur.com/Gr8umR4.jpg" className={classes.large} />
                        <label className = 'avatares'>Angel</label> 
                        
                    </div>

                    <div className={classes.root}>
                        <Avatar alt="Lipe" src="https://i.imgur.com/ypBDjkG.png" className={classes.large} 
                        />
                        <label className = 'avatares'>Lipe</label> 
                    </div>

                    <div className={classes.root}>
                        <Avatar alt="Jay" src="https://i.imgur.com/0Wr5MgZ.jpg" className={classes.large} />
                        <label className = 'avatares'>Jay</label> 
                
                    </div>



                    <div className={classes.root}>
                        <Avatar alt="Vini" src="https://i.imgur.com/PUXBCUn.jpg" className={classes.large} />
                        <label className = 'avatares'>Vini</label> 
                    </div>



                    <div className={classes.root}>
                        <Avatar alt="Will" src="https://i.imgur.com/VVYMJ4o.jpg" className={classes.large} />
                        <label className = 'avatares'>Will</label> 
                    </div>

                </Grid>

            </Grid>
        </>
    );
}

export default Contato;
