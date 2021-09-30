import { Component } from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { ContentLoader } from "../Loader/Loader";
import { FetchImages } from "../../services/FetchImages/FetchImages";
import { LoadMoreButton } from "../Button/Button";
import { GalleryList } from "../ImageGalleryItem/ImageGalleryItem.styled";
import { toast } from "react-toastify";

export class ImageGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      page: 1,
      status: "idle",
    };

    this.handleLoadMoreBtnClick = this.handleLoadMoreBtnClick.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const currentQuery = this.props.searchQuery;
    const prevQuery = prevProps.searchQuery;
    const prevPage = prevState.page;
    const currentPage = this.state.page;
    const { page } = this.state;

    if (currentQuery !== prevQuery || prevPage !== currentPage) {
      FetchImages(currentQuery, page).then((data) => {
        if (data.totalHits === 0) {
          return this.setState({ status: "rejected" });
        }

        if (page === 1) {
          return this.setState({ images: data.hits, status: "resolved" });
        }

        if (page > 1) {
          this.onScroll();
          return this.setState((prevState) => ({
            images: [...prevState.images, ...data.hits],
            status: "resolved",
          }));
        }
      });
    }
  }

  onScroll() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  handleLoadMoreBtnClick = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({ page: prevState.page + 1 }));
    return;
  };

  render() {
    const { status, images } = this.state;

    if (status === "idle") {
      return <p>Пожалуйста, введите поисковый запрос.</p>;
    }

    if (status === "pending") {
      return <ContentLoader />;
    }

    if (status === "resolved") {
      return (
        <GalleryList>
          {images.map(({ id, webformatURL, tags, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                tags={tags}
                largeImageURL={largeImageURL}
                handleSelectedImage={this.props.handleSelectedImage}
              />
            );
          })}

          <LoadMoreButton onClick={this.handleLoadMoreBtnClick} />
        </GalleryList>
      );
    }

    if (status === "rejected") {
      return toast.error(
        `Изображения с именем ${this.props.searchQuery} не найдены!`
      );
    }
  }
}
