import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";
import ProfileScreen from "./components/ProfileScreen";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={LoginForm} path="/login" />
        <Route component={SignUp} path="/signup" />
        <Route component={ProfileScreen} path="/profile" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
