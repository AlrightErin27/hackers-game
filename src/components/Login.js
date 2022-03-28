import React, { useState, useEffect } from "react";
// first screen seen. Has Loading... then log in form, after log in see home

function Login() {
  const [timerText, setTimerText] = useState("Loading...");

  //fxn handles amount of time "Loading.." is displayed
  let handleLoading = (loadTime) => {
    const timer = setInterval(() => {
      loadTime--;
      loadTime % 2 === 0 && loadTime < 5
        ? setTimerText(null)
        : setTimerText("Loading...");

      if (loadTime <= 0) {
        clearInterval(timer);
        setTimerText(null);
      }
      //console.log(loadTime);
    }, 500);
  };
  //useEffect allows this fxn to be called only once and right when the page loads
  useEffect(() => {
    handleLoading(7);
  }, []);

  return (
    <div className="login-component">
      <div id="timer-text">{timerText}</div>
    </div>
  );
}

export default Login;
