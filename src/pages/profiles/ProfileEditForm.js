import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser, useSetCurrentUser } from "../../contexts/CurrentUserContext";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

const ProfileEditForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();

  const [profileData, setProfileData] = useState({
    name: "",
    bio: "",
    activities: "",
    image: "",
    ACTIVITY_CHOICES: [
      ['HIKING', 'Hiking'],
      ['SNOWBOARDIND', 'Snowboarding'],
      ['CYCLING', 'Cycling'],
      ['MOUNTAIN BIKING', 'Mountain biking'],
      ['SWIMMING', 'Swimming'],
      ['CAMPING', 'Camping'],
      ['ROAD TRIPS', 'Road trips'],
      ['EXPLORING', 'Exploring'],
      ['PHOTOGRAPHY', 'Photography'],
    ],
  });

  const { name, bio, activities, image, ACTIVITY_CHOICES } = profileData;

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}/`);
          const { name, image, activities, bio } = data;
          setProfileData((profileData) => ({
            ...profileData,
            name,
            bio,
            activities,
            image,
          }));
        } catch (err) {
          console.log(err);
          history.push("/");
        }
      } else {
        history.push("/");
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("bio", bio);
    formData.append("activities", activities);

    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0]);
    }

    try {
      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_image: data.image,
      }));
      history.goBack();
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  const textFields = (
    <>
      <Form.Group>
        <Form.Label>Bio</Form.Label>
        <Form.Control
          as="textarea"
          value={bio}
          onChange={handleChange}
          name="bio"
          rows={7}
        />
      </Form.Group>

      {/* Display errors */}
      {errors?.content?.map((message, index) => (
        <Alert key={index} variant="danger">
          {message}
        </Alert>
      ))}

      <Button type="submit" className={btnStyles.PrimaryButton}>
        Save Changes
      </Button>
    </>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
          <Container className={appStyles.Content}>
            {/* Name field */}
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={handleChange}
                name="name"
              />
            </Form.Group>

            {/* Profile image upload */}
            <Form.Group>
              <Form.Label>Profile Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                ref={imageFile}
                name="image"
                className="mb-2"
              />
              <Image
                src={image}
                alt="Profile Image"
                className={appStyles.ProfileImage}
                fluid
              />
            </Form.Group>
          </Container>
        </Col>
        <Col className="py-2 p-0 p-md-2 text-center">
          <Container className={appStyles.Content}>
            {/* Activity choices dropdown */}
            <Form.Group>
              <Form.Label>Select an activity:</Form.Label>
              <div className="scrollable-container">
                <Form.Control
                  as="select"
                  value={activities}
                  onChange={handleChange}
                  name="activities"
                >
                  <option value="">Select an activity</option>
                  {ACTIVITY_CHOICES.map((activity) => (
                    <option key={activity[0]} value={activity[0]}>
                      {activity[1]}
                    </option>
                  ))}
                </Form.Control>
              </div>
            </Form.Group>

            {/* Render textFields */}
            {textFields}
          </Container>
        </Col>
      </Row>
    </Form>
  );
};

export default ProfileEditForm;
