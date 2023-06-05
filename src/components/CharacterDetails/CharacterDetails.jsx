import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
    CharacterDetailsContainer,
    CharacterName,
    CharacterInfo,
    CharacterImage,
    ShareButtonContainer,
    ShareButton,
    CharacterTitle,

} from './CharacterDetailsStyled';

const CharacterDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        axios
            .get(`https://thronesapi.com/api/v2/Characters/${id}`)
            .then(response => {
                setCharacter(response.data);
            })
            .catch(error => {
                console.error('Error fetching character details:', error);
            });
    }, [id]);

    const handleShareTwitter = () => {
        const tweetText = `Confira os detalhes de ${character.fullName} em Game of Thrones: ${window.location.href}`;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
        window.open(twitterUrl, '_blank');
    };

    const handleShareWhatsApp = () => {
        const text = `Confira os detalhes de ${character.fullName} em Game of Thrones: ${window.location.href}`;
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleShareFacebook = () => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            window.location.href
        )}`;
        window.open(facebookUrl, '_blank');
    };

    const handleShareLinkedIn = () => {
        const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
            window.location.href
        )}&title=${encodeURIComponent(character.fullName)}`;
        window.open(linkedInUrl, '_blank');
    };

    if (!character) {
        return <div>Loading...</div>;
    }

    return (
        <CharacterDetailsContainer>
            <CharacterTitle>Detalhes do Personagem</CharacterTitle>
            <CharacterImage src={character.imageUrl} alt={character.fullName} />
            <CharacterName>{character.fullName}</CharacterName>
            <CharacterInfo>First Name: {character.firstName}</CharacterInfo>
            <CharacterInfo>Last Name: {character.lastName}</CharacterInfo>
            <CharacterInfo>Title: {character.title}</CharacterInfo>
            <CharacterInfo>Family: {character.family}</CharacterInfo>

            {<ShareButtonContainer>
                <ShareButton onClick={handleShareTwitter}>Compartilhar no Twitter</ShareButton>
                <ShareButton onClick={handleShareWhatsApp}>Compartilhar no WhatsApp</ShareButton>
                <ShareButton onClick={handleShareFacebook}>Compartilhar no Facebook</ShareButton>
                <ShareButton onClick={handleShareLinkedIn}>Compartilhar no LinkedIn</ShareButton>
            </ShareButtonContainer>}
        </CharacterDetailsContainer>
    );
};

export default CharacterDetails;

