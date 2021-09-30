import styled from "@emotion/styled";

export const Header = styled.header`
  width: 100%;
  height: 50px;
  background-color: lightgrey;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  padding: 15px;
`;

export const Input = styled.input`
  width: 250px;
  height: 15px;
`;

export const Button = styled.button`
  &:hover,
  &:focus {
    background-color: white;
    cursor: pointer;
  }
`;
