import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/CommentCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";

function CommentEditForm(props) {
  const { id, content, initialImage, setShowEditForm, setComments } = props;
  const [formContent, setFormContent] = useState(content);
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const imageFile = useRef();

  const handleContentChange = (event) => {
    setFormContent(event.target.value);
  };

  // Handle image change event, update state with selected file and preview.
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("content", formContent.trim());
    formData.append("image", imageFile.current.files[0])
    
    if (imageFile.current?.files[0]) {
      formData.append("image", imageFile.current.files[0]);
    }
    try {
      await axiosRes.put(`/comments/${id}/`, formData);
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) =>
          comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
                updated_at: "now",
              }
            : comment
        ),
      }));
      setShowEditForm(false);
    } catch (err) {
      console.log(err);
    }
  };
  

  console.log("Preview Image:", previewImage);
  console.log("Image:", image);
  console.log("Initial Image:", initialImage);

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
        <div>
          <input
            id={`edit-image-${id}`}
            type="file"
            accept="image/*"

            className={styles.ImageUploadInput}
            ref={imageFile}
            onChange={(e) => {
              if (e.target.files.length) {
                setPreviewImage(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />
          <label htmlFor={`image${id}`} className={styles.ImageUploadLabel}>
            {!previewImage && !initialImage && <span>Upload Image</span>}
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
