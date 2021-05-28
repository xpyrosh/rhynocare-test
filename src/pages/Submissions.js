import React, { useState, useEffect } from "react";
import axios from "axios";

const Submissions = () => {
    const [state, setState] = useState([]);

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

            <p>{JSON.stringify(state)}</p>
            <p>{JSON.stringify(state.submissions)}</p>
            <br />
            {state.submissions && <h3>{state.submissions[0].patientName}</h3>}
            <br />
            {console.log(typeof state.submissions)}

            {state.submissions &&
                state.submissions.forEach((element) => {
                    <p>{element.patientName}</p>;
                })}
        </div>
    );
};

export default Submissions;
