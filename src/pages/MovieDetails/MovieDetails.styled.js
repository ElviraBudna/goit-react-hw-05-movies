import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CastList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 50px;
`;
export const AdditionalInfoLink = styled(Link)`
  padding: 14px 32px;
  border-radius: 4px;

  color: inherit;
  font-weight: 500;
  font-size: 20px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;

  &.active {
    background-color: #ffd700;
    box-shadow: 0px 0px 7px rgba(27, 27, 27, 0.15);
    border-radius: 100px;
  }
`;
