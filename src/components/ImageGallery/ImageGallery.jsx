import React from "react"

import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({pictures}) => {
  console.log("in imagegallery", pictures)
  return (
    <ul className="gallery">
      {pictures.map(picture => <ImageGalleryItem key={ picture.id} picture={picture} /> )}
    </ul>
  )
}
