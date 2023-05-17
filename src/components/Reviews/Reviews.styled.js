import styled from '@emotion/styled';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;

  > li {
    padding: 15px;
    display: flex;
    gap: 10px;
    border-bottom: 1px solid black;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 5px -1px;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    border-radius: 5px;
    > div {
      display: flex;
      align-items: center;
      gap: 10px;
      > img {
        border-radius: 50%;
      }
    }
    ${
      '' /* > p {
      cursor: pointer;
      text-overflow: ellipsis;
    } */
    }
  }
`;

export const Title = styled.h3`
  margin-bottom: 8px;
  font-size: 20px;
`;

export const Text = styled.p`
  font-size: 20px;
  cursor: pointer;
`;

export const ErrorMessege = styled.p`
  font-size: 36px;
  text-align: center;
  padding: 20px;
  font-weight: 800;
`;
