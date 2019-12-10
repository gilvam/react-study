import React from 'react';
import logoReact from '../../assets/imgs/logo-react.svg';
import Typography from '@material-ui/core/Typography';
import './home.scss';

const Home = (props) => {

  return (
      <div className="container-home">
        <header className="header">
          <img src={ logoReact } className="logo" alt="logo"/>
          <p>
            REACT study
          </p>

          <Typography paragraph className="typography">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
            gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
            adipiscing bibendum est ultricies integer quis.
          </Typography>
        </header>
      </div>
  );
};

export default Home;
