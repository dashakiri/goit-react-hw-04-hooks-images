import styled from "@emotion/styled";

export const GalleryList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 300px;
  height: 200px;
  margin: 5px;
  object-fit: cover;

  &:hover,
  &:focus {
    // border: 1px solid lightgrey;
    cursor: pointer;
  }
`;

export const Image = styled.img`
  display: inline-block;
  object-fit: cover;
`;
