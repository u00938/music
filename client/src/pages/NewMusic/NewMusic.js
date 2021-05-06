import styles from "./NewMusic.module.css";
import { Route, useRouteMatch } from "react-router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Link, useHistory } from "react-router-dom";

export default function Main({ userInfo, setIsLogin, setUserInfo }) {
  const match = useRouteMatch();
  const [file, setFile] = useState();
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
  const handleSubmit = () => {

  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <label className={styles.uploadButton} for="fileInput">
            Choose file to upload
          </label>
          <input type="file" 
            id="fileInput" 
            style={{display:"none"}} 
            onChange={(e) => setFile(e.target.value)}
          /> 
          <div className={styles.file}>{file}</div>
          <div className={styles.title}>
            Title: &nbsp;<input type="text" />
          </div>
          <div className={styles.album}>
            Album: &nbsp;<input type="text" />
          </div>
          <div className={styles.artist}>
            Artist: &nbsp;<input type="text" />
          </div>
          <div className={styles.submit}>
            <button onClick={handleSubmit}>
              UPLOAD
            </button>
          </div>

        </div>
      </div>
    </>
  );
}