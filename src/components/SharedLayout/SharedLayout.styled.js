import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  border-bottom: 1px solid #ececec;
  padding: 0 24px;
  ${
    '' /* height: 160px;
  padding: 15px 0;
  border-radius: 10px;

  background-color: gray;

  > nav {
    padding: 10px;
  } */
  }
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
  ${
    '' /* padding: 14px 32px;
  border-radius: 4px;

  color: #483d8b;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;

  &.active {
    color: white;
    background-color: #483d8b;
    box-shadow: 0px 0px 7px rgba(27, 27, 27, 0.15);
    border-radius: 100px;
  } */
  }
`;
