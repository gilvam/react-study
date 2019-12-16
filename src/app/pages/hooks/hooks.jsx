import React, { useEffect, useState } from 'react';
import './hooks.scss';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Hooks = () => {

  // variável e função que irá mudar o estado da variável
  const [todo, setTodo] = useState({ title: 'Learn Hooks', age: 31 }); // parametro inicial dentro do useState

  const updateAge = (age) => {
    setTodo({ ...todo, age });
  };

  useEffect(() => {
    document.title = `Age: ${ todo.age }`; // Atualiza o título do documento utilizando a API do navegador
  });

  return (
      <div className="container-hooks">
        <header>
          <Typography variant="h4" component="h5"> HOOKS </Typography>
          <Typography component="p"> Exemplo de mudança no título da aba </Typography>
        </header>

        <form noValidate autoComplete="off">
          <Button variant="contained" color="secondary" size="small" className="btn"
                  onClick={ () => updateAge(todo.age - 1) }>-</Button>

          <TextField id="form-field" label="Age" variant="outlined" value={ todo.age } type="number"
                     onChange={ (e) => updateAge(e.target.value) }
          />

          <Button variant="contained" color="secondary" size="small" className="btn"
                  onClick={ () => updateAge(todo.age + 1) }>+</Button>
        </form>

      </div>
  );
};

export default Hooks;
