import React from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/Register"
export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        </Switch>
        </BrowserRouter>
    );

    
};