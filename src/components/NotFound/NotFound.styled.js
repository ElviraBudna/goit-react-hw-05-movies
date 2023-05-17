import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NotFoundBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin-top: 50px;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 400;
  text-align: center;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  font-style: normal;

  font-size: 30px;

  color: blue;
`;
