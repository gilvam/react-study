import React from 'react';
import './ecmascript6.page.scss';
import Typography from '@material-ui/core/Typography';
import { CodeBlock, monokaiSublime } from 'react-code-blocks';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import codes from './data';

const Ecmascript6Page = () => {

  const codeList = codes().map((item, i) => (
      <Grid item xs={ item.config.grid.xs || 12 } sm={ item.config.grid.sm || 12 } key={ ('ES6_' + i) }>
        {/*<Paper className="paper">*/ }
        <Typography className="title"> { item.title } </Typography>
        <Typography className="subtitle"> { item.description } </Typography>
        {
          item.code.trim() &&
          <div className="code">
            <CodeBlock language="javascript" theme={ monokaiSublime }
                       showLineNumbers={ false } text={ item.code }
            />
          </div>
        }
        {
          item.img &&
          <img className="image" src={ item.img }/>
        }
        {/*</Paper>*/ }
      </Grid>
  ));

  return (
      <div className="container-ecmascript6">
        <header className="header">
          <Typography variant="h5" component="h5"> ECMAScript 6 </Typography>
        </header>

        <div style={ { paddingBottom: 30, display: 'block', } }>
          <a href="https://blog.rocketseat.com.br/as-melhores-features-do-es6-es7-e-es8/" target="_blank" rel="noopener noreferrer">
            As melhores features do ES6, ES7 e ES8
          </a>
        </div>
        <div style={ { paddingBottom: 30, display: 'block', } }>
          <a href="https://codetower.github.io/es6-features/" target="_blank" rel="noopener noreferrer">
            geral ES6
          </a>
        </div>

        <Grid container spacing={ 3 }>
          { codeList }
        </Grid>

      </div>
  );
};

export default Ecmascript6Page;
