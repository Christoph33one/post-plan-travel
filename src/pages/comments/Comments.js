import React, { useState } from 'react';
import styles from "../../styles/Comment.module.css";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Avatar from '../../components/Avatar';
import { Media } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const Comments = (props) => {
  const { profile_id, profile_image, owner, updated_at, content } = props;
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className='align-self-center ml-2'>
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
        </Media.Body>
        <p>{content}</p>
        {image && (
          <div className={styles.ImageContainer}>
            <Image src={URL.createObjectURL(image)} alt="Comment Image" rounded />
          </div>
        )}
        <input type="file" onChange={handleImageUpload} />
      </Media>
    </div>
  );
};

export default Comments;
