import React from "react";
import Home from "./components/Home";
// import About from "./components/About";
import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";
import NotesList from "./components/NotesList";
// import ProfileScreen from "./components/ProfileScreen";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
const httpLink = createHttpLink({ uri: "/graphql" });
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <NavBar />
        <Switch>
          <Route component={Home} path="/" exact />
          {/* <Route component={About} path="/about" /> */}
          <Route component={LoginForm} path="/login" />
          <Route component={SignUp} path="/signup" />
          <Route component={NotesList} path="/notes" />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
