import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import styles from "../../styles/CommentCreateEditForm.module.css";
import UploadIcon from "../../assets/upload.png";
import { axiosReq } from "../../api/axiosDefaults";

function CommentEditForm(props) {
  const { id, content, image, setShowEditForm, setComments } = props;
  const [formContent, setFormContent] = useState(content);
  const [formImage, setFormImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(image);

  const handleContentChange = (event) => {
    setFormContent(event.target.value);
  };
 
  // Handle image change event, update state with selected file and preview.
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log()
    setFormImage(selectedFile);
    setPreviewImage(URL.createObjectURL(event.target.files[0]));
  };



  // const handleImageChange = (event) => {
  //   const selectedFile = event.target.files[0];
  //   if (event.target.files.length) {
  //     URL.revokeObjectURL(image);
  //     setFormImage({
  //       ...formImage,
  //       image: URL.createObjectURL(event.target.files[0]),
  //     });
  //   }
  // };
  
  // Handle form submission, create FormData and append content and image.
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("content", formContent);
    formData.append("image", formImage);
    
    if (formImage) {
      formData.append("image", formImage);
    }

    try {
      await axiosReq.put(`/comments/${id}/`, {
        content: formContent.trim(),
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
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
          onChange={handleContentChange}
          rows={2}
        />
      </Form.Group>
      <Form.Group className="pr-1">
        <h5>Please click the image to upload</h5>
        <div className={styles.ImageUploadContainer}>
          <input
            id={`edit-image-${id}`}
            type="file"
            accept="image/*"
            className={styles.ImageUploadInput}
            onChange={handleImageChange}
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
