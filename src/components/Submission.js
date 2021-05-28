import React from "react";

const Submission = ({
    collectionDate,
    createdAt,
    highrisk,
    immuno,
    onsetDate,
    patientName,
    symptoms,
}) => {
    return (
        <div>
            <p>{collectionDate}</p>
            <p>{createdAt}</p>
            <p>{highrisk}</p>
            <p>{immuno}</p>
            <p>{onsetDate}</p>
            <p>{patientName}</p>
            <p>{symptoms}</p>
        </div>
    );
};

export default Submission;
