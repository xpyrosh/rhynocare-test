import React, { useState, useEffect } from "react";
import axios from "axios";
import Submission from "../components/Submission";

const Submissions = () => {
    const [state, setState] = useState({ submissions: null });

    useEffect(() => {
        axios
            .get("/submissions")
            .then((res) => {
                setState({
                    submissions: res.data,
                });
            })
            .catch((err) => {
                console.error(err);
            });

        // eslint-disable-next-line
    }, []);

    return (
        <div style={{ paddingTop: "3rem" }}>
            <h1>Submissions</h1>

            {/* Displaying each patient submission using component card */}
            {state.submissions &&
                state.submissions.map((element, i) => {
                    console.log(element);
                    return <Submission patient={element} />;
                })}
            <br />

            {/* Displaying RAW data */}
            <h4>RAW JSON RESPONSE DATA:</h4>
            <p>{JSON.stringify(state)}</p>
            {/* <p>{JSON.stringify(state.submissions)}</p> */}
        </div>
    );
};

export default Submissions;
