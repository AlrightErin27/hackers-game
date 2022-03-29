import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
// first screen seen. Has Loading... then log in form, after log in see home

function Login({ handleNewCoder }) {
  const [timerText, setTimerText] = useState("Loading...");

  //fxn handles amount of time "Loading.." is displayed
  let handleLoading = (loadTime) => {
    const timer = setInterval(() => {
      loadTime--;
      loadTime % 2 === 0 && loadTime < 7
        ? setTimerText("   ")
        : setTimerText("Loading...");

      if (loadTime <= 0) {
        clearInterval(timer);
        setTimerText(null);
      }
      //console.log(loadTime);
    }, 600);
  };

  //useEffect allows this fxn to be called only once and right when the page loads
  useEffect(() => {
    handleLoading(1);
  }, []);

  return (
    <div className="login-component">
      <div id="timer-text">{timerText}</div>
      <div className="form-wrapper">
        {!timerText ? <LoginForm handleNewCoder={handleNewCoder} /> : null}
      </div>
    </div>
  );
}

export default Login;
