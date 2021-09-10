import { createTheme, createMuiTheme } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";
import palette from "./palette";
import typography from "./typography";

const theme = createMuiTheme({
  palette,
  typography,
});

//PALETA DE CORES: https://material-ui.com/pt/customization/color/

export default theme;
