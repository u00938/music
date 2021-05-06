import styles from "./Mypage.module.css";
import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCamera } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function MyPage(props) {
  const [nickname, setNickname] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const history = useHistory();

  // useEffect(() => {
  //   // console.log(props);
  //   requestLogin(props.setIsLogin, props.setUserInfo, history);
  // }, []);

  const submitModified = () => {
    if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다.')
    }

    const formData = new FormData();

    formData.append("nickname", nickname);
    formData.append("password", password);

    const config = {
      method: "patch",
      url: "https://apimovie.capybara25.com/users/",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    };

    axios(config)
      .then((response) => {
        console.log(response.data);
        axios.get("https://apimovie.capybara25.com/users/").then((res) => {
          props.setUserInfo(res.data.data);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.box}>

      <div className={styles.email}>dummy@email.com</div>
      <input
        type="text"
        placeholder="nickname"
        onChange={(e) => setNickname(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="password check"
        onChange={(e) => setPasswordCheck(e.target.value)}
      ></input>
      <button onClick={submitModified}>Modified</button>
    </div>
  );
}