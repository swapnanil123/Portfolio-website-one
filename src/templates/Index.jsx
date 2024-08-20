import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home.jsx"

const Index = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
};

export default Index;
