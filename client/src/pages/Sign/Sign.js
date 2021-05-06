import styles from "./Sign.module.css";
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function Sign(props) {
  const history = useHistory();

  useEffect(() => {
    if (props.isLogin) {
      history.push("/main");
    } else {
      history.push("/signin");
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Switch>
          <Route path="/signup" />
          <Route path="/signin" />
        </Switch>
        <Switch>
          <Route path="/signin">
            <SignIn
              setIsLogin={props.setIsLogin}
              setUserInfo={props.setUserInfo}
            />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
