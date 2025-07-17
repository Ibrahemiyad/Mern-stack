import { Routes, Route } from 'react-router-dom';
import ListAuthor from './components/ListAuthor';
import CreateAuthor from './components/CreateAuthor';
import UpdateAuthor from './components/UpdateAuthor';
import AuthorForm from './components/AuthorForm';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<ListAuthor />} />
                <Route path="/authors/new" element={<CreateAuthor />} />
                <Route path="/authors/:id/edit" element={<UpdateAuthor />} />
            </Routes>
        </div>
    );
}

export default App;
