import React from "react"

import style from "./ImageGalleryItem.module.css"

export const ImageGalleryItem = ({picture}) => {
  const { id, previewURL, tags } = picture;
  return (
    <li key={id} className={style.ImageGalleryItem }>
            <img className={style.ImageGalleryItemImage} src={previewURL} alt={tags} />
    </li>
  )
}

