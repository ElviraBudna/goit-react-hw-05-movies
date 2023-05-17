import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

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

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Header = styled.header`
  border-bottom: 1px solid #ececec;
  padding: 0 24px;
`;

export const Container = styled.div`
  ${
    '' /* display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px; */
  }
  padding-bottom: 24px;
  ${
    '' /* margin-left: auto;
  margin-right: auto; */
  }
`;
