import styles from "./Sign.module.css";
import { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [nickName, setNickName] = useState();
  const history = useHistory();

  const submitSignup = () => {
    if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다.')
    }

    const data = JSON.stringify({
      nickname: nickName,
      password: password,
      email: email,
    });

    const config = {
      method: "post",
      url: "https://apimovie.capybara25.com/users/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        alert("회원가입이 완료되었습니다!");
        history.push("/signin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.signInBox}>
      <div className={styles.inputBox}>
        <h1>SIGN UP</h1>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          className={styles.loginInputs}
        ></input>
      </div>
      <div className={styles.inputBox}>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          className={styles.loginInputs}
        ></input>
      </div>
      <div className={styles.inputBox}>
        <input
          type="password"
          placeholder="password check"
          onChange={(e) => setPasswordCheck(e.target.value)}
          className={styles.loginInputs}
        ></input>
      </div>
      <div className={styles.inputBox}>
        <input
          type="text"
          placeholder="nickname"
          onChange={(e) => setNickName(e.target.value)}
          className={styles.loginInputs}
        ></input>
      </div>
      <div className={styles.buttonBox}>
        <button onClick={submitSignup} className={styles.signInButton}>
          SignUp
        </button>
      </div>
      <span className={styles.linkTo}>이미 계정이 있으신가요?&nbsp;&nbsp;&nbsp;
      <Link to="/signin">
        <span>LOG IN</span>
      </Link>
      </span>
    </div>
  );
}