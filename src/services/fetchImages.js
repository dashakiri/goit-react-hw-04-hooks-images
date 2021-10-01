const axios = require("axios");

export async function fetchImages(searchQuery, page) {
  const KEY = "22675606-31d87174acbb5d82d82bc8eb4";

  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${KEY}&q=${searchQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=20`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
