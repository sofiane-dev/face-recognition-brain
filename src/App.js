import { useState } from "react";
import Background from "components/Background";
import ImageLinkForm from "components/ImageLinkForm";
import Logo from "components/Logo";
import Navigation from "components/Navigation";
import Rank from "components/Rank";
import FaceRecognition from "components/FaceRecognition";
import SignIn from "components/SignIn";
import Register from "components/Register";
import "./App.css";

export default function App() {
  const [imgUrl, setImgUrl] = useState("");
  const [route, setRoute] = useState("signIn");
  const handleSubmit = (imgUrl) => setImgUrl(imgUrl);
  const renderRoute = (path) => {
    switch (path) {
      case "register":
        return <Register setRoute={setRoute} />;
      case "home":
        return (
          <div>
            <Rank />
            <ImageLinkForm handleSubmit={handleSubmit} />
            <FaceRecognition imgUrl={imgUrl} />
          </div>
        );
      default:
        return <SignIn setRoute={setRoute} />;
    }
  };
  return (
    <div className="App">
      <Background />
      <Navigation route={route} setRoute={setRoute} />
      <Logo />
      {renderRoute(route)}
    </div>
  );
}
