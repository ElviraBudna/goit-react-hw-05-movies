import styled from '@emotion/styled';

export const CastList = styled.ul`
  ${
    '' /* display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px; */
  }
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  ${
    '' /* > li {
    display: flex;
    flex-direction: column;
    flex-basis: calc((100% - 8 * 10px) / 9);
    border-radius: 5px;
    overflow: hidden;
  } */
  }
`;

export const CastInfoBox = styled.div`
  display: flex;
  padding: 4px;
  flex-direction: column;
  gap: 5px;
  flex-grow: 1;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 5px -1px;
  background-color: rgba(218, 165, 32);
  color: #000;
  text-align: center;
  ${
    '' /* > h3 {
    font-size: 14px;
  } */
  }
  ${
    '' /* > p {
    text-decoration-line: overline;
    font-style: italic;
    font-size: 12px;
    opacity: 0.7;
  } */
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CastImg = styled.img`
  object-fit: cover;
  display: block;
  max-width: 100%;
  height: auto;
`;

export const Title = styled.h3`
  font-size: 20px;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
`;
