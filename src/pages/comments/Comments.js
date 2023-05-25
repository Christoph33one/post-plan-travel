import React, { useState } from 'react';
import styles from "../../styles/Comment.module.css";
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import { Media } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { MoreDropdown } from '../../components/MoreDropdown';
import { axiosReq } from '../../api/axiosDefaults';

const Comment = (props) => {
  const { 
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    image,
    id,
    setPost,
    setComments,
   }
     = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
 
  const handleDelete = async () => {
    try {
      await axiosReq.delete(`/comments/${id}/`)
      setPost(prevPost => ({
        results: [{
          ...prevPost.results[0],
          comments_count: prevPost.results[0].comments_count - 1
        }]
      }))

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {}
  };

  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        {is_owner && (
        <MoreDropdown handleEdit={() => {}} handleDelete={handleDelete} />
        )}
        <Media.Body className='align-self-center ml-2'>
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
        </Media.Body>
        
        <p>{content}</p>
        {image && (
          <div className={styles.ImageContainer}>
            <Image src={image} alt="Comment Image" rounded />
            <Image className={styles.CommentImage} src={image} alt="Comment Image" rounded />
          </div>
        )}
      </Media>
    </div>
  );
};
export default Comment;