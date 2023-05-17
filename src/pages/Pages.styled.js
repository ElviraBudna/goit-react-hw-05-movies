import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  margin: 20px 0;

  font-size: 30px;
  text-align: center;
`;

export const MovieContainer = styled.div`
  padding: 0 24px;
  margin: 0 auto;
`;

export const MovieDetailsContainer = styled.div`
  padding: 0 20px;
`;

export const MovieDetailsText = styled.h3`
  margin: 30px 0 14px 0;
  font-size: 30px;
`;

export const MovieDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  ${'' /* padding-bottom: 20px */}
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

export const LinkStyled = styled(Link)`
  margin-top: 8px;
  text-decoration: none;
  font-style: normal;
  display: block;

  font-size: 20px;

  color: currentColor;
`;
