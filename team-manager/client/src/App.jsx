import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PlayerList from './components/PlayerList';
import CreatePlayer from './components/CreatePlayer';
import UpdatePlayer from './components/UpdatePlayer';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<PlayerList />} />
            <Route path="/teams/new" element={<CreatePlayer />} />
            <Route path="/teams/:id/edit" element={<UpdatePlayer />} />
        </Routes>
    );
};

export default App;
