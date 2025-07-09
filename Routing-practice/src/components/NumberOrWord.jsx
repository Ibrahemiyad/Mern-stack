import React from 'react';
import { useParams } from 'react-router-dom';

const NumberOrWord = () => {
    const { value } = useParams();

    return (
        <div>
            {isNaN(+value) ? (
                <h1>The word is: {value}</h1>
            ) : (
                <h1>The number is: {value}</h1>
            )}
        </div>
    );
};

export default NumberOrWord;
