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

  useEffect(() => {
    fetch(userAPI)
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then(setUsers)
      .catch((err) => console.log("💀", err));
  }, []);
  //console.log(users);

  const renderUsers = users.map((user) => {
    return <User key={user.id} user={user} />;
  });

  return (
    <div className="Home">
      {/* <>
        <div id="red-hat-mono">Font Example: red hat mono</div>
        <div id="rajdhani">Font Example: rajdhani</div>
        <div id="press-start-2p">Font Example: press start 2p</div>
        <div id="permanent-marker">Font Example: permanent marker</div>
      </> */}
      <NavBar />
      <Login />
      <Game />
      <Result />
      <div className="users-container">Past Hackers: {renderUsers}</div>
    </div>
  );
}

export default Home;
