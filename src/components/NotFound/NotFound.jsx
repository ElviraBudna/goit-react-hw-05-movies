// import BackLink from 'components/BackLink/BackLink';
import { NotFoundBox, LinkStyled, Title } from './NotFound.styled';

const NotFound = () => {
  return (
    <>
      {/* <BackLink /> */}
      <NotFoundBox>
        <Title>
          Not found this page! Turn to <LinkStyled to="/">Home</LinkStyled>
        </Title>
      </NotFoundBox>
    </>
  );
};

export default NotFound;
