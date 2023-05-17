import styled from '@emotion/styled';

export const SerchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 320px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin: 0 auto;
  ${'' /* padding-bottom: 20px; */}
  ${
    '' /* width: 250px;
  margin-top: 20px;
  position: relative;
  border-radius: 100px;
  padding: 10px 15px;

  background: #ffffff;

  > input {
    border: none;
    outline: none;
  } */
  }
`;
export const SerchButton = styled.button`
  display: inline-block;
  width: 68px;
  height: 30px;
  border: 0;
  border-radius: 4px;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
  ${
    '' /* border: none;
  position: absolute;
  right: 4px;
  cursor: pointer;
  background-color: transparent;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  } */
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 30px;
  font: inherit;
  font-size: 26px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  outline: none;
  padding: 0 8px 4px 8px;
  margin-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
