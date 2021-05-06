import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Sign from "./pages/Sign/Sign";
import styles from "./App.module.css";
import Header from "./Header.js";
import Main from "./pages/Main/Main";
import MyPage from "./pages/Mypage/Mypage";

export default function App() {
  const [isLogin, setIsLogin] = useState();
  const [userInfo, setUserInfo] = useState(null);

  return (
    <Router>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Header
            isLogin={isLogin}
            userInfo={userInfo}
            setIsLogin={setIsLogin}
            setUserInfo={setUserInfo}
          />
        </nav>
        <div className={styles.pages}>
          <Switch>
            <Route path="/mypage">
              <MyPage
                userInfo={userInfo}
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                setUserInfo={setUserInfo}
              />
            </Route>
            <Route path="/main">
              <Main
                userInfo={userInfo}
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                setUserInfo={setUserInfo}
              />
            </Route>
            <Route path="/">
              <Sign
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                setUserInfo={setUserInfo}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}