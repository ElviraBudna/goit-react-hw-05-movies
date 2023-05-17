import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MessageContainer = styled.div`
  margin: 0 auto;
  padding: 20px 0;
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
