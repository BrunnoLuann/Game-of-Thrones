import styled from 'styled-components';

export const CharacterDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0px;
  background-color: #f5f5f5;
  height: 100vh;

  @media (max-width: 768px) {
    padding: 10px;
    margin: 20px;
    align-items: center;
  }
`;
export const CharacterTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 58px;
  color: #101010;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const CharacterName = styled.h2`
  margin-bottom: 20px;
  font-size: 28px;
  color: #0d0d0d;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const CharacterInfo = styled.p`
  margin-bottom: 10px;
  font-size: 25px;
  color: #121010;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 5px;
  }
`;


export const CharacterImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const ShareButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
`;

export const ShareButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;
