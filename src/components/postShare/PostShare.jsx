import React, { useRef, useState } from 'react'
import ProfileImage from '../../img/profileImgs.jpg'
import './PostShare.css'
import IconButton from '@mui/material/IconButton';
import ImageIcon from '@mui/icons-material/Image';
import { AddLocation, CalendarMonth, PlayCircle } from '@mui/icons-material';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

function PostShare() {

  // setting and using the image file state to post
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  // capture the event on change, check for files, fist assign the file to a variable and then use to set the image state
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img)
      });
    }

  }

  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" className="text" placeholder='Wetyn dey Sup?' />
        <div className="PostOptions">
          <div className="option" style={{ color: "var(--photo)" }} onClick={() => imageRef.current.click()}>
            <IconButton aria-label="imageIcon" style={{ color: "var(--photo)" }}>
              <ImageIcon />
            </IconButton>
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <IconButton aria-label="imageIcon" style={{ color: "var(--video)" }}>
              <PlayCircle />
            </IconButton>
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <IconButton aria-label="imageIcon" style={{ color: "var(--location)" }}>
              <AddLocation />
            </IconButton>
            Location
          </div>
          <div className="option" style={{ color: "var(--schedule)" }}>
            <IconButton aria-label="imageIcon" style={{ color: "var(--schedule)" }}>
              <CalendarMonth />
            </IconButton>
            Schedule
          </div>
          <Button variant="contained" size="small">
            Share
          </Button>
          <div style={{ display: "none" }}>
            <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <CloseIcon onClick={() => setImage(null)} />
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  )
}

export default PostShare