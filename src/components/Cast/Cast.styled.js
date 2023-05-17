import styled from '@emotion/styled';

// export const List = styled.ul`
//   margin: 0;
//   padding: 0;
//   list-style: none;
// `;

// export const List = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
//   margin-top: 0;
//   margin-bottom: 0;
//   padding: 0;
//   list-style: none;
//   margin-left: auto;
//   margin-right: auto;
// `;

export const List = styled.ul`
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

export const Text = styled.span`
  font-size: 20px;
  font-weight: 400;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
