import React, { useState } from 'react';

const fruits = [
    'Apple',
    'Banana',
    'Cherry',
    'peach'
];

export default function FruitForm() {
    const [selectedFruit, setSelectedFruit] = useState(fruits[0]);
    const [ isTasty, setIsTasty] = useState(false);

    function handleSubmited(event) {
        event.preventDefault();
        console.log('The ' + selectedFruit + ' is' + (isTasty ? '' : ' not') + ' tasty!');
    }
    return (
        <form onSubmit={handleSubmited}>
            <select value = {selectedFruit} onChange = {e => setSelectedFruit(e.target.value)}>
                {fruits.map( (fruit, idx) => (
                    <option key={idx} value={fruit}>
                        {fruit}
                    </option>
                ))}
            </select>
            <label>
                <input type="checkbox" checked = {isTasty} onChange = {e => setIsTasty(e.target.checked) } />
            </label>
            <button>Take a bite</button>
        </form>
    )

}

