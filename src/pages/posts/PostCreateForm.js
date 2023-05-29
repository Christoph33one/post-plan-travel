import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import Asset from "../../components/Asset";
import Upload from "../../assets/upload.png";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import HeroImageComponent from "../../components/HeroImage";
import { useRedirect } from "../../hooks/useRedirect";

function PostCreateForm() {
  useRedirect('loggedOut');
  const [errors, setErrors] = useState({});
  
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    location: "",
    caption: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
  });
  const { 
    title, 
    description, 
    location,
    caption, 
    image1,
    image2,
    image3, 
    image4,
    image5,
    image6,
  } = postData;

  const imageInput = useRef(null);
  const imageInput2 = useRef(null);
  const imageInput3 = useRef(null);
  const imageInput4 = useRef(null);
  const imageInput5 = useRef(null);
  const imageInput6 = useRef(null);
  const history = useHistory();
  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      const imageIndex =
        event.target.name === "image1"
          ? 1
          : event.target.name === "image2"
          ? 2
          : event.target.name === "image3"
          ? 3
          : event.target.name === "image4"
          ? 4
          : event.target.name === "image5"
          ? 5
          : event.target.name === "image6"
          ? 6
          : null;
  
      if (imageIndex) {
        const selectedImage = URL.createObjectURL(event.target.files[0]);
  
        setPostData((prevState) => ({
          ...prevState,
          [`image${imageIndex}`]: selectedImage,
        }));
      }
    }
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("caption", caption);
    formData.append("image1", imageInput.current.files[0]);
    formData.append("image2", imageInput2.current.files[0]);
    formData.append("image3", imageInput3.current.files[0]);
    formData.append("image4", imageInput4.current.files[0]);
    formData.append("image5", imageInput5.current.files[0]);
    formData.append("image6", imageInput6.current.files[0]);

    try {
      const { data } = await axiosReq.post("/travelplanposts/", formData);
      history.push(`/locations/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Please add a title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="description"
          placeholder="Please add you experiences here about your trip here. Try to explain about the images you added "
          value={description}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.description?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
       <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          name="location"
          placeholder="Add the location"
          value={location}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.location?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Caption</Form.Label>
        <Form.Control
          type="text"
          name="caption"
          placeholder="Give it a fun caption"
          value={caption}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.caption?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <HeroImageComponent />
    <Row>
      <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
        <Container
          className={`${styles.CollageContainer} d-flex flex-wrap`}
        >
          <div className="d-flex flex-wrap justify-content-between">
            {/* IMAGE 1 */}
            <div className={`${styles.CollageImageContainer} p-2`}>
              <Form.Group className="text-center">
                {image1 ? (
                  <>
                    <figure>
                      <Image className={appStyles.Image} src={image1} rounded />
                    </figure>
                    <div>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload"
                      >
                        Change the 1st image
                      </Form.Label>
                    </div>
                  </>
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload"
                  >
                    <Asset
                      src={Upload}
                      message="Click or tap to upload the 1st image"
                    />
                  </Form.Label>
                )}
                <Form.File
                  id="image-upload"
                  accept="image/*"
                  onChange={handleChangeImage}
                  name="image1"
                  ref={imageInput}
                />
              </Form.Group>
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </div>
            {/* IMAGE 2 */}
            <div className={`${styles.CollageImageContainer} p-2`}>
              <Form.Group className="text-center">
                {image2 ? (
                  <>
                    <figure>
                      <Image className={appStyles.Image} src={image2} rounded />
                    </figure>
                    <div>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload-2"
                      >
                        Change the 2nd image
                      </Form.Label>
                    </div>
                  </>
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload-2"
                  >
                    <Asset
                      src={Upload}
                      message="Click or tap to upload the 2nd image"
                    />
                  </Form.Label>
                )}
                <Form.File
                  id="image-upload-2"
                  accept="image/*"
                  onChange={handleChangeImage}
                  name="image2"
                  ref={imageInput2}
                />
              </Form.Group>
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </div>
            {/* IMAGE 3 */}
            <div className={`${styles.CollageImageContainer} p-2`}>
              <Form.Group className="text-center">
                {image3 ? (
                  <>
                    <figure>
                      <Image className={appStyles.Image} src={image3} rounded />
                    </figure>
                    <div>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload-3"
                      >
                        Change the 3rd image
                      </Form.Label>
                    </div>
                  </>
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload-3"
                  >
                    <Asset
                      src={Upload}
                      message="Click or tap to upload the 3rd image"
                    />
                  </Form.Label>
                )}
                <Form.File
                  id="image-upload-3"
                  accept="image/*"
                  onChange={handleChangeImage}
                  name="image3"
                  ref={imageInput3}
                />
              </Form.Group>
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </div>
            {/* IMAGE 4 */}
            <div className={`${styles.CollageImageContainer} p-2`}>
              <Form.Group className="text-center">
                {image4 ? (
                  <>
                    <figure>
                      <Image className={appStyles.Image} src={image4} rounded />
                    </figure>
                    <div>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload-4"
                      >
                        Change the 4th image
                      </Form.Label>
                    </div>
                  </>
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload-4"
                  >
                    <Asset
                      src={Upload}
                      message="Click or tap to upload the 4th image"
                    />
                  </Form.Label>
                )}
                <Form.File
                  id="image-upload-4"
                  accept="image/*"
                  onChange={handleChangeImage}
                  name="image4"
                  ref={imageInput4}
                />
              </Form.Group>
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </div>
            {/* IMAGE 5 */}
            <div className={`${styles.CollageImageContainer} p-2`}>
              <Form.Group className="text-center">
                {image5 ? (
                  <>
                    <figure>
                      <Image className={appStyles.Image} src={image5} rounded />
                    </figure>
                    <div>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload-5"
                      >
                        Change the 5th image
                      </Form.Label>
                    </div>
                  </>
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload-5"
                  >
                    <Asset
                      src={Upload}
                      message="Click or tap to upload the 5th image"
                    />
                  </Form.Label>
                )}
                <Form.File
                  id="image-upload-5"
                  accept="image/*"
                  onChange={handleChangeImage}
                  name="image5"
                  ref={imageInput5}
                />
              </Form.Group>
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </div>
            {/* IMAGE 6 */}
            <div className={`${styles.CollageImageContainer} p-2`}>
              <Form.Group className="text-center">
                {image6 ? (
                  <>
                    <figure>
                      <Image className={appStyles.Image} src={image6} rounded />
                    </figure>
                    <div>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload-6"
                      >
                        Change the 6th image
                      </Form.Label>
                    </div>
                  </>
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload-6"
                  >
                    <Asset
                      src={Upload}
                      message="Click or tap to upload the 6th image"
                    />
                  </Form.Label>
                )}
                <Form.File
                  id="image-upload-6"
                  accept="image/*"
                  onChange={handleChangeImage}
                  name="image6"
                  ref={imageInput6}
                />
              </Form.Group>
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </div>
          </div>
          <div className="d-md-none">{textFields}</div>
        </Container>
      </Col>
      <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
        <Container className={appStyles.Content}>{textFields}</Container>
      </Col>
    </Row>
  </Form>
  
  );
}
export default PostCreateForm;