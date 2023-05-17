import { Title, MessageContainer, LinkStyled } from './NotFound.styled';

export default function NotFound() {
  return (
    <MessageContainer>
      <Title>
        Not found this page! Turn to <LinkStyled to="/">Home</LinkStyled>
      </Title>
    </MessageContainer>
  );
}
