import React from "react"

import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

import style from "./ImageGallery.module.css"

export const ImageGallery = ({pictures}) => {
  console.log("in imagegallery", pictures)
  return (
    <ul className={style.ImageGallery}>
      {pictures.map(picture => <ImageGalleryItem key={ picture.id} picture={picture} /> )}
    </ul>
  )
}
