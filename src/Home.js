import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Game from "./components/Game";
import Result from "./components/Result";
import User from "./components/User";

function Home() {
  // console.log("🌎 Hello World.");
  const userAPI = "http://localhost:3000/users";
  const [users, setUsers] = useState([]);
  const [currentCoder, setCurrentCoder] = useState({});

  useEffect(() => {
    fetch(userAPI)
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then(setUsers)
      .catch((err) => console.log("💀", err));
  }, []);
  //console.log(users);

  //newCoder passed up through props from LoginForm.
  //Fxn takes in newCoder's name and sets it to the currentCoder in state
  //and adds to users in state
  function handleNewCoder(newCoderName) {
    //generates a new key number to put in new Coder obj
    let key = Number(users[users.length - 1].id) + 1;
    console.log(key);

    //console.log("NEW:", newCoderName);
    let newCoderObj = {
      name: newCoderName,
      score: 0,
      isLoggedOn: true,
      key: key,
    };

    //sets new coder as current coder and adds to users list
    // setCurrentCoder(newCoderObj);
    setUsers([...users, newCoderObj]);

    fetch(userAPI, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ ...newCoderObj }),
    })
      .then((res) => res.json())
      // .then()
      .catch((err) => console.log("🔥", err));
  }
  console.log(users);

  const renderUsers = users.map((user) => {
    return <User key={user.key} user={user} />;
  });

  return (
    <div className="Home">
      {/* <>
        <div id="red-hat-mono">Font Example: red hat mono</div>
        <div id="rajdhani">Font Example: rajdhani</div>
        <div id="press-start-2p">Font Example: press start 2p</div>
        <div id="permanent-marker">Font Example: permanent marker</div>
      </> */}
      {/* <NavBar /> */}
      <Login handleNewCoder={handleNewCoder} />
      {/* <Game />
      <Result /> */}
      <div className="users-container">Past Hackers: {renderUsers}</div>
    </div>
  );
}

export default Home;
