import {
  useParams,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import PostList from "./PostList.js";
// import NewReview from "./NewReview.js";
// import UpdateReviewBox from "./UpdateReviewBox.js";
import UpdateMusic from "../../../UpdateMusic/UpdateMusic";
import styles from "./MusicDetail.module.css";

export default function MvPosts({ userInfo }) {
  // const { id } = userInfo;
  // const { movieId } = useParams();
  const match = useRouteMatch();

  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mvInfo, setMvInfo] = useState(null);
  const [scraps, setScraps] = useState(null);
  const [scraps_id, setScraps_id] = useState(null);

  // useEffect(() => {
  //   if (isNaN(Number(movieId))) {
  //     getDataTitle();
  //   } else {
  //     getData();
  //   }
  // }, []);

  // const getData = async () => {
  //   try {
  //     setPosts(null);
  //     setMvInfo(null);
  //     setLoading(true);
  //     setScraps([]);
  //     setScraps_id([]);
  //     await axios
  //       .get(`https://apimovie.capybara25.com/posts?movie_id=${movieId}`)
  //       .then((res) => {
  //         setPosts(res.data.data);
  //       });
  //     await axios
  //       .get(`https://apimovie.capybara25.com/movies?movie_id=${movieId}`)
  //       .then((res) => {
  //         setMvInfo(res.data.data);
  //       });
  //     await axios
  //       .get(`https://apimovie.capybara25.com/scraps?user_id=${id}`)
  //       .then((res) => {
  //         if (!res.data.data) {
  //           setScraps([]);
  //           setScraps_id([]);
  //         } else {
  //           setScraps(res.data.data);
  //           const scrapIds = res.data.data.map((p) => p.postId);
  //           setScraps_id(scrapIds);
  //         }
  //       });
  //   } catch (e) {
  //     console.log(e);
  //   }
  //   setLoading(false);
  // };

  // const getDataTitle = async () => {
  //   try {
  //     setPosts(null);
  //     setMvInfo(null);
  //     setLoading(true);
  //     setScraps([]);
  //     setScraps_id([]);
  //     await axios
  //       .get(`https://apimovie.capybara25.com/movies?movie_title=${movieId}`)
  //       .then((res) => {
  //         setMvInfo(res.data.data);

  //         axios
  //           .get(
  //             `https://apimovie.capybara25.com/posts?movie_id=${res.data.data.id}`
  //           )
  //           .then((res2) => {
  //             setPosts(res2.data.data);
  //           });
  //       });

  //     await axios
  //       .get(`https://apimovie.capybara25.com/scraps?user_id=${id}`)
  //       .then((res) => {
  //         if (!res.data.data) {
  //           setScraps([]);
  //           setScraps_id([]);
  //         } else {
  //           setScraps(res.data.data);
  //           const scrapIds = res.data.data.map((p) => p.postId);
  //           setScraps_id(scrapIds);
  //         }
  //       });
  //   } catch (e) {
  //     console.log(e);
  //   }
  //   setLoading(false);
  // };

  // const handleDelete = (postId) => {
  //   const data = JSON.stringify({ postId: postId });
  //   const config = {
  //     method: "delete",
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
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   });
  // };

  // const handleScrap = (postId) => {
  //   const data = JSON.stringify({ postId: postId, userId: id });
  //   const config = {
  //     method: "post",
  //     url: "https://apimovie.capybara25.com/scraps/",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },

  //     data,
  //   };
  //   axios(config).then((res) => {
  //     axios
  //       .get(`https://apimovie.capybara25.com/scraps?user_id=${id}`)
  //       .then((res) => {
  //         if (!res.data.data) {
  //           setScraps([]);
  //           setScraps_id([]);
  //         } else {
  //           setScraps(res.data.data);
  //           const scrapIds = res.data.data.map((p) => p.postId);
  //           setScraps_id(scrapIds);
  //         }
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   });
  // };

  // const handleUnscrap = (postId) => {
  //   const data = JSON.stringify({ postId: postId, userId: id });
  //   const config = {
  //     method: "delete",
  //     url: "https://apimovie.capybara25.com/scraps/",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },

  //     data,
  //   };
  //   axios(config).then((res) => {
  //     axios
  //       .get(`https://apimovie.capybara25.com/scraps?user_id=${id}`)
  //       .then((res) => {
  //         if (!res.data.data) {
  //           setScraps([]);
  //           setScraps_id([]);
  //         } else {
  //           setScraps(res.data.data);
  //           const scrapIds = res.data.data.map((p) => p.postId);
  //           setScraps_id(scrapIds);
  //         }
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   });
  // };

  // if (loading) return <div>로딩중</div>;
  // if (mvInfo === null && posts === null) {
  //   return <div className={styles.container}></div>;
  // } else {
  //   return (
  //     <div className={styles.container}>
  //       <div className={styles.mvInfo_box}>
  //         <div className={styles.mvPoster}>
  //           <img
  //             src={mvInfo.image}
  //             alt="영화 포스터"
  //             className={styles.posterImg}
  //           />
  //         </div>
  //         <div className={styles.mvInfo}>
  //           <p>
  //             <span className={styles.mvInfoTitle}>{mvInfo.title}</span>
  //             <span>{"  " + mvInfo.year}</span>
  //           </p>

  //           <p>장르 : {mvInfo.genre}</p>
  //           <p>줄거리 : {mvInfo.summary}</p>
  //         </div>
  //       </div>
  //       <div className={styles.posts_box}>
  //         <Switch>
  //           <Route exact path={match.path}>
  //             <div className={styles.newReview_btn_box}>
  //               <div className={styles.newReview_btn}>
  //                 <Link
  //                   className={styles.create_link}
  //                   to={`${match.url}/create`}
  //                 >
  //                   리뷰 작성
  //                 </Link>
  //               </div>
  //             </div>

  //           </Route>
  //           <Route path={`${match.path}/:postId`}>
  //             <UpdateReviewBox userInfo={userInfo} setPosts={setPosts} />
  //           </Route>
  //         </Switch>
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <>
      <Switch>
        <Route exact path={match.path}>
          <div className={styles.container}>
            <h1 className={styles.listHeader}>Track</h1>
            <div>title</div>
            <div>artist</div>
            <div>album</div>
            <Link className={styles.create_link} to={`${match.url}/update`}>
              <h4 className={styles.upload}>수정</h4>
            </Link>
          </div>
        </Route>
        <Route path={`${match.path}/update`}>
          <UpdateMusic userInfo={userInfo} />
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