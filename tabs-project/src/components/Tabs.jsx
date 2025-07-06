import React, { useState } from "react";

const TabsComponent = ({ tabs }) => {
    const [selectedTab, setSelectedTab] = useState(0);

    const onClickHandler = (index) => {
        setSelectedTab(index);
    };

    return (
        <div>
            <div>
                {tabs.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => onClickHandler(index)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            <div>
                {tabs[selectedTab].content}
            </div>
        </div>
    );
};

export default TabsComponent;