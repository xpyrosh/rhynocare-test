import React, { useState, useEffect } from "react";

// Redux Imports
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSubmissions } from "../actions/submissionActions";

// Component Import
import Submission from "../components/Submission";

const Submissions = ({
    submission: { submissions, loading },
    getSubmissions,
}) => {
    // const [state, setState] = useState({ submissions: null });

    useEffect(() => {
        getSubmissions();

        // eslint-disable-next-line
    }, []);

    if (loading || submissions === null) {
        return <h1>Loading...</h1>;
    }

    return (
        <div style={{ paddingTop: "3rem" }}>
            <h1>Recent Submissions</h1>

            {/* Displaying each patient submission using component card */}
            {/* {state.submissions &&
                state.submissions.map((element, i) => {
                    console.log(element);
                    return <Submission patient={element} />;
                })} */}

            {/* Using REDUX: */}
            {!loading && submissions.length === 0 ? (
                <p>No submissions...</p>
            ) : (
                submissions.map((element, key) => (
                    <Submission patient={element} key={element.submissionId} />
                ))
            )}

            <br />

            {/* Displaying RAW data */}
            <h4>RAW JSON RESPONSE DATA:</h4>
            <p>{JSON.stringify(submissions)}</p>
            {/* <p>{JSON.stringify(state.submissions)}</p> */}
        </div>
    );
};

Submissions.propTypes = {
    getSubmissions: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    // first log is the name and can be any variable
    // second log (state.log) refers to the name given in rootReducer
    submission: state.submission,
});

export default connect(mapStateToProps, { getSubmissions })(Submissions);
