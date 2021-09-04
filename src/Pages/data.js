import { BrowserRouter as Router, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";
import CircularProgress from "@material-ui/core/CircularProgress";
import { IoMdAttach, IoIosBusiness, IoMdHeart } from "react-icons/io";
import axios from "axios";
const UserData = () => {
  let history = useHistory();
  const params = useParams();
  const [user, SetUserData] = useState(false);
  const [userfollow, Setuserfollow] = useState(false);
  const [userfollowing, Setuserfollowing] = useState(false);
  const [btn, SetBtn] = useState(1);
  function getFollowers() {
    axios.get(`https://api.github.com/users/${params.slug}`).then((res) => {
      const persons = res.data;
      SetUserData(persons);
    });
  }
  function getFollowersData() {
    axios
      .get(`https://api.github.com/users/${params.slug}/followers`)
      .then((res) => {
        const persons = res.data;
        Setuserfollow(persons);
        getFollowingData();
      });
  }

  function getFollowingData() {
    axios
      .get(`https://api.github.com/users/${params.slug}/following`)
      .then((res) => {
        const persons = res.data;
        Setuserfollowing(persons);
        console.log(persons);
      });
  }
  useEffect(() => {
    getFollowers();
  }, [params]);

  useEffect(() => {
    getFollowersData();
  }, [user]);

  return (
    <div className="holder2">
      <div className="holder-top">
        <div className="tagline">
          <h1 className="small">GitTree</h1>
        </div>
        <div className="serachbar">
          <button
            className={btn === 1 ? "fl-btn fl-btn-c " : "fl-btn"}
            onClick={() => SetBtn(1)}
          >
            Followers
          </button>
          <button
            className={btn === 2 ? "fl-btn fl-btn-c " : "fl-btn"}
            onClick={() => SetBtn(2)}
          >
            Following
          </button>
        </div>
      </div>
      <div className="holdercontent">
        {user ? (
          <div className="usercard">
            <div className="usercard-top">
              <img className="usercard-top-img" src={user.avatar_url} alt="" />

              <div className="usercard-top-personaldetails">
                <p className="name">{user.name}</p>
                <p className="bio">{user.bio}</p>
              </div>
            </div>
            <div className="usercard-stats">
              <div className="stats">
                <p className="status-head">Followers</p>
                <p className="status-value">{user.followers}</p>
              </div>

              <div className="stats">
                <p className="status-head">Following</p>
                <p className="status-value">{user.following}</p>
              </div>

              <div className="stats">
                <p className="status-head">Public Repos</p>
                <p className="status-value">{user.public_repos}</p>
              </div>
            </div>
            <div className="about">
              <IoMdAttach color="#fff" size="2em" />
              <p className="about-head">Website:{user.blog}</p>
            </div>
            <div className="about">
              <IoIosBusiness color="#fff" size="2em" />
              <p className="about-head">Location:{user.location}</p>
            </div>
          </div>
        ) : (
          <CircularProgress color="secondary" />
        )}

        <div className="right">
          {btn === 1
            ? userfollow
              ? userfollow.map((item) => (
                  <div className="followcard">
                    <img
                      src={item.avatar_url}
                      alt=""
                      className="followcard-image"
                    />
                    <p className="follower-name">{item.login}</p>
                    <div className="div">
                      <button
                        className="btn-card"
                        style={{
                          borderRadius: 3,
                          width: "20%",
                        }}
                        onClick={() => history.push(`/${item.login}`)}
                      >
                        <IoMdHeart color="#fff" size="2em" />
                      </button>
                    </div>
                  </div>
                ))
              : null
            : null}
          {btn === 2
            ? userfollowing
              ? userfollowing.map((item) => (
                  <div className="followcard">
                    <img
                      src={item.avatar_url}
                      alt=""
                      className="followcard-image"
                    />
                    <p className="follower-name">{item.login}</p>
                    <div className="div">
                      <button
                        className="btn-card"
                        style={{
                          borderRadius: 3,
                          width: "20%",
                        }}
                        onClick={() => history.push(`/${item.login}`)}
                      >
                        <IoMdHeart color="#fff" size="2em" />
                      </button>
                    </div>
                  </div>
                ))
              : null
            : null}
        </div>
      </div>
    </div>
  );
};

export default UserData;
