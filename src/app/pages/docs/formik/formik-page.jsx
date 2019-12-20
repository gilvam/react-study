import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import { Formik, } from 'formik';
import * as Yup from 'yup';
import SnackBar from '../../../components/material/snackbar/snackbar';
import { FormikHelper } from './formik-helper';

const styles = theme => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const FormikPage = withStyles(styles)(props => {
  const { classes } = props;

  const [open, setOpen] = useState(false);
  const [snackBar, setSnackBar] = React.useState({ show: false, msg: '' });
  const handleSnack = (msg) => {
    setSnackBar({ ...snackBar, show: true, msg });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const formGroup = {
    values: {
      email: '',
      name: '',
    },
    validation: Yup.object().shape({
      email: Yup.string().email().required('Required'),
      name: Yup.string().required('Required'),
    })
  };

  const save = async (formikHelpers) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Simulando salvamento...');
    handleSnack('Form totalmente correto');
    formikHelpers.setSubmitting(true);
  };

  return (
      <>
        <Button variant="outlined" color="primary" onClick={ handleClickOpen }> Contato! </Button>

        <Dialog open={ open } onClose={ handleClose }>
          <DialogTitle>Contato</DialogTitle>
          <IconButton aria-label="close" className={ classes.closeButton } onClick={ handleClose }>
            <CloseIcon/>
          </IconButton>
          <DialogContent>
            <DialogContentText> Envie uma mensagem </DialogContentText>

            <Formik initialValues={ formGroup.values }
                    validationSchema={ formGroup.validation }
                    onSubmit={ async (values, formikHelpers) => await save(formikHelpers) }>
              { f =>
                  <>
                    <form onSubmit={ f.handleSubmit }>

                      <TextField label="nome" name="name" variant="outlined" margin="normal" fullWidth
                                 value={ f.values.name }
                                 onChange={ f.handleChange }
                                 onBlur={ f.handleBlur }
                                 helperText={ (f.errors.name && f.touched.name) && f.errors.name }
                      />

                      <TextField label="email" name="email" variant="outlined" margin="normal" fullWidth
                                 error={ f.errors.email && f.touched.email }
                                 value={ f.values.email }
                                 onChange={ f.handleChange }
                                 onBlur={ f.handleBlur }
                                 helperText={ (f.errors.email && f.touched.email) && f.errors.email }
                      />

                      <DialogActions>
                        <Button type="button" className="outline"
                                onClick={ f.handleReset }
                                disabled={ !f.dirty || f.isSubmitting }>
                          reset
                        </Button>
                        <Button type="submit" color="primary" disabled={ f.isSubmitting }> GO! </Button>
                      </DialogActions>

                      <FormikHelper { ...props } />
                    </form>
                  </>
              }
            </Formik>

          </DialogContent>
        </Dialog>


        <SnackBar snackBar={ snackBar } setSnackBar={ setSnackBar }/>
      </>
  );
});

export default FormikPage;
