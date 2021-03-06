import React, { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import authService from 'services/authService';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Cookie from 'js-cookie'

import useMessages from 'hooks/useMessages';

export default function SignIn() {
  const classes = useStyles();
  const router = useRouter();
  const { showMessage } = useMessages();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const accessToken = Cookie.get('accessToken')

    if(accessToken) {
      router.replace("/admin/")
    }
  })

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();
    
    await authService.signIn(email, password)
    .then(() => { router.replace("/admin/") })
    .catch(_error => {
      showMessage({
        type: 'error',
        title: 'erro',
        text: "Credenciais inválidas",
        timeout: 1500
      })
    })
  }

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h3">
          Gestão de Estoque
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSignIn}>
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={ event => setEmail(event.target.value) }
            value={email}
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha'"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={ event => setPassword(event.target.value) }
            value={password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Entrar
          </Button>

        </form>
      </div>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));