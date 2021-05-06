import styles from "./UpdateMusic.module.css";

import React, { useState, useEffect } from "react";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function UpdateReviewBox({ userInfo, setPosts }) {
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
  // const { postId } = useParams();
  // const [text, setText] = useState("");
  // const [musicId, setMusicId] = useState("");
  // const history = useHistory();
  // const match = useRouteMatch();
  // useEffect(() => {
  //   const getMovieId = async () => {
  //     await axios
  //       .get(`https://apimovie.capybara25.com/posts?user_id=${userInfo.id}`)
  //       .then((res) => {
  //         const post = res.data.data.filter((p) => p.id === Number(postId))[0];
  //         setText(post.text);
  //         setPost(post);
  //         console.log(post);
  //         const movieTitle = post.movie.title;
  //         axios
  //           .get(
  //             `https://apimovie.capybara25.com/movies?movie_title=${movieTitle}`
  //           )
  //           .then((res) => setMusicId(res.data.data.id));
  //       });
  //   };
  //   getMovieId();
  // }, []);

  // const handleSubmit = () => {
  //   const data = JSON.stringify({
  //     userId: userInfo.id,
  //     musicId: Number(musicId),
  //     postId,
  //     rate: 8.3,
  //     text,
  //   });

  //   const config = {
  //     method: "patch",
  //     url: "https://apimovie.capybara25.com/posts/",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data,
  //   };

  //   axios(config).then((res) => {
  //     axios
  //       .get(`https://apimovie.capybara25.com/posts?movie_id=${movieId}`)
  //       .then((res) => {
  //         setPosts(res.data.data);
  //         history.push(`/main/${movieId}`);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   });
  // };

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
          <div className={styles.file}>파일path</div>
          <div className={styles.album}>
            Album: &nbsp;<input type="text" value="여기는앨범"/>
          </div>
          <div className={styles.artist}>
            Artist: &nbsp;<input type="text" value="여기는아티스트"/>
          </div>
          <div className={styles.submit}>
            <button onClick={handleSubmit}>
              수정
            </button>
          </div>

        </div>
      </div>
    </>
  );
}