import React from "react"

import style from "./ImageGalleryItem.module.css"

export const ImageGalleryItem = (props) => {
 
  const { picture, onClick } = props;
 
  const { id, previewURL, tags } = picture;
  return (
    <li key={id} className={style.ImageGalleryItem }>
      <img className={style.ImageGalleryItemImage}
        src={previewURL}
        alt={tags}
        id={id}
        onClick={()=> onClick(props.picture)}
      />
    </li>
  )
}

