import React from 'react';

const PersonCard = ({ firstName, lastName, age, haircolor }) => {
    return (
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {haircolor}</p>
        </div>
    );
};

export default PersonCard;
