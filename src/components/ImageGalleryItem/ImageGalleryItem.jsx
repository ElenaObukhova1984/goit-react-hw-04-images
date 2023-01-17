import React, { Component } from "react";
import { ImageItem, ImageImg } from './ImageGalleryItem.styled';
import Modal from "components/Modal";


class ImageGalleryItem extends Component {
    state = ({
        showModal:false,
    })

    toggleModal = () => {
    this.setState(({ showModal }) => ({
    showModal: !showModal,
    }));
    };

    
    render() {
        return (
        <>
                <ImageItem>
                    <ImageImg
                        onClick={this.toggleModal}
                        src={this.props.src}
                        alt="image"
                        
                    />
                </ImageItem>
                {this.state.showModal && (
                <Modal onClose={this.toggleModal} src={this.props.modalSrc} />
)}

        
        </>
        )
    };
}
   

export default ImageGalleryItem;

