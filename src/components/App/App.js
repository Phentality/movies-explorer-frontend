import React from 'react';
import Main from '../Main/Main';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
