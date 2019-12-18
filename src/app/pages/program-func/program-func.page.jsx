import React from 'react';
import './program-func.page.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const ProgramFuncPage = () => {

  return (
      <div className="container-program-func">

        <header className="">
          <Typography variant="h4" component="h5"> Programação funcional </Typography>
          <Typography component="p"> Links para estudo </Typography>
        </header>

        <List>
          <ListItem target="_blank" rel="noopener noreferrer" component="a" href="https://www.youtube.com/watch?v=BWFpUHPqh1g&vl=pt-BR">
            <ListItemText primary="Entenda a programação funcional em 12 minutos" secondary="pt-br"/>
          </ListItem>
          <ListItem target="_blank" rel="noopener noreferrer" component="a" href="https://medium.com/@leandrotk_/princ%C3%ADpios-de-programa%C3%A7%C3%A3o-funcional-com-javascript-37ec5d6afab9">
            <ListItemText primary="Princípios de Programação Funcional com JavaScript" secondary="pt-br"/>
          </ListItem>

          <ListItem>
            <ListItemText primary="Paradigma de programação"/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Funções puras"/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Imutabilidade"/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Funções de primeira classe"/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Composição de funções"/>
          </ListItem>

        </List>

      </div>
  );
};

export default ProgramFuncPage;
