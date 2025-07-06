import React, { useState } from 'react';

const BoxGenerator = () => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState(100); 
    const [boxes, setBoxes] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBox = { color, size };
        setBoxes([...boxes, newBox]);
        setColor("");
        setSize(100);
    };

    return (
        <div style={{ padding: "20px" }}>
            <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Enter color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    style={{ marginRight: "10px" }}
                />
                <input
                    type="number"
                    placeholder="Size (px)"
                    value={size}
                    onChange={(e) => setSize(Number(e.target.value))}
                    style={{ marginRight: "10px", width: "80px" }}
                />
                <button type="submit">Add Box</button>
            </form>

            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px"
            }}>
                {boxes.map((box, i) => (
                    <div
                        key={i}
                        style={{
                            backgroundColor: box.color,
                            width: `${box.size}px`,
                            height: `${box.size}px`,
                            border: "1px solid #333"
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default BoxGenerator;
