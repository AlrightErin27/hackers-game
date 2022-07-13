import { useHistory, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import GameScreen from "./components/GameScreen";

function Home() {
  //declare useHistory for Router
  let history = useHistory();

  const userAPI = "http://localhost:3001/users";
  //handles the db list of users and their info
  const [users, setUsers] = useState([]);
  //if someone has created a new hacker name it then shows the next screens
  const [hideLogin, setHideLogin] = useState(false);
  //sets the current user and makes all other hackers not logged in
  const [currentUser, setCurrentUser] = useState({});
  //patches score
  const [updateScore, setUpdatedScore] = useState(21123);

  //list of quiz questions in array
  const qList = [
    {
      id: 1,
      questionPrompt:
        'const a = "Hello world";  const result = a.substring(2, 4); console.log(result)',
      answers: ["ell", "ll", "el", "llo"],
      correctAnswer: 1,
    },
    {
      id: 2,
      questionPrompt:
        "function(){setTimeout(()=> console.log(1),2000);console.log(2);setTimeout(()=> console.log(3),0);console.log(4);}",
      answers: ["1 2 3 4", "2 1 3 4", "2 3 4 1", "2 4 3 1"],
      correctAnswer: 3,
    },
    {
      id: 3,
      questionPrompt: "const a = true + true + true * 3; console.log(a)",
      answers: ["5", "9", "ERROR", "NAN"],
      correctAnswer: 0,
    },
    {
      id: 4,
      questionPrompt:
        "const a = Math.max(); const b = Math.min(); console.log(a); console.log(b);",
      answers: [
        "Infinity -Infinity",
        "-Infinity Infinity",
        "Infinity Infinity",
        "-Infinity -Infinity",
      ],
      correctAnswer: 1,
    },
    {
      id: 5,
      questionPrompt:
        "let a = 1;  let b = 0;  while (a <= 3)  { a++;  b += a * 2;  console.log(b);}",
      answers: ["undefined", "4 6 8", "1 2 3", "4 10 18"],
      correctAnswer: 3,
    },
  ];

  useEffect(() => {
    fetch(userAPI)
      .then((res) => res.json())
      .then(setUsers)
      .catch((err) => console.log("💀", err));
  }, [updateScore]);

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

    //change state
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

  //dynamically switches routes
  if (!hideLogin) {
    history.push("/login");
  } else {
    history.push("/game-screen");
  }

  return (
    <div className="Home">
      <Route path="/login">
        <Login handleNewCoder={handleNewCoder} users={users} />
      </Route>
      <Route path="/game-screen">
        <GameScreen
          qList={qList}
          currentUser={currentUser}
          updateScore={setUpdatedScore}
          users={users}
        />
      </Route>
    </div>
  );
}

export default Home;
