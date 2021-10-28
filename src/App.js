import "./App.css";
import profile from "./assets/profile.jpg";

//Our data
const user = {
  name: "Alan On Code",
  location: "Las Vegas",
  foodType: "Everything",
  age: "23",
  likes: "Coding into the wee hours of the morning ",
  githubUsername: "alanjosue97",
  picProfil: profile,
};
console.log(user);

function App() {
  const url = `https://github.com/${user.githubUsername}`;
  return (
    <div className="App">
      <div className="user-info">
        <p>Simple Data JSX</p>
        <img src={user.picProfil} className="img-profile" alt={user.name} />
        <h3>
          <a href={url}>{user.name}</a>
        </h3>
        <p>
          <strong>Locattttion</strong>
          {user.location}
        </p>
        <p>
          <strong>Eats</strong>
          {user.foodType}
        </p>
        <p>
          <strong>Age</strong>
          {user.age}
        </p>
        <p>
          <strong>Likes</strong>
          {user.likes}
        </p>
        <p>
          <strong>GitHub</strong>
          <a href={url}>@{user.githubUsername}</a>
        </p>
      </div>
    </div>
  );
}

export default App;
