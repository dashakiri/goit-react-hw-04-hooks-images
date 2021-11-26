import { useState, useEffect } from "react";
import { SearchBar } from "./Searchbar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { fetchImages } from "../services/fetchImages";
import Modal from "./Modal/Modal";
import { LoadMoreButton } from "../components/Button/Button";
import { ContentLoader } from "../components/Loader/Loader";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [largeImageURL, setLargeImageURL] = useState(null);
  const [tags, setTags] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    fetchImages(searchQuery, page).then(({ totalHits, hits }) => {
      if (searchQuery.trim() === "") {
        return;
      }

      if (totalHits === 0) {
        setStatus("rejected");
        return;
      }

      if (page === 1) {
        setImages(hits);
        setStatus("resolved");
      }

      if (page > 1) {
        setImages((prevState) => [...prevState, ...hits]);
        setStatus("resolved");
        onScroll();
      }
    });
  }, [searchQuery, page]);

  const onScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleLoadMoreBtnClick = (e) => {
    e.preventDefault();
    setPage((prevState) => prevState + 1);
  };

  const handleFormSubmit = (searchQuery) => {
    setSearchQuery(searchQuery);
    setImages([]);
    setStatus("pending");
  };

  const handleSelectedImage = (largeImageURL, tags) => {
    setLargeImageURL(largeImageURL);
    setTags(tags);
  };

  const onModalClose = () => {
    setLargeImageURL(null);
  };

  return (
    <div>
      <SearchBar handleSubmittedForm={handleFormSubmit} />

      {status === "idle" && <p>Пожалуйста, введите поисковый запрос.</p>}

      {status === "pending" && <ContentLoader />}

      {status === "resolved" && (
        <div>
          <ImageGallery
            images={images}
            handleSelectedImage={handleSelectedImage}
          />
          <LoadMoreButton onClick={handleLoadMoreBtnClick} />
        </div>
      )}

      {status === "rejected" && (
        <p>Изображения с именем {searchQuery} не найдены!</p>
      )}

      {largeImageURL && (
        <Modal
          onModalClose={onModalClose}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      )}
    </div>
  );
}
