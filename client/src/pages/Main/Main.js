// import MvPosts from "./MvPosts.js";
import Music from "./component/Music/Music";
import NewMusic from "../NewMusic/NewMusic";
import MusicDetail from "./component/MusicDetail/MusicDetail";
import styles from "./Main.module.css";
import { Route, useRouteMatch } from "react-router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Link, useHistory } from "react-router-dom";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

export default function Main({ userInfo, setIsLogin, setUserInfo }) {
  const match = useRouteMatch();
  // const history = useHistory();
  // const [musics, setMusics] = useState([]);

  // useEffect(() => {
  //   getMusics();
  // }, []);

  // const getMusics = () => {
  //   axios.get("https://apimovie.capybara25.com/movies/").then((res) => {
  //     setMusics(res.data.data);
  //   });
  // };
  return (
    <>
      <Switch>
        <Route exact path={match.path}>
          <div className={styles.container}>
            <h1 className={styles.listHeader}>Track</h1>
            <Link className={styles.create_link} to={`${match.url}/create`}>
              <h4 className={styles.upload}>Upload&nbsp;
                <AddCircleOutlineIcon />
              </h4>
            </Link>
            <Music />
          </div>
        </Route>
        <Route path={`${match.path}/create`}>
          <NewMusic userInfo={userInfo} />
        </Route>
        <Route path={`${match.path}/detail`}>
          <MusicDetail userInfo={userInfo} />
        </Route>
      </Switch>
      {/* <Route path={`${match.path}/:movieId`}>
        <div className={styles.mvPosts_box}>
          <MvPosts userInfo={userInfo} />
        </div>
      </Route> */}
    </>
  );
}
