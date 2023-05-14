import ImageGalleryItem from './ImageGalleryItem';
import css from './ImageGallery.module.css';
const ImageGallery = () => {
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem></ImageGalleryItem>
    </ul>
  );
};

export default ImageGallery;
