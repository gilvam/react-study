import './auth.page.scss';
import React, { useEffect, useState } from 'react';
// import { reduxForm, Field } from 'redux-form';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import { login, signup } from './authActions';
// import Row from '../common/layout/row';
// import Grid from '../common/layout/grid';
// import Messages from '../common/msg/messages';
// import Input from '../common/form/inputAuth';


// class AuthPage2 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { loginMode: true };
//   }
//
//   changeMode() {
//     this.setState({ loginMode: !this.state.loginMode });
//   }
//
//   onSubmit(values) {
//     const { login, signup } = this.props;
//     this.state.loginMode ? login(values) : signup(values);
//   }
//
//   render() {
//     const { loginMode } = this.state;
//     const { handleSubmit } = this.props;
//     return (
//         <div className="login-box">
//           <div className="login-logo">LOGIN</div>
//           <div className="login-box-body">
//             <p className="login-box-msg">Bem vindo!</p>
//             <form onSubmit={ handleSubmit(v => this.onSubmit(v)) }>
//               <Field component={ Input } type="input" name="name"
//                      placeholder="Nome" icon="user" hide={ loginMode }/>
//               <Field component={ Input } type="email" name="email"
//                      placeholder="E-mail" icon="envelope"/>
//               <Field component={ Input } type="password" name="password"
//                      placeholder="Senha" icon="lock"/>
//               <Field component={ Input } type="password" name="confirm_password"
//                      placeholder="Confirmar Senha" icon="lock" hide={ loginMode }/>
//               <Row>
//                 <Grid cols="4">
//                   <button type="submit"
//                           className="btn btn-primary btn-block btn-flat">
//                     { loginMode ? 'Entrar' : 'Registrar' }
//                   </button>
//                 </Grid>
//               </Row>
//             </form>
//             FORM
//             <br/>
//             <a onClick={ () => this.changeMode() }>
//               { loginMode ? 'Novo usuário? Registrar aqui!' :
//                   'Já é cadastrado? Entrar aqui!' }
//             </a>
//           </div>
//           {/*<Messages/>*/}
//
//
//         </div>
//     );
//   }
// }

// AuthPage = reduxForm({ form: 'authForm' })(AuthPage);
// const mapDispatchToProps = dispatch => bindActionCreators({ login, signup }, dispatch);
// export default connect(null, mapDispatchToProps)(AuthPage);


import {
  FormBuilder,
  AbstractControl,
  Validators,
  ValidationErrors,
  FormGroup,
  ValidatorFn,
  FieldGroup,
  FieldControl
} from 'react-reactive-form';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Values from './Values';
import styles from './styles';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const asyncValidator = (control) => {
  return sleep(1000).then(() => {
    if (['jon@reactive.com', 'hodor@reactive.com', 'mountain@reactive.com'].includes(control.value)) {
      return null;
    } else {
      throw { isExist: true };
    }
  });
};

/**
 * Group level validators to match the passwords.
 */
const checkIfMatchingPasswords = (passwordKey, passwordConfirmationKey) => {
  return (group) => {
    let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
    if (passwordInput.value !== passwordConfirmationInput.value) {
      passwordConfirmationInput.setErrors({ notEquivalent: true });
    } else {
      passwordConfirmationInput.setErrors(null);
    }
    return null;
  };
};

