import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import theme from "./theme";
import NotFound from "./pages/NotFound";
import NewPost from "./pages/Post/New";
import GuestRoute from "./routes/GuestRoute";
import "./mock";
import { Provider } from "react-redux";
import store from "./store";
import Auth from "./pages/Home/components/Auth";
import { createBrowserHistory } from "history";

function App() {
  // const url = window.location.href;
  const history = createBrowserHistory();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter history={history}>
          <Auth>
            <Switch>
              <GuestRoute exact path="/sign-in" component={SignIn}></GuestRoute>
              <Route path="/" component={Home}></Route>
            </Switch>
          </Auth>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
