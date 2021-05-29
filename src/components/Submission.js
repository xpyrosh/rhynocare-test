import React, { useState } from "react";

const Submission = ({ patient }) => {
    const createdAt = new Date(patient.createdAt);
    const [patientName, setPatientName] = useState(patient.patientName);
    const [collectionDate, setCollectionDate] = useState(
        patient.collectionDate
    );
    const [onsetDate, setOnsetDate] = useState(patient.onsetDate);
    const [symptoms, setSymptoms] = useState(patient.symptoms);
    const [highRisk, setHighRisk] = useState(patient.highRisk);
    const [immuno, setImmuno] = useState(patient.immuno);

    return (
        <div>
            <form
                method="post"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                action=""
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(1,1fr)",
                    gap: ".5rem",
                    padding: "2rem",
                    background: "#3f51b5",
                    borderRadius: "20px",
                    margin: "2rem 20%",
                    color: "#fff",
                    fontSize: "1.2rem",
                }}
            >
                {/* Patient Name */}
                <label htmlFor="name">Patient Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={patientName}
                    required
                    onChange={(e) => setPatientName(e.target.value)}
                    style={{
                        padding: ".75rem",
                        marginLeft: ".5rem",
                        borderRadius: "5px",
                        outline: "none",
                        border: "none",
                    }}
                />
                {/* Collection Date */}
                <label htmlFor="name">Collection Date:</label>
                <input
                    type="text"
                    id="collectionDate"
                    name="collectionDate"
                    value={new Date(collectionDate).toDateString()}
                    required
                    onChange={(e) => setCollectionDate(e.target.value)}
                    style={{
                        padding: ".75rem",
                        marginLeft: ".5rem",
                        borderRadius: "5px",
                        outline: "none",
                        border: "none",
                    }}
                />
                {/* Onset Date */}
                <label htmlFor="name">Onset Date:</label>
                <input
                    type="text"
                    id="onsetDate"
                    name="onsetDate"
                    value={new Date(onsetDate).toDateString()}
                    required
                    onChange={(e) => setOnsetDate(e.target.value)}
                    style={{
                        padding: ".75rem",
                        marginLeft: ".5rem",
                        borderRadius: "5px",
                        outline: "none",
                        border: "none",
                    }}
                />
                {/* Symptoms */}
                <div>
                    <input
                        type="checkbox"
                        id="symptoms"
                        name="symptoms"
                        checked={symptoms}
                        required
                        onChange={(e) => setSymptoms(e.target.value)}
                        style={{
                            padding: ".75rem",
                            marginLeft: ".5rem",
                            borderRadius: "5px",
                            outline: "none",
                            border: "none",
                        }}
                    />{" "}
                    <span>Symptoms Present</span>
                </div>
                {/* High Risk */}
                <div>
                    <input
                        type="checkbox"
                        id="highRisk"
                        name="highRisk"
                        checked={highRisk}
                        required
                        onChange={(e) => setHighRisk(e.target.value)}
                        style={{
                            padding: ".75rem",
                            marginLeft: ".5rem",
                            borderRadius: "5px",
                            outline: "none",
                            border: "none",
                        }}
                    />{" "}
                    <span>High Risk</span>
                </div>
                {/* Immuno */}
                <div>
                    <input
                        type="checkbox"
                        id="immuno"
                        name="immuno"
                        checked={immuno}
                        required
                        onChange={(e) => setImmuno(e.target.value)}
                        style={{
                            padding: ".75rem",
                            marginLeft: ".5rem",
                            borderRadius: "5px",
                            outline: "none",
                            border: "none",
                        }}
                    />
                    <span>Immunocompromised</span>
                </div>
                <br />
                <div>
                    <span>Created:</span>
                    <span style={{ fontWeight: "bold", paddingLeft: ".5rem" }}>
                        {createdAt.toDateString()}
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Submission;
