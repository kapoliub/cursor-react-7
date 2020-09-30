import React, { useState } from "react";
import verifiedIcon from "../../assets/img/verified-logo.svg";
import arrowIcon from "../../assets/img/arrow-logo.svg";
import commentIcon from "../../assets/img/comment_icon.svg";
import repostIcon from "../../assets/img/repost_icon.svg";
import likeIcon from "../../assets/img/like_icon.svg";
import shareIcon from "../../assets/img/share_icon.svg";
import './Tweets.css'

function Tweet({
  author,
  post,
  postID,
  changeCommentsCount,
  changeRepostsCount,
  changeLikesCount,
}) {
  const [isCommentClicked, setIsCommentClicked] = useState(false);
  const [isRepostClicked, setIsRepostClicked] = useState(false);
  const [isLikeClicked, setIsLikeClicked] = useState(false);
  const changeCommentsCountFunc = () => {
    changeCommentsCount(postID, isCommentClicked);
    setIsCommentClicked(!isCommentClicked);
  };
  const changeRepostsCountFunc = () => {
    changeRepostsCount(postID, isRepostClicked);
    setIsRepostClicked(!isRepostClicked);
  };
  const changeLikesCountFunc = () => {
    changeLikesCount(postID, isLikeClicked);
    setIsLikeClicked(!isLikeClicked);
  };
  return (
    <div className="post">
      <div className="user-logo-block">
        <img src={author.avatar} alt="user_logo" />
      </div>
      <div className="post-info-block">
        <div className="text-block">
          <div className="post-info">
            <h4>{author.name}</h4>
            <img src={verifiedIcon} alt="verified_icon" />
            <span>{`${author.username} · ${new Date().toLocaleDateString()}`}</span>
            <img src={arrowIcon} alt="arrow_icon" className="arrow-icon" />
          </div>
          <div className="post-content">
            <p>{post.content}</p>
          </div>
        </div>
        <div className="content-img-block">
          <img src={post.image} alt="post_img" />
        </div>
        <div className="actions-block">
          <div className="action">
            <img src={commentIcon} alt="action_icon" />
            <span>{Math.floor(Math.random()*1000)}</span>
          </div>
          <div className="action">
            <img src={repostIcon} alt="action_icon" />
            <span>{Math.floor(Math.random()*1000)}</span>
          </div>
          <div className="action">
            <img src={likeIcon} alt="action_icon" />
            <span>{Math.floor(Math.random()*1000)}</span>
          </div>
          <div className="action">
            <img src={shareIcon} alt="action_icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
