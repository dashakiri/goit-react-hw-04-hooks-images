import { ListItem } from "./ImageGalleryItem.styled";

export function ImageGalleryItem({
  webformatURL,
  tags,
  handleSelectedImage,
  largeImageURL,
}) {
  return (
    <ListItem onClick={() => handleSelectedImage(largeImageURL, tags)}>
      <img src={webformatURL} alt={tags} width="300" height="200" />
    </ListItem>
  );
}
