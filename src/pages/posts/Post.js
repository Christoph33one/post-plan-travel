import React from 'react';
import styles from '../../styles/Post.module.css';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Card, Container, Media, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import { MoreDropdown } from '../../components/MoreDropdown';
import { useHistory } from 'react-router-dom';
import { axiosRes } from '../../api/axiosDefaults';
import { Row, Col } from 'react-bootstrap';

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    comment_image,
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
    created_at,
    travelPostPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = async () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          {title && <Card.Title className="text-centre">{title}</Card.Title>}
          <div className="d-flex align-items-center">
            <span>{created_at}</span>
            {is_owner && travelPostPage && (
              <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
            )}
          </div>
        </div>
      </Card.Body>
      <Container>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          <Col className="mb-4">
            <Card.Img src={image1} alt={title} className={styles.CollageImageContainer} />
          </Col>
          <Col className="mb-4">
            <Card.Img src={image2} alt={title} className={styles.CollageImageContainer} />
          </Col>
          <Col className="mb-4">
            <Card.Img src={image3} alt={title} className={styles.CollageImageContainer} />
          </Col>
          <Col className="mb-4">
            <Card.Img src={image4} alt={title} className={styles.CollageImageContainer} />
          </Col>
          <Col className="mb-4">
            <Card.Img src={image5} alt={title} className={styles.CollageImageContainer} />
          </Col>
          <Col className="mb-4">
            <Card.Img src={image6} alt={title} className={styles.CollageImageContainer} />
          </Col>
        </Row>

        <Card.Body className={styles.Cards}>
          {caption && <Card.Title className="text-center mt-3">{caption}</Card.Title>}
          {location && (
            <Card.Title className="text-center">
              <i className="fas fa-map-pin" />
              {location}
            </Card.Title>
          )}
          {description && <Card.Text>{description}</Card.Text>}
        </Card.Body>
      </Container>

      <div className={styles.PostBar}>
        <Link to={`/posts/${id}`}>
          <h3 className={styles.PostBar}>Click to visit</h3>
          <span>
            <i className="fas fa-images" />
          </span>
          <span>
            <i className="far fa-comments" />
          </span>
        </Link>
        {comments_count}
      </div>

      {comment_image && (
        <div className={styles.CollageImageContainer}>
          <Card.Img src={comment_image} alt="Comment Image" className={styles.CommentImage} />
        </div>
      )}
    </Card>
  );
};

export default Post;