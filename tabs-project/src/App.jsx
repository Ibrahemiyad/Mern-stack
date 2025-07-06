import React from 'react';
import Tabs from './components/Tabs';
function App() {
  const tabsData = [
    { label: 'Tab 1', content: 'Welcome to the homepage!' },
    { label: 'Tab 2', content: 'This is your profile.', onClick: () => console.log('Profile tab opened') },
    { label: 'Tab 3', content: 'Adjust your preferences here.' }
  ];

  return (
    <div className="App">
      <Tabs tabs={tabsData} />
    </div>
  );
}

export default App;
