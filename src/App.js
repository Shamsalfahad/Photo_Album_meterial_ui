import logo from './logo.svg';
import './App.css';

import{Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid,Toolbar, Container,Button } from '@mui/material';
import {PhotoCamera} from "@mui/icons-material"

const cards=[1,2,3,4,5,6,7,8,9]

function App() {
  return (
    <>
      <CssBaseline/>
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera/>
          <Typography variant='h6'>
              Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" style={{marginTop:"100px"}}>
              <Typography variant='h2' align='center' color="textPrimary" gutterBottom> Photo Album</Typography>
              <Typography variant='h5' align='center' color="textSecondary" paragraph>
                
              </Typography>
            <div style={{alignItems:"center"}}>
              <Grid container spacing={2} justify="center" style={{marginLeft:"18%"}}>
                <Grid item>
                <Button variant='contained' color='primary'>
                          See my photos
                </Button>
                </Grid>
                <Grid item>
                <Button variant='outlined' color='primary'>
                          See my photos
                </Button>
                </Grid>

              </Grid>
            </div>
          </Container>
          <Container >
          <div style={{marginLeft:"13%"} }>
          <Grid container spacing={2} style={{padding:"20px"} } >
              {cards.map(()=>(
                 <Card sx={{ maxWidth: 280 }}>
                 <CardMedia
                   component="img"
                   alt="green iguana"
                   height="140"
                   image="https://source.unsplash.com/random"
                    
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                     Lizard
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                     Lizards are a widespread group of squamate reptiles, with over 6,000
                     species, ranging across all continents except Antarctica
                   </Typography>
                 </CardContent>
                 <CardActions>
                   <Button size="small">Share</Button>
                   <Button size="small">Learn More</Button>
                 </CardActions>
               </Card>
              )
              
              )}
               {/* <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> */}
            </Grid>
          </div>

          </Container>
          
        </div>
       
      </main>
      <footer>
      <Typography variant='h6' align='center' style={{backgroundColor:"rgb(21, 101, 192)"}} >
       © Made By Shams Al Fahad 2022.
          </Typography>
      </footer>
    </>
  );
}

export default App;
