import  { useState } from "react";
import { ImageItem, ImageImg } from './ImageGalleryItem.styled';
import Modal from "components/Modal";


const ImageGalleryItem =({src,modalSrc}) =>{
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
    setShowModal(prevState =>prevState);
    };
    
    return (
        <>
                <ImageItem>
                    <ImageImg
                        onClick={toggleModal}
                        src={src}
                        alt="image"
                        />
                </ImageItem>
                {showModal && (
                <Modal onClose={toggleModal} src={modalSrc} />
                )}
        </>
        )
    };

   
export default ImageGalleryItem;

// class ImageGalleryItem extends Component {
//     state = ({
//         showModal:false,
//     })

//     toggleModal = () => {
//     this.setState(({ showModal }) => ({
//     showModal: !showModal,
//     }));
//     };

    
//     render() {
//         return (
//         <>
//                 <ImageItem>
//                     <ImageImg
//                         onClick={this.toggleModal}
//                         src={this.props.src}
//                         alt="image"
                        
//                     />
//                 </ImageItem>
//                 {this.state.showModal && (
//                 <Modal onClose={this.toggleModal} src={this.props.modalSrc} />
// )}

        
//         </>
//         )
//     };
// }
   

// export default ImageGalleryItem;
