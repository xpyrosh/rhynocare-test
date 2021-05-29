import React, { Component } from "react";
import Link from "react-router-dom/Link";

// Redux Imports
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/authActions";

// Material imports
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const Navbar = ({ auth: { authenticated }, logout }) => {
    return (
        <AppBar>
            <Toolbar>
                <Button color="inherit" component={Link} to="/">
                    Home
                </Button>
                {!authenticated && (
                    <Button color="inherit" component={Link} to="/login">
                        Login
                    </Button>
                )}
                {!authenticated && (
                    <Button color="inherit" component={Link} to="/signup">
                        Sign Up
                    </Button>
                )}
                <Button color="inherit" component={Link} to="/submissions">
                    Submissions
                </Button>
                {authenticated && (
                    <Button
                        onClick={() => {
                            logout();
                            alert("Logged Out.");
                        }}
                        color="inherit"
                        component={Link}
                        to="/submissions"
                    >
                        Log Out
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

const mapStateToProps = (state) => ({
    // first log is the name and can be any variable
    // second log (state.log) refers to the name given in rootReducer
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
