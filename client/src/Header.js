import React, { useEffect, useState } from "react";
import PersonIcon from "@material-ui/icons/Person";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCog, faThLarge } from "@fortawesome/free-solid-svg-icons";
// import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./Header.module.css";
import axios from "axios";

export default function Header({ isLogin, userInfo, setIsLogin, setUserInfo }) {
  const [title, setTitle] = useState("");
  const history = useHistory();

  const handleSearch = () => {
    history.push(`/main/${title}`);
  };

  const logoutHandler = () => {
    axios.post("https://apimovie.capybara25.com/logout/").then((res) => {
      setIsLogin(false);
      history.push("/");
    });
  };

  return isLogin ? (
    <div className={`${styles.header} ${styles.headerBackground}`}>
      <Link to="/main" className={styles.logo}>
        <MusicNoteIcon /> MUSIC
      </Link>
      <div className={styles.search}>
        <input
          type="text"
          className={styles.search_bar}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <SearchIcon className={styles.search_btn} onClick={handleSearch} />
        {/* <FontAwesomeIcon
          icon={faSearch}
          className={styles.search_btn}
          onClick={handleSearch}
        /> */}
      </div>
      <div className={styles.nav_bar}>
        <Link to="/mypage" className={styles.mypage_btn}>
          {/* <FontAwesomeIcon
            className={styles.mypage_btn}
            icon={faCog}
            fontSize={faThLarge}
          /> */}
          <PersonIcon />
          &nbsp;MYPAGE
        </Link>
        <a onClick={logoutHandler} className={styles.logoutButton}>
          LOGOUT
        </a>
      </div>
    </div>
  ) : (
    <div className={`${styles.header} ${styles.headerBackground}`}>
      <Link to="/main" className={styles.logo}>
        <MusicNoteIcon /> MUSIC
      </Link>
      <div className={styles.search}>
        <input
          type="text"
          className={styles.search_bar}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <SearchIcon className={styles.search_btn} onClick={handleSearch} />
      </div>
      <div className={styles.nav_bar}>
        <Link to="/signin" className={styles.text_btn}>
          LOGIN
        </Link>
      </div>
    </div>
  );
}
