import ImageGalleryItem from "components/ImageGalleryItem";
import { ImageList } from "./ImageGallery.styled";

const ImageGallery = ({ images}) => {
    return (
        <ImageList>
        {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
        key={id}
        src={webformatURL}
        modalSrc={largeImageURL}
        />
        ))}

        </ImageList>
    )
}

export default ImageGallery;