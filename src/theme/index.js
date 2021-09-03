import { createTheme, createMuiTheme } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.red["900"],
    },
  },
});

//PALETA DE CORES: https://material-ui.com/pt/customization/color/

export default theme;
