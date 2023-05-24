import React from 'react'
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Container, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from '../../components/MoreDropdown';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosRes } from "../../api/axiosDefaults";


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
    const is_owner = currentUser?.username === owner
    const history = useHistory()

    const handleEdit = async () => {
      history.push(`/posts/${id}/edit`)
    }

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
          <div className={`${styles.CollageContainer} d-flex align-items-center justify-content-center`}>
            <div className={`${styles.CollageImageContainer}`}>
              <Card.Img src={image1} alt={title} className={styles.CollageImageContainer} />
            </div>
            <div className={`${styles.CollageImageContainer}`}>
              <Card.Img src={image2} alt={title} className={styles.CollageImageContainer} />
            </div>
            <div className={`${styles.CollageImageContainer}`}>
              <Card.Img src={image3} alt={title} className={styles.CollageImageContainer} />
            </div>
            <div className={`${styles.CollageImageContainer}`}>
              <Card.Img src={image4} alt={title} className={styles.CollageImageContainer} />
            </div>
            <div className={`${styles.CollageImageContainer}`}>
              <Card.Img src={image5} alt={title} className={styles.CollageImageContainer} />
            </div>
            <div className={`${styles.CollageImageContainer}`}>
              <Card.Img src={image6} alt={title} className={styles.CollageImageContainer} />
            </div>
          </div>
  
          <Card.Body className={styles.Cards}>
            {caption && <Card.Title className="text-center">{caption}</Card.Title>}
            <span className="text-center">location:</span>
            {location && <Card.Title className="text-center">{location}</Card.Title>}
            {description && <Card.Text>{description}</Card.Text>}
          </Card.Body>
        </Container>
  
       
  
        <div className={styles.PostBar}>
          <Link to={`/posts/${id}`}>
            <h5>Click here to view plan & comments</h5>
            <i className="fas fa-map-signs"></i>
            <i className="far fa-comments" />
          </Link>
          {comments_count}
        </div>
        
         {/* Render the comment image when adding an image to a comment */}
         {comment_image && (
          <div className={styles.CollageImageContainer  } >
            <Card.Img src={comment_image} alt="Comment Image" className={styles.CommentImage}  />
          </div>
        )}
      </Card>
    );
  };
  
  export default Post;