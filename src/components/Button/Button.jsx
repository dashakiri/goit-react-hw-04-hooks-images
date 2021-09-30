import { ButtonLoadMore } from "./LoadMoreButton.styled";

export function LoadMoreButton({ onClick }) {
  return (
    <ButtonLoadMore type="button" onClick={onClick}>
      Load more
    </ButtonLoadMore>
  );
}
