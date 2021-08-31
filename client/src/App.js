import React from "react";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import LessonOne from "./components/Lessons/LessonOne";
import LessonTwo from "./components/Lessons/LessonTwo";
import LessonThree from "./components/Lessons/LessonThree";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Introduction from "./components/Lessons/Introduction";

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
          <Route component={LoginForm} path="/login" />
          <Route component={SignUp} path="/signup" />
          <Route component={Profile} path="/profile" />
          <Route component={Introduction} path="/introduction" />
          <Route component={LessonOne} path="/lessonone" />
          <Route component={LessonTwo} path="/lessontwo" />
          <Route component={LessonThree} path="/lessonthree" />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
