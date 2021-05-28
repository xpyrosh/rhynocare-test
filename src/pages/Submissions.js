import React, { useState, useEffect } from "react";
import axios from "axios";

const Submissions = () => {
    const [state, setState] = useState();

    const getSubmissions = () => {
        axios
            .get("/submissions")
            .then((res) => {
                const resdata = res.data;
                setState(resdata);
            })
            .catch((err) => {
                console.error(err);
            });
    };
    useEffect(() => {
        getSubmissions();
        console.log(state);
    }, []);
    return (
        <div style={{ paddingTop: "3rem" }}>
            <h1>Submissions</h1>
        </div>
    );
};

export default Submissions;
