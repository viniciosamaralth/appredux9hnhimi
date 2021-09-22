import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import theme from "./theme";
import NotFound from "./pages/NotFound";
import GuestRoute from "./routes/GuestRoute";
import "./mock";

function App() {
  // console.log(window.location.href);
  // const url = window.location.href;

  return (
    <ThemeProvider theme={theme}>
      {/* {url === "http://localhost:3000/" ? <Home /> : <SignIn />} */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <GuestRoute exact path="/sign-in" component={SignIn}></GuestRoute>
          <Route exact path="*" component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
