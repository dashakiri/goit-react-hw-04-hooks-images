export function FetchImages(searchQuery, page) {
  const KEY = "22675606-31d87174acbb5d82d82bc8eb4";
  return fetch(
    `https://pixabay.com/api/?key=${KEY}&q=${searchQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=20`
  ).then((response) => {
    return response.json();
  });
}
