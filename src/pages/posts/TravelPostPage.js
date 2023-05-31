import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import Comment from "../comments/Comments";
import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";

function TravelPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });
  const [commentImage, setCommentImage] = useState(null);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }, { data: comments }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
          axiosReq.get(`/comments/?post=${id}`),
        ]);
        setPost({ results: [post] });
        setComments(comments);
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [id]);

  return (
    <div>
      <Row className="h-100">
        <Col className="py-2 p-0 p-lg-2" lg={8}>
          <PopularProfiles mobile />
          
          {/* Render CommentCreateForm if currentUser is present. */}
          <Post {...post.results[0]} setPost={setPost} travelPostPage />
          <Container className={appStyles.Content}>
            {currentUser && (
              <CommentCreateForm
                profile_id={currentUser.profile_id}
                profileImage={profile_image}
                post={id}
                setPost={setPost}
                setComments={setComments}
                image={commentImage}
                setCommentImage={setCommentImage}
              />
            )}
            
            {/* Conditional rendering of comments or "No comments" message based on comments.results and currentUser. */}
            {comments.results.length > 0 ? (
              <InfiniteScroll
                dataLength={comments.results.length}
                loader={<Asset spinner />}
                hasMore={!!comments.next}
                next={() => fetchMoreData(comments, setComments)}
              >
                {comments.results.map((comment) => (
                  <Comment
                    key={comment.id}
                    {...comment}
                    image={comment.comment_image}
                    setPost={setPost}
                    setComments={setComments}
                  />
                ))}
              </InfiniteScroll>
            ) : (
              <span>
                {currentUser
                  ? "No comments yet, be the first to comment!"
                  : "No comments... yet"}
              </span>
            )}
          </Container>
        </Col>
        <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
          <PopularProfiles />
        </Col>
      </Row>
    </div>
  );
}

export default TravelPostPage;
