import React from 'react'
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Container, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

const Post = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        comments_count,
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
        travelPostPage ,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner


  return <card className={styles.Post}>
     <Card.Body>
        <Media className="align-items-center justify-content-between">
        
            <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={55} />
                {owner}
            </Link>

            {title && <Card.Title className="text-centre">{title}</Card.Title>}
            
            <div className="d-flex align-itmes-center">
                <span>{created_at}</span>
                {is_owner && travelPostPage && "..."}
            </div>
        </Media>
    </Card.Body>
    <Container>
  <div className={`${styles.CollageContainer} d-flex align-items-center justify-content-center `}>
    <div className={`${styles.CollageImageContainer} `}>
      <Card.Img src={image1} alt={title} className={styles.CollageImageContainer } />
    </div>
    <div className={`${styles.CollageImageContainer} `}>
      <Card.Img src={image2} alt={title} className={styles.CollageImageContainer }/>
    </div>
    <div className={`${styles.CollageImageContainer} `}>
      <Card.Img src={image3} alt={title} className={styles.CollageImageContainer }  />
    </div>
    <div className={`${styles.CollageImageContainer} `}>
      <Card.Img src={image4} alt={title} className={styles.CollageImageContainer } />
    </div>
    <div className={`${styles.CollageImageContainer} `}>
      <Card.Img src={image5} alt={title} className={styles.CollageImageContainer } />
    </div>
    <div className={`${styles.CollageImageContainer}`}>
      <Card.Img src={image6} alt={title} className={styles.CollageImageContainer } />
    </div>
  </div>

  <Card.Body className={styles.Cards}>
    {caption && <Card.Title className="text-center">{caption}</Card.Title>}
    <span className="text-center">
        location:
    </span>
    {location && <Card.Title className="text-center">{location}</Card.Title>}
    {description && <Card.Text>{description}</Card.Text>}
  </Card.Body>
</Container>


<div className={styles.PostBar}>
  <Link to={`/posts/${id}`}>
    <i className="far fa-comments" />
  </Link>
  {comments_count}
</div>
  </card>
};

export default Post