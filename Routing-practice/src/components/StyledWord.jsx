import React from 'react';
import { useParams } from 'react-router-dom';

const StyledWord = () => {
    const { word, textColor, bgColor } = useParams();

    return (
        <h1
            style={{
                color: textColor,
                backgroundColor: bgColor,
                padding: '10px'
            }}
        >
            The word is: {word}
        </h1>
    );
};

export default StyledWord;
