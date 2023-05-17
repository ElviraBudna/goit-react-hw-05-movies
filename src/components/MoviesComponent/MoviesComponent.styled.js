import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
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

export const LinkStyled = styled(Link)`
  text-decoration: none;
  font-style: normal;
  display: block;

  font-size: 20px;

  color: currentColor;
`;

export const Item = styled.li`
  height: 100%;
`;

export const Img = styled.img`
  max-width: 100%;
  height: 100%;
  min-height: 440px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 16px;

  &:hover {
    transform: scale(1.03);
  }
`;
