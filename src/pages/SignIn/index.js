import React from "react";
import {
  makeStyles,
  Typography,
  Grid,
  Box,
  Avatar,
  TextField,
  Button,
  Link,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { AlignCenter } from "react-feather";
import { useHistory } from "react-router-dom";

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
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => history.push("/")}
            >
              Entrar
            </Button>
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
