import React, { useState } from 'react';
const PersonCard = ({ firstName, lastName, age, haircolor }) => {
    const [currentAge, setCurrentAge] = useState(age);
    return (
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {currentAge}</p>
            <p>Hair Color: {haircolor}</p>
            <button onClick={ ()=> setCurrentAge(currentAge+1) }>Click Me</button>
        </div>
    );
};
export default PersonCard;