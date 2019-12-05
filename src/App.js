import React from "react";
import logo from "./logo.svg";
import Header from "./app/Partials/Header";
import Footer from "./app/Partials/Footer";
import About from "../src/app/Pages/About";
import Authors from "../src/app/Pages/Author";
import SingleAuthor from "./app/Pages/SingleAuthor";
import Home from "./app/Pages/Home";
import { Route, Switch } from "react-router-dom";
import SinglePost from "./app/Pages/SinglePost";

function App() {
  return (
    <div className="">
      <Header />
      <Switch>
        {/* <SingleAuthor /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/posts/:id" component={SinglePost} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
