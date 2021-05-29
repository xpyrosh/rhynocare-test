import React, { useState } from "react";

// Redux Imports
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addSubmission } from "../actions/submissionActions";

// Material Imports
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import Checkbox from "@material-ui/core/Checkbox";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import { differenceInDays, addDays, format } from "date-fns";
import { TextField } from "@material-ui/core";
import { Redirect } from "react-router";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © Gopal Manikumar, M.D."} {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    heading: {
        textAlign: "center",
    },
}));

const Home = ({
    submission: { loading, message },
    auth: { authenticated },
    addSubmission,
}) => {
    // Use custom CSS
    const classes = useStyles();

    // Set component level state
    const [patientName, setPatientName] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDate2, setSelectedDate2] = useState(null);
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

    // Date change handlers?
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const handleDateChange2 = (date2) => {
        setSelectedDate2(date2);
    };

    // Checkbox handlers?
    const handleCheckbox = (event) => {
        setChecked(event.target.checked);
    };
    const handleCheckbox2 = (event) => {
        setChecked2(event.target.checked);
    };
    const handleCheckbox3 = (event) => {
        setChecked3(event.target.checked);
    };

    // Clear Button Handler
    const handleClear = () => {
        setSelectedDate(null);
        setSelectedDate2(null);
    };

    // Submit Button Handler
    function handleSubmit(event) {
        // check data
        console.log(
            `${selectedDate} ${selectedDate2} ${patientName} ${checked} ${checked2} ${checked3}`
        );
        event.preventDefault();
        console.log(selectedDate, selectedDate2);
        var dubdays = differenceInDays(selectedDate, selectedDate2);
        console.log(dubdays);
        if (isNaN(dubdays) && checked2 === false && checked3 === false) {
            alert(
                "ISO: End of " +
                    format(addDays(selectedDate, 10), "dd MMM yyyy") +
                    "\nPOC from " +
                    format(addDays(selectedDate, -2), "dd MMM yyyy")
            );
        } else if (isNaN(dubdays) && checked2 === false && checked3 === true) {
            alert(
                "ISO: End of " +
                    format(addDays(selectedDate, 20), "dd MMM yyyy") +
                    "\nPOC from " +
                    format(addDays(selectedDate, -2), "dd MMM yyyy")
            );
        } else if (isNaN(dubdays) && checked2 === true && checked3 === false) {
            alert(
                "ISO: End of " +
                    format(addDays(selectedDate, 10), "dd MMM yyyy") +
                    "\nPOC from 48 hours after high risk exposure"
            );
        } else if (isNaN(dubdays) && checked2 === true && checked3 === true) {
            alert(
                "ISO: End of " +
                    format(addDays(selectedDate, 20), "dd MMM yyyy") +
                    "\nPOC from 48 hours after high risk exposure"
            );
        } else if (dubdays >= 0 && checked === true && checked3 === false) {
            alert(
                "ISO: End of " +
                    format(addDays(selectedDate2, 10), "dd MMM yyyy") +
                    "\nPOC: from " +
                    format(addDays(selectedDate2, -2), "dd MMM yyyy")
            );
        } else if (dubdays >= 0 && checked === true && checked3 === true) {
            alert(
                "ISO: End of " +
                    format(addDays(selectedDate2, 20), "dd MMM yyyy") +
                    "\nPOC: from " +
                    format(addDays(selectedDate2, -2), "dd MMM yyyy")
            );
        } else if (
            dubdays >= 0 &&
            checked === false &&
            checked2 === false &&
            checked3 === false
        ) {
            alert(
                "ISO: End of " +
                    format(addDays(selectedDate2, 10), "dd MMM yyyy") +
                    "\nPOC: from " +
                    format(addDays(selectedDate, -2), "dd MMM yyyy")
            );
        } else if (
            dubdays >= 0 &&
            checked === false &&
            checked2 === false &&
            checked3 === true
        ) {
            alert(
                "ISO: End of " +
                    format(addDays(selectedDate2, 20), "dd MMM yyyy") +
                    "\nPOC: from " +
                    format(addDays(selectedDate, -2), "dd MMM yyyy")
            );
        } else if (
            dubdays >= 0 &&
            checked === false &&
            checked2 === true &&
            checked3 === false
        ) {
            alert(
                "ISO: End of " +
                    format(addDays(selectedDate2, 10), "dd MMM yyyy") +
                    "\nPOC: from " +
                    format(addDays(selectedDate2, -2), "dd MMM yyyy")
            );
        } else if (
            dubdays >= 0 &&
            checked === false &&
            checked2 === true &&
            checked3 === true
        ) {
            alert(
                "ISO: End of " +
                    format(addDays(selectedDate2, 20), "dd MMM yyyy") +
                    "\nPOC: from " +
                    format(addDays(selectedDate2, -2), "dd MMM yyyy")
            );
        } else if (dubdays < 0 && checked3 === false) {
            alert(
                "ISO: End of " +
                    format(addDays(selectedDate, 10), "dd MMM yyyy") +
                    "\nPOC: from " +
                    format(addDays(selectedDate, -2), "dd MMM yyyy")
            );
        } else if (dubdays < 0 && checked3 === true) {
            alert(
                "ISO: End of " +
                    format(addDays(selectedDate, 20), "dd MMM yyyy") +
                    "\nPOC: from " +
                    format(addDays(selectedDate, -2), "dd MMM yyyy")
            );
        }

        const submission = {
            patientName: patientName,
            onsetDate: selectedDate,
            collectionDate: selectedDate2,
            symptoms: checked,
            highrisk: checked2,
            immuno: checked3,
        };

        addSubmission(submission);
    }

    return (
        <>
            {authenticated ? (
                <Container
                    component="main"
                    maxWidth="xs"
                    style={{ paddingTop: "3rem" }}
                >
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography
                            component="h1"
                            variant="h5"
                            className={classes.heading}
                        >
                            Ontario COVID-19 Isolation End Date and POC
                            Calculator
                        </Typography>
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                {/* Patient Name Field */}
                                <Grid
                                    className="textfield"
                                    container
                                    justify="space-around"
                                    onChange={(e) => {
                                        setPatientName(e.target.value);
                                    }}
                                >
                                    <TextField
                                        id="standard-basic"
                                        label="Patient Name:"
                                        required
                                    />
                                </Grid>
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Lab Collection Date"
                                        format="dd MMM yyyy"
                                        required
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        onInput={(e) =>
                                            setSelectedDate(e.target.value)
                                        }
                                        KeyboardButtonProps={{
                                            "aria-label": "change date",
                                        }}
                                        // Attempted use of ReGex?
                                        // rifmFormatter={(val) =>
                                        //     val.replace(
                                        //         /[^\.\ \,\[a-zA-Z0-9_]*$]+/gi,
                                        //         ""
                                        //     )
                                        // }
                                        // refuse={/[^\.\ \,\[a-zA-Z0-9_]*$]+/gi}
                                    />
                                </Grid>
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog2"
                                        label="Symptom Onset Date"
                                        format="dd MMM yyyy"
                                        required
                                        value={selectedDate2}
                                        onChange={handleDateChange2}
                                        onInput={(e) =>
                                            setSelectedDate2(e.target.value)
                                        }
                                        KeyboardButtonProps={{
                                            "aria-label": "change date",
                                        }}
                                        // rifmFormatter={(val) =>
                                        //     val.replace(
                                        //         /[^\.\ \,\[a-zA-Z0-9_]*$]+/gi,
                                        //         ""
                                        //     )
                                        // }
                                        // refuse={/[^\.\ \,\[a-zA-Z0-9_]*$]+/gi}
                                    />
                                </Grid>

                                <Grid className="checkboxlabel">
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleCheckbox}
                                        name="checked"
                                        inputProps={{
                                            "aria-label": "primary checkbox",
                                        }}
                                    />
                                    <span>
                                        Symptoms present at the time of testing
                                    </span>
                                </Grid>
                                <Grid className="checkboxlabel">
                                    <Checkbox
                                        checked={checked2}
                                        onChange={handleCheckbox2}
                                        name="checked2"
                                        inputProps={{
                                            "aria-label": "primary checkbox",
                                        }}
                                    />
                                    <span>
                                        High risk exposure 14 days before test
                                        date
                                    </span>
                                </Grid>
                                <Grid className="checkboxlabel">
                                    <Checkbox
                                        checked={checked3}
                                        onChange={handleCheckbox3}
                                        name="checked3"
                                        inputProps={{
                                            "aria-label": "primary checkbox",
                                        }}
                                    />
                                    <span>Immunocompromised</span>
                                </Grid>
                            </MuiPickersUtilsProvider>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                SUBMIT
                            </Button>
                        </form>
                        <Button
                            type="clear"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={() => {
                                handleClear();
                            }}
                        >
                            CLEAR
                        </Button>
                    </div>
                    <Box mt={8}>
                        <Copyright />
                    </Box>
                </Container>
            ) : (
                <Redirect to="/login" />
            )}
        </>
    );
};

Home.propTypes = {
    addSubmission: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    // first log is the name and can be any variable
    // second log (state.log) refers to the name given in rootReducer
    submission: state.submission,
    auth: state.auth,
});

export default connect(mapStateToProps, { addSubmission })(Home);
