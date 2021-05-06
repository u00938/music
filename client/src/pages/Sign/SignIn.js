import styles from "./Sign.module.css";
import { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

export default function SignIn(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const submitLogin = () => {
    const data = JSON.stringify({
      password: password,
      email: email,
    });

    const config = {
      method: "post",
      url: "https://apimovie.capybara25.com/login/",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    };

    axios(config)
      .then(() => {
        axios
          .get("https://apimovie.capybara25.com/users/")
          .then((res) => {
            props.setIsLogin(true);
            props.setUserInfo(res.data.data);

            history.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        alert("회원정보가 일치하지 않습니다.");
      });
  };

  return (
    <div className={styles.signInBox}>
      <div className={styles.inputBox}>
        <h1>LOGIN</h1>
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
      <div className={styles.buttonBox}>
        <button onClick={submitLogin} className={styles.signInButton}>
          SignIn
        </button>
      </div>
      <span className={styles.linkTo}>아직 계정이 없으신가요?&nbsp;&nbsp;&nbsp;
      <Link to="/signup">
        <span>SIGN UP</span>
      </Link>
      </span>

    </div>
  );
}