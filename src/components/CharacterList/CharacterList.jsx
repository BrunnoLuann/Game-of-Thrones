import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CharacterListContainer, CharacterCard, CharacterImage } from './CharacterListStyled';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('https://thronesapi.com/api/v2/Characters')
            .then(response => {
                setCharacters(response.data);
            })
            .catch(error => {
                console.error('Error fetching characters:', error);
            });
    }, []);

    return (
        <CharacterListContainer>
            <h1>Game of Thrones Personagens</h1>
            <div>
                {characters.map(character => (
                    <Link key={character.id} to={`/characters/${character.id}`}>
                        <CharacterCard>
                            <CharacterImage src={character.imageUrl} alt={character.fullName} />
                            <p>{character.fullName}</p>
                        </CharacterCard>
                    </Link>
                ))}
            </div>
        </CharacterListContainer>
    );
}

export default CharacterList;
