import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link, Nav, Header, Container } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <Container>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
