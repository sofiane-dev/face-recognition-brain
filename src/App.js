import { useState } from "react";
import Background from "components/Background";
import ImageLinkForm from "containers/ImageLinkForm";
import Logo from "components/Logo";
import Navigation from "components/Navigation";
import Rank from "components/Rank";
import FaceRecognition from "containers/FaceRecognition";
import SignIn from "containers/SignIn";
import Register from "containers/Register";
import "./App.css";

export default function App() {
  const [imgUrl, setImgUrl] = useState("");
  const [route, setRoute] = useState("signIn");
  const [user, setUser] = useState({});

  const handleSubmit = (imgUrl) => {
    updateRank();
    setImgUrl(imgUrl);
  };

  const updateRank = async () => {
    const response = await fetch("http://localhost:8080/updateRank", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id: user.id }),
    });
    const data = await response.json();
    data && setUser(data);
  };

  const renderRoute = (path) => {
    switch (path) {
      case "register":
        return <Register setUser={setUser} setRoute={setRoute} />;
      case "home":
        return (
          <div>
            <Rank user={user} />
            <ImageLinkForm handleSubmit={handleSubmit} />
            <FaceRecognition imgUrl={imgUrl} />
          </div>
        );
      default:
        return <SignIn setUser={setUser} setRoute={setRoute} />;
    }
  };

  return (
    <div className="App">
      <Background />
      <Navigation
        route={route}
        setRoute={setRoute}
        setUser={setUser}
        setImgUrl={setImgUrl}
      />
      <Logo />
      {renderRoute(route)}
    </div>
  );
}
