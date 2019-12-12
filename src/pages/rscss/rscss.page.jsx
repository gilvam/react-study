import React from 'react';
import './rscss.page.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const RscssPage = () => {

  return (
      <div className="">

        <header className="">
          <Typography variant="h4" component="h5"> RSCSS </Typography>
          <Typography component="p"> Links para estudo </Typography>
        </header>

        <List>
          <ListItem target="_blank" component="a" href="https://willianjusten.com.br/falando-sobre-rscss/">
            <ListItemText primary="https://willianjusten.com.br/falando-sobre-rscss/" secondary="pt-br"/>
          </ListItem>
          <ListItem target="_blank" component="a" href="https://rscss.io/elements.html">
            <ListItemText primary="https://rscss.io/elements.html" secondary="official site"/>
          </ListItem>
        </List>

      </div>
  );
};

export default RscssPage;
