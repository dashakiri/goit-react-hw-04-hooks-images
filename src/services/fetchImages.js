const axios = require("axios");

axios.defaults.baseURL = "https://pixabay.com";
axios.defaults.params = {
  key: "22675606-31d87174acbb5d82d82bc8eb4",
  image_type: "photo",
  orientation: "horizontal",
  per_page: 20,
};

export async function fetchImages(searchQuery, page) {
  try {
    const { data } = await axios(`/api/?q=${searchQuery}&page=${page}`);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
