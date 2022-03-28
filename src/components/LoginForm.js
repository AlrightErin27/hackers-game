import React, { useState } from "react";

function LoginForm() {
  //console.log("HERE");

  //state used here to control the blinking curser in the input.
  //boolean that changes the inputs class.
  //in css this class is linked to a blinking animation
  const [isBlinking, setIsBlinking] = useState(true);

  function handleFormInputValue(e) {
    console.log(e.target.value);
    //checks for any input into the form. If input, no more blinking
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

export default LoginForm;
