import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ListOfMovies = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 16px;

  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 12px;
`;

export const Item = styled.li`
  height: 100%;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  font-style: normal;
  display: block;

  font-size: 20px;

  color: currentColor;
`;

export const ItemBox = styled.div`
  position: relative;
  padding: 10px;
  display: flex;
  gap: 4px;
  align-items: stretch;
  flex-direction: column;
`;

export const TitleMovie = styled.h2`
  margin-top: 15px;
  font-size: 19px;
  text-align: center;
`;
