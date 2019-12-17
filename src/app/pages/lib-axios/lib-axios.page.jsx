import React, { useEffect, useState } from 'react';
import './lib-axios.page.scss';
import { TestService } from '../../services/test.service';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';

const LibAxiosPage = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    TestService.getPostList().then(response => {
      setPostList(
          response.map((item, index) => {
            item.img = `https://placeimg.com/${ 350 + index }/${ 100 }/any`;
            return item;
          })
      );
    });
  }, []);

  const cart = postList.map(item => (
      <Grid key={ `card-lib-axios-${ item.id }` } item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }>
        <Card>
          <CardMedia className="media" image={ item.img } title="Paella dish"/>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p" className="textcard">
              { item.body }
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon/>
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
  ));


  return (
      <div className="container-lib-axios">
        <header>
          <Typography variant="h4" component="h5"> Lib axios </Typography>
          <Typography component="p"> - </Typography>
        </header>

        <Grid container spacing={ 3 }>
          { cart }
        </Grid>

      </div>
  );
};

export default LibAxiosPage;
