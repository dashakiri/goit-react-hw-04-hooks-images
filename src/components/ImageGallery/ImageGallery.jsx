import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { GalleryList } from "../ImageGalleryItem/ImageGalleryItem.styled";

export default function ImageGallery ({images, handleSelectedImage}) {
  return (
    <GalleryList>
      {images.map(({ webformatURL, tags, largeImageURL }, index) => {
        return (
          <ImageGalleryItem
            key={index}
            webformatURL={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
            handleSelectedImage={handleSelectedImage}
          />
        );
      })}
    </GalleryList>
  )
}
