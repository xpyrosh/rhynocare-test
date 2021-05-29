import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp.js";
import Submissions from "./pages/Submissions";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/submissions" component={Submissions} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}
