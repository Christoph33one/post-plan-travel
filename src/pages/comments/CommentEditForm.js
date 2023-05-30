import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/CommentCreateEditForm.module.css";
import UploadIcon from "../../assets/upload.png";

function CommentEditForm(props) {
  const { id, content, image, setShowEditForm, setComments } = props;

  const [formContent, setFormContent] = useState(content);
  const [formImage, setFormImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(image);

  useEffect(() => {
    if (image) {
      setPreviewImage(image);
    }
  }, [image]);

  const handleChangeContent = (event) => {
    setFormContent(event.target.value);
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(previewImage);
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("content", formContent.trim());
      if (formImage) {
        formData.append("image", formImage);
      }

      await axiosRes.put(`/comments/${id}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
                image: previewImage,
                updated_at: "now",
              }
            : comment;
        }),
      }));

      setShowEditForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={formContent}
          onChange={handleChangeContent}
          rows={2}
        />
      </Form.Group>

      <Form.Group className="pr-1">
     
        <div className={styles.ImageUploadContainer}>
        <strong>Please click the image to upload</strong>
          <input
            id={`edit-image-${id}`}
            type="file"
            accept="image/*"
            className={styles.ImageUploadInput}
            onChange={handleChangeImage}
          />
          <label
            htmlFor={`edit-image-${id}`}
            className={styles.ImageUploadLabel}
          >
            {!previewImage && <img src={UploadIcon} alt="Upload Icon" />}
            {previewImage && (
              <div className={styles.ImageContainer}>
                <img
                  src={previewImage}
                  alt="Selected Image"
                  className={styles.CommentImage}
                />
              </div>
            )}
          </label>
        </div>
      </Form.Group>
      <div className="text-right">
        <button
          className={styles.Button}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          cancel
        </button>
        <button
          className={styles.Button}
          disabled={!formContent.trim() && !formImage}
          type="submit"
        >
          save
        </button>
      </div>
    </Form>
  );
}

export default CommentEditForm;