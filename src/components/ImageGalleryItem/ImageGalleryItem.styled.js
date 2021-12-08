import styled from "@emotion/styled";

export const GalleryList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  width: 1000px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    width: 700px;
  }

  @media (max-width: 479px) {
    width: 320px;
  }
`;

export const ListItem = styled.li`
  width: 300px;
  height: 200px;
  margin: 5px;
  object-fit: cover;

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  display: inline-block;
  object-fit: cover;
`;
