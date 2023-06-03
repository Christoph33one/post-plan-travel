import React, { useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/CommentCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";

function CommentEditForm(props) {
  const { id, content, initialImage, setShowEditForm, setComments } = props;
  const [formContent, setFormContent] = useState(content);
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const imageFile = useRef(null);

  const handleContentChange = (event) => {
    setFormContent(event.target.value);
  };

  const handleImageChange = (event) => {
    if (event.target.files.length) {
      // console.log("Selected file:", event.target.files[0]);
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    }
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
      if (isSubmitted) {
        window.location.reload();
      }
    }, [isSubmitted]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("Save button pressed");
    // console.log("image:", image);
    const formData = new FormData();
    formData.append("content", formContent.trim());
    
    if (image) {
      // console.log("Before appending image", formData);
      formData.append("comment_image", image, image.name);
      // console.log("After appending image", formData);
    }
    
    try {
      // console.log("Submitting form data:", formData);
      await axiosRes.put(`/comments/${id}/`, formData);
      // console.log("Form submission successful!");
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) =>
          comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
                updated_at: "now",
                image: previewImage || initialImage,
              }
            : comment
        ),
      }));
      setIsSubmitted(true);
      setShowEditForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log("image", image);
  // console.log("previewImage", previewImage);
  // console.log("initialImage", initialImage);

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
        <div>
          <input
            id={`edit-image-${id}`}
            type="file"
            accept="image/*"
            className={styles.ImageUploadInput}
            ref={imageFile.current}
            onChange={handleImageChange}
          />
          <label htmlFor={`image${id}`} className={styles.ImageUploadLabel}>
            {!previewImage && !initialImage && <span>Please upload and image</span>}
            {previewImage || initialImage ? (
              <div className={styles.ImageContainer}>
                <img
                  src={previewImage || initialImage}
                  alt="Selected Image"
                  className={styles.CommentImage}
                />
              </div>
            ) : (
              <span>Upload Image</span>
            )}
            <div>
              <Form.Label
                className={`${btnStyles.Button} ${btnStyles.Blue} btn my-auto`}
                htmlFor={`edit-image-${id}`}
              >
                Change the image
              </Form.Label>
            </div>
          </label>
        </div>
      </Form.Group>
      <div className="text-right">
        <button
          className={styles.Button}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          Cancel
        </button>
        <button
          className={styles.Button}
          disabled={!formContent.trim() && !image}
          type="submit"
        >
          Save
        </button>
      </div>
    </Form>
  );
}

export default CommentEditForm;
