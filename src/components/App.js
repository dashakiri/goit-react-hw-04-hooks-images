import { Component } from "react";
import { ToastContainer } from "react-toastify";
import { SearchBar } from "./Searchbar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Modal } from "./Modal/Modal";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      largeImageURL: null,
      tags: "",
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.handleSelectedImage = this.handleSelectedImage.bind(this);
  }

  handleFormSubmit = (searchQuery) => {
    this.setState({ searchQuery });
  };

  handleSelectedImage = (largeImageURL, tags) => {
    this.setState({ largeImageURL, tags });
  };

  onModalClose = () => {
    this.setState({ largeImageURL: null });
  };

  render() {
    const { searchQuery, largeImageURL, tags } = this.state;
    return (
      <div>
        <SearchBar handleSubmittedForm={this.handleFormSubmit} />
        <ImageGallery
          searchQuery={searchQuery}
          handleSelectedImage={this.handleSelectedImage}
        />
        {largeImageURL !== null && (
          <Modal
            onModalClose={this.onModalClose}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        )}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
