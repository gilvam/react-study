import React from 'react';
import logoReact from '../../assets/imgs/logo-react.svg';
import Typography from '@material-ui/core/Typography';
import './hooks.scss';

const Hooks = (props) => {

  return (
      <div className="container-hooks">
        <header className="header">
          <img src={ logoReact } className="logo" alt="logo"/>
          <p>
            HOOKS
          </p>
        </header>
        <Typography paragraph className="typography">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, atque corporis fugit in itaque nobis
          non quam recusandae ullam! Aperiam asperiores aut beatae impedit nemo nostrum, totam. Maiores vel,
          voluptatibus.
        </Typography>
      </div>
  );
};

export default Hooks;
