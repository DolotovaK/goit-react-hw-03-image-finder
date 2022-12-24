import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ picture: { webformatURL, largeImageURL }, onSelectedPicture }) => {
    return (
        <img src={webformatURL} className={css.picture} alt='' onClick={() => { onSelectedPicture(largeImageURL) }} />
    );
}


{/* <li class="gallery-item">
  <img src="" alt="" />
</li> */}