import React from "react"

export const ImageGalleryItem = ({picture}) => {
  const { id, previewURL, tags } = picture;
  return (
          <li key={id} className="gallery-item">
            <img src={previewURL} alt={tags} />
          </li>
        )
}

