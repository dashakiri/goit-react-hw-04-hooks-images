import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
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
    fetchImages(searchQuery, page).then((data) => {
      if (searchQuery.trim() === "") {
        return;
      }

      if (data.totalHits === 0) {
        setStatus("rejected");
      }
      if (page === 1) {
        setImages(data.hits);
        setStatus("resolved");
      }

      if (page > 1) {
        onScroll();
        setImages((prevState) => [...prevState, ...data.hits]);
        setStatus("resolved");
      }
    });
  }, [searchQuery, page]);

  function onScroll() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  const handleLoadMoreBtnClick = (e) => {
    e.preventDefault();
    setPage((prevState) => prevState + 1);
  };

  const handleFormSubmit = (searchQuery) => {
    setSearchQuery(searchQuery);
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
        <>
          <ImageGallery
            images={images}
            handleSelectedImage={handleSelectedImage}
          />
          <LoadMoreButton onClick={handleLoadMoreBtnClick} />
        </>
      )}

      {status === "rejected" &&
        toast.error(
          `Изображения с именем ${this.props.searchQuery} не найдены!`
        )}

      {largeImageURL && (
        <Modal
          onModalClose={onModalClose}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      )}

      <ToastContainer />
    </div>
  );
}
