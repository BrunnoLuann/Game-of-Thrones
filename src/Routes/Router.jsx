import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CharacterList from "../components/CharacterList/CharacterList";
import CharacterDetails from "../components/CharacterDetails/CharacterDetails";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/characters/:id" element={<CharacterDetails />} />
            <Route path="/" element={<CharacterList />} />
        </Routes>
    );
};

export default AppRouter;

