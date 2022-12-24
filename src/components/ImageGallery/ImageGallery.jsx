import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import css from './ImageGallery.module.css'

export const ImageGallery = ({ pictures, onSelectedPicture }) => {
    return (
        <>
            {pictures.length > 0 && <ul className={css.gallery}>
                {pictures.map(picture => {
                    return (
                        <li key={picture.id} className={css.item}>
                            <ImageGalleryItem picture={picture} onSelectedPicture={onSelectedPicture} />
                            
                        </li>
                    );
                })}
            </ul>}
        </>
    );
}



{/* <ul class="gallery">
  <!-- Набір <li> із зображеннями -->
</ul> */}