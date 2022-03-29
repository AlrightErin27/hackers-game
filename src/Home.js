import { useEffect, useState } from "react";
// import NavBar from "./components/NavBar";
import Login from "./components/Login";
import GameScreen from "./components/GameScreen";
import User from "./components/User";

function Home() {
  // console.log("🌎Hello World.");
  const userAPI = "http://localhost:3000/users";
  //handles the db list of users and their info
  const [users, setUsers] = useState([]);
  //if someone has created a new hacker name it then shows the next screens
  const [hideLogin, setHideLogin] = useState(false);
  //sets the current user and makes all other hackers not logged in
  const [currentUser, setCurrentUser] = useState({});

  //list of quiz questions in array
  const qList = [
    {
      id: 1,
      questionPrompt: "question 1",
      answers: ["A", "B", "C", "D"],
      correctAnswer: 2,
    },
    {
      id: 2,
      questionPrompt: "question 2",
      answers: ["A", "B", "C", "D"],
      correctAnswer: 1,
    },
    {
      id: 3,
      questionPrompt: "question 3",
      answers: ["A", "B", "C", "D"],
      correctAnswer: 0,
    },
    {
      id: 4,
      questionPrompt: "question 4",
      answers: ["A", "B", "C", "D"],
      correctAnswer: 1,
    },
    {
      id: 5,
      questionPrompt: "question 5",
      answers: ["A", "B", "C", "D"],
      correctAnswer: 3,
    },
    {
      id: 6,
      questionPrompt: "question 6",
      answers: ["A", "B", "C", "D"],
      correctAnswer: 1,
    },
  ];

  useEffect(() => {
    fetch(userAPI)
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then(setUsers)
      .catch((err) => console.log("💀", err));
  }, []);
  //console.log(users);

  //newCoder passed up through props from LoginForm.
  //Fxn takes in newCoder's name
  //and adds to users in state
  function handleNewCoder(newCoderName) {
    //generate new key
    let key = Number(users[users.length - 1].id) + 1;
    let newCoderObj = {
      name: newCoderName,
      score: 0,
      key: key,
    };

    setCurrentUser(newCoderObj);

    setUsers([...users, newCoderObj]);

    fetch(userAPI, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ ...newCoderObj }),
    })
      .then((res) => res.json())
      .catch((err) => console.log("🔥", err));

    setHideLogin(true);
  }

  const renderUsers = users.map((user) => {
    return <User key={user.key} user={user} />;
  });

  return (
    <div className="Home">
      {hideLogin ? (
        <p id="at-helm">
          {currentUser.name}@theHelm Score:{currentUser.score}
        </p>
      ) : null}
      {!hideLogin ? (
        <Login handleNewCoder={handleNewCoder} users={users} />
      ) : null}

      <div className={hideLogin ? "after-login-container" : "no"}>
        <div className="game-screen">
          <GameScreen qList={qList} />
        </div>

        <div className="users-container">
          <h2>Relics:</h2> {renderUsers}
        </div>
      </div>
    </div>
  );
}

export default Home;
