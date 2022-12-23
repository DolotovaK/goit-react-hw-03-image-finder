
export const ImageGalleryItem = ({ picture: { webformatURL, largeImageURL }, onSelectedPicture }) => {
    return (
        <img src={webformatURL} className='' alt='' onClick={() => { onSelectedPicture(largeImageURL) }} />
    );
}


{/* <li class="gallery-item">
  <img src="" alt="" />
</li> */}