const AuthPage = (props) => {

  const [isLoginMode, setIsLoginMode] = useState(true);

  const changeMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  useEffect(() => {
    registerForm.reset();
  }, []);

  const handleReset = () => {
    registerForm.reset();
  };

  const registerForm = FormBuilder.group(
      {
        username: ['', [Validators.required, Validators.email], asyncValidator, 'blur'],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirm_password: ['', Validators.required],
        gender: ['male'],
        terms: [false, Validators.requiredTrue],
        address: FormBuilder.group({
          city: ['Bangalore', Validators.required],
          country: ['india']
        }),
      },
      { validators: checkIfMatchingPasswords('password', 'confirm_password') }
  );

  const handleSubmit = () => {
    console.log('registerForm.value: ', registerForm.value);
    // const { login, signup } = this.props;
    // isLoginMode ? login(values) : signup(values);
  };

  useEffect(() => {
    console.log('isLoginMode: ', isLoginMode);
  });



  // variável e função que irá mudar o estado da variável
  const [todo, setTodo] = useState(true); // parametro inicial dentro do useState

  const updateAge = () => {
    setTodo(!todo);
  };

  return (
      <>
        <div className="container-hooks">
          <header>
            <Typography variant="h4" component="h5"> HOOKS </Typography>
            <Typography component="p"> Exemplo de mudança no título da aba </Typography>
          </header>

          <form noValidate autoComplete="off">
            <h1>todo: {todo ? 'true' : 'false'}</h1>
            <Button variant="contained" color="secondary" size="small" className="btn" onClick={ () => updateAge() }>+</Button>
          </form>

        </div>

        <FieldGroup control={ registerForm } render={ (render) => (
            // <Grid container spacing={ 0 } direction="column" alignItems="center" justify="center" style={ { minHeight: '100vh' } }>
            <Grid container>
              <Typography component="h1" variant="h5">
                Log in isLoginMode: { todo ? 'true' : 'false' }
              </Typography>

              <form onSubmit={ handleSubmit }>
                { !todo && <TextField variant="outlined" margin="normal" fullWidth label="Email"/> }

                <TextField variant="outlined" margin="normal" fullWidth label="Email"/>
                <TextField variant="outlined" margin="normal" fullWidth label="Senha" type="password"/>

                { !todo &&
                <TextField variant="outlined" margin="normal" fullWidth label="Confirmar senha" type="password"/> }

                <Button fullWidth variant="contained" size="large" color="primary" type="submit">
                  { todo ? 'Entrar' : 'Registrar' }
                </Button>

              </form>
                <Typography component="a" onClick={ changeMode }>
                  { todo ? 'Novo usuário? Registrar aqui!' : 'Já é cadastrado? Entrar aqui!' }
                </Typography>

              <Button variant="contained" color="secondary" size="small" className="btn" onClick={ () => updateAge() }>+</Button>
            </Grid>
        ) }/>
        );


        {/*<FieldGroup control={ registerForm } render={ ({ pristine, invalid, pending, value }) => (*/ }
        {/*    <div style={ styles.main }>*/ }
        {/*      <h2>Registration Form</h2>*/ }
        {/*      <form onSubmit={ () => handleSubmit }>*/ }
        {/*      <span style={ { fontSize: 12 } }>*/ }
        {/*        Valid usernames : jon@reactive.com, hodor@reactive.com,mountain@reactive.com*/ }
        {/*      </span>*/ }
        {/*        <FieldControl name="username" render={ ({ handler, pending, touched, hasError }) => (*/ }
        {/*            <div>*/ }
        {/*              <label>Username:</label>*/ }
        {/*              <input style={ styles.input } { ...handler() } />*/ }
        {/*              { pending && <i className="fa fa-spinner fa-spin"/> }*/ }
        {/*              <div>*/ }
        {/*          <span style={ styles.error }>*/ }
        {/*            { (touched &&*/ }
        {/*                ((hasError('required') && 'Username is required') ||*/ }
        {/*                    (hasError('email') &&*/ }
        {/*                        'Please enter a valid email'))) ||*/ }
        {/*            (hasError('isExist') && 'Username not available') }*/ }
        {/*          </span>*/ }
        {/*              </div>*/ }
        {/*            </div>*/ }
        {/*        ) }/>*/ }

        {/*        <FieldControl name="password" render={ ({ handler, getError, hasError, touched }) => (*/ }
        {/*            <div>*/ }
        {/*              <label>Password:</label>*/ }
        {/*              <input type="password" style={ styles.input }{ ...handler() }/>*/ }
        {/*              <div>*/ }
        {/*              <span style={ styles.error }>*/ }
        {/*                { touched && ((hasError('required') && 'Password is required') || (hasError('minLength') && `Password Should Be greater than ${ getError('minLength').requiredLength } character`)) }*/ }
        {/*              </span>*/ }
        {/*              </div>*/ }
        {/*            </div>*/ }
        {/*        ) }/>*/ }

        {/*        <FieldControl name="confirm_password" render={ ({ handler, touched, hasError }) => (*/ }
        {/*            <div>*/ }
        {/*              <label>Confirm: </label>*/ }
        {/*              <input type="password" style={ styles.input } { ...handler() }/>*/ }
        {/*              <div>*/ }
        {/*              <span style={ styles.error }>*/ }
        {/*                { touched && ((hasError('required') && 'Please confirm your password') || (hasError('notEquivalent') && 'Password does not match.')) }*/ }
        {/*              </span>*/ }
        {/*              </div>*/ }
        {/*            </div>*/ }
        {/*        ) }/>*/ }

        {/*        <FieldControl name="gender" render={ ({ handler }) => (*/ }
        {/*            <div style={ styles.genderContainer }>*/ }
        {/*              <div style={ styles.genderText }>*/ }
        {/*                <label>Gender:</label>*/ }
        {/*              </div>*/ }
        {/*              <div style={ styles.radioContainer }>*/ }
        {/*                <div>*/ }
        {/*                  <input { ...handler('radio', 'male') } />*/ }
        {/*                  <label>Male</label>*/ }
        {/*                </div>*/ }
        {/*                <div>*/ }
        {/*                  <input { ...handler('radio', 'female') } />*/ }
        {/*                  <label>Female</label>*/ }
        {/*                </div>*/ }
        {/*                <div>*/ }
        {/*                  <input { ...handler('radio', 'other') } />*/ }
        {/*                  <label>Other</label>*/ }
        {/*                </div>*/ }
        {/*              </div>*/ }
        {/*            </div>*/ }
        {/*        ) }/>*/ }

        {/*        <div>*/ }
        {/*          <h4 style={ styles.addressText }>Address</h4>*/ }

        {/*          <FieldControl name="address.city" render={ ({ handler, touched, hasError }) => (*/ }
        {/*              <div>*/ }
        {/*                <label>City: </label>*/ }
        {/*                <input style={ styles.input } { ...handler() } />*/ }
        {/*                <div>*/ }
        {/*                  <span*/ }
        {/*                      style={ styles.error }> { touched && hasError('required') && 'City is required' }</span>*/ }
        {/*                </div>*/ }
        {/*              </div>*/ }
        {/*          ) }/>*/ }

        {/*          <FieldControl name="address.country" render={ ({ handler }) => (*/ }
        {/*              <div>*/ }
        {/*                <label>Country:</label>*/ }
        {/*                <select style={ styles.input } { ...handler() }>*/ }
        {/*                  <option value="" disabled>Select</option>*/ }
        {/*                  <option value="us">US</option>*/ }
        {/*                  <option value="uk">UK</option>*/ }
        {/*                  <option value="india">India</option>*/ }
        {/*                  <option value="china">China</option>*/ }
        {/*                </select>*/ }
        {/*              </div>*/ }
        {/*          ) }/>*/ }
        {/*        </div>*/ }
        {/*        <FieldControl name="terms" render={ ({ handler, touched, hasError }) => (*/ }
        {/*            <div>*/ }
        {/*              <input { ...handler('checkbox') } />*/ }
        {/*              <label>*/ }
        {/*                &nbsp;&nbsp;I agree to the terms and condition.*/ }
        {/*              </label>*/ }
        {/*              <div>*/ }
        {/*                <span*/ }
        {/*                    style={ styles.error }>{ touched && hasError('required') && `Please select the terms checkbox to indicate that you agree to the terms and condition` }</span>*/ }
        {/*              </div>*/ }
        {/*            </div>*/ }
        {/*        ) }/>*/ }

        {/*        <div>*/ }
        {/*          <button disabled={ pristine || invalid || pending } style={ styles.button } onClick={ handleSubmit }>*/ }
        {/*            Submit*/ }
        {/*          </button>*/ }
        {/*          <button type="button" style={ styles.button } onClick={ () => handleReset() }>*/ }
        {/*            Reset*/ }
        {/*          </button>*/ }
        {/*        </div>*/ }

        {/*        <Values value={ value }/>*/ }

        {/*      </form>*/ }
        {/*    </div>*/ }
        {/*) }*/ }
        {/*/>*/ }
      </>
  );
};

export default (AuthPage);
