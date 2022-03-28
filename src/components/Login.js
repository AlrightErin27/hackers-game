import React, { useState, useEffect } from "react";
// first screen seen. Has Loading... then log in form, after log in see home

function Login() {
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
    handleLoading(7);
  }, []);

  function Form() {
    //console.log("HERE");
    const [isBlinking, setIsBlinking] = useState(true);

    function handleFormInputValue(e) {
      console.log(e.target.value);
      if (e.target.value) setIsBlinking(false);
    }

    return (
      <form>
        <label id="form-label">Coder Name</label>
        <input
          type="text"
          id={isBlinking ? "form-input" : "form-input-before"}
          style={{ border: "none", autoFocus: true }}
          placeholder="_"
          onChange={handleFormInputValue}
        />
        <input type="submit" id="form-submit" />
      </form>
    );
  }

  return (
    <div className="login-component">
      <div id="timer-text">{timerText}</div>
      <div className="form-wrapper">{!timerText ? <Form /> : null}</div>
    </div>
  );
}

export default Login;
