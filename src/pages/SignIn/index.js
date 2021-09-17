import React, { useState } from "react";
import {
  makeStyles,
  Typography,
  Grid,
  Box,
  Avatar,
  TextField,
  Button,
  Link,
  useTheme,
  FormHelperText,
} from "@material-ui/core";
import { LockOutlined, NavigateBefore } from "@material-ui/icons";
import { AlignCenter } from "react-feather";
import { useHistory, useNavigate } from "react-router-dom";
//import axios from "axios";
import axios from "../../utils/axios";
import authService from "../../services/authService";

const useStyle = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "none",
    padding: theme.spacing(2),
    textAlign: "center",
  },
  avatar: {
    background: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
  },
  button: {
    margintop: theme.spacing(1),
  },
  form: {
    margin: theme.spacing(2, 4),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {"Copyright ©"}
      <a color="inherit" href="www.agilsoft.com.br">
        Agilsoft Informatica
      </a>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

function SignIn() {
  const classes = useStyle();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, seterrorMessage] = useState();
  //const navigate = useNavigate();

  async function handleSignIn() {
    //Chamada para a API, se retorno OK direciona, senao exibe erro
    try {
      await authService.signIn(email, password);
      //Se retornar http 200
      history.push("/");
    } catch (error) {
      seterrorMessage(error.response.data.message);
    }
  }

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        container
        direction="column"
        justify="end"
        alignItems="center"
        md={7}
      >
        <img
          src="/images/background.png"
          alt="BackGround"
          className={classes.image}
        />
        ;
        <Typography
          style={{
            color: "#CD3333",
            fontSize: 35,
            lineHeight: "45px",
            textAlign: "center",
          }}
        >
          {" "}
          <strong>AGILSOFT INFORMATICA LTDA !!!</strong>
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: "#CD3333",
            marginTop: 30,
            fontSize: 15,
          }}
        >
          AGILSOFT INFORMATICA LTDA
        </Typography>
      </Grid>
      <Grid item md={5}>
        <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">
            <strong>Acesso</strong>
          </Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autofocus
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleSignIn}
            >
              Entrar
            </Button>
            {errorMessage && (
              <FormHelperText error>{errorMessage}</FormHelperText>
            )}
            <Grid container>
              <Grid item style={{ marginRight: "5%" }}>
                <Link>Esqueceu a sua senha?</Link>
              </Grid>
              <Grid item>
                <Link>Não tem uma conta? Registre-se</Link>
              </Grid>
            </Grid>
          </form>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignIn;
