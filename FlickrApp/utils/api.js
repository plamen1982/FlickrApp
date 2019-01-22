export const fetchImages = async () => {
  const response = await fetch("https://unsplash.it/list");
  const images = await response.json();

  return images;
};
