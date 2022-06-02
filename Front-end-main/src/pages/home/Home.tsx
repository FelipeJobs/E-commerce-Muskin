import React, { useEffect } from 'react';
import './Home.css';
import { Grid, Box, Typography, makeStyles, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokenReducer';
import { toast } from 'react-toastify';
import Frame1 from '../../assets/Frame1.png'
import CarouselComponent from '../../components/carousel/CarouselComponent';

function Home() {

  let history = useNavigate();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  const useStyles = makeStyles({
    root: {
      maxWidth: 242,
    },
    media: {
      height: 258,
      width: 242
    },
  });
  const classes = useStyles();
  return (
    <>
      <Grid container direction='row' className='caixa' justifyContent='center'>
        <Grid item xs={12}  style={{marginTop:'40px'}}>
          <CarouselComponent />
        </Grid>
        <Grid container style={{marginLeft: "210px"}}>
          <Box>
            <Typography style={{color:"#AA836C", fontSize:"25px",marginBottom:"30px", marginTop:"30px",}}variant='h3' className='tituloHome'> ___Novidadades</Typography>
          </Box>
        </Grid>
        
        <Grid container item className='cardsHome' justifyContent='center' alignContent='center'>
          <Grid container xs={3} item className='testeGrid'>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media} style={{width:"242px", height:"298px"}}
                  image="https://static.wixstatic.com/media/36ee3b_96453415d89146de90effe2a671c30b3~mv2.jpg/v1/fill/w_373,h_559,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_9874_edited_edited_edited.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"jaldi", fontSize:"20px",color: "#785846"}}>
                   Camiseta Vermelha Tecido Sustentável 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p"  style={{fontFamily:"jaldi", fontSize:"px",color: "B6917B"}}>
                   Loja N'Goma
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p"  style={{fontFamily:"jaldi", fontSize:"px",color: "B6917B"}}>
                  R$49,99
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>


          <Grid container xs={3} item className='testeGrid'>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media} style={{width:"242px", height:"298px"}}
                  image="https://static.wixstatic.com/media/36ee3b_83da74e02c14400cbe9a0a204e0309f3~mv2.jpg/v1/fill/w_224,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ED5A1591_JPG.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"jaldi", fontSize:"20px",color: "#785846"}}>
                    Calça Saruel Branca 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p"  style={{fontFamily:"jaldi", fontSize:"px",color: "B6917B"}}>
                   Loja N'Goma
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p"  style={{fontFamily:"jaldi", fontSize:"px",color: "B6917B"}}>
                  R$49,99
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          
          <Grid container xs={3} item className='testeGrid'>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media} style={{width:"242px", height:"298px"}}
                  image="https://static.wixstatic.com/media/36ee3b_cec85f364c4e498c870477e7655d4f67~mv2.jpg/v1/fill/w_224,h_336,al_c,q_85,usm_0.66_1.00_0.01/36ee3b_cec85f364c4e498c870477e7655d4f67~mv2.webp"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"jaldi", fontSize:"20px",color: "#785846"}}>
                    Cropped Branco listra n'goma
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:"jaldi", fontSize:"px",color: "B6917B"}}>
                    Loja N'goma
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:"jaldi", fontSize:"px",color: "B6917B"}}>
                    R$49,99
                  </Typography>
                </CardContent>
              </CardActionArea>

            </Card>
          </Grid>
          <Grid container xs={3} item className='testeGrid'>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media} style={{width:"242px", height:"298px"}}
                  image="https://static.wixstatic.com/media/36ee3b_9b81fb6937e64afcaded382bb2c5d308~mv2.jpg/v1/fill/w_224,h_336,al_c,q_85,usm_0.66_1.00_0.01/36ee3b_9b81fb6937e64afcaded382bb2c5d308~mv2.webp"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"jaldi", fontSize:"20px",color: "#785846"}}>
                    Camiseta N'Goma unissex 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:"jaldi", fontSize:"px",color: "B6917B"}}>
                    Loja N'Goma
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:"jaldi", fontSize:"px",color: "B6917B"}}>
                    R$ 49,99
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid container style={{marginLeft: "140px"}}>
          <Box>
            <Typography style={{color:"#AA836C", fontSize:"25px",marginBottom:"30px", marginTop:"30px",}}variant='h3' className='tituloHome'> ___Relevância</Typography>
          </Box>
        </Grid>

          <Grid container item className='testeGrid' justifyContent='center' alignContent='center'>
          <Grid container xs={3} item className='testeGrid'>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media} style={{width:"242px", height:"298px"}}
                  image="https://cdn.shopify.com/s/files/1/0435/4611/6249/products/chinelo_muquem_1_web_590x.jpg?v=1651868045"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"jaldi", fontSize:"20px",color: "#785846"}}>
                   Rasteira 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p"  style={{fontFamily:"jaldi", fontSize:"px",color: "B6917B"}}>
                   Loja Flavia Aranha
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p"  style={{fontFamily:"jaldi", fontSize:"px",color: "B6917B"}}>
                  R$249,99
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>


          <Grid container xs={3} item className='testeGrid'>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media} style={{width:"242px", height:"298px"}}
                  image="https://cdn.shopify.com/s/files/1/0435/4611/6249/products/20220303_Flavia_Aranha_MA_a_Teia2274_590x.jpg?v=1646696087"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"jaldi", fontSize:"20px",color: "#785846"}}>
                    Vestido Emilia CO OrgânicoS
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p"  style={{fontFamily:"jaldi", fontSize:"px",color: "B6917B"}}>
                   Loja Flavia Aranha
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p"  style={{fontFamily:"jaldi", fontSize:"px",color: "B6917B"}}>
                  R$299,99
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          
          <Grid container xs={3} item className='testeGrid'>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media} style={{width:"242px", height:"298px"}}
                  image="https://www.king55.com.br/estatico/king/images/temp/515_20847.jpeg?v=1593037539"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"jaldi", fontSize:"20px",color: "#785846"}}>
                    Carteira cartucheira 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:"jaldi", fontSize:"px",color: "B6917B"}}>
                    Loja King55
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:"jaldi", fontSize:"px",color: "B6917B"}}>
                    R$109,99
                  </Typography>
                </CardContent>
              </CardActionArea>

            </Card>
          </Grid>
          <Grid container xs={3} item className='testeGrid'>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media} style={{width:"242px", height:"298px"}}
                  image="https://cdn.shopify.com/s/files/1/0249/0220/5526/products/TropicalisBolsaTransversal_2_600x600.jpg?v=1631715772"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"jaldi", fontSize:"20px",color: "#785846"}}>
                    Bolsa Transversal Tropicals 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:"jaldi", fontSize:"px",color: "B6917B"}}>
                    Loja Insecta Shoes
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:"jaldi", fontSize:"px",color: "B6917B"}}>
                    R$ 219,00
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

        </Grid>
        </Grid>


      
        <Grid container item className='testeGrid' justifyContent='center' alignContent='center' style={{marginTop:'50px', marginLeft:'5vw', marginBottom:'50px'}}>
          <Grid container xs={3} item className='testeGrid'>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media} style={{width:"242px", height:"298px"}}
                  image="https://cdn.shopify.com/s/files/1/0249/0220/5526/products/LookbookInsecta-49_600x901.jpg?v=1649440831"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"jaldi", fontSize:"20px",color: "#785846"}}>
                   Calça pipiça estampa Lilium
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p"  style={{fontFamily:"jaldi", fontSize:"px",color: "B6917B"}}>
                   Loja Insecta Shoes
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p"  style={{fontFamily:"jaldi", fontSize:"px",color: "B6917B"}}>
                  R$279,99
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>


          <Grid container xs={3} item className='testeGrid'>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media} style={{width:"242px", height:"298px"}}
                  image="https://cdn.shopify.com/s/files/1/0249/0220/5526/products/DSC_6931-Editar_600x899.jpg?v=1634818075"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"jaldi", fontSize:"20px",color: "#785846"}}>
                   Oxford Coprini Preto
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p"  style={{fontFamily:"jaldi", fontSize:"px",color: "B6917B"}}>
                   Loja Insecta Shoes
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p"  style={{fontFamily:"jaldi", fontSize:"px",color: "B6917B"}}>
                  R$399,99
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          
          <Grid container xs={3} item className='testeGrid'>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media} style={{width:"242px", height:"298px"}}
                  image="https://cdn.shopify.com/s/files/1/0435/4611/6249/products/171121_FLAV_0058_590x.jpg?v=1638224155"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"jaldi", fontSize:"20px",color: "#785846"}}>
                    Macaquinho Taíse Cambraia de Linho 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:"jaldi", fontSize:"px",color: "B6917B"}}>
                    Loja Flavia Aranha
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:"jaldi", fontSize:"px",color: "B6917B"}}>
                    R$354,99
                  </Typography>
                </CardContent>
              </CardActionArea>

            </Card>
          </Grid>
          <Grid container xs={3} item className='testeGrid'>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media} style={{width:"242px", height:"298px"}}
                  image="https://www.king55.com.br/estatico/king/images/temp/515_calcasarjamarinhobronx_2.jpeg?v=1644077311"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"jaldi", fontSize:"20px",color: "#785846"}}>
                    Calça Sarja Marinho 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:"jaldi", fontSize:"px",color: "B6917B"}}>
                    Loja King55
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:"jaldi", fontSize:"px",color: "B6917B"}}>
                    R$ 210,00
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

        </Grid>
        

      </Grid>
      
      

    </>
  )
}
export default Home