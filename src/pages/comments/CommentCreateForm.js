import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";

import styles from "../../styles/CommentCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

import UploadIcon from "../../assets/upload.png";


function CommentCreateForm(props) {
  const { post, setPost, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // form data for image upload (if an image is selected)
      const formData = new FormData();
      formData.append("content", content);
      formData.append("post", post);
      formData.append("image", image);
      formData.append("comment_image", image);
  

      const { data } = await axiosRes.post("/comments/", formData, {
        content,
        post,
        image,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count + 1,
          },
        ],
      }));
      setContent("");
      setImage(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <div className={`${styles.ImageContainer} ${styles.CommentImageContainer}`}>
            {image && (
              <Image className={styles.CommentImage} src={URL.createObjectURL(image)} rounded />
            )}
            <Form.Control
              className={styles.Form}
              placeholder="my comment..."
              as="textarea"
              value={content}
              onChange={handleChange}
              rows={2}
            />
          </div>
          <InputGroup.Append>
            <label htmlFor="comment-image-upload" className={styles.ImageUploadLabel}>
              <img src={UploadIcon} alt="Upload Icon" />
            </label>
            <input
              id="comment-image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className={styles.ImageUploadInput}
            />
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!content.trim()}
        type="submit"
      >
        post
      </button>
    </Form>
  );
}

export default CommentCreateForm;
