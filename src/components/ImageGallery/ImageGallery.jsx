import React from "react"

import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

import style from "./ImageGallery.module.css"

export const ImageGallery = ({pictures, onClick}) => {
  // console.log("in imagegallery", pictures)
  // console.log("in imagegallery", onClick)
  return (
    <ul className={style.ImageGallery}>
      {pictures.map(picture => <ImageGalleryItem key={ picture.id} picture={picture} onClick={onClick} /> )}
    </ul>
  )
}
