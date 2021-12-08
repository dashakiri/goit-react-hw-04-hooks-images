import styled from "@emotion/styled";

export const ButtonLoadMore = styled.button`
  margin-left: auto;
  margin-right: auto;
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;

  border: 0;
  border-radius: 2px;
  background-color: lightgrey;

  color: graphit;
  text-decoration: none;
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;

  cursor: pointer;

  &:hover,
  &:focus {
    border: 1px solid white;
  }
`;
