import styled from 'styled-components';

export const CharacterListContainer = styled.div`
  text-align: center;
`;

export const CharacterCard = styled.div`
  display: inline-block;
  text-align: center;
  margin: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 10px auto;
  }
`;

export const CharacterImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;
export const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

export const FilterLabel = styled.label`
  margin-right: 10px;
`;

export const FilterSelect = styled.select`
  padding: 5px;
`;