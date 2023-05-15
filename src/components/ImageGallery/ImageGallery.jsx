import ImageGalleryItem from './ImageGalleryItem';
import css from './ImageGallery.module.css';
const ImageGallery = ({ images, handleClick }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          onClick={() => {
            handleClick(largeImageURL);
          }}
        ></ImageGalleryItem>
      ))}
    </ul>
  );
};

export default ImageGallery;
