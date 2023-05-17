import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  border-bottom: 1px solid #ececec;
  padding: 0 24px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  padding: 16px 0;

  text-decoration: none;
  font-style: normal;

  font-size: 28px;

  color: currentColor;

  :active {
    color: green;
  }
`;
