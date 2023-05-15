import css from './ImageGallery.module.css';
const ImageGalleryItem = ({ webformatURL, onClick, tags }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img src={webformatURL} alt={tags} onClick={onClick} />
    </li>
  );
};

export default ImageGalleryItem;
