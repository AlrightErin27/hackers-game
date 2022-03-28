import React, { useState } from "react";

function LoginForm({ handleNewCoder }) {
  //state used here to control the blinking curser in the input.
  //boolean that changes the inputs class.
  //in css this class is linked to a blinking animation
  const [isBlinking, setIsBlinking] = useState(true);
  const [val, setVal] = useState("");

  //fxn handles use's input and sets state to control blinking curser
  //sets the input value to state val
  function handleFormInputValue(e) {
    //console.log(e.target.value);
    //If input, no more blinking
    if (e.target.value) setIsBlinking(false);
    setVal(e.target.value);
  }

  //takes in value from onChange function above and sends it to Home
  //then resets the inputs state
  function handleSubmit(e) {
    e.preventDefault();
    //console.log("submit pressed:", val);
    handleNewCoder(val);
    setVal("");
  }

  return (
    <form onSubmit={handleSubmit}>
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

export default LoginForm;
