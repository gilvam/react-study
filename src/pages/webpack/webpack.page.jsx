import React from 'react';
import './webpack.page.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const WebpackPage = () => {

  return (
      <div className="">
        <header className="">

          <Typography variant="h4" component="h5"> Webpack </Typography>

          <List>
            <ListItem>
              <ListItemText primary="yarn add -D webpack" secondary="-"/>
            </ListItem>
            <ListItem>
              <ListItemText primary="yarn add -D webpack-cli" secondary="-"/>
            </ListItem>
            <ListItem>
              <ListItemText primary="yarn add -D css-loader" secondary="interpreta @import, url() ..."/>
            </ListItem>
            <ListItem>
              <ListItemText primary="yarn add -D style-loader"
                            secondary="adiciona CSS na DOM injetando a tag <style> (conflito, usar essa estratégia ou o mini-css-extract-plugin)"
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="yarn add -D mini-css-extract-plugin"
                            secondary="extrair todo .css para um arquivo específico (conflito, usar essa estratégia ou o style-loader)"
              />
            </ListItem>

            <ListItem>
              <ListItemText primary="yarn add -D node-sass" secondary="compila .sass/.scss para CSS"/>
            </ListItem>
            <ListItem>
              <ListItemText primary="yarn add -D sass-loader" secondary="compila .sass/.scss para CSS junto ao node-sass"/>
            </ListItem>
            <ListItem>
              <ListItemText primary="yarn add -D cross-env" secondary="seta variável de ambiente (development, production, ...)"/>
            </ListItem>
            <ListItem>
              <ListItemText primary="yarn add -D optimize-css-assets-webpack-plugin" secondary="minificar arquivos js"/>
            </ListItem>
            <ListItem>
              <ListItemText primary="yarn add -D uglifyjs-webpack-plugin" secondary="minificar arquivos css"/>
            </ListItem>
            <ListItem>
              <ListItemText primary="yarn add -D file-loader" secondary="carrega arquivos de imagem"/>
            </ListItem>
            <ListItem>
              <ListItemText primary="yarn add -D webpack-dev-server" secondary="servidor do webpack"/>
            </ListItem>
          </List>


        </header>
      </div>
  );
};

export default WebpackPage;
