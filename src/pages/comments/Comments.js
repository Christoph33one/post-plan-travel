import React, { useState } from 'react';
import styles from "../../styles/Comment.module.css";
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import { Media } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const Comment = (props) => {
  const { profile_id, profile_image, owner, updated_at, content, image } = props;

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
            <Image src={image} alt="Comment Image" rounded />
          </div>
        )}
      </Media>
    </div>
  );
};

export default Comment;
