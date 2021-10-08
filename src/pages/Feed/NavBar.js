import React from "react";
//import { makeStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Button, ListItem, ListItemText } from "@material-ui/core/";
import ListSubheader from "@material-ui/core/ListSubheader";
import { Tag } from "react-feather";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: 275,
    marginRight: 16,
  },
  button: {
    width: "100%",
  },
}));

const tags = [
  { id: 1, name: "INICIO" },
  { id: 2, name: "QUEM SOMOS" },
  { id: 3, name: "SUPORTE" },
  { id: 4, name: "CONTATO" },
  { id: 5, name: "SISTEMA" },
  { id: 6, name: "UTILITARIOS" },
];

function NavBar() {
  const Classes = useStyle();

  return (
    <Paper className={Classes.root}>
      <Button variant="outlined" color="secondary" className={Classes.button}>
        Registrar Gratis
      </Button>
      <ListSubheader>{"Tags em Alta"}</ListSubheader>
      {tags.map((item) => (
        <ListItem dense button key={`item-${item.id}-${item.name}`}>
          <ListItemText primary={`#${item.name}`} />
        </ListItem>
      ))}
      <ListItem buttom>Exibir mais opções!</ListItem>
    </Paper>
  );
}

export default NavBar;
